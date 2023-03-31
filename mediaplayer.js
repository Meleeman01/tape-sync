const argv = require('yargs-parser')(process.argv);
const path = require('path');
const fs = require('fs');
const m3uParser = require('m3u8-parser');


//*=============Requires ffmpeg to run===================================================*\\
// Stop server depending on value given from REPEAT constant
function checkRepeat(repeat, count) {
	if (repeat == count) {
		console.log('we have played through the list '+count+' times');
		process.exit('bye bye!');
	}
	else if (repeat==='false'&& count == 1) {
		console.log('we have played through the list');
		process.exit('bye bye!');
	}
//if there's no repeat count or repeat is anything other than false, repeat ad infinitum
}

const colors = [
	'#ff0000','#ff8700','#ffd300','#deff0a','#a1ff0a',
	'#0aff99','#0aefff','#147df5','#580aff','#be0aff'
];
let clients = [];
let messages =[];
//self invoking function so you put the variables at the bottom.
module.exports = function mediaPlayer(io,repeat,playlistUrl,redis) {
	const videoTypes = new Set(['.ogv', '.mp4']);
	const audioTypes = new Set(['.mp3', '.flac', '.oga', '.wav']);
	const ambiguousTypes = new Set(['.webm', '.ogg']); // These can be either audio or video
	this.io = io;
	this.mediaIndex = 0;
	this.mediaTypes = [];
	this.startTime = null;
	this.elapsedTime = null;
	this.filesProcessed = 0;
	this.playlistCount = 0;
	this.clientCount = 0;

	function importM3U(file) {

		const parser = new m3uParser.Parser();

		let parsedFile = fs.readFileSync(file).toString();
		parser.push(parsedFile);
		parser.end();
		return parser.manifest.segments;
	}
	this.processM3U = (file) => {
		//check file duration
		if (file.duration) {
			//check for a file uri
			if (file.uri) {
				//get the name of the file which will be the title of the media
				let name = path.parse(file.uri).name;

				return {
					duration:file.duration,
					url: file.uri,
					name: name,
				};
			}
			console.warn(`Weird. Somehow one of your files in your playlist is missing a path`);
		}
		else {
			if (file.uri) {
				//get the name of the file which will be the title of the media
				let name = path.parse(file.uri).name;
				const shellCommand = 'ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1';
				const execute = require('child_process').execSync;
				let duration = execute(`${shellCommand} "./public${file.uri}"`).toString();
				//return an object with relevant information 
				return {
					duration: parseFloat(duration),
					url: file.uri,
					name: name,
				};
			}
			console.warn(`one of your files in your playlist ${file.uri} is missing a duration`);
		}
	};
	//do something diff with m3u
	if (argv.m3u) {
		this.playlist = importM3U(argv.m3u).map(this.processM3U).filter(isValidMediaFile);
	}
	else {
		this.playlist = fs.readdirSync('./public/media').filter(isValidMediaFile).map(function(file){
			return '/media/'+file;
		});
	}	

	console.log("Loaded playlist:", this.playlist);

	this.mediaLengths = new Array(this.playlist.length);

	function isValidMediaFile (file) {
		let validExtensions = new Set([...videoTypes, ...audioTypes, ...ambiguousTypes]);
		let extension = path.parse('./'+ file).ext.toLowerCase();
		//if file happens to be an object and has the property url, parse it differently.
		if (file.hasOwnProperty('url')) {
			validExtensions = new Set([...videoTypes, ...audioTypes]);
			extension = path.parse('./'+ file.url).ext.toLowerCase();
			if(validExtensions.has(extension)) {
				return file;
			}
			else {
				console.warn(`file ${file.url} has an unsupported file extension. skipping...`);
			}
		}
		return (validExtensions.has(extension));
	}
	//this is for playist
	this.getPlaylistMediaTypes = () => {
		//m3u playlists will not support ambiguous file types for the moment.
		this.playlist.forEach((file)=>{
			let extension = path.parse(file.url).ext.toLowerCase();
			if (audioTypes.has(extension)) this.mediaTypes.push('audio');
			else if (videoTypes.has(extension)) this.mediaTypes.push('video');
		});
	};

	// Determine whether files are audio, video, or unsupported
	this.getMediaTypes = () => {
		this.playlist.forEach((url) => {
			let relativeUrl = './public' + url;
			let extension = path.parse(relativeUrl).ext.toLowerCase();
			if (audioTypes.has(extension)) this.mediaTypes.push('audio');
			else if (videoTypes.has(extension)) this.mediaTypes.push('video');
			else if (ambiguousTypes.has(extension)) {
				const shellCommand = `ffmpeg -i "${relativeUrl}" -hide_banner 2>&1 | grep `;
				const executeSync = require('child_process').execSync;
				try {
					executeSync(shellCommand + 'Video:'); // Check if ogg or webm file is video
					this.mediaTypes.push('video');
				}
				catch (videoError) {
					try {
						executeSync(shellCommand + 'Audio:'); // Check if ogg or webm file is audio
						this.mediaTypes.push('audio');
					}
					catch (audioError) {
						throw Error(`${url} has no video or audio content`);
					}
				}
			}
			else throw Error(`${url} is an unsuported file type`);
		});
	};

	// Compute video end times
	// this.setBreakpoints = () => {
	// 	let totalTime = 0;
	// 	this.breakpoints = this.mediaLengths.map((currentVal) => {
	// 		return totalTime += currentVal;
	// 	});
	// };

	// Compute video end times
	this.previous = function() {
		console.log("previous");
		this.mediaIndex--;
		if(this.mediaIndex < 0){
			this.mediaIndex = this.playlist.length - 1;
		}
		
		this.emitNewMediaEvent()   ; 
	};
	this.next = () => {
		console.log("next");
		this.mediaIndex++;
		if(this.mediaIndex >= this.playlist.length){
			this.mediaIndex = 0;
			this.playlistCount++;
		}
		this.emitNewMediaEvent();
	};
	this.emitNewMediaEvent = () => {
		this.startTime = new Date();
		let url = `${playlistUrl}${this.playlist[this.mediaIndex]}`;
		//if were in m3u mode were passing an object so we have to fetch the url from the object
		if (argv.m3u) {
			//check the url for a remote http string
			if (this.playlist[this.mediaIndex]['url'].startsWith('http')) {
				url = `${this.playlist[this.mediaIndex]['url']}`;
			}
			else {
				//else its a local file 
				url = `${playlistUrl}${this.playlist[this.mediaIndex]['url']}`;
			}
			
		}
		const mediaType = this.mediaTypes[this.mediaIndex];
		const duration = this.mediaLengths[this.mediaIndex];
		const data = {
			url: url,
			duration: duration,
			mediaType: mediaType
		};

		this.io.sockets.emit('newMedia', data);
	};

	this.startTimers = () => {
		this.startTime = new Date(); // Start main timer
	};
	this.tick = () => {
		this.elapsedTime = (new Date() - this.startTime)/1000;
		if (this.elapsedTime >=  this.mediaLengths[this.mediaIndex]) {
			this.startTime = new Date();
			this.next();
		}
	};
	this.restartTimers = () => {
		this.startTimers();
	};

	// Extract media duration. Documentation: https://ffmpeg.org/ffprobe.html
	this.getMediaLength = (url, index) => {
		const shellCommand = 'ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1';
		const execute = require('child_process').exec;
		execute(`${shellCommand} "./public${url}"`, (err, stdout) => {
			let duration = stdout.split('\n')[0]; // Remove \n
			this.mediaLengths[index] = parseFloat(duration);
			this.filesProcessed++;
			if (this.filesProcessed === this.mediaLengths.length) {
				this.startTimers();
			}
		});
	};
	//register media lengths from M3U playlist
	this.registerMediaLength = (file, index) => {
		this.mediaLengths[index] = file.duration;
		this.filesProcessed++;
		if (this.filesProcessed === this.mediaLengths.length) {
			this.startTimers();
		}
	};

	// Initialize by parsing media
	this.init = () => {
		if (argv.m3u) {
			this.getPlaylistMediaTypes();
			this.playlist.forEach((file, index)=>{
				this.registerMediaLength(file,index);
			});
		}
		else {
			this.getMediaTypes();
			this.playlist.forEach((fileUrl, index) => {
				this.getMediaLength(fileUrl, index);
			});
		}
		
	};

	this.getTimestamp = () => {
		this.elapsedTime = (new Date() - this.startTime)/1000;

		let timestamp = this.elapsedTime;
		//if were in m3u mode were passing an object so we have to fetch the url from the object
		if (argv.m3u) {
			//check if the url is remote
			if (this.playlist[this.mediaIndex]['url'].startsWith('http')) {
				console.log(`watching file ${this.playlist[this.mediaIndex]['url']}; ${timestamp}s`);
			}
			//else include localhost for the person watching the backend of this app.
			else console.log(`watching file ${playlistUrl}${this.playlist[this.mediaIndex]['url']}; ${timestamp}s`);
		}
		else {
			console.log(`watching file ${playlistUrl}${this.playlist[this.mediaIndex]}; ${timestamp}s`);
		}

		return timestamp;
		
	};

	this.init();

	
	//connection stuffs
	this.io.on('connection', async (client) => {
		//because i'm too lazy to make an async function.
		if (process.env.USE_REDIS) {
			console.log('redis!');
			try{
				messages = JSON.parse(await redis.get('messages'));
			}
			catch(err) {
				console.log(err);
			}
			
			if (!messages) {
				messages = [];
			}
		}
		
		
		this.clientCount++;
		let index = this.mediaIndex;
		let url = `${playlistUrl}${this.playlist[index]}`;
		if (argv.m3u) {
		//if the url is remote, don't append the project root url
			if (url.startsWith('http')) {
				url = `${this.playlist[index]['url']}`;
			}
			else {
				url = `${playlistUrl} ${this.playlist[index]['url'].substring(6)}`;
				console.log(url);
			}
		}
		else url = `${playlistUrl}${this.playlist[index]}`;
		console.log('client connected!');
		console.log(messages);
		client.on('disconnect', () => {
			console.log('client left');
			this.clientCount--; 
		});

		const timestamp = this.getTimestamp;
		const mediaType = this.mediaTypes[index];
		const duration = this.mediaLengths[index];

		client.emit('updateClient', {
			mediaType: mediaType,
			timestamp: timestamp,
			duration: duration,
			url: url
		});
		if (messages.length) {
			console.log('updating chat.');
			client.emit('updateChat',{
				messages:messages
			});
		}
		
		client.on('chat message', async (msg) => {

			let client = clients.find(client => client.username == msg.username);
			let color = colors.sort(function pickRandomColor(a,b) {return 0.5 - Math.random();})[0];
			if (!client) {
				clients = [...clients,{username:msg.username,color:color}];
				client = clients.find(client => client.username == msg.username);
			}

			if (messages.length > parseInt(process.env.CHAT_LIMIT)) {
				messages.shift();
			}
			messages = [...messages,{
				username:msg.username,
				color:client.color,
				comment:msg.comment
			}];
			
			if (process.env.USE_REDIS) {
				await redis.set('messages',JSON.stringify(messages));
			}
			
			console.log('message: ' + msg);
			io.emit('chat message',{
				username:client.username,
				color:client.color,
				comment:msg.comment
			});
		});
	});
	setInterval(() => {
		console.log('timestamp emit');
		let index = this.mediaIndex;
		let total = this.playlist.length;
		let timestamp = this.getTimestamp();
		let mediaType = this.mediaTypes[index];
		let playlistCount = this.playlistCount;
		let count = this.clientCount;
		let data = {
			humanReadableIndex: index + 1,
			mediaType: mediaType,
			timestamp: timestamp,
			totalFiles: total,
			clientCount: count
		};
		checkRepeat(repeat,playlistCount);
		io.sockets.emit('timestamp', data);
	}, 3000);
	setInterval(() =>{ this.tick();},500);
	setInterval(async function(){
		console.log('clearing messages');
		messages = [];
		if(process.env.USE_REDIS){
			await redis.set('messages',JSON.stringify(messages));
		}
	},86400000);
	//86400000 milliseconds in a day
};


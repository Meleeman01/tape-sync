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

//self invoking function so you put the variables at the bottom.
module.exports = function mediaPlayer(io,repeat,playlistUrl) {
	const videoTypes = new Set(['.ogv', '.mp4']);
	const audioTypes = new Set(['.mp3', '.flac', '.oga', '.wav']);
	const ambiguousTypes = new Set(['.webm', '.ogg']); // These can be either audio or video
	this.io = io;
	this.mediaIndex = 0;
	this.mediaTypes = [];
	this.startTime = null;
	this.filesProcessed = 0;
	this.playlistCount = 0;

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

	this.breakpoints = new Array(this.playlist.length);
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
	this.setBreakpoints = () => {
		let totalTime = 0;
		this.breakpoints = this.mediaLengths.map((currentVal) => {
			return totalTime += currentVal;
		});
	};

	this.startTimers = () => {
		this.startTime = new Date(); // Start main timer

		for (let index = 0; index < this.breakpoints.length; index++) {
			let breakpointMillisecs = this.breakpoints[index] * 1000;

			// Set timers to update mediaIndex and notify users of next URL in playlist
			if (index === (this.breakpoints.length - 1)) {
				setTimeout(() => {
					// Emit socket event here
					this.mediaIndex = 0;
					emitNewMediaEvent();
					this.restartTimers();
				}, breakpointMillisecs);
			} else {
				setTimeout(() => {
					// Emit socket event here
					this.mediaIndex++;
					emitNewMediaEvent();
				}, breakpointMillisecs);
			}
		}

		const emitNewMediaEvent = () => {
			
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

			//on new media event, count each time the index is at zero.
			if (this.mediaIndex == 0) {
				this.playlistCount++;
			}
			this.io.sockets.emit('newMedia', data);
		};
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
				this.setBreakpoints();
				this.startTimers();
			}
		});
	};
	//register media lengths from M3U playlist
	this.registerMediaLength = (file, index) => {
		this.mediaLengths[index] = file.duration;
		this.filesProcessed++;
		if (this.filesProcessed === this.mediaLengths.length) {
			this.setBreakpoints();
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
		let timePassed = (new Date() - this.startTime)/1000;
		for (let index = 0; index < this.breakpoints.length; index++) {
			if (timePassed <= this.breakpoints[index]) {
				let videoStartTime = this.breakpoints[index - 1] || 0;
				let timestamp = timePassed - videoStartTime;
				
				//if were in m3u mode were passing an object so we have to fetch the url from the object
				if (argv.m3u) {
					//check if the url is remote
					if (this.playlist[index]['url'].startsWith('http')) {
						console.log(`watching file ${this.playlist[index]['url']}; ${timestamp}s`);
					}
					//else include localhost for the person watching the backend of this app.
					
					else {
						//this assumes all files will be in the public folder.
						console.log(`watching file ${playlistUrl}${this.playlist[index]['url']}; ${timestamp}s`);
					}
				}
				else {
					console.log(`watching file ${playlistUrl}${this.playlist[index]}; ${timestamp}s`);
				}
				

				return timestamp;
			}
		}
	};

	this.init();

	
	//connection stuffs
	this.io.on('connection', (client) => {
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
		client.on('event', (data) => {console.log('hi there!');});
		client.on('disconnect', () => {console.log('client left'); });

		const timestamp = this.getTimestamp;
		const mediaType = this.mediaTypes[index];
		const duration = this.mediaLengths[index];

		client.emit('updateClient', {
			mediaType: mediaType,
			timestamp: timestamp,
			duration: duration,
			url: url
		});
	});
	setInterval(() => {
		console.log('timestamp emit');
		let index = this.mediaIndex;
		let total = this.playlist.length;
		let timestamp = this.getTimestamp();
		let mediaType = this.mediaTypes[index];
		let playlistCount = this.playlistCount;
		let data = {
			humanReadableIndex: index + 1,
			mediaType: mediaType,
			timestamp: timestamp,
			totalFiles: total
		};
		checkRepeat(repeat,playlistCount);
		io.sockets.emit('timestamp', data);
	}, 3000);
};


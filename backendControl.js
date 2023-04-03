const blessed = require('blessed');
const MediaPlayer = require('./mediaplayer');
const Chat = require('./chat');
module.exports = function blessedUI(io,redis) { 
	require('dotenv').config();
	const playlistUrl = process.env.URL || 'http://localhost:3000';
	let repeat = process.env.REPEAT;
	const argv = require('yargs-parser')(process.argv);
	let manualOverride = false;
	
	// Start mediaPlayer
	const chat = new Chat(redis);
	const mediaPlayer = new MediaPlayer(io,repeat,playlistUrl);

	const screen = blessed.screen();
	const body = blessed.box({  
		top: 0,
		left: 0,
		height: '100%-1',
		width: '100%',
		keys: true,
		mouse: true,
		alwaysScroll: true,
		scrollable: true,
		scrollbar: {
			ch: ' ',
			bg: 'red'
		}
	});
	const inputBar = blessed.textbox({
		bottom: 0,
		left: 0,
		height: 1,
		width: '100%',
		keys: true,
		mouse: true,
		inputOnFocus: true,
		style: {
			fg: 'white',
			bg: 'blue'  // Blue background so you see this is different from body
		}
	});

	function log(text) {
		body.pushLine(text);
		screen.render();
	}

	screen.append(body);
	screen.append(inputBar);
	
	screen.key(['escape', 'q', 'C-c'], (ch, key) => {
		process.exit(0);
	});
	screen.key(['left'], (ch, key) => {
		manualOverride = true;
		mediaPlayer.previous();
	});    
	screen.key(['right'], (ch, key) => {
		manualOverride = true;
		mediaPlayer.next();
	});
	inputBar.on('submit', (text) => {
		log(text);
		inputBar.clearValue();
	});
	screen.key('enter', (ch, key) => {
		inputBar.focus();
	});
	
	io.on('connection', (client) => {
		let index = mediaPlayer.mediaIndex;
		let url = `${playlistUrl}${mediaPlayer.playlist[index]}`;
		if (argv.m3u) {
			//if the url is remote, don't append the project root url
			if (url.startsWith('http')) {
				url = `${mediaPlayer.playlist[index]['url']}`;
			}
			else {
				url = `${playlistUrl}${mediaPlayer.playlist[index]['url']}`;
			}
		}
		else url = `${playlistUrl}${mediaPlayer.playlist[index]}`;
		const timestamp = mediaPlayer.getTimestamp();
		const mediaType = mediaPlayer.mediaTypes[index];
		const duration = mediaPlayer.mediaLengths[index];
		console.log(`Client connected! Now playing ${mediaType} file ${url}. Timestamp: ${timestamp}`);
		client.emit('updateClient', {
			mediaType: mediaType,
			timestamp: timestamp,
			duration: duration,
			url: url
		});
	});

	//connection stuffs
	io.on('connection', async (client) => {

		if (process.env.USE_REDIS) {
			console.log('redis!');
			try{
				chat.messages = JSON.parse(await redis.get('messages'));
			}
			catch(err) {
				console.log(err);
			}
			
			if (!chat.messages.length) {
				chat.messages = [];
			}
		}
		
		
		chat.clientCount++;
		let index = mediaPlayer.mediaIndex;
		let url = `${playlistUrl}${mediaPlayer.playlist[index]}`;
		if (argv.m3u) {
		//if the url is remote, don't append the project root url
			if (url.startsWith('http')) {
				url = `${mediaPlayer.playlist[index]['url']}`;
			}
			else {
				url = `${playlistUrl} ${mediaPlayer.playlist[index]['url'].substring(6)}`;
				console.log(url);
			}
		}
		else url = `${playlistUrl}${mediaPlayer.playlist[index]}`;
		console.log('client connected!');
		console.log(chat.messages);
		client.on('disconnect', () => {
			console.log('client left');
			chat.clientCount--; 
		});

		const timestamp = mediaPlayer.getTimestamp;
		const mediaType = mediaPlayer.mediaTypes[index];
		const duration = mediaPlayer.mediaLengths[index];

		client.emit('updateClient', {
			mediaType: mediaType,
			timestamp: timestamp,
			duration: duration,
			url: url
		});
		if (chat.messages.length) {
			console.log('updating chat.');
			client.emit('updateChat',{
				messages:chat.messages
			});
		}
		
		client.on('chat message', async (msg) => {

			let client = chat.clients.find(client => client.username == msg.username);
			let color = chat.colors.sort(function pickRandomColor(a,b) {return 0.5 - Math.random();})[0];
			if (!client) {
				chat.clients = [...chat.clients,{username:msg.username,color:color}];
				client = chat.clients.find(client => client.username == msg.username);
			}

			if (chat.messages.length > parseInt(process.env.CHAT_LIMIT)) {
				chat.messages.shift();
			}
			chat.messages = [...chat.messages,{
				username:msg.username,
				color:client.color,
				comment:msg.comment
			}];
			
			if (process.env.USE_REDIS) {
				await redis.set('messages',JSON.stringify(chat.messages));
			}
			
			console.log('message: ' + msg);
			io.emit('chat message',{
				username:client.username,
				color:client.color,
				comment:msg.comment
			});
		});
	});

	// Stop server depending on value given from REPEAT constant
	function checkRepeat(repeat, count) {
		if (manualOverride) {return;}
		if (repeat == count) {
			console.log('we have played through the list '+count+' times');
			process.exit('bye bye!');
		}
		else if (repeat==='false' && count == 1) {
			console.log('we have played through the list');
			process.exit('bye bye!');
		}
	//if there's no repeat count or repeat is anything other than false, repeat ad infinitum
	}
	setInterval(() => {
		let index = mediaPlayer.mediaIndex;
		let total = mediaPlayer.playlist.length;
		let timestamp = mediaPlayer.getTimestamp();
		let mediaType = mediaPlayer.mediaTypes[index];
		let playlistCount = mediaPlayer.playlistCount;
		let data = {
			humanReadableIndex: index + 1,
			mediaType: mediaType,
			timestamp: timestamp,
			totalFiles: total,
			clientCount:chat.clientCount
		};
		checkRepeat(repeat,playlistCount);
		io.sockets.emit('timestamp', data);
	}, 3000);
};

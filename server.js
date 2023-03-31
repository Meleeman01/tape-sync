const express = require('express');
const app = express();

require('dotenv').config();

//adds option for redis
const redis = process.env.USE_REDIS ? require('redis').createClient(
	{url:`redis://:${process.env.REDIS_AUTH}@localhost:6379`,}
) : undefined;

if (redis) {
	redis.on('error', (err) => console.log('Redis Client Error', err));
	if (process.env.REDIS_AUTH) {
		console.log('authentication supplied.');
	}
	else {
		console.warn('no auth supplied.');
	}
	redis.connect();
}



// Basic Middleware
app.use(express.static(__dirname + '/public'));
// svg Sprites from Font Awesome
app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/sprites'));
// Basic Routes
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/views/index.html');
});

//load svg sprites from font awesome


const repeat = process.env.REPEAT;
const playlistUrl = process.env.URL || 'http://localhost:3001';

app.get('/fscreen.js', (req, res) => res.sendFile(__dirname + '/node_modules/fscreen/dist/fscreen.esm.js'));

// Start server
const server = app.listen(process.env.PORT, () => {
	console.log(`Server listening on port: ${process.env.PORT}`);
});
const io = require('socket.io')(server);

const mediaPlayer = require('./mediaplayer');
const player = new mediaPlayer(io,repeat,playlistUrl,redis);


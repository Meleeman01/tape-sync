const argv = require('yargs-parser')(process.argv);
const path = require('path');
const fs = require('fs');
const m3uParser = require('m3u8-parser');
const videoTypes = new Set(['.ogv', '.mp4']);
const audioTypes = new Set(['.mp3', '.flac', '.oga', '.wav']);
const ambiguousTypes = new Set(['.webm', '.ogg']); // These can be either audio or video

//self invoking function so you put the variables at the bottom.
(function mediaPlayer(videoTypes,audioTypes,ambiguousTypes,io) {
	// body...
	this.io = io;

	console.log(this.io);
})(videoTypes,audioTypes,ambiguousTypes,'lol');


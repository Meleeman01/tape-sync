const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');


//============^koa stuffs^===================//

require('dotenv').config();
const argv = require('yargs-parser');


const app = new Koa();
const router = new Router();

app
	.use(router.routes())
	.use(router.allowedMethods())
	.use(serve(__dirname + '/node_modules/@fortawesome/fontawesome-free/sprites')) //load svg sprites from font awesome
	.use(serve(__dirname + '/public'));

const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const repeat = process.env.REPEAT;
const playlistUrl = process.env.URL || 'http://localhost:3000';

router.get('/', async (ctx) => {
	await send(ctx,'/public/index.html');
});

router.get('/fscreen.js', async (ctx) =>  await send(ctx,'/node_modules/fscreen/dist/fscreen.esm.js'));


const mediaPlayer = require('./mediaplayer');
let player = new mediaPlayer(io,repeat,playlistUrl);
console.log(player);




server.listen(3000);
console.log('listening on port 3000');
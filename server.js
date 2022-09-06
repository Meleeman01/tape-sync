
const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const send = require('koa-send');
const range = require('koa-range');



//============^koa stuffs^===================//


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

const argv = require('yargs-parser');


const app = new Koa();
const router = new Router();

app
	.use(range)
	.use(router.routes())
	.use(router.allowedMethods())
	.use(serve('./public'));
//load svg sprites from font awesome
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
const repeat = process.env.REPEAT;
const playlistUrl = process.env.URL || 'http://localhost:3000';

router.get('/', async (ctx) => {
	await send(ctx,'/public/index.html');
});

router.get('/fscreen.js', async (ctx) =>  await send(ctx,'/node_modules/fscreen/dist/fscreen.esm.js'));


const mediaPlayer = require('./mediaplayer');
const player = new mediaPlayer(io,repeat,playlistUrl,redis);
//console.log(player);


server.listen(process.env.PORT);
console.log(`listening on port ${process.env.PORT}`);

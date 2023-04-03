module.exports = function Chat(redis) {
	this.clientCount = 0;
	this.colors = [
		'#ff0000','#ff8700','#ffd300','#deff0a','#a1ff0a',
		'#0aff99','#0aefff','#147df5','#580aff','#be0aff'
	];
	this.clients = [];
	this.messages =[];

	setInterval(async function(){
		console.log('clearing messages');
		this.messages = [];
		if(process.env.USE_REDIS){
			await redis.set('messages',JSON.stringify(this.messages));
		}
	},3000);
};
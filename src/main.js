import App from './app.svelte';

if ('serviceWorker' in navigator) {
	console.log('serviceWorker is supported');
	window.addEventListener('load',function(e) {
		navigator.serviceWorker
			.register('../serviceWorker.js')
			.then(reg => console.log('serviceWorker registered!'))
			.catch(err => console.log(`serviceWorker Error:: ${err}`));
	});
}

const app = new App({
	target: document.body,
	props: {
		name:'world',
	}
});

export default app;

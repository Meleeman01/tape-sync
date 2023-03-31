import App from './app.svelte';

// if ('serviceWorker' in navigator) {
// 	console.log('serviceWorker is supported');
// 	window.addEventListener('load',function(e) {
// 		navigator.serviceWorker
// 			.register('../serviceWorker.js')
// 			.then(reg => console.log('serviceWorker registered!'))
// 			.catch(err => console.log(`serviceWorker Error:: ${err}`));
// 	});
// }

//removing all service workers that exist since they mess with video loading. 
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.getRegistrations().then(function(registrations) {
		for(let registration of registrations) {
			registration.unregister();
		}
	});
}
const app = new App({
	target: document.body,
	props: {
		name:'world',
	}
});

export default app;

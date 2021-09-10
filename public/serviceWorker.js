const cacheName = 'v1';

const cacheAssets = [
	'index.html',
	'js/main.js'
];

self.addEventListener('install', function(e){
	console.log('serviceWorker installed');
	e.waitUntil(
		caches
			.open(cacheName)
			.then(cache => {
				console.log('serviceWorker Caching files');
				cache.addAll(cacheAssets);
			})
			.then(() => self.skipWaiting())

	);
});

self.addEventListener('activate', function(e){
	//call activate event
	console.log('serviceWorker activated');
	//remove unwanted caches
	e.waitUntil(
		caches.keys().then(cacheNames => {
			return Promise.all(
				cacheNames.map(cache => {
					if (cache !== cacheName) {
						console.log('serviceWorker: clearing old cache');
						return caches.delete(cache);
					}
				})
			);
		})
	);
	
});

//call fetch event
self.addEventListener('fetch', function(e){
	console.log('serviceWorker: fetching...');
	e.respondWith(
		fetch(e.request)
		.catch(() => {
			caches.match(e.request);
		})
	);
});
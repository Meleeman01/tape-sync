

<script>
	import Video from './components/video.svelte';
	import Audio from './components/music.svelte';
	import Sound from './components/music.svelte';
	import Controls from './components/controls.svelte';
	export let name; //used as a prop for the app.

	console.log('app is up');
	let timestamp = undefined;
	let duration = undefined;
	let url = undefined;
	let mediaType = undefined;
	let latency = 0;
	let isPlaying = false;


	const socket = io();

	socket.on('connect', () => {
		document.getElementById('socket-fail').style.visibility = "hidden";
		document.getElementById('socket-success').style.visibility = "visible";
	});

	socket.on('disconnect', () => {
		//document.getElementById('socket-success').style.visibility = "hidden";
		//document.getElementById('socket-fail').style.visibility = "visible";
	});
	// Server emits event when media ends
	socket.on('newMedia', (data) => {
		console.log('newMedia detected!');
		console.log(data);
		url = data.url;
		mediaType = data.mediaType;
		isPlaying = true;
	});
	// Server sends timestamp every three seconds
	// Calculate latency and update Vue component
	socket.on('timestamp', (data) => {
		console.log('timestamp');
		console.log(data);
		mediaType = data.mediaType;
		timestamp = data.timestamp;
	});
	// Server emits event when client connects
	socket.on('updateClient', (data) => {
		console.log('updateClient');
		mediaType = data.mediaType;
		timestamp = data.timestamp;
		duration = data.duration;
		url = data.url;
		isPlaying = true;
	});

</script>

<main>

	{#if mediaType != undefined}
	<Controls timestamp = {timestamp} duration = {duration} isPlaying={isPlaying}/>
		{#if mediaType == 'video'}
			<Video url = {url} timestamp = {timestamp} />
		{/if}
		{#if mediaType == 'audio'}
			<Audio url = {url} timestamp = {timestamp} />
		{/if}
	{/if}
</main>

<style>
	
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background: black;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
</style>
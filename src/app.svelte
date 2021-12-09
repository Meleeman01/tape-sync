
<script>
	import {  onMount, afterUpdate, beforeUpdate } from 'svelte';
	
	
	
	export let name; //used as a prop for the app.

	console.log('app is up');
	let timestamp = undefined;
	let time = 0;

	let duration;
	let url = undefined;
	let mediaType = undefined;
	let latency = 0;
	let paused = false;


	let mediaControls;

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
	socket.on('updateClient', async (data) => {
		console.log('updateClient');
		mediaType = data.mediaType;
		timestamp = data.timestamp;
		duration = data.duration;
		url = data.url;
	});

	function toggle(e) {
		if (!paused) {
			paused = true;
			//e.target.paused = true;
			console.log('were playing now');
			console.log(e.target);
		}
		else {
			console.log('were paused now');
			paused = false;
		}
	}

	function format(seconds) {
		if (isNaN(seconds)) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}
	
	onMount((e) => {
		console.log('the component has mounted');
		console.log(e);
		//mediaplayer controls

	});
	afterUpdate(() => {
		console.log('the component just updated');
	});
	beforeUpdate(() => {
		console.log('justbefore update...');
	});
</script>

<main>

	{#if mediaType != undefined}
		<div id="controls-container" class="">
			<progress value={(timestamp/duration) || 0} ></progress>
			<div class="button-container">
		
			<svg class="icon" on:click={toggle}>
				{#if !paused}
				<use xlink:href="regular.svg#play-circle"></use>
				{:else}
				<use xlink:href="regular.svg#pause-circle"></use>
				{/if}
			</svg>
	</div>
	{#if mediaType == 'video'}
		<video class="media" src={url} bind:currentTime={timestamp}  bind:duration bind:paused on:click={toggle} >
			<track kind="captions">
		</video> 
		{/if}
		{#if mediaType == 'audio'}
			<audio class="media" src={url} controls>
				<track kind="captions">
			</audio>
		{/if}
	</div>
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

	#controls-container {
		width: 100%;
	}
	.button-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.icon {
		fill:white;
		width: 3rem;
		height: 3rem;
	}

	.icon:hover {
		fill:#ccc;
	}
	progress {
		width: 100%;
	}
	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
</style>

<script>
	import {  onMount, afterUpdate, beforeUpdate, onDestroy } from 'svelte';
	
	
	
	export let name; //used as a prop for the app.
	// create a look event that bubbles up and cannot be canceled


	console.log('app is up');
	let timestamp = undefined;
	let time = 0;
	let heartBeat = undefined;
	let duration;
	let url = undefined;
	let mediaType = undefined;
	let latency = 0;
	let paused = true;


	let media;



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
	socket.on('newMedia', async (data) => {
		console.log('newMedia detected!');
		url = await data.url;
		mediaType = await data.mediaType;
		await media.load();
		if (!paused) {
			await media.play();
		}
	});
	// Server sends timestamp every three seconds
	// Calculate latency and update Vue component
	socket.on('timestamp', (data) => {
		console.log('timestamp');
		console.log(data);
		mediaType = data.mediaType;
		timestamp = data.timestamp;
		heartBeat = new Date().getTime();
		if (paused) {
			console.log(Math.abs(timestamp));
			media.currentTime = Math.floor(timestamp);
		}
	});
	// Server emits event when client connects
	socket.on('updateClient', async (data) => {
		console.log('updateClient');
		mediaType = await data.mediaType;
		timestamp = await data.timestamp;
		duration = await data.duration;
		url = await data.url;
		media.currentTime = await Math.floor(timestamp) ;
	});

	function toggle(e) {
		if (!paused) {
			paused = true;
			//e.target.paused = true;
			console.log('were paused now');
			console.log(e.target);
		}
		else {
			console.log('were playing now');
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
	});
	afterUpdate(() => {
		console.log('the component just updated');
		if (timestamp - time > 3) {
			time = timestamp;
		}
	});
</script>

<main>

	{#if mediaType != undefined}
		<div id="controls-container" class="">
			<progress value={(timestamp/duration) || 0} ></progress>
			<div class="button-container">
		
				<svg class="icon" on:click={toggle}>
					{#if paused}
					<use xlink:href="regular.svg#play-circle"></use>
					{:else}
					<use xlink:href="regular.svg#pause-circle"></use>
					{/if}
				</svg>
			</div>
	{#if mediaType == 'video'}
		<video bind:this={media} src={url} currentTime={time}  bind:duration bind:paused on:click={toggle}>
			<track kind="captions">
		</video> 
		{/if}
		{#if mediaType == 'audio'}
			<audio bind:this={media} src={url} currentTime={time} bind:duration bind:paused on:click={toggle}>
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

<script>
	import {  onMount, afterUpdate } from 'svelte';
	export let name; //used as a prop for the app.
	// create a look event that bubbles up and cannot be canceled


	console.log('app is up');
	let timestamp = undefined;
	let time = 0;
	let heartBeat = undefined;
	let duration;
	let url = undefined;
	let mediaType = undefined;
	let paused = true;
	let muted = false;
	let volume = 1.0;

	let controls;
	let media;
	let infoPanel;
	let menuVisible;
	let infoVisible;
	let peopleCount = 0;

	const socket = io();

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
		peopleCount = data.clientCount;
		if (paused) {
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
		media.currentTime = await Math.floor(timestamp);
	});

	function showMenu(e) {
		clearTimeout(menuVisible);
		clearTimeout(infoVisible);
		controls.style.opacity = '1';
		infoPanel.style.opacity = '1';
		menuVisible = setTimeout(() => {
			controls.style.opacity = '0';
		}, 4000);
		infoVisible = setTimeout(()=>{
			infoPanel.style.opacity = '0';
		},4000);
	}

	function pausePlay(e) {
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

	function resync(e) { 
		// get the difference of the last server heart beat in seconds
		let lastHeartBeatOffset = ((new Date().getTime() - heartBeat )/1000);
		media.currentTime = timestamp+lastHeartBeatOffset;
	}

	function shrinkExpand(e) {
		if (!fscreen.fullscreenElement) {
			let video = document.querySelector('main');
			fscreen.requestFullscreen(video);
		} else {
			fscreen.exitFullscreen();
		}
	}

	function toggleMute(e) {
		if(!muted) {
			console.log('were muting.');
			muted = true;
		}
		else {
			console.log('were unmuted');
			muted = false;
		}
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
		
		<div id="controls-container" bind:this={controls} on:mouseover={showMenu} on:focus={showMenu}>
			<progress value={(timestamp/duration) || 0} ></progress>
			<div class="button-container">
				<div class="controls-left">
					<svg class="icon" on:click={pausePlay}>
						{#if paused}
						<use href="/images/regular.svg#play-circle"></use>
						{:else}
						<use href="/images/regular.svg#pause-circle"></use>
						{/if}
					</svg>
					<svg class="icon" on:click={toggleMute}>
						{#if muted}
						<use href="images/solid.svg#volume-mute"></use>
						{:else}
							{#if volume == 0}
							<use href="images/solid.svg#volume-off"></use>
							{:else if volume < 0.9}
							<use href="images/solid.svg#volume-down"></use>
							{:else if volume > 0.9}
							<use href="images/solid.svg#volume-up"></use>
							{/if}
						{/if}
					</svg>
					<div>
						<input class="slider" type="range" min="0" max="1" step=".01"
					 bind:value={volume}/>
					</div>
				</div>
				
				<div class="controls-right">
					<svg class="icon" on:click={resync}>
						<use xlink:href="images/solid.svg#redo-alt"></use>
					</svg>
					<svg class="icon" on:click={shrinkExpand}>
						<use xlink:href="images/solid.svg#expand"></use>
					</svg>
				</div>
			</div>
		</div>
		{#if mediaType == 'video'}
		<video class="media" bind:this={media} src={url} currentTime={time} bind:volume bind:muted bind:duration bind:paused on:click={pausePlay}>
			<track kind="captions">
		</video> 
		{/if}
		{#if mediaType == 'audio'}
			<img class="media" src="images/kikiRadio.gif" alt="black cat with his hair standing up." on:click={pausePlay}/>
			<audio bind:this={media} src={url} currentTime={time} bind:volume bind:muted bind:duration bind:paused on:click={pausePlay}>
				<track kind="captions">
			</audio>
		{/if}
	{:else}
		<img class="media" src="images/scaredyCat.gif" alt="black cat with his hair standing up." />
	{/if}
	<div bind:this={infoPanel} class="info" on:mouseover={showMenu} on:focus={showMenu}>
		<svg id="people">
			<use xlink:href="images/solid.svg#users"></use>
		</svg>
		<b style="color:white; font-family: sans;">{peopleCount}</b>
	</div>
</main>

<style>
	main {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}
	#controls-container {
		width: 100%;
		height: 100px;
		z-index:2;
		background-color: rgba(0,0,0,0.2);
		position: fixed;
		top: 0;
		transition: opacity 0.5s;
		opacity: 0;
	}
	#people {
		fill:white;
		width: 2rem;
		height: 2rem;
		margin-right: .2rem;
	}
	.info {
		display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	z-index: 2;
	bottom: 0;
	border-radius: 7%;
	height: 50px;
	padding: 0.5rem;
	background-color: rgba(0,0,0,0.2);
	transition: opacity 0.5s;
		opacity: 0;
	}
	.button-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.controls-left {
		display: flex;	
		padding: .25rem;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
	}
	.controls-right {
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	.slider {
		margin: 0 .25rem;
	}
	.icon {
		fill:white;
		width: 3rem;
		height: 3rem;
		margin: 0 .25rem;
	}
	.icon:hover {
		fill:#ccc;
	}
	progress {
		width: 100%;
	}
	.media {
				height:100%;
		width: 100%;
		object-fit: contain;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	
</style>

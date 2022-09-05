
<script>
	import {  onMount, afterUpdate } from 'svelte';
	import Chat from './components/chat';
	export let name; //used as a prop for the app.
	// create a look event that bubbles up and cannot be canceled


	console.log('app is uffp');
	let chatActive = false;
	$:chatMessages = [];
	let timestamp = undefined;
	let time = 0;
	let heartBeat = undefined;
	let duration;
	let url = undefined;
	let mediaType = undefined;
	let paused = true;
	let muted = false;
	let volume = localStorage.getItem('volume') ? localStorage.getItem('volume') : 0.5;
	let controls;
	let latency;
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
			paused = true;
			pausePlay();
		}
	});
	// Server sends timestamp every three seconds
	socket.on('timestamp', (data) => {
		//console.log('timestamp');
		//console.log(data);
		mediaType = data.mediaType;
		timestamp = data.timestamp;
		heartBeat = new Date().getTime();
		showLatency(timestamp);
		peopleCount = data.clientCount;
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
	socket.on('updateChat',async (data)=>{
		console.log('updateChat',data);
		chatMessages = data.messages;
	});
	socket.on('chat message', async (msg) =>{
		console.log('fromserver:',msg);
		chatMessages = [...chatMessages,msg];
	});
	function format(seconds) {
		if (isNaN(seconds) || seconds == undefined) return '...';

		const minutes = Math.floor(seconds / 60);
		seconds = Math.floor(seconds % 60);
		if (seconds < 10) seconds = '0' + seconds;

		return `${minutes}:${seconds}`;
	}
	function showMenu(e) {
		if (e.target !== undefined) {
			clearTimeout(menuVisible);
			clearTimeout(infoVisible);
			e.target.style.cursor = '';
			controls.style.opacity = '1';
			infoPanel.style.opacity = '1';

			menuVisible = setTimeout(() => {
				controls.style.opacity = '0';
				e.target.style.cursor = 'none';
			}, 4000);
			infoVisible = setTimeout(()=>{
				infoPanel.style.opacity = '0';
				e.target.style.cursor = 'none';
			},4000);
		}
		
	}

	function start() {
		document.querySelector('.start-button').style.display = 'none';
		document.querySelector('.start-button').style.visibility = 'hidden';
		resync();
		paused = false;
	}

	function storeVolume() {
		localStorage.setItem('volume',volume);
	}

	function pausePlay() {
		if (!paused) {
			paused = true;
			console.log('were paused now');
		}
		else {
			console.log('were playing now');
			paused = false;
		}
	}
	function showLatency(timestamp) {
		console.log(format(timestamp));
		latency = format(timestamp - media.currentTime);
	}

	function resync(e) { 
		// get the difference of the last server heart beat in seconds
		let lastHeartBeatOffset = ((new Date().getTime() - heartBeat )/1000);

		media.currentTime = timestamp+lastHeartBeatOffset;
		showLatency();
	}

	function shrinkExpand(e) {
		if (!fscreen.fullscreenElement) {
			let video = document.querySelector('main');
			fscreen.requestFullscreen(video);
		} else {
			fscreen.exitFullscreen();
		}
	}

	function toggleChat(e){ 
		chatActive = !chatActive;
		console.log(document.body.clientWidth);
		let clientWidth = document.body.clientWidth;
		if (!chatActive ) {
			controls.style.width = '100%';
			infoPanel.style.width = '100%';
			media.parentElement.style.width = '100%';
		}
		else if(clientWidth > 1340) {
			controls.style.width = '80%';
			infoPanel.style.width = '80%';
			media.parentElement.style.width = '80%';
			console.log(media.parentElement);
		}
		else if(clientWidth < 1340 && clientWidth > 894) {
			controls.style.width = '70%';
			infoPanel.style.width = '70%';
			media.parentElement.style.width = '70%';
			console.log(media.parentElement);
		}
		else if (clientWidth < 894) {
			controls.style.width = '100%';
			infoPanel.style.width = '100%';
			media.parentElement.style.width = '100%';
		}
		
	}

	function toggleMute(e) {
		muted = !muted;
	}

	function handleChatMessage (e){
		console.log('handling chat message',e);
		socket.emit('chat message', e.detail);
	}

	
	onMount((e) => {
		console.log('the component has mounted');

	});
	afterUpdate(() => {
		console.log('the component just updated');
		if (timestamp - time > 5) {
			time = timestamp;
		}
	});
</script>

<main>

	{#if timestamp != undefined}
	<div on:mousemove={showMenu} on:touch={showMenu} on:click|once={start}>
		<div class="start-button">
			<svg id="start" class="icon" >
				<use href="/images/regular.svg#play-circle"></use>
			</svg>
		</div>
		<div id="controls-container" bind:this={controls}  >
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
					<div class="slider-container">
						<input class="slider" type="range" min="0" max="1" step=".01"
					 bind:value={volume} on:change={storeVolume} />
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
			<div class="button-container">
				<div class="text">
					<span>latency: {latency}</span>
				</div>
				<div class="text">
					<span>-{format(duration-timestamp)}</span>
				</div>
			</div>
			
		</div>
		{#if mediaType == 'video'}
		<video class="media" bind:this={media} src={url} currentTime={time} bind:volume bind:muted bind:duration bind:paused  on:click={showMenu}>
			<track kind="captions">
		</video> 
		{/if}
		{#if mediaType == 'audio'}
			<img class="media" src="images/kikiRadio.gif" alt="black cat with his hair standing up." on:click={showMenu}/>
			<audio bind:this={media} src={url} currentTime={time} bind:volume bind:muted bind:duration bind:paused on:click={pausePlay}>
				<track kind="captions">
			</audio>
		{/if}
	</div>
	{:else}
	<div>
		<img class="media" src="images/scaredyCat.gif" alt="black cat with his hair standing up." />
	</div>
	{/if}
	<div bind:this={infoPanel} class="info">
		<svg id="people" on:click={toggleChat}>
			<use xlink:href="images/solid.svg#users"></use>
		</svg>
		<b style="color:white; font-family: sans;">{peopleCount}</b>
	</div>
	{#if chatActive}
		<Chat chats={chatMessages} on:chat={handleChatMessage} on:chat-close={toggleChat}/>
	{/if}
</main>

<style>
	.start-button {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 3;
	}
	.start-button svg {
		fill:white;
		width: 6rem;
		height: 6rem;
		margin: 0;
	}
	.text {
		padding: 0 .75rem;
	}
	.text span{
		color: #ccc;

	}
	main > div {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		font-family: sans-serif;
	}
	#controls-container {
		width: 100%;
		height: 100px;
		z-index:1;
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
	#people:hover {
		fill: #ccc;
		cursor: pointer;
	}
	.info {
		display: flex;
	align-items: center;
	justify-content: flex-start;
	position: fixed;
	z-index: 2;
	bottom: 0;
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
		padding: 0 .5rem;
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
	@media (max-width: 640px) {
		main {
			max-width: none;
		}
		.icon {
			width: 2rem;
			height: 2rem;
		}
		.slider-container {
			width: 50%;
		}
		.slider {
			width: 75%;
		}
	}
	
</style>

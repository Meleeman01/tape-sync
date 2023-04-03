<script>
	//add chat here
	export let chats = [];
	import {  onMount, afterUpdate } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let username = localStorage.username ? localStorage.username : '';
	let comment;
	let chatWindow;
	
	function submitMessage() {
		console.log(chats);
		console.log(comment);
		if (!username) {
			username = 'anon';
		}
		if (comment) {
			dispatch('chat',{username:username,comment:comment});
			comment = '';
		}
	}
	function handleKeyDown(e) {
		console.log(chatWindow.scrollHeight);
		chatWindow.scrollTo(0,document.body.scrollHeight + 100);
		if (e.key == 'Enter' && comment.trim() != '') {
			submitMessage();
		}
	}
	function handleUsername() {
		console.log(username);
		localStorage.setItem('username',username);
	}
	function close() {
		dispatch('chat-close');
	}
	function scrollTop(){
		console.log('scroll to top.');
		chatWindow.scrollTo(0,-1);
	}
	onMount(()=>{
		console.log('chat mounted.');
		chatWindow.scrollTo(0,document.body.scrollHeight + 100);
	});

	afterUpdate(() => {
		console.log('chat updated');
	});

</script>

<div bind:this={chatWindow} class="chat-window" on:keypress={handleKeyDown}>
	<div style="width:100%;">
		<div class="input-row">
			<h2>chat</h2> 
			<svg on:click={close} id="close">
				<use xlink:href="images/regular.svg#window-close"></use>
			</svg>
		</div>
	 <hr />
	 <div class="chat-messages">
	 	
	 	{#if chats}
	 	{#each chats as chat}
	 		<p><b style="color:{chat.color}">{chat.username}: </b>{chat.comment}</p>
	 	{/each}
	 	{/if}
	 	
	 </div>
	</div>
	 
	 <div  class="input">
	 	<div style="display:flex; justify-content: flex-end;">
	 		<button style="display: flex; align-items: center;" on:click={scrollTop}>back to top <svg  id="back-to-top">
				<use xlink:href="images/solid.svg#arrow-up"></use>
			</svg></button>
	 	</div>
	 	<div class="input-row">
	 		<input style="margin-right:5px;" bind:value={username} type="text" name="username" placeholder="username">
	 	 	<button on:click={handleUsername}>save</button>
	 	</div>
	 	 <div class="input-row" style="align-items: flex-end;">
	 	 	<textarea style="margin-right:5px;" bind:value={comment}></textarea>
		 	<button on:click={submitMessage}>submit</button>
	 	 </div>
		 
	 </div>
</div>

<style>
	@font-face {
		font-family: 'Montserrat';
		src: url(fonts/static/Montserrat-SemiBold.ttf);
	}
	#close {
		fill:#ff595e;
		width: 2rem;
		height: 2rem;
		margin-right: .2rem;
	}
	#back-to-top {
		fill: black;
		width: 1rem;
		height: 1rem;
	}
	h2, p{
		color: whitesmoke;
		margin-left:.7rem;
		margin-right: .7rem;
		font-family: 'Montserrat';
	}
	b{
		font-weight: 700;
	}
	input,button,textarea {
		font-family: 'Montserrat';
	}
	button {
		border-radius: 5px;
		padding: .25rem;
	}
	
	.input {
		margin-bottom: 1rem;
	}
	.input-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.chat-messages {
		display: inline;
		word-break: break-all;
		height: 700px;
		overflow-y: scroll;
	}
	.chat-window {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: rgba(25, 25, 25, 0.5);
		overflow-y: scroll;
		width: 20%;
		height: 100%;
		z-index: 4;
		position: fixed;
		right: 0;
		top: 0;
	}
	@media screen and ( max-width: 1340px) {
		.chat-window {
			width: 30%;
		}
	}
	@media screen and (max-width:894px) {
		.chat-window {
			width: 100%;
			height:30%;
			top: unset;
			bottom: 0;
		}

	}
</style>
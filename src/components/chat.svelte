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

	afterUpdate(() => {
		console.log('chat updated');
		//chatWindow.scrollTo(0,document.body.scrollHeight + 100);
	});

</script>

<div bind:this={chatWindow} class="chat-window" on:keypress={handleKeyDown}>
	<div style="width:100%;">
		<h2>chat</h2>
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
	 	 <input bind:value={username} type="text" name="username">
	 	 <button on:click={handleUsername}>save</button>
		 <textarea bind:value={comment}></textarea>
		 <button on:click={submitMessage}>submit</button>
	 </div>
</div>

<style>
	@font-face {
		font-family: 'Montserrat';
		src: url(fonts/static/Montserrat-SemiBold.ttf);
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
	.input {
		margin-bottom: 1rem;
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
</style>
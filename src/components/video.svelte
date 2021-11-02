<script>
    export let url;
    export let timestamp;
    async function updateTime(timestamp) {
        console.log('video recieved '+ timestamp);
    }
</script>

<video id="media-player" muted>
    <source src={url} on:timeupdate={updateTime(timestamp)}>
    <track kind="captions">
</video>

<style>
    #media-player {
        height: 100vh;
        width: 100%;
        object-fit: contain;
    }
</style>
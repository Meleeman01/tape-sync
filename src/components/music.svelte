<script>
    export let url;
</script>

<audio id="media-player" autoplay>
    <source src={url}>
    <track kind="captions">
</audio>

<style>
    #media-player {
        height: 100vh;
        width: 100vw;
        object-fit: contain;
    }
</style>
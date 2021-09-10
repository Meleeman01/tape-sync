<script>
    export let url;
</script>

<video id="media-player" muted>
    <source src={url}>
    <track kind="captions">
</video>

<style>
    #media-player {
        height: 100vh;
        width: 100%;
        object-fit: contain;
    }
</style>


<script>
    import Video from './components/video.svelte';
    import Sound from './components/music.svelte';
    import Controls from './components/controls.svelte';
    export let name; //used as a prop for the app.


</script>

<main>
    
    <Controls timestamp = {50} duration = {100}/>
    <Video url = '/media/Ted-Kasyncski-unabomber-anime.mp4' /> 
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
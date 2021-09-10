<script>
    
    export let timestamp= 2;
    export let duration = 100;
    export let isPlaying = false;

    function toggle() {
        if (!isPlaying) {
            isPlaying = true;
        }
        else {
            isPlaying = false;
        }
    }
</script>



<div id="controls-container" class="">
    <progress value={timestamp} max={duration}></progress>
    <div class="button-container">
        
        <svg class="icon" on:click={toggle}>
            {#if isPlaying}
            <use xlink:href="regular.svg#play-circle"></use>
            {/if}
            {#if !isPlaying}
            <use xlink:href="regular.svg#pause-circle"></use>
            {/if}
        </svg>
        
        
        
        
    </div>
</div>

<style>
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
</style>
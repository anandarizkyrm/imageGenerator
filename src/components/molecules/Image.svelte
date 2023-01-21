<script lang="ts">
  import {decode} from 'blurhash';
  import {onMount} from 'svelte';
  export let imageSrc;
  export let width;
  export let height;
  export let blurhash;

  $: imageRef = null;
  $: canvasRef = null;
  $: loading = true;

  function handleImageLoad() {
    imageRef.style.display = 'inline-block';
    loading = false;
  }

  function handleChange() {
    const pixels = decode(blurhash, width, height);
    const ctx = canvasRef.getContext('2d');
    const imageData = ctx.createImageData(width, height);
    for (let i = 0; i < pixels.length; i++) {
      imageData.data[i] = pixels[i];
    }
    ctx.putImageData(imageData, 0, 0);
  }

  onMount(async () => {
    handleChange();
  });
</script>

<section>
  <img
    src={imageSrc}
    bind:this={imageRef}
    {width}
    {height}
    alt="AI Generate"
    on:load={handleImageLoad}
    style="display: none"
  />

  {#if loading}
    <canvas {width} {height} bind:this={canvasRef} />
  {/if}
</section>

<style scoped>
  section {
    width: fit-content;
    height: fit-content;
  }
  img {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
</style>

<script lang="ts">
  import FormInput from './components/molecules/FormInput.svelte';
  import Image from './components/molecules/Image.svelte';

  $: arrayOfImage = [];

  const loaded = new Map();
</script>

<div class="main">
  <FormInput bind:arrayOfImage />
  <div class="image-list">
    {#each arrayOfImage as image, i}
      <Image
        imageSrc={image.url}
        blurhash={'LEHV6nWB2yk8pyo0adR*.7kCMdnj'}
        width={400}
        height={340}
      />
      <!-- <img height="400" width="340" class="img" src={image.url} alt={'image'} /> -->
    {/each}
  </div>
</div>

<style>
  .main {
    width: 100%;
    box-sizing: border-box;
  }

  .image-list {
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
</style>

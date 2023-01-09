<script lang="ts">
  import FormInput from './components/molecules/FormInput.svelte';

  $: arrayOfImage = [];

  const loaded = new Map();
</script>

<div class="main">
  <FormInput bind:arrayOfImage />
  <div class="image-list">
    {#each arrayOfImage as image, i}
      <img height="500" width="340" class="img" src={image.url} alt={'image'} />
    {/each}
  </div>
</div>

<style>
  .main {
    width: 96%;
  }
  .img {
    margin: 12px;
  }
  .image-list {
    margin-top: 12px;
  }
</style>

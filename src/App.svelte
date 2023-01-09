<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import Counter from './lib/Counter.svelte';
  import {postPrompt} from './utils';

  $: inputPromp = '';

  const handleChange = event => {
    inputPromp += event.target.value;
  };

  $: console.log(inputPromp);
</script>

<main>
  <form
    on:submit={() =>
      postPrompt({
        promp: 'Hello',
        n: 2,
        size: '512x512'
      })}
  >
    <input
      bind:value={inputPromp}
      on:change={handleChange}
      placeholder="Masukan Gambar Yang Ingin Anda Buat Disini"
    />
  </form>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>

<script lang="ts">
  import {postPrompt} from '../../utils';
  import InputPromp from '../atoms/InputPromp.svelte';
  export let arrayOfImage;

  $: inputPromp = '';
  $: loading = false;
  $: error = null;

  const handleChange = event => {
    inputPromp = event.target.value;
  };
  const handleSubmit = event => {
    event.preventDefault();
    loading = true;
    arrayOfImage = [];
    error = null;
    postPrompt({
      prompt: inputPromp,
      n: 6,
      size: '256x256'
    })
      .then(res => {
        (loading = false), (arrayOfImage = res?.data?.data);
      })
      .catch(err => {
        loading = false;
        error = err;
        console.log(err);
      })
      .finally(() => {
        loading = false;
      });
  };
</script>

<section>
  <form on:submit={handleSubmit}>
    <InputPromp bind:inputVal={inputPromp} {handleChange} />
  </form>
  {#if loading}
    <p>Loading ...</p>
  {/if}

  {#if error}
    <p class="red-text">{error}</p>
  {/if}
</section>

<style scoped>
  section {
    width: 100%;
  }

  .red-text {
    color: red;
  }
</style>

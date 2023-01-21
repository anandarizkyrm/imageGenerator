<script lang="ts">
  export let inputVal;
  export let handleChange;
</script>

<input
  class="input"
  bind:value={inputVal}
  on:change={handleChange}
  placeholder="Masukan Gambar Yang Ingin Anda Buat Disini"
/>

<style>
  .input {
    padding: 12px;
    box-sizing: border-box;
    border-radius: 24px;
    width: 100%;
    border: 1px solid gray;
  }
</style>

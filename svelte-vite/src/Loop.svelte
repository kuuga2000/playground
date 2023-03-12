<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import Loop from "./walkthrough/components/Loop.svelte";
</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>
  <div class="card">
    <Loop />
  </div>
</main>
<!--<Modal message="Test" isPromo={true} />-->
<!--<Modal
  message="Test"
  {showModal}
  isPromo={true}
  closeModal={toggleModal}
  on:newPersonData={addNewPersonData}
/>-->

<!--<button on:click|once={toggleModal}>Show Modal</button>-->
<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>

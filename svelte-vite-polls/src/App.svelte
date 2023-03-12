<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import Tab from "./components/Tab.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tab activeItem={activeItem} items={items} on:tabChange={tabChange} />
  {#if activeItem === 'Current Polls'}
  sd
  {:else}
  xx
  {/if}
</main>
<Footer />

<style>
</style>

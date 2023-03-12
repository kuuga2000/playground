<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollForm from "./components/PollForm.svelte";
  import Tabs from "./components/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    sd
  {:else}
    <PollForm />
  {/if}
</main>
<Footer />

<style>
</style>

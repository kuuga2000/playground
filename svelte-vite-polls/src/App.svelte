<script lang="ts">
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";
  import PollForm from "./components/PollForm.svelte";
    import PollList from "./components/PollList.svelte";
  import Tabs from "./components/Tabs.svelte";

  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  let polls = [
    {
      id: 1,
      question: 'Python or JavaScript?',
      answerA: 'Python',
      answerB: 'JavaScript',
      votesA: 9,
      votesB: 15,
    },
  ];
  const tabChange = (e) => {
    activeItem = e.detail;
  };
  const handleAdd = (e) => {
    const poll = (e.detail);
    polls = [...polls, poll]
    console.log(polls)
    activeItem = "Current Polls"
  }
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList polls={polls} />
  {:else}
    <PollForm on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
</style>

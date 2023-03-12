<script lang="ts">
  import PersonForm from "./PersonForm.svelte";
  export let showModal = false;
  export let isPromo = false;
  export let message;
  export let closeModal;
</script>
<div>

</div>
{#if showModal}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="backdrop" class:promo={isPromo} on:click|self={closeModal}>
    <button on:click={closeModal}>Close</button>
    <div class="modal">
      <p>Sign up for offers!</p>
      <PersonForm>
        <h3 slot="title">Add New Person</h3>
      </PersonForm>
    </div>
  </div>
{/if}

<style>
  .backdrop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
  }
  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background: white;
  }
  .promo .modal {
    background: crimson;
    color: white;
  }
</style>

<script lang="ts">
    let showModal = true;
    export let isPromo = false;
    export let message;
</script>

{#if showModal}
    <div class="backdrop" class:promo={isPromo}>
        <div class="modal">
            <p>Sign up for offers!</p>
            {message}
        </div>
    </div>
{/if}

<style>
    .backdrop{
      width: 100%;
      height: 100%;
      position: fixed;
      background: rgba(0,0,0,0.8);
      left: 0;
      top: 0;
    }
    .modal{
      padding: 10px;
      border-radius: 10px;
      max-width: 400px;
      margin: 10% auto;;
      text-align: center;
      background: white;
    }
    .promo .modal{
      background: crimson;
      color: white;
    }
  </style>

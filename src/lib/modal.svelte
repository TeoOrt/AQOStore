<script lang="ts">
  export let showModal: any; // boolean

  let dialog: HTMLDialogElement; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation>
    <slot name="header" />
    <hr />
    <slot name="form" />

    <!-- svelte-ignore a11y-autofocus -->
    <button autofocus on:click={() => dialog.close()}>close</button>
  </div>
</dialog>

<style>
  dialog {
    max-width: 55vw;
    background-color: #ffc1cc;
    border-radius: 10px;
    box-shadow: 0 15px 15px #ffc1cc;
    margin: auto auto;
    padding: 40px;
    border: none;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 5em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    font-family: sans-serif;
    background: #03a9f4;
    font-size: 11px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    padding: 10px 15px;
    letter-spacing: 2px;
    outline: none;
    text-transform: uppercase;
    text-decoration: none;
    margin: 25px 1px 2px 35px;
    position: absolute;
    top: 0;
    right: 0;
  }
</style>

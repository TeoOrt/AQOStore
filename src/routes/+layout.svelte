<script lang="ts">
    import "../app.css";
    import Header from "../components/header.svelte"; 

</script>

<Header />

<main>
  <slot />
</main>
  



<style>
  :global(:root) {
    scroll-behavior: smooth;
  }
</style>

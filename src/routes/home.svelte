<script lang="ts">
  // import Header from "../lib/header.svelte";
  import LandingPage from "../lib/landing-page.svelte";
  import Gallerygrid from "../lib/gallerygrid.svelte";
  // import { onMount } from "svelte";
  import GalleryTitle from "../lib/gallery-title.svelte";

  let list :any[]= [];

</script>

<!-- <Header /> -->
<LandingPage />
<GalleryTitle />
<div id="Gallery">
  <Gallerygrid gallery_grid={list} />
</div>


<style>
  :global(:root) {
    scroll-behavior: smooth;
  }
</style>

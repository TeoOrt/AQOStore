<script lang="ts">
  import viteLogo from "/vite.svg";
  import Header from "../lib/header.svelte";
  import LandingPage from "../lib/landing-page.svelte";
  import Gallerygrid from "../lib/gallerygrid.svelte";
  import { onMount } from "svelte";
  import GalleryTitle from "../lib/gallery-title.svelte";

  let list: any[] = [];

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:5000/image-gallery");
      const character = await response.json();
      const objArray = Object.values(character);
      list = [...list, ...objArray];
    } catch (e) {
      console.log("Images could not be found ", e);
    }
  });
</script>

<Header />
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

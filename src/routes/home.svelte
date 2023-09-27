<script lang="ts">
  import viteLogo from "/vite.svg";
  import Header from "../lib/header.svelte";
  import LandingPage from "../lib/landing-page.svelte";
  import Gallerygrid from "../lib/gallerygrid.svelte";
  import type { GalleryItem } from "../types/gallery";
  import { onMount } from "svelte";
  import Modal from "../lib/create_account.svelte";
  import GalleryTitle from "../lib/gallery-title.svelte";

  let list: any[] = [];

  onMount(async () => {
    try {
      const response = await fetch("http://localhost:8000/image-gallery");
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

<Modal />

<style>
  :global(:root) {
    scroll-behavior: smooth;
  }
</style>

<script lang="ts">
  import type { GalleryItem } from "../types/gallery";
  import Gallery from "./gallery.svelte";
  export let gallery_grid: Array<GalleryItem>;
</script>

<div class="Gallery">
  {#each gallery_grid as gallery, i}
    <!-- loop content -->
    <Gallery gallery_item={gallery} />
  {/each}
</div>

<style>
  .Gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
</style>

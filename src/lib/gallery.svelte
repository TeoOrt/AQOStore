<script lang="ts">
  import type { GalleryItem } from "../types/gallery";
  export let gallery_item: GalleryItem;
</script>

{#if gallery_item === undefined}
  <p>...</p>
{:else}
  <div class="StoreItem">
    <img
      src="https://aqo-balloon-gallery.s3.amazonaws.com/{gallery_item.s3_id}"
      alt={gallery_item.title}
    />

    <h2>
      {gallery_item.title}
    </h2>
  </div>
{/if}

<style>
  .StoreItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }

  .StoreItem:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 10px;
    border-radius: 10px;
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
</style>

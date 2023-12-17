<script lang="ts">
  import Counter from "../components/counter.svelte";
import Carousel from "../components/carousel.svelte";
export let data;
</script>

<!-- <Carousel/> -->

{#each data.posts as {content}}
<div>
  {@html content}
</div>
{/each}
<!-- <Counter/> -->


<script lang="ts">
  import Router from "svelte-spa-router";
  import about from "./routes/about.svelte";
  import home from "./routes/home.svelte";
  // adding routes
  const routes = {
    "/Login": about,
    "/": home,
  };
</script>

<Router {routes} />

<main />

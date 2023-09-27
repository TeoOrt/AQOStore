<script lang="ts">
  import Router from "svelte-spa-router";
  import login from "./routes/login.svelte";
  import home from "./routes/home.svelte";
  // adding routes
  const routes = {
    "/Login": login,
    "/": home,
  };
</script>

<Router {routes} />

<main />

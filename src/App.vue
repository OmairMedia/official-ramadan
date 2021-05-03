<template class="flex flex-col">
  <nav-bar />
  <div class="min-h-screen">
    <router-view />
  </div>
  <footer-element />
</template>

<script>
  import navBar from "./components/_navbar";
  import footerElement from "./components/_footer";

  export default {
    components: {
      navBar,
      footerElement,
    },
  };
</script>

<style></style>

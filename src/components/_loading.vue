<template>
  <div
    class="min-w-3xl flex flex-row items-center justify-center p-8 animate-pulse bg-gray-50 shadow-xl rounded-lg h-96"
  >
    <div class="mx-3">
      <div class="w-40 h-40 rounded-xl bg-gray-300"></div>
    </div>
    <div class="mx-3">
      <div class="bar w-60 rounded-md my-3 bg-gray-300 h-8"></div>
      <div class="bar w-3/5 rounded-md my-3 bg-gray-300 h-8"></div>
      <div class="bar w-2/5 rounded-md my-3 bg-gray-300 h-8"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "loading",
  };
</script>

<style></style>

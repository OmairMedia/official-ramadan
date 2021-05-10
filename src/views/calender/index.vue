<template>
  <div class="min-w-full h-40 px-10 py-6">
    <p class="text-4xl font-bold tracking-wide">
      {{ this.$route.name }} Calender
    </p>
  </div>

  <router-view></router-view>
</template>

<script>
  export default {
    name: "calender",

    // computed: {
    //   capitalize(value) {
    //     if (!value) return "";
    //     value = value.toString();
    //     return value.charAt(0).toUpperCase() + value.slice(1);
    //   },
    // },
  };
</script>

<style></style>

<template>
  <div class="p-8">
    <h2 class="text-4xl font-bold tracking-wide">
      Prayer Timings
    </h2>
    <hr class="my-4" />
    <prayer-form class="mt-4" />
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import prayerForm from "../components/prayerTimings/form";
  import axios from "axios";
  export default {
    name: "prayerTimings",
    components: {
      prayerForm,
    },
    computed: {
      ...mapGetters(["getPrayerMethods", "getPrayerTimings", "getCountries"]),
    },
    mounted() {},
    methods: {},
  };
</script>

<style></style>

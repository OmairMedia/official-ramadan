<template>
  <div class="p-8">
    <h2 class="text-4xl font-bold tracking-wide">
      Prayer Timings
    </h2>
    <hr class="my-4" />
    <!-- <prayer-times class="mt-4" /> -->
    <!-- <loading /> -->

    <div class="min-w-full flex flex-row  bg-gray-200 px-8 py-10 min-h-full">
      <!-- Location Form -->
      <div class="max-w-3xl bg-gray-50 shadow-lg p-8 rounded-lg w-2/6">
        <div class="Input-group  my-4">
          <select
            class="w-12/12 px-2 bg-gray-800 text-gray-50 py-3 rounded-lg outline-none"
            name="countries"
            id="countries"
            v-model="country"
            @change="loadStates"
          >
            <option class="" value="0">Select your country</option>
            <option
              class=""
              :value="country.iso2"
              v-for="country in getCountries"
              :key="country.id"
              >{{ country.name }}</option
            >
          </select>
        </div>
        <div class="Input-group  my-4">
          <select
            class="w-12/12 px-2 bg-gray-800 text-gray-50 py-3 rounded-lg outline-none"
            name="states"
            id="states"
            v-model="state"
            @change="loadCities"
          >
            <option class="" value="null">Select your State</option>
            <option
              class=""
              :value="state.iso2"
              v-for="state in statedata"
              :key="state.id"
              >{{ state.name }}</option
            >
          </select>
        </div>
        <div class="Input-group  my-4">
          <select
            class="w-12/12 px-2 bg-gray-800 text-gray-50 py-3 rounded-lg outline-none"
            name="cities"
            id="cities"
            v-model="city"
          >
            <option class="" value="null">Select your City</option>
            <option
              class=""
              :value="city.iso2"
              v-for="city in citydata"
              :key="city.id"
              >{{ city.name }}</option
            >
          </select>
        </div>
      </div>

      <div
        class="max-w-3xl mx-4 bg-gray-50 shadow-lg p-8 rounded-lg w-2/6"
      ></div>

      <div class="max-w-3xl  bg-gray-50 shadow-lg p-8 rounded-lg w-2/6"></div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import loading from "../components/_loading";
  // import { defineAsyncComponent } from "vue";

  // const asyncComponent = defineAsyncComponent({
  //   loader: () => import("../components/prayerTimings/prayerTimes"),
  //   delay: 200,
  //   loadingComponent: loading.vue,
  // });

  // asyncComponent();

  import axios from "axios";
  export default {
    name: "prayerTimings",
    data() {
      return {
        country: 0,
        state: null,
        statedata: [],
        city: null,
        citydata: [],
      };
    },
    components: {
      loading,
    },
    computed: {
      ...mapGetters(["getPrayerMethods", "getPrayerTimings", "getCountries"]),
      // getStates() {
      //   if (this.country !== 0) {
      //     axios
      //       .get(
      //         `https://api.countrystatecity.in/v1/countries/${this.country}/states`
      //       )
      //       .then((response) => {
      //         console.log(response);
      //       })
      //       .catch((err) => console.error(err));
      //   }
      // },
    },
    mounted() {},
    methods: {
      async loadStates() {
        if (this.country !== 0) {
          const response = await axios.get(
            `https://api.countrystatecity.in/v1/countries/${this.country}/states`,
            {
              headers: {
                "X-CSCAPI-KEY":
                  "SVNMZzZWdmpmUmhWV2dHZlhQY3FRM2pqUkk0Ynk5WTBqN21Bcnd4QQ==",
              },
            }
          );

          this.statedata = response.data;
        }
      },
      async loadCities() {
        if (this.country !== 0) {
          const response = await axios.get(
            `https://api.countrystatecity.in/v1/countries/${this.country}/states/${this.state}/cities`,
            {
              headers: {
                "X-CSCAPI-KEY":
                  "SVNMZzZWdmpmUmhWV2dHZlhQY3FRM2pqUkk0Ynk5WTBqN21Bcnd4QQ==",
              },
            }
          );

          this.citydata = response.data;
        }
      },
    },
  };
</script>

<style></style>

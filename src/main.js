import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/font.css";
import "./assets/css/tailwind.css";

// Filters
// App.config.globalProperties.$filters = {
//   capitalize(value) {
//     if (!value) return "";
//     value = value.toString();
//     return value.charAt(0).toUpperCase() + value.slice(1);
//   },
// };

// Prayer Methods And Prayer Timings
import axios from "axios";
// import moment from "moment";

// let today = moment().format("DD-MM-YYYY");

// axios
//   .get(`http://api.aladhan.com/v1/timings/`, {
//     params: {
//       date: today.toString(),
//     },
//   })
//   .then((response) => {
//     console.log(response.data.data);
//   });

// Country State City APi Key

axios
  .get("https://api.countrystatecity.in/v1/countries", {
    headers: {
      "X-CSCAPI-KEY":
        "SVNMZzZWdmpmUmhWV2dHZlhQY3FRM2pqUkk0Ynk5WTBqN21Bcnd4QQ==",
    },
  })
  .then((response) => {
    const countries = response.data;
    store.dispatch("addCountries", countries);
  })
  .catch((err) => console.error(err));

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

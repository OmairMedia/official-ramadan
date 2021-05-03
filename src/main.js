import "@babel/polyfill";
import "mutationobserver-shim";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/font.css";
import "./assets/css/tailwind.css";

// Prayer Methods And Prayer Timings
// import axios from "axios";
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

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");

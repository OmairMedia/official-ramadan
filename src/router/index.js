import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quran from "../views/Quran.vue";
import prayerTimings from "../views/prayerTimings.vue";
import calender from "../views/calender";
import hijri from "../views/calender/hijri.vue";
import gregorian from "../views/calender/gregorian.vue";
import ramadan from "../views/calender/ramadan.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Quran",
    name: "Quran",
    component: Quran,
  },
  {
    path: "/prayer-timings",
    name: "prayerTimings",
    component: prayerTimings,
  },
  {
    path: "/calender",
    name: "calender",
    component: calender,
    children: [
      {
        name: "hijri",
        path: "hijri",
        component: hijri,
      },
      {
        name: "gregorian",
        path: "gregorian",
        component: gregorian,
      },
      {
        name: "ramadan",
        path: "ramadan",
        component: ramadan,
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    prayerMethods: {},
    prayerTimings: {},
    countries: {},
  },
  mutations: {
    setPrayerMethods(state, payload) {
      state.prayerMethods = payload;
    },
    setPrayerTimings(state, payload) {
      state.prayerTimings = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    addPrayerMethods({ commit }, payload) {
      commit("setPrayerMethods", payload);
    },
    addPrayerTimings({ commit }, payload) {
      commit("setPrayerTimings", payload);
    },
    addCountries({ commit }, payload) {
      commit("setCountries", payload);
    },
  },
  getters: {
    getPrayerMethods: (state) => {
      return state.prayerMethods;
    },
    getPrayerTimings: (state) => {
      return state.prayerTimings;
    },
    getCountries: (state) => {
      return state.countries;
    },
  },
  modules: {},
});

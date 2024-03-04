import Vue from "vue";
import Vuex from "vuex";
import { getAllRank } from "@/api";

Vue.use(Vuex);

const mutations = {
  SETALLRANK(state, ranks) {
    state.ranks = ranks;
  },
};

const actions = {};

const getters = {};

const store = new Vuex.Store({
  mutations,
  actions,
  getters,
  state: {
    ranks: [],
  },
});

export default store;

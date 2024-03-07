import Vue from "vue";
import Vuex from "vuex";
import { getAllRank } from "@/api";

Vue.use(Vuex);

const mutations = {
  SETALLRANK(state, ranks) {
    state.ranks = ranks;
  },
  SETHOTALBUM(state, albums) {
    state.hotAlbums = albums;
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
    hotAlbums: [],
  },
});

export default store;

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
  SETHOTSINGER(state, singers) {
    state.hotSingers = singers;
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
    hotSingers: [],
  },
});

export default store;

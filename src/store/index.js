import Vue from "vue";
import Vuex from "vuex";

import CatsModule from "./CatsModule";
import DogsModule from "./DogsModule";

Vue.use(Vuex);

/**
 * State
 */
const state = {};

/**
 * Mutations
 */
const mutations = {};

/**
 * Actions
 */
const actions = {
  init({ dispatch }) {
    dispatch("CatsModule/init");
    dispatch("DogsModule/init");
  }
};

/**
 * Getters
 */
const getters = {};

export default new Vuex.Store({
  modules: { CatsModule, DogsModule },
  state,
  mutations,
  actions,
  getters
});

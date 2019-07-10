import Vue from "vue";
import Vuex from "vuex";

import CatsModule from "./CatsModule";
import DogsModule from "./DogsModule";

Vue.use(Vuex);

const mapModuleName = type => {
  switch (type) {
    case "cat":
    case "cats":
      return "CatsModule";
    case "dog":
    case "dogs":
      return "DogsModule";
    default:
      throw "not implemented exception!";
  }
};

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
  },
  addItem({ dispatch }, { data, type }) {
    dispatch(mapModuleName(type) + "/addItem", data);
  },
  editItem({ dispatch }, { data, type }) {
    dispatch(mapModuleName(type) + "/editItem", data);
  },
  deleteItem({ dispatch }, { data, type }) {
    dispatch(mapModuleName(type) + "/deleteItem", data);
  }
};

/**
 * Getters
 */
const getters = {
  getPetById: state => payload => {
    return state[mapModuleName(payload.type)].items.find(
      item => item.id === payload.id
    );
  }
};

export default new Vuex.Store({
  modules: { CatsModule, DogsModule },
  state,
  mutations,
  actions,
  getters
});

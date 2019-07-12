import Vue from "vue";
import Vuex from "vuex";

import CatsModule from "./CatsModule";
import DogsModule from "./DogsModule";

Vue.use(Vuex);

const mapModuleName = type => {
  switch (type) {
    case "cats":
      return "CatsModule";
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
  async init({ dispatch }) {
    await Promise.all([
      dispatch("CatsModule/init"),
      dispatch("DogsModule/init")
    ]);
  },
  async addItem({ dispatch }, { petData, petType }) {
    await dispatch(mapModuleName(petType) + "/addItem", petData);
  },
  async editItem({ dispatch }, { petData, petType }) {
    await dispatch(mapModuleName(petType) + "/editItem", petData);
  },
  async deleteItem({ dispatch }, { petData, petType }) {
    await dispatch(mapModuleName(petType) + "/deleteItem", petData);
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

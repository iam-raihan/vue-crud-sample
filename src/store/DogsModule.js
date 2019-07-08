import * as shared from "./shared";
import { DogsController } from "../controllers";

const controller = new DogsController();

/**
 * State
 */
const state = {
  ...shared.state
};

/**
 * Mutations
 */
const mutations = {
  ...shared.mutations
};

/**
 * Actions
 */
const actions = {
  ...shared.actions(controller)
};

/**
 * Getters
 */
const getters = {
  ...shared.getters
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

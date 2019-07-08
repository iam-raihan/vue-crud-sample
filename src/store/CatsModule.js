import * as shared from "./shared";
import { CatsController } from "../controllers";

const controller = new CatsController();

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

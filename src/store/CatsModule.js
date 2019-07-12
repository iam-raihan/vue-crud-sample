import * as shared from "./shared";
import { ApiController } from "../controllers/ApiController";

const controller = new ApiController("cats");

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

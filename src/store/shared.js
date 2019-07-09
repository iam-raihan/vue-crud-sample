/**
 * State
 */
export const state = {
  items: []
};

/**
 * Mutations
 */
export const mutations = {
  setItems(state, payload) {
    state.items = payload;
  }
};

/**
 * Actions
 */
export const actions = controller => {
  return {
    init({ dispatch }) {
      dispatch("fetchItems");
    },
    fetchItems({ commit }) {
      const items = controller.getAll();
      commit("setItems", items);
    }
  };
};

/**
 * Getters
 */
export const getters = {
  getCount(state) {
    return state.items.length;
  }
};

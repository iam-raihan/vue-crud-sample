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
  SET_ITEMS(state, payload) {
    state.items = payload;
  },
  ADD_ITEM(state, payload) {
    state.items.push(payload);
  },
  EDIT_ITEM(state, payload) {
    const index = state.items.findIndex(item => item.id === payload.id);
    if (index !== -1) state.items.splice(index, 1, payload);
  },
  DELETE_ITEM(state, payload) {
    const index = state.items.findIndex(item => item.id === payload.id);
    if (index !== -1) state.items.splice(index, 1);
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
      commit("SET_ITEMS", items);
    },
    addItem({ commit }, data) {
      const item = controller.addNew(data);
      commit("ADD_ITEM", item);
    },
    editItem({ commit }, data) {
      const item = controller.update(data);
      commit("EDIT_ITEM", item);
    },
    deleteItem({ commit }, data) {
      const item = controller.delete(data);
      commit("DELETE_ITEM", item);
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

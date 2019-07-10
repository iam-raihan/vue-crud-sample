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
  },
  addItem(state, payload) {
    state.items.push(payload);
  },
  editItem(state, payload) {
    const index = state.items.findIndex(item => item.id === payload.id);
    if (index !== -1) state.items[index] = payload;
  },
  deleteItem(state, payload) {
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
      commit("setItems", items);
    },
    addItem({ commit }, data) {
      const item = controller.addNew(data);
      commit("addItem", item);
    },
    editItem({ commit }, data) {
      const item = controller.update(data);
      commit("editItem", item);
    },
    deleteItem({ commit }, data) {
      const item = controller.delete(data);
      commit("deleteItem", item);
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

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
    async init({ dispatch }) {
      await dispatch("fetchItems");
    },
    async fetchItems({ commit }) {
      const items = await controller.getAll();
      commit("SET_ITEMS", items);
    },
    async addItem({ commit }, data) {
      const item = await controller.addNew(data);
      commit("ADD_ITEM", item);
    },
    async editItem({ commit }, data) {
      const item = await controller.update(data);
      commit("EDIT_ITEM", item);
    },
    async deleteItem({ commit }, data) {
      await controller.delete(data);
      commit("DELETE_ITEM", data);
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

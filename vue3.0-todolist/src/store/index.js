import { createStore } from 'vuex'

export default createStore({
  state: {
    list: []
  },
  getters: {
  },
  mutations: {
    addTodo(state, payload) {
      state.list.push(payload)
    },

    delTodo(state, payload) {
      state.list.splice(payload, 1)
    }
  },
  actions: {
  },
  modules: {
  }
})

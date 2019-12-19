import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1
  },
  getters: {
    changeCount (state) {
      return state.count + 1
    }
  },
  mutations: {
    add (state) {
      state.count = state.count + 1
    },
    reduce (state, n) {
      state.count = state.count - n
    }
  },
  actions: {
    addCount (context) {
      context.commit('add')
    },
    reduceCount (context, n) {
      context.commit('reduce', n)
    }
  }
})
export default store

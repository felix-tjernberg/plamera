import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage,
})

export default new Vuex.Store({
  state: {
    someArray: []
  },
  mutations: {
    initArray(state) {
      state.someArray = [1, 2, 3]
    },
    addNumber(state, number) {
      state.someArray.push(Number(number))
    },
    resetStorage(state) {
      state.someArray = []
    },
  },
  actions: {
  },
  plugins: [vuexLocalStorage.plugin]
})

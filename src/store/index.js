import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    someArray: [],
    someString: []
  },
  mutations: {
    initArray(state) {
      state.someArray = [1, 2, 3]
    },
    addTask(state, string) {
      state.someString.push(String(string))
    },
    addString(state, number) {
      state.someArray.push(String(number))
    },
    resetStorage(state) {
      state.someArray = []
      state.someString = []
    }
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

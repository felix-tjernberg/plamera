import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

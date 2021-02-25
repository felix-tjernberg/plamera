import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import { v4 as uuidv4, v4 } from 'uuid'

Vue.use(Vuex, v4, uuidv4)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    listObjects: {},
    taskObjects: {}
  },

  mutations: {
    addList(state, payload) {
      const uuid = String(uuidv4())
      Vue.set(state.listObjects, uuid, {
        title: payload.title,
        url: '/list/' + payload.title + '/' + uuid,
        theme: payload.theme
      })
    },

    addTask(state, payload) {
      const uuid = String(uuidv4())
      Vue.set(state.taskObjects, uuid, {
        title: payload.title,
        listId: payload.listId,
        color: payload.color,
        completed: false,
        important: false
        /*dueDate: payload.dueDate */
      })
    },

    completeTask(state, payload) {
      state.taskObjects[payload.taskId].completed = !state.taskObjects[
        payload.taskId
      ].completed
    },

    emphasizeTask(state, payload) {
      state.taskObjects[payload.taskId].important = !state.taskObjects[
        payload.taskId
      ].important
    },

    editList(state, payload) {
      Object.assign(state.listObjects[payload.listId], {
        title: payload.title,
        theme: payload.theme
      })
    },

    editTask(state, payload) {
      Object.assign(state.taskObjects[payload.taskId], {
        title: payload.title,
        color: payload.color
      })
    },

    removeTask(state, payload) {
      Vue.delete(state.taskObjects, payload.taskId)
    },

    removeList(state, payload) {
      Vue.delete(state.listObjects, payload.listId)
      const filteredTaskObjects = Object.entries(state.taskObjects).filter(
        taskObject => taskObject[1].listId === payload.listId
      )
      for (
        let iteration = 0;
        iteration < filteredTaskObjects.length;
        iteration++
      ) {
        Vue.delete(state.taskObjects, filteredTaskObjects[iteration][0])
      }
    },

    /* Maybe: changeDueDate, changeParentList */

    resetStorage(state) {
      state.listObjects = {}
      state.taskObjects = {}
    }
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

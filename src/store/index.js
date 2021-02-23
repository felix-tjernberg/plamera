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

    removeTask(state, payload) {
      Vue.delete(state.taskObjects, payload.taskId)
    },

    /*TODO  editTask, Maybe: changeDueDate, changeParentList */

    //editTask   Object.assign(state.taskObject{taskId/uuid}, {title: payload.title, color, })
    //state.taskObject{uuid} = {title, color, listId}

    resetStorage(state) {
      state.listObjects = {}
      state.taskObjects = {}
    }
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

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
    listArray: [],
    taskArray: [],
    testFind: []
  },

  mutations: {
    addList(state, payload /* theme, icon */) {
      const uuid = uuidv4()

      state.listArray.push({ title: payload, uuid: uuid /*theme icon */ })
    },

    addTask(state, payload) {
      const uuid = uuidv4()

      state.taskArray.push({
        title: payload.title,
        uuid: uuid,
        listId: payload.listId /* '838648b4-8fc1-4c26-a46d-2c96794dab8d' */,
        important: false,
        completed: false
        /* color: 
        dueDate: */
      })
    },

    completeTask(state, payload) {
      const taskIndex = state.taskArray.findIndex(
        task => task.uuid === payload.taskId
      )
      const taskObject = state.taskArray.find(
        task => task.uuid === payload.taskId
      )
      taskObject.completed = !taskObject.completed

      state.taskArray[taskIndex] = taskObject
    },

    emphasizeTask(state, payload) {
      const taskIndex = state.taskArray.findIndex(
        task => task.uuid === payload.taskId
      )
      const taskObject = state.taskArray.find(
        task => task.uuid === payload.taskId
      )
      taskObject.important = !taskObject.important

      state.taskArray[taskIndex] = taskObject
    },

    /*TODO changeTaskName, changeTaskColor, changeDueDate, changeParentList */

    resetStorage(state) {
      state.listArray = []
      state.taskArray = []
    }
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

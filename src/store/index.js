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
    taskArray: []
  },

  mutations: {
    addList(state, payload /* theme, url, maybe:icon */) {
      const uuid = uuidv4()

      state.listArray.push({
        title: payload,
        uuid: uuid /*theme, url: '/list/' + payload.title + '/' + uuid */
      })
    },

    addTask(state, payload) {
      const uuid = uuidv4()
      //state.taskObject{uuid} = {title, color, listId}

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
      // state.taskArray{uuid}.completed = !taskObject.completed
      // state.taskArray{uuid}.color = payLoad.color
      // state.taskArray{uuid}.edit = payLoad.edit
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

    /*TODO  changeTaskColor, Maybe:openTaskEditOverlay changeDueDate, changeParentList */
    //changeTaskName: Object.assign(state.taskObject{taskId/uuid}, {title: payload.title, color, })

    resetStorage(state) {
      state.listArray = []
      state.taskArray = []
    }
  },
  actions: {},
  plugins: [vuexLocalStorage.plugin]
})

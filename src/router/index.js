import Vue from 'vue'
import VueRouter from 'vue-router'

import CalendarView from '../views/CalendarView'
import ListOverview from '../views/ListOverview.vue'
import ListView from '../views/ListView'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import TestArea from '../views/TestArea.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListOverview',
    component: ListOverview
  },
  {
    path: '/calendar',
    name: 'CalendarView',
    component: CalendarView
  },
  {
    path: '/list/:listName/:listId',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/testarea',
    name: 'TestArea',
    component: TestArea
  },
  {
    path: '/testarea/:listName/:listId',
    name: 'TestAreaList',
    component: TestArea
  },
  {
    path: '/important',
    name: 'Important',
    component: ListView
  },
  {
    path: '/completed',
    name: 'Completed',
    component: ListView
  }
]

const router = new VueRouter({
  routes
})

export default router

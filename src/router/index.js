import Vue from 'vue'
import VueRouter from 'vue-router'

import Calendar from '../views/Calendar'
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
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/list/:listName',
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
  }
]

const router = new VueRouter({
  routes
})

export default router

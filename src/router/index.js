import Vue from 'vue'
import VueRouter from 'vue-router'
import ListOverview from '../views/ListOverview.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import TestArea from '../views/TestArea.vue'
import ListView from '../views/ListView'
import Calendar from '../views/Calendar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListOverview',
    component: ListOverview
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
    path: '/calendar',
    name: 'Calendar',
    component: Calendar
  },
  {
    path: '/testarea',
    name: 'TestArea',
    component: TestArea
  },
  {
    path: '/list/:listName',
    name: 'ListView',
    component: ListView
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListOverview from '@/components/ListOverview.vue'
import ListOverviewempty from '@/components/ListOverviewempty.vue'
=======

import CalendarView from '../views/CalendarView'
import ListOverview from '../views/ListOverview.vue'
import ListView from '../views/ListView'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import TestArea from '../views/TestArea.vue'
>>>>>>> main

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
<<<<<<< HEAD
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/listoverview',
    name: 'Listoverview',
    component:ListOverview
  },
  {
    path: '/listoverviewempty',
    name: 'Listoverviewempty',
    component:ListOverviewempty
=======
    path: '/testarea',
    name: 'TestArea',
    component: TestArea
>>>>>>> main
  }
]

const router = new VueRouter({
  routes
})

export default router

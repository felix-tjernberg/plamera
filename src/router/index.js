import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ListOverview from '@/components/ListOverview.vue'
import ListOverviewempty from '@/components/ListOverviewempty.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
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
  }
]

const router = new VueRouter({
  routes
})

export default router

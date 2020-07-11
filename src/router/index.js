import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Players from '@/views/Players';
import Clubs from '@/views/Clubs';
import Nations from '@/views/Nations';

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nations',
    name: 'Nations',
    component: Nations
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: Clubs
  },
  {
    path: '/players',
    name: 'Players',
    component: Players
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router

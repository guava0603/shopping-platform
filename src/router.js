// 忽略這個

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue')
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('./views/Check.vue')
    }
  ]
})

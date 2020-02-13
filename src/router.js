import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const ML = () => {
  return import ('./views/ML.vue')
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/front',
      name: 'front',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Front.vue')
    },
    {
      path: '/back',
      name: 'back',
      component: () => import('./views/Back.vue')
    },
    {
      path: '/ml',
      name: 'ml',
      component: ML
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('./views/Store.vue')
    }
    
  ]
})

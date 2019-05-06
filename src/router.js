import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import main from './views/main.vue'
import za from './views/za.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'main',
      component: main

    },
    {
      path: '/za',
      name: 'za',
      component: za

    }
  ]
})

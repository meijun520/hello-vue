import Vue from 'vue'
import Router from 'vue-router'
import li2 from './views/demo2/li2.vue'
import lll from './views/demo2/list.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/todolist',
      name: 'todolist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "todolist" */ './views/todolist.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/demo2/login.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import(/* webpackChunkName: "add" */ './views/demo2/add.vue')
    },
    {
      path: '/li2',
      name: 'li2',
      component: li2,
      children: [{
        path: 'list',
        name: 'list',
        component: lll
      },
      {
        path: 'user',
        name: 'user',
        component: () => import(/* webpackChunkName: "user" */ './views/demo2/user.vue')
      },
      {
        path: 'detail',
        name: 'detail',
        component: () => import(/* webpackChunkName: "detail" */ './views/demo2/detail.vue')
      }

      ] }

  ]
})

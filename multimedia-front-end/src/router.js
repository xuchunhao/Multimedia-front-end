import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect:'/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/navbar',
      name: 'navbar',
      component: () => import('@/views/navbar.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home.vue')
    }
  ]
})

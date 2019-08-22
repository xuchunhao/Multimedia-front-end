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
    },{
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },{
      path: '/register',
      name: 'register',
      component: () => import('@/views/register.vue')
    },{
      path: '/default',
      name: 'default',
      component: () => import('@/views/default.vue'),
      children:[{
        path: '/introduce',
        name: 'introduce',
        component: () => import('@/components/introduce.vue')
      },{
        path: '/technology',
        name: 'technology',
        component: () => import('@/components/technology.vue')
      },{
        path: '/source',
        name: 'source',
        component: () => import('@/components/source.vue')
      },{
        path: '/inherit',
        name: 'inherit',
        component: () => import('@/components/inherit.vue')
      }]
    }
    
  ]
})

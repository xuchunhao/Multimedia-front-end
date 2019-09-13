import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      },{
        path: '/vr',
        name: 'vr',
        component: () => import('@/components/vr.vue')
      },{
        path: '/bbs',
        name: 'bbs',
        component: () => import('@/components/bbs.vue'),
      },{
        path: '/wangediter',
        name: 'wangediter',
        component: () => import('@/components/wangediter.vue'),
      },{
        path:'/s/:name',
        name:'article',
        component: () => import('@/components/bbs/articleList.vue')
      },{
        path: '/login',
        name: 'login',
        component: () => import('@/components/login.vue')
      },{
        path: '/register',
        name: 'register',
        component: () => import('@/components/register.vue')
      },{
        path: '/personal',
        name: 'personal',
        component: () => import('@/components/personal.vue')
      }]
    }
    // {
    //   path:'/s/:name',
    //   name:'article',
    //   component: () => import('@/components/bbs/articleList.vue')
    // }
  ]
})

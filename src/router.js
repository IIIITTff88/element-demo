import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/login')
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'user',
          component: () => import('./views/user/user')
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      meta: {
        title: '菜单1',
        icon: '111'
      },
      children: [
        {
          path: 'test1-1',
          component: () => import('./views/test1/1')
        },
        {
          path: 'test1-2',
          component: () => import('./views/test1/2')
        },
        {
          path: 'test1-3',
          component: () => import('./views/test1/3')
        },
        {
          path: 'test1-4',
          component: () => import('./views/test1/4')
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      meta: {
        title: '菜单1',
        icon: '111'
      },
      children: [
        {
          path: 'test2-1',
          component: () => import('./views/test2/1')
        },
        {
          path: 'test2-2',
          component: () => import('./views/test2/2')
        },
        {
          path: 'test2-3',
          component: () => import('./views/test2/3')
        },
        {
          path: 'test2-4',
          component: () => import('./views/test2/4')
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      meta: {
        title: '菜单3',
        icon: '111'
      },
      children: [
        {
          path: 'test3-1',
          component: () => import('./views/test3/1')
        },
        {
          path: 'test3-2',
          component: () => import('./views/test3/2')
        },
        {
          path: 'test3-3',
          component: () => import('./views/test3/3')
        },
        {
          path: 'test3-4',
          component: () => import('./views/test3/4')
        }
      ]
    }
  ]
})

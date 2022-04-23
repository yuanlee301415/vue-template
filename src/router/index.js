import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

const routes = [
  { // Home
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: '',
        meta: {
          title: 'Home'
        },
        component: () => import('@/views/home')
      }
    ]
  }
]

Vue.use(Router)

export { routes }

export default new Router({
  routes
})

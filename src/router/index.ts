import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layouts',
    component: () => import('@/views/layouts/index.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/tabBar/home/index.vue'),
        meta: { title: '首页', keepAlive: false, showTab: true }
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/tabBar/about/index.vue'),
        meta: { title: '关于我', keepAlive: false, showTab: true }
      }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test/index.vue'),
    meta: { title: 'test', keepAlive: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || '川航'
  next()
})

export default router

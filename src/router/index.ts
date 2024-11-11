import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Insights',
      component: () => import('../views/InsightsView.vue'),
    },
    {
      path: '/runs',
      name: 'runs',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RunsView.vue'),
    },
    {
      path: '/run/:id',
      name: 'run',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RunView.vue'),
      props: true,
    },
  ],
})

export default router

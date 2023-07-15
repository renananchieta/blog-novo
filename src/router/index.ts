// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '',
        name: 'Posts',
        component: () => import('@/views/PostView.vue'),
      },
      {
        path: 'sobre',
        name: 'sobre o autor',
        component: () => import('@/views/SobreOAutor.vue'),
      },
      {
        path: 'faça-uma-postagem',
        name: 'FaçaUmaPostagem',
        component: () => import('@/views/FaçaUmaPostagem.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path:'/nosotros',
      name:'nosotros',
      component: () => import('../views/UsView.vue')
    },
    {
      path:'/register',
      name:'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path:'/contacto',
      name:'contacto',
      component: () => import('../views/ContactView.vue')
    },
    {
      path:'/ayuda',
      name:'ayuda',
      component: () => import('../views/HelpView.vue')
    },{
      path:'/blog',
      name:'blog',
      component: () => import('../views/BlogView.vue')
    },
  ],
})

export default router

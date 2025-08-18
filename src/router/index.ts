import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: () => import('../views/UsView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/ContactView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/ayuda',
      name: 'ayuda',
      component: () => import('../views/HelpView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/termsAndPrivacy',
      name: 'termsAndPrivacy',
      component: () => import('../views/TermsView.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/successfullyRegistered',
      name: 'successfullyRegistered',
      component: () => import('../views/SuccesfullyRegistered.vue'),
      meta: {
        requiresAuth: false,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router

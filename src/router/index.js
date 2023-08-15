import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/users/register',

    name: 'register',
    component: () => import('../components/SingUp.vue')
  },
  {
    path: '/users/login',
    name: 'login',
    component: () => import('../components/LoginUser.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/login1',
    name: 'login1',
    component: () => import('../components/LogIn.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
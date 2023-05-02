import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfParameters from '../views/ConfParameters.vue'


const routes = [
  
  {
    path: '/',
    name: 'LoginDeep',
    component: () => import('../views/LoginDeep.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../views/ForgotPassword.vue')
  },

  {
    path: '/config',
    name: 'ConfParameters',
    component: () => import('../views/ConfParameters.vue'),
    children:[
        {
        path: '/home',
        name: 'HomeView',
        component: HomeView
        }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

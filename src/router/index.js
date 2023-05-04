import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModoTele from '../views/ModoTele.vue'
import ModoAuto from '../views/ModoAuto.vue'
import ModoProgramado from '../views/ModoProgramado.vue'
import ModoEjecucion from '../views/ModoEjecucion.vue'
import ManualAyuda from '../views/ManualAyuda.vue'
import AppContenido from '../views/AppContenido.vue'


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
    component: () => import('../views/AppContenido.vue'),
    children:[
        {
        path: '/home',
        name: 'HomeView',
        component: HomeView
        },

        {
        path: '/teleoperado',
        name: 'ModoTele',
        component: ModoTele
        },

        {
        path: '/autonomo',
        name: 'ModoAuto',
        component: ModoAuto
        },

        {
        path: '/programado',
        name: 'ModoProgramado',
        component: ModoProgramado
        },

        {
        path: '/ejecucion',
        name: 'ModoEjecucion',
        component: ModoEjecucion
        },

        {
        path: '/manualayuda',
        name: 'ManualAyuda',
        component: ManualAyuda
        }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router

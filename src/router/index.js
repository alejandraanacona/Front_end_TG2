import { createRouter, createWebHistory } from 'vue-router'
import ConfigParameters from '../views/ConfigParameters.vue'
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
    path:'/dashboard',
    component: () => import('../views/AppContenido.vue'),
    children:[
        {
        path: '/config',
        name: 'ConfigParameters',
        component: ConfigParameters
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

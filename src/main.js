import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import cors from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-free'

createApp(App).use(router).mount('#app')



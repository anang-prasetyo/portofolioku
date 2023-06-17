import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './bootstrap/css/bootstrap.css'
import './bootstrap/font/bootstrap-icons.css'
import './assets/main.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

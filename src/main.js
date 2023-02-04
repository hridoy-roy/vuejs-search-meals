import { createApp } from 'vue'
import routes from './router'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(routes)
    .mount('#app')

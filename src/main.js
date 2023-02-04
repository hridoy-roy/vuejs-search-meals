import { createApp } from 'vue'
import routes from './router'
import store from "./store";
import './style.css'
import App from './App.vue'

createApp(App)
    .use(routes)
    .use(store)
    .mount('#app')

import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())  // ← Register Pinia
app.use(router)
app.mount('#app')
createApp(App).use(router).mount('#app')
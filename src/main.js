import '@fortawesome/fontawesome-free/css/all.min.css'
import './style.css';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/responsive.css'
import './assets/css/footer.css'
import './assets/css/wishdon.css'
import './assets/css/home-3-style.css'
import './assets/css/animate.css'
import './assets/css/lightcase.css'
import './assets/css/simple-line-icons.css'
import './assets/css/ElegantIcons.css'
import './assets/css/font-awesome.min.css'

const app = createApp(App)
app.use(createPinia())  // Register Pinia
app.use(router)
app.mount('#app')

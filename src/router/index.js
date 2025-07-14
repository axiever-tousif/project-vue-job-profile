import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddJob }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

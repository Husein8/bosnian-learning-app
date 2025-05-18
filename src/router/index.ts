// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/pages/Homepage.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

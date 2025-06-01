import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/pages/Homepage.vue";
import LoginPage from '../views/pages/LogInpage.vue'

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/login", name: "Login", component: LoginPage }, // Add this line
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/pages/Homepage.vue";
import LoginPage from "../views/pages/LoginPage.vue";
import RegisterPage from "../views/pages/RegisterPage.vue";
import GamePage from "../views/pages/GamePage.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/login", name: "Login", component: LoginPage }, // Add this line
  { path: "/register", name: "Register", component: RegisterPage }, // Add this line
  { path: "/games", name: "Games", component: GamePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

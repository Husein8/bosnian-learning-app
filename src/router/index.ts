import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/landing-pages/Homepage.vue";
import LoginPage from "../views/landing-pages/LoginPage.vue";
import RegisterPage from "../views/landing-pages/RegisterPage.vue";
import CoursesHomepage from "../views/courses-pages/CoursesHomepage.vue";
import BosnianLanguage from "../views/courses-pages/BosnianLanguage.vue";
import Geography from "../views/courses-pages/Geography.vue";
import CultureTradition from "../views/courses-pages/CultureTradition.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/login", name: "Login", component: LoginPage }, // Add this line
  { path: "/register", name: "Register", component: RegisterPage }, // Add this line
  { path: "/courses", name: "Courses", component: CoursesHomepage },

  // courses pages -> bosnian language, geography and culture
  { path: "/language", name: "BosnianLanguage", component: BosnianLanguage },
  { path: "/geography", name: "Geography", component: Geography },
  { path: "/culture", name: "Culture", component: CultureTradition },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

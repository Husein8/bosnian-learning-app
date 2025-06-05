import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase/supabase"; // adjust path if needed

import Homepage from "../views/landing-pages/Homepage.vue";
import LoginPage from "../views/landing-pages/LoginPage.vue";
import RegisterPage from "../views/landing-pages/RegisterPage.vue";
import CoursesHomepage from "../views/courses-pages/CoursesHomepage.vue";
import BosnianLanguage from "../views/courses-pages/BosnianLanguage.vue";
import Geography from "../views/courses-pages/Geography.vue";
import CultureTradition from "../views/courses-pages/CultureTradition.vue";
import AboutUsPage from "../components/AboutUsPage.vue";
import ContactUsPage from "../components/ContactUsPage.vue";

const routes = [
  { path: "/", name: "Home", component: Homepage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },

  // Protected routes
  {
    path: "/courses",
    name: "Courses",
    component: CoursesHomepage,
    meta: { requiresAuth: true },
  },
  {
    path: "/language",
    name: "BosnianLanguage",
    component: BosnianLanguage,
    meta: { requiresAuth: true },
  },
  {
    path: "/geography",
    name: "Geography",
    component: Geography,
    meta: { requiresAuth: true },
  },
  {
    path: "/culture",
    name: "Culture",
    component: CultureTradition,
    meta: { requiresAuth: true },
  },

  // Public pages
  { path: "/about", name: "About", component: AboutUsPage },
  { path: "/contact", name: "Contact", component: ContactUsPage },

  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../views/landing-pages/ForgotPasswordPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error || !user) {
      // Redirect to login, pass original path to redirect after login
      return next({ name: "Login", query: { redirect: to.fullPath } });
    }
  }
  next();
});

export default router;

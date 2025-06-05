// stores/authStore.ts
import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "../supabase/supabase";
import { useRouter, useRoute } from "vue-router";
import type { User } from "@supabase/supabase-js";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const loading = ref(false);
  const errorMessage = ref("");
  const router = useRouter();
  const route = useRoute();

  const login = async (email: string, password: string) => {
    errorMessage.value = "";
    loading.value = true;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    loading.value = false;

    if (error) {
      errorMessage.value = error.message;
      return false;
    }

    user.value = data.user;

    // Redirect to original intended page or fallback
    const redirectTo = (route.query.redirect as string) || "/";
    router.push(redirectTo);
    return true;
  };

  const register = async (email: string, password: string) => {
    errorMessage.value = "";
    loading.value = true;

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/verify-email`,
      },
    });

    loading.value = false;

    if (error) {
      errorMessage.value = error.message;
      return false;
    }

    // Don't push to any page — email verification required
    return true;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      user.value = null;
      router.push("/login");
    }
  };

  const forgotPassword = async (email: string) => {
    errorMessage.value = "";
    loading.value = true;

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    loading.value = false;

    if (error) {
      errorMessage.value = error.message;
      return false;
    }

    return true;
  };

  const fetchUser = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (!error) {
      user.value = data.user;
    }
  };

  return {
    user,
    loading,
    errorMessage,
    login,
    register,
    logout,
    forgotPassword,
    fetchUser,
  };
});

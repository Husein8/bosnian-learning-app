import { supabase } from "../supabase/supabase";
import { useRouter } from "vue-router";

export function useLogout() {
  const router = useRouter();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return { logout };
}

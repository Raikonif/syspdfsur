import supabase from "~/service/supabase/supabase.service";
import { HOME } from "~/constants";

const supabaseAuth = async (email: string) => {
  return await supabase.auth.signInWithOtp({
    email: email,
    options: {
      emailRedirectTo: `${"https://syspdfsur.vercel.app/"}adm/cases`,
    },
  });
};

export { supabaseAuth };

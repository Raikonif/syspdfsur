import supabase from "~/service/supabase/supabase.service";
import { HOME } from "~/constants";

const supabaseAuth = async (email: string) => {
  return await supabase.auth.signInWithOtp({
    email: email,
    options: {
      shouldCreateUser: false,
    },
  });
};

const supabaseVerifyCodeOTP = async (email: string, token: string) => {
  return await supabase.auth.verifyOtp({
    email,
    token: token,
    type: "email",
  });
};

export { supabaseAuth, supabaseVerifyCodeOTP };

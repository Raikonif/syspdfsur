import { createClient } from "@supabase/supabase-js";
import {
  VITE_SUPABASE_ANON_KEY,
  VITE_SUPABASE_PROJECT_URL,
} from "~/service/supabase/supabase.constants";

const supabase = createClient(VITE_SUPABASE_PROJECT_URL, VITE_SUPABASE_ANON_KEY);

export default supabase;

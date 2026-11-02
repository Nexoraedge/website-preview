import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://bgzkpbeeypydmmufuoho.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_vLYf5GH34-aBwZ-cEsBIQA_rzuwRYej";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


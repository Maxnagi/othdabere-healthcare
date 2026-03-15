import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // Disable URL-based session detection so Supabase never redirects
    // public pages when it finds an auth token/code in the URL.
    // Login uses signInWithPassword (no URL token needed).
    detectSessionInUrl: false,
    persistSession: true,
    autoRefreshToken: true,
  },
})

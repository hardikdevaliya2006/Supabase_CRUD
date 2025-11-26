import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabasePassKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const suapabase = createClient(supabaseUrl, supabasePassKey)

export default suapabase
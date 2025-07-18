import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anon_key = import.meta.env.VITE_SUPABASE_ANON_KEY
if (!url || !anon_key) throw new Error('You must add the API keys for the Database.')

export const client = createClient(url, anon_key)

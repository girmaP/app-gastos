import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://iqgzmfbyxexibcphxlii.supabase.co"
const supabaseKey = "sb_publishable_S8kYeaUNf1RSh4QWqz4EbQ_Zth99vQ5"

export const supabase = createClient(supabaseUrl, supabaseKey)

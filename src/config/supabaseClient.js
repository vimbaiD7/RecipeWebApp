const { createClient } = require('@supabase/supabase-js')
require('dotenv').config()

const supabase_url = process.env.SUPABASE_URL
const supabase_key = process.env.API_KEY

const supabase = createClient(supabase_url, supabase_key)

module.exports = { supabase } 




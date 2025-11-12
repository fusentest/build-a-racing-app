import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wrktvxpbexyuitsidnmc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indya3R2eHBiZXh5dWl0c2lkbm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2MjI5ODIsImV4cCI6MjAzMTIwODk4Mn0.v7_f_w_339o_u3a5i2Y2q1r_j2I6iTfWq8P_u3-2aEE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

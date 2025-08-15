import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface LandingInterest {
  id?: string
  email: string
  created_at?: string
  source?: string
  ip_address?: string
  user_agent?: string
  referrer?: string
}

export async function registerInterest(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('landing_interest')
      .insert([
        {
          email,
          source: 'coldai.uk',
          user_agent: navigator.userAgent,
          referrer: document.referrer || null,
        },
      ])

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'This email is already registered' }
      }
      throw error
    }

    return { success: true }
  } catch (error) {
    console.error('Error registering interest:', error)
    return { success: false, error: 'Failed to register interest. Please try again.' }
  }
}
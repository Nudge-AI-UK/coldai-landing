import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''
const n8nWebhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || ''

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

async function sendToN8nWorkflow(data: {
  email: string
  source: string
  user_agent: string
  referrer: string | null
  timestamp: string
}) {
  if (!n8nWebhookUrl) {
    console.warn('N8N webhook URL not configured')
    return { success: true } // Don't fail if n8n is not configured
  }

  try {
    const response = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        event: 'landing_interest_signup',
        environment: import.meta.env.MODE || 'development'
      }),
    })

    if (!response.ok) {
      console.error('N8N webhook failed:', response.status, response.statusText)
      // Don't throw - we still want to save to Supabase even if n8n fails
    }

    return { success: true }
  } catch (error) {
    console.error('Error sending to n8n workflow:', error)
    // Don't throw - we still want to save to Supabase even if n8n fails
    return { success: false, error }
  }
}

export async function registerInterest(email: string): Promise<{ success: boolean; error?: string }> {
  try {
    // Prepare data for both Supabase and n8n
    const registrationData = {
      email,
      source: 'coldai.uk',
      user_agent: navigator.userAgent,
      referrer: document.referrer || null,
    }

    // First, insert into Supabase
    const { data, error } = await supabase
      .from('landing_interest')
      .insert([registrationData])
      .select()
      .single()

    if (error) {
      if (error.code === '23505') {
        return { success: false, error: 'This email is already registered' }
      }
      throw error
    }

    // Then send to n8n workflow (non-blocking)
    // We don't await this to avoid delaying the user experience
    sendToN8nWorkflow({
      ...registrationData,
      timestamp: data?.created_at || new Date().toISOString()
    }).catch(err => {
      console.error('N8N workflow error (non-blocking):', err)
    })

    return { success: true }
  } catch (error) {
    console.error('Error registering interest:', error)
    return { success: false, error: 'Failed to register interest. Please try again.' }
  }
}
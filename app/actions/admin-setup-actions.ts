'use server'

import { createClient } from '@/lib/supabase/server'

export async function createAdminUser(
  email: string,
  password: string,
  setupKey: string
) {
  // Verify setup key for security
  if (setupKey !== process.env.ADMIN_SETUP_KEY) {
    return { error: 'Invalid setup key' }
  }

  const supabase = await createClient()

  try {
    // Create the user with admin role in metadata
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: 'Primax Admin',
        role: 'admin',
      },
    })

    if (authError) {
      return { error: authError.message }
    }

    // The trigger should create the profile automatically, but let's ensure it exists
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user.id,
          email: authData.user.email,
          full_name: 'Primax Admin',
          role: 'admin',
        })

      if (profileError) {
        console.error('Profile creation error:', profileError)
      }
    }

    return { success: true, userId: authData.user?.id }
  } catch (error) {
    return { error: String(error) }
  }
}

import "@supabase/functions-js/edge-runtime.d.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    )

    const { name, email, project_type, budget, message, source } = await req.json()

    // Validate required fields
    if (!name || !email || !project_type || !message) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields: name, email, project_type, message',
          success: false 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Insert into database
    const { data, error } = await supabaseClient
      .from('contact_submissions')
      .insert([
        {
          name,
          email,
          project_type,
          budget: budget || null,
          message,
          source: source || 'services-landing'
        }
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    console.log('Contact form submitted:', { name, email, project_type })

    // Optional: Send email notification here
    // You can integrate with Resend, SendGrid, etc.
    // Example:
    // await sendEmailNotification({ name, email, project_type, message })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully',
        data 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
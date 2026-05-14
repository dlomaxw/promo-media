"use server"

import { createClient } from "@/lib/supabase/server"
import { calculateQuotePrice } from "@/lib/pricing-calculator"

export async function createQuoteRequest(formData: FormData) {
  try {
    const supabase = await createClient()
    
    const serviceType = formData.get("serviceType") as string
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string
    const projectDescription = formData.get("projectDescription") as string
    const budget = formData.get("budget") as string
    const timeline = formData.get("timeline") as string
    const location = formData.get("location") as string

    // Parse options and additional services
    const options: Record<string, string> = {}
    const additionalServices: string[] = []

    // Extract options from form data
    for (const [key, value] of formData.entries()) {
      if (key.startsWith("option_")) {
        const optionKey = key.replace("option_", "")
        options[optionKey] = value as string
      } else if (key.startsWith("service_") && value === "on") {
        additionalServices.push(key.replace("service_", ""))
      }
    }

    // Calculate estimated price
    const pricing = calculateQuotePrice(serviceType, options, additionalServices)

    // Get current user if logged in
    const { data: { user } } = await supabase.auth.getUser()

    const { data: quote, error } = await supabase
      .from("quotes")
      .insert({
        user_id: user?.id || null,
        name,
        email,
        phone,
        company,
        service_type: serviceType,
        project_description: projectDescription,
        budget,
        timeline,
        location,
        additional_services: additionalServices,
        estimated_price: pricing.totalPrice,
        status: "pending",
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating quote:", error)
      return { success: false, error: "Failed to create quote request" }
    }

    return { success: true, quote, pricing }
  } catch (error) {
    console.error("Error creating quote request:", error)
    return { success: false, error: "Failed to create quote request" }
  }
}

export async function getAllQuotes() {
  try {
    const supabase = await createClient()
    
    const { data: quotes, error } = await supabase
      .from("quotes")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching quotes:", error)
      return { success: false, error: "Failed to fetch quotes" }
    }

    return { success: true, quotes }
  } catch (error) {
    return { success: false, error: "Failed to fetch quotes" }
  }
}

export async function getQuotesByEmail(email: string) {
  try {
    const supabase = await createClient()
    
    const { data: quotes, error } = await supabase
      .from("quotes")
      .select("*")
      .eq("email", email)
      .order("created_at", { ascending: false })

    if (error) {
      return { success: false, error: "Failed to fetch quotes" }
    }

    return { success: true, quotes }
  } catch (error) {
    return { success: false, error: "Failed to fetch quotes" }
  }
}

export async function updateQuoteStatus(quoteId: string, status: string, adminNotes?: string) {
  try {
    const supabase = await createClient()
    
    const { data: quote, error } = await supabase
      .from("quotes")
      .update({ 
        status, 
        admin_notes: adminNotes,
        updated_at: new Date().toISOString()
      })
      .eq("id", quoteId)
      .select()
      .single()

    if (error) {
      return { success: false, error: "Failed to update quote" }
    }

    return { success: true, quote }
  } catch (error) {
    return { success: false, error: "Failed to update quote" }
  }
}

export async function createProjectFromQuote(quoteId: string, userId: string) {
  try {
    const supabase = await createClient()
    
    // Get the quote
    const { data: quote, error: quoteError } = await supabase
      .from("quotes")
      .select("*")
      .eq("id", quoteId)
      .single()

    if (quoteError || !quote) {
      return { success: false, error: "Quote not found" }
    }

    // Create project
    const { data: project, error: projectError } = await supabase
      .from("projects")
      .insert({
        user_id: userId,
        quote_id: quoteId,
        title: `${quote.service_type} Project - ${quote.name}`,
        description: quote.project_description,
        service_type: quote.service_type,
        status: "pending",
        total_amount: quote.estimated_price,
      })
      .select()
      .single()

    if (projectError) {
      return { success: false, error: "Failed to create project" }
    }

    // Update quote status
    await supabase
      .from("quotes")
      .update({ status: "approved" })
      .eq("id", quoteId)

    return { success: true, project }
  } catch (error) {
    return { success: false, error: "Failed to create project" }
  }
}

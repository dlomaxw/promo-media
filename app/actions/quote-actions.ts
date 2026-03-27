"use server"

import { quoteStore } from "@/lib/data-store"
import { calculateQuotePrice } from "@/lib/pricing-calculator"
import type { QuoteRequest } from "@/lib/types"

export async function createQuoteRequest(formData: FormData) {
  try {
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

    const quote = quoteStore.create({
      name,
      email,
      phone,
      company,
      serviceType,
      projectDescription,
      budget,
      timeline,
      location,
      estimatedPrice: pricing.totalPrice,
      status: "pending",
    })

    return { success: true, quote, pricing }
  } catch (error) {
    console.error("Error creating quote request:", error)
    return { success: false, error: "Failed to create quote request" }
  }
}

export async function getAllQuotes() {
  try {
    const quotes = quoteStore.getAll()
    return { success: true, quotes }
  } catch (error) {
    return { success: false, error: "Failed to fetch quotes" }
  }
}

export async function updateQuoteStatus(quoteId: string, status: QuoteRequest["status"], adminNotes?: string) {
  try {
    const quote = quoteStore.update(quoteId, { status, adminNotes })
    if (!quote) {
      return { success: false, error: "Quote not found" }
    }
    return { success: true, quote }
  } catch (error) {
    return { success: false, error: "Failed to update quote" }
  }
}

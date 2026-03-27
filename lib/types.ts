export interface QuoteRequest {
  id: string
  userId?: string
  name: string
  email: string
  phone: string
  company: string
  serviceType: string
  projectDescription: string
  budget: string
  timeline: string
  location: string
  estimatedPrice: number
  status: "pending" | "reviewed" | "quoted" | "approved" | "rejected"
  createdAt: Date
  updatedAt: Date
  adminNotes?: string
}

export interface User {
  id: string
  username: string
  email: string
  name: string
  role: "client" | "admin"
  createdAt: Date
  phone?: string
  company?: string
}

export interface PricingCalculation {
  serviceType: string
  basePrice: number
  additionalServices: { name: string; price: number }[]
  totalPrice: number
  factors: { name: string; multiplier: number }[]
}

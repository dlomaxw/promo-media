import type { PricingCalculation } from "./types"

export const servicePricing = {
  "outdoor-advertising": {
    basePrice: 2000000, // 2M UGX
    name: "Outdoor Advertising",
    factors: {
      size: { small: 1, medium: 1.5, large: 2.5, extra_large: 4 },
      location: { rural: 1, suburban: 1.3, urban: 1.8, premium: 2.5 },
      duration: { "1-month": 1, "3-months": 0.9, "6-months": 0.8, "12-months": 0.7 },
    },
  },
  "building-branding": {
    basePrice: 5000000, // 5M UGX
    name: "Building Branding",
    factors: {
      size: { small: 1, medium: 1.8, large: 3, extra_large: 5 },
      complexity: { simple: 1, moderate: 1.5, complex: 2.2 },
      materials: { standard: 1, premium: 1.6, luxury: 2.4 },
    },
  },
  "service-station": {
    basePrice: 15000000, // 15M UGX
    name: "Service Station Setup",
    factors: {
      type: { basic: 1, standard: 1.5, premium: 2.5 },
      services: { fuel_only: 1, with_shop: 1.4, full_service: 2 },
      equipment: { basic: 1, advanced: 1.8, premium: 2.5 },
    },
  },
  "school-signage": {
    basePrice: 800000, // 800K UGX
    name: "School Signage",
    factors: {
      quantity: { single: 1, multiple: 0.8, bulk: 0.6 },
      features: { basic: 1, with_payment: 1.3, digital: 1.8 },
      installation: { simple: 1, complex: 1.4 },
    },
  },
  "technical-installation": {
    basePrice: 1500000, // 1.5M UGX
    name: "Technical Installation",
    factors: {
      type: { dstv: 1, safety_systems: 1.5, custom: 2 },
      quantity: { single: 1, multiple: 0.9, bulk: 0.7 },
      complexity: { simple: 1, moderate: 1.4, complex: 2 },
    },
  },
  "event-activation": {
    basePrice: 3000000, // 3M UGX
    name: "Event Activation",
    factors: {
      scale: { small: 1, medium: 1.8, large: 3, mega: 5 },
      duration: { single_day: 1, weekend: 1.5, week: 2.5 },
      services: { basic: 1, standard: 1.4, premium: 2 },
    },
  },
}

export function calculateQuotePrice(
  serviceType: string,
  options: Record<string, string>,
  additionalServices: string[] = [],
): PricingCalculation {
  const service = servicePricing[serviceType as keyof typeof servicePricing]
  if (!service) {
    throw new Error("Invalid service type")
  }

  let totalPrice = service.basePrice
  const factors: { name: string; multiplier: number }[] = []

  // Apply factors based on options
  Object.entries(options).forEach(([factorType, value]) => {
    const factor = service.factors[factorType as keyof typeof service.factors]
    if (factor && factor[value as keyof typeof factor]) {
      const multiplier = factor[value as keyof typeof factor] as number
      totalPrice *= multiplier
      factors.push({ name: `${factorType}: ${value}`, multiplier })
    }
  })

  // Add additional services
  const additionalServicesList: { name: string; price: number }[] = []
  const additionalServicePrices = {
    "design-consultation": 500000,
    "project-management": 800000,
    "maintenance-1year": 1200000,
    "rush-delivery": 1000000,
    "weekend-installation": 600000,
    training: 400000,
  }

  additionalServices.forEach((service) => {
    const price = additionalServicePrices[service as keyof typeof additionalServicePrices]
    if (price) {
      totalPrice += price
      additionalServicesList.push({ name: service.replace("-", " "), price })
    }
  })

  return {
    serviceType: service.name,
    basePrice: service.basePrice,
    additionalServices: additionalServicesList,
    totalPrice: Math.round(totalPrice),
    factors,
  }
}

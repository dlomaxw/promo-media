"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calculator, DollarSign } from "lucide-react"
import { calculateQuotePrice } from "@/lib/pricing-calculator"
import type { PricingCalculation } from "@/lib/types"

export function QuoteCalculator() {
  const [serviceType, setServiceType] = useState("")
  const [options, setOptions] = useState<Record<string, string>>({})
  const [additionalServices, setAdditionalServices] = useState<string[]>([])
  const [calculation, setCalculation] = useState<PricingCalculation | null>(null)
  const [error, setError] = useState("")

  const serviceOptions = {
    "outdoor-advertising": {
      name: "Outdoor Advertising",
      options: {
        size: ["small", "medium", "large", "extra_large"],
        location: ["rural", "suburban", "urban", "premium"],
        duration: ["1-month", "3-months", "6-months", "12-months"],
      },
    },
    "building-branding": {
      name: "Building Branding",
      options: {
        size: ["small", "medium", "large", "extra_large"],
        complexity: ["simple", "moderate", "complex"],
        materials: ["standard", "premium", "luxury"],
      },
    },
    "service-station": {
      name: "Service Station Setup",
      options: {
        type: ["basic", "standard", "premium"],
        services: ["fuel_only", "with_shop", "full_service"],
        equipment: ["basic", "advanced", "premium"],
      },
    },
    "school-signage": {
      name: "School Signage",
      options: {
        quantity: ["single", "multiple", "bulk"],
        features: ["basic", "with_payment", "digital"],
        installation: ["simple", "complex"],
      },
    },
    "technical-installation": {
      name: "Technical Installation",
      options: {
        type: ["dstv", "safety_systems", "custom"],
        quantity: ["single", "multiple", "bulk"],
        complexity: ["simple", "moderate", "complex"],
      },
    },
    "event-activation": {
      name: "Event Activation",
      options: {
        scale: ["small", "medium", "large", "mega"],
        duration: ["single_day", "weekend", "week"],
        services: ["basic", "standard", "premium"],
      },
    },
  }

  const additionalServiceOptions = [
    { id: "design-consultation", name: "Design Consultation", price: 500000 },
    { id: "project-management", name: "Project Management", price: 800000 },
    { id: "maintenance-1year", name: "1 Year Maintenance", price: 1200000 },
    { id: "rush-delivery", name: "Rush Delivery", price: 1000000 },
    { id: "weekend-installation", name: "Weekend Installation", price: 600000 },
    { id: "training", name: "Staff Training", price: 400000 },
  ]

  const handleCalculate = () => {
    try {
      setError("")
      if (!serviceType) {
        setError("Please select a service type")
        return
      }

      const result = calculateQuotePrice(serviceType, options, additionalServices)
      setCalculation(result)
    } catch (err) {
      setError("Error calculating price. Please check your selections.")
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary">
          <Calculator className="mr-2" />
          Quote Calculator
        </CardTitle>
        <p className="text-gray-600">Get an instant estimate for your project</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label htmlFor="service-type">Service Type *</Label>
          <Select onValueChange={setServiceType}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(serviceOptions).map(([key, service]) => (
                <SelectItem key={key} value={key}>
                  {service.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {serviceType && (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Project Options</h3>
              {Object.entries(serviceOptions[serviceType as keyof typeof serviceOptions].options).map(
                ([optionKey, values]) => (
                  <div key={optionKey}>
                    <Label>{optionKey.charAt(0).toUpperCase() + optionKey.slice(1)}</Label>
                    <Select onValueChange={(value) => setOptions((prev) => ({ ...prev, [optionKey]: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder={`Select ${optionKey}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {values.map((value) => (
                          <SelectItem key={value} value={value}>
                            {value.replace("_", " ").replace("-", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ),
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Additional Services</h3>
              {additionalServiceOptions.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={additionalServices.includes(service.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setAdditionalServices((prev) => [...prev, service.id])
                      } else {
                        setAdditionalServices((prev) => prev.filter((s) => s !== service.id))
                      }
                    }}
                  />
                  <Label htmlFor={service.id} className="flex-1">
                    {service.name}
                  </Label>
                  <span className="text-sm text-gray-500">{formatPrice(service.price)}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center">
          <Button onClick={handleCalculate} className="bg-secondary hover:bg-secondary/90 text-white">
            <DollarSign className="mr-2 h-4 w-4" />
            Calculate Quote
          </Button>
        </div>

        {error && <div className="text-red-600 text-center">{error}</div>}

        {calculation && (
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Estimated Quote</h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Base Price ({calculation.serviceType}):</span>
                  <span className="font-semibold">{formatPrice(calculation.basePrice)}</span>
                </div>

                {calculation.factors.map((factor, index) => (
                  <div key={index} className="flex justify-between text-sm text-gray-600">
                    <span>{factor.name}:</span>
                    <span>×{factor.multiplier}</span>
                  </div>
                ))}

                {calculation.additionalServices.map((service, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{service.name}:</span>
                    <span>+{formatPrice(service.price)}</span>
                  </div>
                ))}

                <hr className="border-primary/20" />

                <div className="flex justify-between text-xl font-bold text-primary">
                  <span>Total Estimated Price:</span>
                  <span>{formatPrice(calculation.totalPrice)}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 mt-4">
                * This is an estimated price. Final pricing may vary based on specific requirements and site conditions.
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  )
}

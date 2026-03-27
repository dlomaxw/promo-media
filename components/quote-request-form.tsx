"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"
import { createQuoteRequest } from "@/app/actions/quote-actions"

export function QuoteRequestForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    try {
      const result = await createQuoteRequest(formData)
      if (result.success) {
        setIsSubmitted(true)
        setEstimatedPrice(result.pricing?.totalPrice || null)
      }
    } catch (error) {
      console.error("Error submitting quote request:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Quote Request Submitted!</h3>
          <p className="text-gray-700 mb-4">
            Thank you for your interest. We'll review your request and get back to you within 24 hours.
          </p>
          {estimatedPrice && (
            <div className="bg-primary/5 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-600">Estimated Project Value:</p>
              <p className="text-2xl font-bold text-primary">
                {new Intl.NumberFormat("en-UG", {
                  style: "currency",
                  currency: "UGX",
                  minimumFractionDigits: 0,
                }).format(estimatedPrice)}
              </p>
            </div>
          )}
          <Button onClick={() => setIsSubmitted(false)} className="bg-secondary hover:bg-secondary/90 text-white">
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Request a Quote</CardTitle>
        <p className="text-gray-600">Tell us about your project and get a detailed quote</p>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required placeholder="Your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" name="email" type="email" required placeholder="your@email.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" name="phone" required placeholder="+256 XXX XXX XXX" />
            </div>
            <div>
              <Label htmlFor="company">Company/Organization</Label>
              <Input id="company" name="company" placeholder="Your company name" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="serviceType">Service Type *</Label>
              <Select name="serviceType" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="outdoor-advertising">Outdoor Advertising</SelectItem>
                  <SelectItem value="building-branding">Building Branding</SelectItem>
                  <SelectItem value="service-station">Service Station Setup</SelectItem>
                  <SelectItem value="school-signage">School Signage</SelectItem>
                  <SelectItem value="technical-installation">Technical Installation</SelectItem>
                  <SelectItem value="event-activation">Event Activation</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="budget">Budget Range</Label>
              <Select name="budget">
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-2m">Under 2M UGX</SelectItem>
                  <SelectItem value="2m-5m">2M - 5M UGX</SelectItem>
                  <SelectItem value="5m-10m">5M - 10M UGX</SelectItem>
                  <SelectItem value="10m-25m">10M - 25M UGX</SelectItem>
                  <SelectItem value="over-25m">Over 25M UGX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="timeline">Project Timeline</Label>
              <Select name="timeline">
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                  <SelectItem value="1-month">Within 1 month</SelectItem>
                  <SelectItem value="2-3-months">2-3 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="location">Project Location</Label>
              <Input id="location" name="location" placeholder="City, District, Uganda" />
            </div>
          </div>

          <div>
            <Label htmlFor="projectDescription">Project Description *</Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              required
              placeholder="Please describe your project in detail, including size, location, specific requirements, and any other relevant information..."
              rows={4}
            />
          </div>

          <div>
            <Label className="text-base font-semibold">Additional Services</Label>
            <div className="grid md:grid-cols-2 gap-2 mt-2">
              {[
                { id: "design-consultation", name: "Design Consultation" },
                { id: "project-management", name: "Project Management" },
                { id: "maintenance-1year", name: "1 Year Maintenance" },
                { id: "rush-delivery", name: "Rush Delivery" },
                { id: "weekend-installation", name: "Weekend Installation" },
                { id: "training", name: "Staff Training" },
              ].map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox id={service.id} name={`service_${service.id}`} />
                  <Label htmlFor={service.id}>{service.name}</Label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-secondary hover:bg-secondary/90 text-white">
            <Send className="w-4 h-4 mr-2" />
            {isLoading ? "Submitting..." : "Submit Quote Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

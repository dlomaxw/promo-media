"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-gray-700 mb-4">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-secondary hover:bg-secondary/90 text-white">
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-primary text-center">Get Your Free Consultation</CardTitle>
        <p className="text-gray-600 text-center">
          Tell us about your project and we'll create a custom proposal for you.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <Input
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+256 XXX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company/Organization</label>
              <Input
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
              <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3d-cinema">3D Cinematic Experience</SelectItem>
                  <SelectItem value="school-activation">School Activations</SelectItem>
                  <SelectItem value="corporate-events">Corporate Events</SelectItem>
                  <SelectItem value="branding">Branding & Marketing</SelectItem>
                  <SelectItem value="university">University Activations</SelectItem>
                  <SelectItem value="community">Community Activations</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <Select onValueChange={(value) => handleInputChange("budget", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-5m">Under 5M UGX</SelectItem>
                  <SelectItem value="5m-10m">5M - 10M UGX</SelectItem>
                  <SelectItem value="10m-25m">10M - 25M UGX</SelectItem>
                  <SelectItem value="25m-50m">25M - 50M UGX</SelectItem>
                  <SelectItem value="over-50m">Over 50M UGX</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              placeholder="Tell us about your project, target audience, timeline, and any specific requirements..."
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
            />
            <label htmlFor="newsletter" className="text-sm text-gray-700">
              Subscribe to our newsletter for marketing insights and event updates
            </label>
          </div>

          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

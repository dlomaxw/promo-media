"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserPlus, CheckCircle } from "lucide-react"
import { createUser } from "@/app/actions/user-actions"

export function UserRegistration() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true)
    setError("")

    try {
      const result = await createUser(formData)
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error || "Failed to create account")
      }
    } catch (error) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-2">Account Created!</h3>
          <p className="text-gray-700 mb-4">
            Your account has been successfully created. You can now submit quote requests and track your projects.
          </p>
          <Button onClick={() => setIsSubmitted(false)} className="bg-secondary hover:bg-secondary/90 text-white">
            Continue
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl text-primary">
          <UserPlus className="mr-2" />
          Create Account
        </CardTitle>
        <p className="text-gray-600">Join Primax to manage your projects</p>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">Username *</Label>
            <Input id="username" name="username" required placeholder="Choose a username" />
          </div>

          <div>
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required placeholder="your@email.com" />
          </div>

          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input id="name" name="name" required placeholder="Your full name" />
          </div>

          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" placeholder="+256 XXX XXX XXX" />
          </div>

          <div>
            <Label htmlFor="company">Company/Organization</Label>
            <Input id="company" name="company" placeholder="Your company name" />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <Button type="submit" disabled={isLoading} className="w-full bg-secondary hover:bg-secondary/90 text-white">
            {isLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

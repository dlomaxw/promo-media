"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createClient } from "@/lib/supabase/client"
import { Shield, CheckCircle } from "lucide-react"

export default function AdminSetupPage() {
  const router = useRouter()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const fullName = formData.get("fullName") as string
    const setupKey = formData.get("setupKey") as string

    // Simple setup key validation (in production, use environment variable)
    if (setupKey !== "PRIMAX_ADMIN_2024") {
      setError("Invalid setup key")
      setIsLoading(false)
      return
    }

    const supabase = createClient()

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: 'admin'
        },
      },
    })

    if (signUpError) {
      setError(signUpError.message)
      setIsLoading(false)
      return
    }

    // Update the profile to be admin
    if (data.user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .update({ role: "admin", full_name: fullName })
        .eq("id", data.user.id)

      if (profileError) {
        console.error("Profile update error:", profileError)
      }
    }

    setSuccess(true)
    setIsLoading(false)
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#255498" }}>
        <Card className="w-full max-w-md bg-white">
          <CardContent className="p-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2">Admin Account Created!</h3>
            <p className="text-gray-700 mb-6">
              Please check your email to confirm your account. Once confirmed, you can sign in to the admin dashboard.
            </p>
            <Button 
              onClick={() => router.push("/auth/login")}
              className="bg-secondary hover:bg-secondary/90 text-white"
            >
              Go to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: "#255498" }}>
      <Card className="w-full max-w-md bg-white">
        <CardHeader className="text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-2" />
          <CardTitle className="text-2xl font-bold text-primary">Admin Setup</CardTitle>
          <CardDescription>Create the first admin account for Primax</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="setupKey">Setup Key *</Label>
              <Input
                id="setupKey"
                name="setupKey"
                type="password"
                required
                placeholder="Enter the setup key"
              />
              <p className="text-xs text-gray-500 mt-1">Contact system administrator for the setup key</p>
            </div>
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                name="fullName"
                required
                placeholder="Admin full name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="admin@primax.co.ug"
              />
            </div>
            <div>
              <Label htmlFor="password">Password *</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="At least 6 characters"
              />
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-secondary hover:bg-secondary/90 text-white"
            >
              <Shield className="w-4 h-4 mr-2" />
              {isLoading ? "Creating Admin..." : "Create Admin Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

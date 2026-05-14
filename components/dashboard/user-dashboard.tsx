"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  LayoutDashboard, 
  FileText, 
  FolderKanban,
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  User,
  Plus,
  Home
} from "lucide-react"
import { signOut, updateProfile } from "@/app/actions/auth-actions"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface Quote {
  id: string
  name: string
  email: string
  phone: string
  company: string | null
  service_type: string
  project_description: string
  budget: string | null
  timeline: string | null
  location: string | null
  estimated_price: number
  status: string
  admin_notes: string | null
  created_at: string
}

interface Profile {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  company: string | null
  role: string
  created_at: string
}

interface Project {
  id: string
  user_id: string
  quote_id: string | null
  title: string
  description: string | null
  service_type: string
  status: string
  total_amount: number
  paid_amount: number
  start_date: string | null
  end_date: string | null
  created_at: string
}

interface UserDashboardProps {
  user: SupabaseUser
  profile: Profile | null
  quotes: Quote[]
  projects: Project[]
}

export function UserDashboard({ user, profile, quotes, projects }: UserDashboardProps) {
  const router = useRouter()
  const [isUpdating, setIsUpdating] = useState(false)
  const [updateSuccess, setUpdateSuccess] = useState(false)

  const stats = {
    totalQuotes: quotes.length,
    pendingQuotes: quotes.filter(q => q.status === "pending").length,
    approvedQuotes: quotes.filter(q => q.status === "approved").length,
    totalProjects: projects.length,
    activeProjects: projects.filter(p => p.status === "in_progress").length,
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-UG", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: <Clock className="w-3 h-3" /> },
      reviewed: { color: "bg-blue-100 text-blue-800", icon: <AlertCircle className="w-3 h-3" /> },
      quoted: { color: "bg-purple-100 text-purple-800", icon: <FileText className="w-3 h-3" /> },
      approved: { color: "bg-green-100 text-green-800", icon: <CheckCircle className="w-3 h-3" /> },
      rejected: { color: "bg-red-100 text-red-800", icon: <XCircle className="w-3 h-3" /> },
      completed: { color: "bg-gray-100 text-gray-800", icon: <CheckCircle className="w-3 h-3" /> },
      in_progress: { color: "bg-blue-100 text-blue-800", icon: <AlertCircle className="w-3 h-3" /> },
    }
    const config = statusConfig[status] || statusConfig.pending
    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        {config.icon}
        {status.replace("_", " ")}
      </Badge>
    )
  }

  const handleUpdateProfile = async (formData: FormData) => {
    setIsUpdating(true)
    setUpdateSuccess(false)
    const result = await updateProfile(formData)
    if (result.success) {
      setUpdateSuccess(true)
      router.refresh()
    }
    setIsUpdating(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">My Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome, {profile?.full_name || user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/">
              <Button variant="outline">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
            <Button variant="outline" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">My Quotes</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalQuotes}</p>
                </div>
                <FileText className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.pendingQuotes}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Approved</p>
                  <p className="text-2xl font-bold text-green-600">{stats.approvedQuotes}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">My Projects</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalProjects}</p>
                </div>
                <FolderKanban className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.activeProjects}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Action */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-primary/80 text-white">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Ready to start a new project?</h2>
              <p className="text-white/80">Request a quote for your next advertising campaign</p>
            </div>
            <Link href="/quote">
              <Button className="bg-secondary hover:bg-secondary/90 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Quote Request
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="quotes" className="space-y-4">
          <TabsList className="bg-white">
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              My Quotes
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderKanban className="w-4 h-4" />
              My Projects
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          {/* Quotes Tab */}
          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <CardTitle>My Quote Requests</CardTitle>
                <CardDescription>Track the status of your quote requests</CardDescription>
              </CardHeader>
              <CardContent>
                {quotes.length === 0 ? (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 mb-4">You haven&apos;t submitted any quote requests yet</p>
                    <Link href="/quote">
                      <Button className="bg-secondary hover:bg-secondary/90 text-white">
                        <Plus className="w-4 h-4 mr-2" />
                        Request a Quote
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {quotes.map((quote) => (
                      <div
                        key={quote.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-primary">
                                {quote.service_type.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
                              </h3>
                              {getStatusBadge(quote.status)}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                              {quote.project_description}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span>Estimate: {formatPrice(quote.estimated_price)}</span>
                              <span>Submitted: {formatDate(quote.created_at)}</span>
                            </div>
                            {quote.admin_notes && (
                              <div className="mt-2 p-2 bg-blue-50 rounded text-sm">
                                <strong>Admin Note:</strong> {quote.admin_notes}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>My Projects</CardTitle>
                <CardDescription>Track your active and completed projects</CardDescription>
              </CardHeader>
              <CardContent>
                {projects.length === 0 ? (
                  <div className="text-center py-8">
                    <FolderKanban className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No projects yet. Submit a quote request to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-primary">{project.title}</h3>
                              {getStatusBadge(project.status)}
                            </div>
                            {project.description && (
                              <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                                {project.description}
                              </p>
                            )}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                              <div>
                                <span className="text-gray-500">Service:</span>{" "}
                                <span className="font-medium">{project.service_type.replace("-", " ")}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Total:</span>{" "}
                                <span className="font-medium text-green-600">{formatPrice(project.total_amount)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Paid:</span>{" "}
                                <span className="font-medium">{formatPrice(project.paid_amount)}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Started:</span>{" "}
                                <span className="font-medium">{formatDate(project.created_at)}</span>
                              </div>
                            </div>
                            {/* Progress bar */}
                            <div className="mt-3">
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-500">Payment Progress</span>
                                <span className="font-medium">
                                  {project.total_amount > 0 
                                    ? Math.round((project.paid_amount / project.total_amount) * 100) 
                                    : 0}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-green-500 h-2 rounded-full transition-all"
                                  style={{ 
                                    width: `${project.total_amount > 0 
                                      ? Math.min((project.paid_amount / project.total_amount) * 100, 100) 
                                      : 0}%` 
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <form action={handleUpdateProfile} className="space-y-4 max-w-md">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email || ""}
                      disabled
                      className="bg-gray-100"
                    />
                    <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                  </div>
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      defaultValue={profile?.full_name || ""}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      defaultValue={profile?.phone || ""}
                      placeholder="+256 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      defaultValue={profile?.company || ""}
                      placeholder="Your company name"
                    />
                  </div>

                  {updateSuccess && (
                    <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Profile updated successfully!
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isUpdating}
                    className="bg-secondary hover:bg-secondary/90 text-white"
                  >
                    {isUpdating ? "Saving..." : "Save Changes"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

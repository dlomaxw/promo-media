"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  FolderKanban,
  LogOut,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye
} from "lucide-react"
import { signOut } from "@/app/actions/auth-actions"
import { updateQuoteStatus, createProjectFromQuote } from "@/app/actions/quote-actions"
import type { User } from "@supabase/supabase-js"

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
  created_at: string
}

interface AdminDashboardProps {
  quotes: Quote[]
  users: Profile[]
  projects: Project[]
  currentUser: User
}

export function AdminDashboard({ quotes, users, projects, currentUser }: AdminDashboardProps) {
  const router = useRouter()
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)

  const stats = {
    totalQuotes: quotes.length,
    pendingQuotes: quotes.filter(q => q.status === "pending").length,
    totalUsers: users.length,
    totalProjects: projects.length,
    totalRevenue: projects.reduce((sum, p) => sum + (p.total_amount || 0), 0),
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
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { color: string; icon: React.ReactNode }> = {
      pending: { color: "bg-yellow-100 text-yellow-800", icon: <Clock className="w-3 h-3" /> },
      reviewed: { color: "bg-blue-100 text-blue-800", icon: <Eye className="w-3 h-3" /> },
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

  const handleStatusUpdate = async (quoteId: string, newStatus: string, notes?: string) => {
    setIsUpdating(true)
    await updateQuoteStatus(quoteId, newStatus, notes)
    router.refresh()
    setIsUpdating(false)
    setSelectedQuote(null)
  }

  const handleCreateProject = async (quote: Quote) => {
    // Find user by email
    const user = users.find(u => u.email === quote.email)
    if (user) {
      await createProjectFromQuote(quote.id, user.id)
      router.refresh()
    }
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
              <h1 className="text-xl font-bold text-primary">Primax Admin</h1>
              <p className="text-sm text-gray-600">Welcome, {currentUser.email}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Quotes</p>
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
                  <p className="text-sm text-gray-600">Users</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalUsers}</p>
                </div>
                <Users className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Projects</p>
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
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="text-lg font-bold text-green-600">{formatPrice(stats.totalRevenue)}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="quotes" className="space-y-4">
          <TabsList className="bg-white">
            <TabsTrigger value="quotes" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Quote Requests
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <FolderKanban className="w-4 h-4" />
              Projects
            </TabsTrigger>
          </TabsList>

          {/* Quotes Tab */}
          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <CardTitle>Quote Requests</CardTitle>
              </CardHeader>
              <CardContent>
                {quotes.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No quote requests yet</p>
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
                              <h3 className="font-semibold text-primary">{quote.name}</h3>
                              {getStatusBadge(quote.status)}
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
                              <p>Email: {quote.email}</p>
                              <p>Phone: {quote.phone}</p>
                              <p>Service: {quote.service_type.replace("-", " ")}</p>
                              <p>Estimate: {formatPrice(quote.estimated_price)}</p>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                              Submitted: {formatDate(quote.created_at)}
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedQuote(quote)}
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Registered Users</CardTitle>
              </CardHeader>
              <CardContent>
                {users.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No users registered yet</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 text-gray-600">Name</th>
                          <th className="text-left p-3 text-gray-600">Email</th>
                          <th className="text-left p-3 text-gray-600">Phone</th>
                          <th className="text-left p-3 text-gray-600">Company</th>
                          <th className="text-left p-3 text-gray-600">Role</th>
                          <th className="text-left p-3 text-gray-600">Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id} className="border-b hover:bg-gray-50">
                            <td className="p-3 font-medium">{user.full_name || "N/A"}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">{user.phone || "N/A"}</td>
                            <td className="p-3">{user.company || "N/A"}</td>
                            <td className="p-3">
                              <Badge className={user.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-gray-100 text-gray-800"}>
                                {user.role}
                              </Badge>
                            </td>
                            <td className="p-3 text-sm text-gray-500">
                              {formatDate(user.created_at)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                {projects.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No projects yet</p>
                ) : (
                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-primary">{project.title}</h3>
                              {getStatusBadge(project.status)}
                            </div>
                            <p className="text-sm text-gray-600">
                              Service: {project.service_type.replace("-", " ")}
                            </p>
                            <p className="text-sm text-gray-600">
                              Amount: {formatPrice(project.total_amount)}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {formatDate(project.created_at)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Quote Detail Modal */}
        {selectedQuote && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Quote Details</span>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedQuote(null)}>
                    <XCircle className="w-5 h-5" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{selectedQuote.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{selectedQuote.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium">{selectedQuote.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium">{selectedQuote.company || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Service Type</p>
                    <p className="font-medium">{selectedQuote.service_type.replace("-", " ")}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Estimated Price</p>
                    <p className="font-medium text-green-600">{formatPrice(selectedQuote.estimated_price)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="font-medium">{selectedQuote.budget || "Not specified"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Timeline</p>
                    <p className="font-medium">{selectedQuote.timeline || "Not specified"}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Project Description</p>
                  <p className="font-medium">{selectedQuote.project_description}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Update Status</p>
                  <Select
                    defaultValue={selectedQuote.status}
                    onValueChange={(value) => handleStatusUpdate(selectedQuote.id, value)}
                    disabled={isUpdating}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reviewed">Reviewed</SelectItem>
                      <SelectItem value="quoted">Quoted</SelectItem>
                      <SelectItem value="approved">Approved</SelectItem>
                      <SelectItem value="rejected">Rejected</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Admin Notes</p>
                  <Textarea
                    defaultValue={selectedQuote.admin_notes || ""}
                    placeholder="Add notes about this quote..."
                    className="mb-2"
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => handleCreateProject(selectedQuote)}
                    disabled={selectedQuote.status === "approved" || selectedQuote.status === "completed"}
                  >
                    Create Project
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedQuote(null)}>
                    Close
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

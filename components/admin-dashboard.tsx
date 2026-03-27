"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipboardList, Users, DollarSign, Calendar } from "lucide-react"
import { getAllQuotes, updateQuoteStatus } from "@/app/actions/quote-actions"
import { getAllUsers } from "@/app/actions/user-actions"
import type { QuoteRequest, User } from "@/lib/types"

export function AdminDashboard() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null)
  const [adminNotes, setAdminNotes] = useState("")

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const quotesResult = await getAllQuotes()
    const usersResult = await getAllUsers()

    if (quotesResult.success) {
      setQuotes(quotesResult.quotes || [])
    }

    if (usersResult.success) {
      setUsers(usersResult.users || [])
    }
  }

  const handleStatusUpdate = async (quoteId: string, status: QuoteRequest["status"]) => {
    const result = await updateQuoteStatus(quoteId, status, adminNotes)
    if (result.success) {
      loadData()
      setSelectedQuote(null)
      setAdminNotes("")
    }
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "reviewed":
        return "bg-blue-100 text-blue-800"
      case "quoted":
        return "bg-purple-100 text-purple-800"
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalQuoteValue = quotes.reduce((sum, quote) => sum + quote.estimatedPrice, 0)
  const pendingQuotes = quotes.filter((q) => q.status === "pending").length
  const approvedQuotes = quotes.filter((q) => q.status === "approved").length

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <ClipboardList className="h-8 w-8 text-secondary mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Quotes</p>
                <p className="text-2xl font-bold text-primary">{quotes.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-secondary mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">{pendingQuotes}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-secondary mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-green-600">{formatPrice(totalQuoteValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-secondary mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-primary">{users.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="quotes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="quotes">Quote Requests</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="quotes" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Quotes List */}
            <Card>
              <CardHeader>
                <CardTitle>Quote Requests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedQuote?.id === quote.id ? "border-primary bg-primary/5" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedQuote(quote)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{quote.name}</h3>
                      <Badge className={getStatusColor(quote.status)}>{quote.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{quote.serviceType}</p>
                    <p className="text-sm font-medium text-primary">{formatPrice(quote.estimatedPrice)}</p>
                    <p className="text-xs text-gray-500">{quote.createdAt.toLocaleDateString()}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quote Details */}
            {selectedQuote && (
              <Card>
                <CardHeader>
                  <CardTitle>Quote Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedQuote.name}</h3>
                    <p className="text-gray-600">
                      {selectedQuote.email} | {selectedQuote.phone}
                    </p>
                    {selectedQuote.company && <p className="text-gray-600">{selectedQuote.company}</p>}
                  </div>

                  <div>
                    <p className="font-medium">Service Type:</p>
                    <p className="text-gray-700">{selectedQuote.serviceType}</p>
                  </div>

                  <div>
                    <p className="font-medium">Project Description:</p>
                    <p className="text-gray-700">{selectedQuote.projectDescription}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Budget:</p>
                      <p className="text-gray-700">{selectedQuote.budget}</p>
                    </div>
                    <div>
                      <p className="font-medium">Timeline:</p>
                      <p className="text-gray-700">{selectedQuote.timeline}</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-medium">Location:</p>
                    <p className="text-gray-700">{selectedQuote.location}</p>
                  </div>

                  <div>
                    <p className="font-medium">Estimated Price:</p>
                    <p className="text-2xl font-bold text-primary">{formatPrice(selectedQuote.estimatedPrice)}</p>
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Admin Notes:</label>
                    <Textarea
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add notes about this quote..."
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block font-medium mb-2">Update Status:</label>
                    <div className="flex gap-2 flex-wrap">
                      {["reviewed", "quoted", "approved", "rejected"].map((status) => (
                        <Button
                          key={status}
                          size="sm"
                          variant={selectedQuote.status === status ? "default" : "outline"}
                          onClick={() => handleStatusUpdate(selectedQuote.id, status as QuoteRequest["status"])}
                        >
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Registered Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{user.name}</h3>
                        <p className="text-gray-600">
                          @{user.username} | {user.email}
                        </p>
                        {user.company && <p className="text-gray-600">{user.company}</p>}
                        {user.phone && <p className="text-gray-600">{user.phone}</p>}
                      </div>
                      <Badge variant={user.role === "admin" ? "default" : "secondary"}>{user.role}</Badge>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Joined: {user.createdAt.toLocaleDateString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

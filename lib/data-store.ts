import type { QuoteRequest, User } from "./types"

// In-memory storage (in a real app, this would be a database)
const quotes: QuoteRequest[] = []
const users: User[] = [
  {
    id: "1",
    username: "admin",
    email: "admin@primaxadvertising.com",
    name: "Admin User",
    role: "admin",
    createdAt: new Date(),
  },
]

export const quoteStore = {
  create: (quote: Omit<QuoteRequest, "id" | "createdAt" | "updatedAt">): QuoteRequest => {
    const newQuote: QuoteRequest = {
      ...quote,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    quotes.push(newQuote)
    return newQuote
  },

  getAll: (): QuoteRequest[] => {
    return quotes.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  },

  getById: (id: string): QuoteRequest | undefined => {
    return quotes.find((quote) => quote.id === id)
  },

  getByUserId: (userId: string): QuoteRequest[] => {
    return quotes.filter((quote) => quote.userId === userId)
  },

  update: (id: string, updates: Partial<QuoteRequest>): QuoteRequest | null => {
    const index = quotes.findIndex((quote) => quote.id === id)
    if (index === -1) return null

    quotes[index] = { ...quotes[index], ...updates, updatedAt: new Date() }
    return quotes[index]
  },

  delete: (id: string): boolean => {
    const index = quotes.findIndex((quote) => quote.id === id)
    if (index === -1) return false

    quotes.splice(index, 1)
    return true
  },
}

export const userStore = {
  create: (user: Omit<User, "id" | "createdAt">): User => {
    const newUser: User = {
      ...user,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    }
    users.push(newUser)
    return newUser
  },

  getAll: (): User[] => {
    return users
  },

  getById: (id: string): User | undefined => {
    return users.find((user) => user.id === id)
  },

  getByUsername: (username: string): User | undefined => {
    return users.find((user) => user.username === username)
  },

  getByEmail: (email: string): User | undefined => {
    return users.find((user) => user.email === email)
  },

  update: (id: string, updates: Partial<User>): User | null => {
    const index = users.findIndex((user) => user.id === id)
    if (index === -1) return null

    users[index] = { ...users[index], ...updates }
    return users[index]
  },
}

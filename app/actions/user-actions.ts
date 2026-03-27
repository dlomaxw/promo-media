"use server"

import { userStore } from "@/lib/data-store"

export async function createUser(formData: FormData) {
  try {
    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const company = formData.get("company") as string

    // Check if user already exists
    const existingUser = userStore.getByEmail(email) || userStore.getByUsername(username)
    if (existingUser) {
      return { success: false, error: "User already exists with this email or username" }
    }

    const user = userStore.create({
      username,
      email,
      name,
      phone,
      company,
      role: "client",
    })

    return { success: true, user }
  } catch (error) {
    return { success: false, error: "Failed to create user" }
  }
}

export async function getUserByUsername(username: string) {
  try {
    const user = userStore.getByUsername(username)
    return { success: true, user }
  } catch (error) {
    return { success: false, error: "Failed to fetch user" }
  }
}

export async function getAllUsers() {
  try {
    const users = userStore.getAll()
    return { success: true, users }
  } catch (error) {
    return { success: false, error: "Failed to fetch users" }
  }
}

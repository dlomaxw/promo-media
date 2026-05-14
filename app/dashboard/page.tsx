import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { UserDashboard } from "@/components/dashboard/user-dashboard"

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const { data: { user } } = await supabase.auth.getUser()
  
  if (!user) {
    redirect("/auth/login")
  }

  // Get user profile
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single()

  // If user is admin, redirect to admin dashboard
  if (profile?.role === "admin") {
    redirect("/admin")
  }

  // Fetch user's quotes
  const { data: quotes } = await supabase
    .from("quotes")
    .select("*")
    .eq("email", user.email)
    .order("created_at", { ascending: false })

  // Fetch user's projects
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <UserDashboard 
      user={user}
      profile={profile}
      quotes={quotes || []} 
      projects={projects || []}
    />
  )
}

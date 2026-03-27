import { UserRegistration } from "@/components/user-registration"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Join Primax</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Create an account to manage your projects and track quote requests
            </p>
          </div>

          <UserRegistration />
        </div>
      </section>

      <Footer />
    </main>
  )
}

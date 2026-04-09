import { Card, CardContent } from "@/components/ui/card"

export function ClientsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Clients</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We've worked with leading brands to create impactful campaigns across Uganda.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="text-center text-gray-600">
          <p>We've worked with clients including Coca-Cola, Smirnoff, Honda, and more.</p>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"

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

        <Card className="max-w-2xl mx-auto shadow-md hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-start">
              <Building2 className="h-10 w-10 text-secondary mr-4" />
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">Carré Noir Paris</h3>
                <p className="text-gray-700 mb-1">30-34 Rue du Chemin Vert 75011, Paris</p>
                <a
                  href="http://www.carrenoir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  www.carrenoir.com
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center text-gray-600">
          <p>Other clients include Coca-Cola, Smirnoff, Honda, and more.</p>
        </div>
      </div>
    </section>
  )
}

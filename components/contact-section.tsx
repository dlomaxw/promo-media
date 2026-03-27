import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ready to launch your next campaign? Get in touch with our team.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
              <a href="mailto:primaxoutdooradvertising@gmail.com" className="text-gray-700 hover:text-secondary">
                primaxoutdooradvertising@gmail.com
              </a>
              <a href="mailto:mukalazi.primaxoutdoor@gmail.com" className="text-gray-700 hover:text-secondary mt-1">
                mukalazi.primaxoutdoor@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
              <a href="tel:+256766808484" className="text-gray-700 hover:text-secondary">
                +256 766 808 484
              </a>
            </CardContent>
          </Card>

          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Location</h3>
              <p className="text-gray-700">Kampala, Uganda</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
            Launch Your Campaign
          </Button>
        </div>
      </div>
    </section>
  )
}

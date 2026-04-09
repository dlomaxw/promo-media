import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { EventsSection } from "@/components/events-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ClientsSection } from "@/components/clients-section"
import { Footer } from "@/components/footer"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactForm } from "@/components/contact-form"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { IndustryExpertise } from "@/components/industry-expertise"
import { CapabilitiesSection } from "@/components/capabilities-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustryExpertise />
      <CapabilitiesSection />
      <EventsSection />
      <WhyChooseUs />
      <PortfolioSection />
      <GallerySection />
      <StatsSection />
      <TestimonialsSection />
      <TeamSection />
      <ClientsSection />
      {/* Contact Section with Form */}
      <section id="contact" className="py-20" style={{ backgroundColor: "#255498" }}>
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#ffffff" }}>Contact Us</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#e87e13" }}>
              Ready to launch your next campaign? Get in touch with our team.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div className="grid gap-6">
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                      <a
                        href="mailto:primaxoutdooradvertising@gmail.com"
                        className="text-gray-700 hover:text-secondary"
                      >
                        primaxoutdooradvertising@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Phone</h3>
                      <a href="tel:+256766808484" className="text-gray-700 hover:text-secondary">
                        +256 766 808 484
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Location</h3>
                      <p className="text-gray-700">Kampala, Uganda</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-3" style={{ color: "#edeef1" }}>Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: "#eff2f5" }}>Monday - Friday:</span>
                    <span style={{ color: "#bc7e22" }}>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#f4f7fb" }}>Saturday:</span>
                    <span style={{ color: "#be8119" }}>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: "#f5f5f5" }}>Sunday:</span>
                    <span style={{ color: "#d39c1c" }}>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

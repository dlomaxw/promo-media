import { Card, CardContent } from "@/components/ui/card"
import { Building2, Car, GraduationCap, Zap, Heart, ShoppingBag } from "lucide-react"
import Image from "next/image"

export function IndustryExpertise() {
  const industries = [
    {
      title: "Financial Services",
      icon: <Building2 className="h-8 w-8 text-secondary" />,
      description: "Banking and financial institution branding solutions",
      image: "/images/portfolio/postbank-building.png",
      projects: ["PostBank Corporate Branding", "Banking Signage Solutions", "ATM Branding"],
      clients: ["PostBank Uganda"],
    },
    {
      title: "Automotive & Fuel",
      icon: <Car className="h-8 w-8 text-secondary" />,
      description: "Service stations, fuel retail, and automotive services",
      image: "/images/portfolio/shell-motocare-station.png",
      projects: ["Shell Service Stations", "MotoCare Express Centers", "Fuel Retail Branding"],
      clients: ["Shell Uganda"],
    },
    {
      title: "Education Sector",
      icon: <GraduationCap className="h-8 w-8 text-secondary" />,
      description: "Schools, universities, and educational institutions",
      image: "/images/portfolio/school-signage-cluster.png",
      projects: ["School Signage", "Campus Branding", "Educational Campaigns"],
      clients: ["Multiple Schools", "MTN Uganda"],
    },
    {
      title: "Telecommunications",
      icon: <Zap className="h-8 w-8 text-secondary" />,
      description: "Mobile networks, internet services, and digital solutions",
      image: "/images/portfolio/mtn-gorilla.png",
      projects: ["MTN Campaigns", "MoMo Promotions", "Network Branding"],
      clients: ["MTN Uganda"],
    },
    {
      title: "Beauty & Wellness",
      icon: <Heart className="h-8 w-8 text-secondary" />,
      description: "Salons, spas, and personal care services",
      image: "/images/portfolio/mayi-beauty.png",
      projects: ["Salon Branding", "Beauty Product Campaigns", "Wellness Centers"],
      clients: ["Mayi Beauty Salon"],
    },
    {
      title: "Retail & FMCG",
      icon: <ShoppingBag className="h-8 w-8 text-secondary" />,
      description: "Fast-moving consumer goods and retail chains",
      image: "/images/portfolio/kfc-billboard.png",
      projects: ["KFC Campaigns", "Coca-Cola Activations", "Retail Branding"],
      clients: ["KFC Uganda", "Coca-Cola Uganda"],
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#255498" }}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f6f7f9" }}>Industry Expertise</h2>
          <p className="max-w-2xl mx-auto" style={{ color: "#dc960d" }}>
            We serve diverse industries across Uganda with specialized advertising and branding solutions.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative h-48">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center mb-2">
                    {industry.icon}
                    <h3 className="text-xl font-bold ml-2">{industry.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">{industry.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Projects:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {industry.projects.map((project, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="h-1 w-1 rounded-full bg-secondary mr-2"></span>
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Clients:</h4>
                  <div className="flex flex-wrap gap-1">
                    {industry.clients.map((client, idx) => (
                      <span key={idx} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

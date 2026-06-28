import { Card, CardContent } from "@/components/ui/card"
import { Palette, Film, School, Calendar } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

export function ServicesSection() {
  const services = [
    {
      title: "Branding & Marketing",
      icon: <Palette className="h-10 w-10 text-secondary" />,
      items: [
        "Building facade branding",
        "Corporate identity solutions",
        "Large format printing",
        "Point of sale display materials",
      ],
      image: "/images/portfolio/postbank-building.png",
    },
    {
      title: "Service Station Solutions",
      icon: <Film className="h-10 w-10 text-secondary" />,
      items: [
        "Complete service station branding",
        "Fuel station installations",
        "MotoCare service bay setup",
        "Convenience store branding",
      ],
      image: "/images/portfolio/shell-motocare-station.png",
    },
    {
      title: "Educational Institution Partnerships",
      icon: <School className="h-10 w-10 text-secondary" />,
      items: ["School signage solutions", "Payment integration systems", "Campus branding", "Educational campaigns"],
      image: "/images/portfolio/school-signage-cluster.png",
    },
    {
      title: "Technical Installations",
      icon: <Calendar className="h-10 w-10 text-secondary" />,
      items: [
        "DSTV satellite installations",
        "Safety storage solutions",
        "Parking management systems",
        "Custom technical solutions",
      ],
      image: "/images/portfolio/dstv-dishes.png",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Advertising & Marketing Services</h1>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              Comprehensive outdoor advertising and experiential marketing solutions tailored for Uganda's youth market. From branding to technical installations, we deliver innovative solutions across Kampala and Uganda.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8" role="list">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 150} direction="up" className="h-full">
              <article 
                className="shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full rounded-lg"
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
              >
                <div className="relative h-48">
                  <Image 
                    src={service.image || "/placeholder.svg"} 
                    alt={`${service.title} - Primax Advertising Uganda`}
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-white mb-2" itemProp="name">{service.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1" aria-hidden="true">{service.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Key Features</h3>
                      <ul className="space-y-2" itemProp="areaServed">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-secondary mr-2" aria-hidden="true"></span>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

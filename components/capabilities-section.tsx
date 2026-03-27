import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Wrench, Palette, Shield, Zap, Users } from "lucide-react"

export function CapabilitiesSection() {
  const capabilities = [
    {
      icon: <Palette className="h-8 w-8 text-secondary" />,
      title: "Complete Branding Solutions",
      description: "From concept to installation, we handle every aspect of your brand identity.",
      features: [
        "Logo design & brand guidelines",
        "Building facade branding",
        "Vehicle wrapping",
        "Corporate identity systems",
      ],
    },
    {
      icon: <Wrench className="h-8 w-8 text-secondary" />,
      title: "Technical Installations",
      description: "Professional installation services for complex technical requirements.",
      features: [
        "DSTV satellite installations",
        "Service station setup",
        "Safety storage solutions",
        "Electrical and mounting work",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Safety & Compliance",
      description: "All installations meet international safety standards and local regulations.",
      features: ["Safety-first approach", "Regulatory compliance", "Quality materials", "Professional certifications"],
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "Digital Integration",
      description: "Modern solutions that integrate digital payment and communication systems.",
      features: ["MoMo payment integration", "QR code solutions", "Digital displays", "Smart signage systems"],
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Multi-Industry Experience",
      description: "Proven track record across diverse sectors and client requirements.",
      features: ["Financial services", "Automotive & fuel", "Education sector", "Telecommunications"],
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-secondary" />,
      title: "End-to-End Service",
      description: "Complete project management from initial consultation to final installation.",
      features: ["Design consultation", "Project planning", "Manufacturing", "Installation & maintenance"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Capabilities</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Comprehensive advertising and branding solutions backed by technical expertise and industry experience.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary">{capability.title}</h3>
                </div>

                <p className="text-gray-700 mb-4">{capability.description}</p>

                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

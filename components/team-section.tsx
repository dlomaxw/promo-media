import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "David Mukalazi",
      position: "Founder & CEO",
      bio: "Visionary leader with 8+ years in experiential marketing and youth engagement across East Africa.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "mukalazi.primaxoutdoor@gmail.com",
      },
    },
    {
      name: "Sarah Nakato",
      position: "Creative Director",
      bio: "Award-winning creative professional specializing in 3D experiences and immersive brand activations.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@primaxadvertising.com",
      },
    },
    {
      name: "James Okwir",
      position: "Operations Manager",
      bio: "Expert in event logistics and technical operations, ensuring flawless execution of every campaign.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@primaxadvertising.com",
      },
    },
    {
      name: "Grace Namuli",
      position: "Client Relations Manager",
      bio: "Dedicated to building lasting partnerships and delivering exceptional client experiences.",
      image: "/placeholder.svg?height=300&width=300",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "grace@primaxadvertising.com",
      },
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            The creative minds and strategic thinkers behind Uganda's most innovative advertising campaigns.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.position}</p>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

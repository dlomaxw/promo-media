import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { FadeIn } from "@/components/ui/fade-in"

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "Coca-Cola 3D Movie Night",
      category: "3D Cinematic Experience",
      location: "Kampala University",
      date: "December 2024",
      description:
        "Immersive 3D movie experience with 1500+ attendees, featuring interactive games and brand activations.",
      image: "/images/portfolio/coca-cola.png",
      stats: { attendees: "1,500+", engagement: "95%", reach: "50K+" },
    },
    {
      title: "MTN Campus Activation",
      category: "University Activation",
      location: "Makerere University",
      date: "November 2024",
      description: "Interactive MTN brand experience with SIM card registration and mobile money promotions.",
      image: "/images/portfolio/mtn-gorilla.png",
      stats: { attendees: "800+", engagement: "98%", reach: "75K+" },
    },
    {
      title: "Shell Gas Safety Campaign",
      category: "Community Activation",
      location: "Multiple Locations",
      date: "October 2024",
      description: "Nationwide campaign promoting safe gas usage with branded installations and educational materials.",
      image: "/images/portfolio/shell-bridge.png",
      stats: { attendees: "2,000+", engagement: "92%", reach: "100K+" },
    },
    {
      title: "KFC Streetwise Promotion",
      category: "Outdoor Advertising",
      location: "Busiro, Central Uganda",
      date: "September 2024",
      description: "Strategic billboard placement and point-of-sale materials for KFC's Streetwise Four promotion.",
      image: "/images/portfolio/kfc-billboard.png",
      stats: { attendees: "5,000+", engagement: "89%", reach: "200K+" },
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Portfolio</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our successful campaigns and events that have engaged Uganda's youth across the country.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 150} direction="up" className="h-full">
              <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {item.location}
                  </div>
                  <p className="text-gray-700 mb-4">{item.description}</p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{item.stats.attendees}</div>
                      <div className="text-xs text-gray-500">Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-secondary">{item.stats.engagement}</div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{item.stats.reach}</div>
                      <div className="text-xs text-gray-500">Social Reach</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={300}>
          <div className="text-center mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white">View All Projects</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

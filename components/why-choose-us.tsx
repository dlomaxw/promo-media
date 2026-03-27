import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Award, TrendingUpIcon as Trending } from "lucide-react"

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Entertainment & Innovation Hub",
      icon: <Zap className="h-8 w-8 text-secondary" />,
      description: "A community where entertainment, technology, and innovation reunite.",
    },
    {
      title: "Educational Influence",
      icon: <Users className="h-8 w-8 text-secondary" />,
      description: "The voice in learning institutions, building future brand loyalty.",
    },
    {
      title: "Top Content Creators",
      icon: <Award className="h-8 w-8 text-secondary" />,
      description: "The home of Uganda's top content creators and influencers.",
    },
    {
      title: "Youth Engagement",
      icon: <Trending className="h-8 w-8 text-secondary" />,
      description: "A trend-centric platform that ignites youth engagement.",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 border-none shadow-md hover:bg-white/20 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-white/80">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

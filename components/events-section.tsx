import { Card, CardContent } from "@/components/ui/card"
import { Film, Briefcase, GraduationCap, Users } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "3D Outdoor Movie Nights",
      icon: <Film className="h-12 w-12 text-white" />,
      description:
        "Immersive cinematic experiences with free popcorn & soda, treasure hunts, photo booths, elite DJ mixes & DIY zones.",
      bgClass: "bg-primary",
    },
    {
      title: "Corporate Events",
      icon: <Briefcase className="h-12 w-12 text-white" />,
      description: "Silent Raves (e.g. Smirnoff), exclusive product launches and corporate brand activations.",
      bgClass: "bg-secondary",
    },
    {
      title: "University Activations",
      icon: <GraduationCap className="h-12 w-12 text-white" />,
      description: "Campus engagement campaigns with competitions, dance crews, and giveaways.",
      bgClass: "bg-primary",
    },
    {
      title: "Community Activations",
      icon: <Users className="h-12 w-12 text-white" />,
      description: 'Local film promotion and mega festivals (e.g. "Ndi Musoga") that engage entire communities.',
      bgClass: "bg-secondary",
    },
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Event Categories</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Creating memorable experiences that connect brands with Uganda's youth.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className={`${event.bgClass} p-6 flex justify-center`}>{event.icon}</div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                <p className="text-gray-700">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

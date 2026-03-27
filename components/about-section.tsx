import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-4">Vision</h3>
              <p className="text-gray-700">
                To instill and spark an appealing trend for all schoolgoers and target communities across Uganda.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-secondary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-4">Mission</h3>
              <p className="text-gray-700">
                To provide objectively tailored solutions to the 27.5 million school-going population and surrounding
                communities in Uganda.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold text-primary mb-4">Values</h3>
              <ul className="space-y-2">
                {["Professionalism", "Effectiveness", "Value Addition", "Flexibility"].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span className="text-gray-700">{value}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

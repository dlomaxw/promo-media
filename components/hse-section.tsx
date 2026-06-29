"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Shield, Leaf, Zap, Users, Recycle, CheckCircle } from "lucide-react"

export function HSESection() {
  return (
    <section id="hse" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Health, Safety & Environment
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 mb-4">
            At Primax Outdoor Advertising Limited, we believe that outstanding marketing results go hand-in-hand with 
            an uncompromising commitment to safety.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              As a leader in large-scale branding, fabrication, high-altitude signage installation, and interior 
              transformations, our physical operations require the highest standards of risk management.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We carry out every project with the greatest regard for the health and safety of our workforce, our 
              clients, and the public, while actively conserving the environment.
            </p>
          </div>
        </div>

        {/* Core Safety Pillars */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-12 text-center text-primary">Our Core Safety Pillars</h3>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our operational safety framework is anchored by six structured HSEQ policy directives under the leadership 
            of Managing Director Huzair Mukalazi.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Health & Safety Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Guided by our company policy manual, we enforce safe onsite practices and conduct routine site 
                  inspections to eliminate job hazards before they occur.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 2 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Leaf className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-lg">Environmental Responsibility</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We aggressively mitigate our environmental footprint by using products and work methodologies that 
                  result in minimal ecological impact.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 3 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Zero Tolerance Substance Policy</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To protect lives and ensure peak performance, we enforce a strict drug- and alcohol-free workplace, 
                  utilizing random testing to ensure teams always report fit for duty.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 4 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-lg">Rigorous PPE Compliance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Because our fabrication and installation tasks involve mechanical and height hazards, every worker is 
                  fully trained and equipped with job-specific, industry-standard Personal Protective Equipment.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 5 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg">Total Quality Integration</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We combine quality control with health and safety standards to finish projects on schedule, 
                  minimizing repair reworks and material waste.
                </p>
              </CardContent>
            </Card>

            {/* Pillar 6 */}
            <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-secondary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Recycle className="h-6 w-6 text-secondary" />
                  <CardTitle className="text-lg">Sustainable Waste Management</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  From banners to steel off-cuts, we prioritize the waste hierarchy—actively avoiding, reusing, and 
                  recycling production materials to keep site waste out of landfills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Living Safety Culture */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">A Living Safety Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Safety at Primax Outdoor Advertising is not just a regulatory checklist; it is a shared mindset. We 
                cultivate a proactive incident-prevention culture where management and site teams work seamlessly to 
                recognize and eliminate workplace hazards daily.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                By prioritizing the well-being of our team, we ensure your brand&apos;s physical assets are built, 
                delivered, and installed safely, efficiently, and sustainably.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-gray-700 mb-8 text-lg">
            Explore our comprehensive HSEQ policies and see how we maintain the highest standards of safety, quality, and environmental responsibility.
          </p>
          <a href="/hse">
            <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
              View Our HSEQ Policies
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

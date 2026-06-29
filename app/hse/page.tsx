import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'HSEQ Policies - Primax Outdoor Advertising',
  description: 'Primax&apos;s comprehensive Health, Safety, Environment & Quality policies ensuring safe operations and environmental responsibility in Uganda.',
  keywords: ['HSEQ policies', 'health and safety', 'environmental policy', 'PPE policy', 'waste management', 'quality policy'],
}

export default function HSEPage() {
  const policies = [
    {
      title: 'Health, Safety, Security & Environment Policy',
      id: 'POA/HSEQ-POL/001',
      description: 'Our commitment to carrying out all operations with the greatest regard for the health and safety of all workers and environmental conservation.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0001-lYqBlGt2OaZBZ9vvmef3YZ0D79cQ7f.jpg',
      highlights: [
        'Safe working conditions for staff and public',
        'Injury prevention through improved practices',
        'Health and safety program manual',
        'Routine site inspections and checks',
        'Environmental conservation commitment'
      ]
    },
    {
      title: 'Environmental Policy',
      id: 'POA/HSEQ-POL/002',
      description: 'Primax&apos;s commitment to environmental protection through efficient resource use, waste minimization, and stakeholder engagement.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0002-tFZLpqcNHq32ISCGlMmlZ5uvJQPSQA.jpg',
      highlights: [
        'Operating in manner that protects the environment',
        'Efficient use of material and energy resources',
        'Influencing employees and stakeholders on environmental commitment',
        'Identifying and mitigating environmental impacts',
        'Setting environmental protection targets',
        'Minimal impact work methodologies'
      ]
    },
    {
      title: 'Drug & Alcohol Policy',
      id: 'POA/HSEQ-POL/003',
      description: 'Zero tolerance substance policy ensuring a safe and drug-free workplace for all employees and stakeholders.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0003-B6YazzLduNhkYa8ucO9xdT2MATkpjo.jpg',
      highlights: [
        'Workplace free from alcohol and drug abuse',
        'No tolerance for substance abuse',
        'Disciplinary action for violations',
        'Random testing procedures',
        'Resource commitment to eliminate substance abuse',
        'Employee responsibility to report fit for duty'
      ]
    },
    {
      title: 'Personal Protective Equipment (PPE) Policy',
      id: 'POA/HSEQ-POL/004',
      description: 'Comprehensive PPE policy protecting employees from occupational injuries and illness through appropriate equipment and training.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0004-WamZpDmwZlBZ9vvmef3YZ0D79cQ7f.jpg',
      highlights: [
        'Industry-recognized PPE standards compliance',
        'Employee training on correct PPE use',
        'Job-specific hazard assessment',
        'Appropriate PPE provision',
        'Correct usage enforcement',
        'Disciplinary action for non-compliance'
      ]
    },
    {
      title: 'Quality Policy',
      id: 'POA/HSEQ-POL/005',
      description: 'Commitment to delivering high-quality services aligned with organizational goals and client expectations.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0005-06BuLA4Ap5GeE4QLnp0mb1ZaWPqHEP.jpg',
      highlights: [
        'High and consistent quality to clients',
        'Client needs and expectations fulfillment',
        'Timely project completion',
        'Material wastage minimization',
        'Quality problem reduction',
        'Quality, Environmental, Health & Safety integration'
      ]
    },
    {
      title: 'Waste Management Policy',
      id: 'POA/HSEQ-POL/006',
      description: 'Strategic waste management approach minimizing environmental impact through reduction, reuse, and recycling.',
      imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0006-bhEX8AGOfNzQnPxpe3L8dnex15Gg6x.jpg',
      highlights: [
        'Waste generation avoidance and reduction',
        'Waste reuse and recycling initiatives',
        'Lifecycle information in procurement',
        'Efficient material and resource usage',
        'Waste stream monitoring and reporting',
        'Waste reduction targets setting'
      ]
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HSEQ Policies</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Comprehensive Health, Safety, Environment & Quality policies ensuring safe, sustainable operations and exceptional service quality.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-secondary">
            <h2 className="text-2xl font-bold mb-4 text-primary">Our HSEQ Commitment</h2>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              At Primax Outdoor Advertising, health, safety, environment, and quality are not afterthoughts—they are integrated into every operation. We carry out all our work—from large-scale branding and fabrication to high-altitude signage installation—with an uncompromising commitment to protecting our workforce, clients, the public, and our environment.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Led by Managing Director Huzair Mukalazi, our HSEQ framework comprises six structured policy directives that ensure continuous improvement, compliance with applicable laws, and a proactive safety culture.
            </p>
          </div>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-primary">Our Six Policy Pillars</h2>
          
          <div className="space-y-12">
            {policies.map((policy, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
                {/* Alternate layout for visual interest */}
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={policy.imageUrl}
                          alt={policy.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="bg-white p-8 rounded-lg shadow-md h-full">
                        <div className="text-sm font-semibold text-secondary mb-2">{policy.id}</div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{policy.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{policy.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Points:</h4>
                          <ul className="space-y-2">
                            {policy.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="bg-white p-8 rounded-lg shadow-md h-full">
                        <div className="text-sm font-semibold text-secondary mb-2">{policy.id}</div>
                        <h3 className="text-2xl font-bold text-primary mb-3">{policy.title}</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">{policy.description}</p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Points:</h4>
                          <ul className="space-y-2">
                            {policy.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="h-2 w-2 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                                <span className="text-gray-700">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={policy.imageUrl}
                          alt={policy.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Download Section */}
      <section className="bg-gradient-to-b from-primary/5 to-secondary/5 py-16 md:py-24">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Download Full Policy Documents</h2>
          <p className="text-lg text-gray-700 mb-12">
            Access our comprehensive HSEQ policy documents directly from our official sources. These documents detail our complete commitment to health, safety, environment, and quality standards.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a href="https://drive.google.com/file/d/1rPg4ZUPRB0ihrLMtTjJHd0SlEjG5OusS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-lg transition-all hover:scale-105 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>Complete HSE Policies</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">
                    Full HSEQ policy document containing all organizational policies and procedures.
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </CardContent>
              </Card>
            </a>

            <a href="https://drive.google.com/file/d/1S0Y9LOjMq7U-HKS4k5FvhJ90sUObMObp/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Card className="hover:shadow-lg transition-all hover:scale-105 h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="h-6 w-6 text-secondary" />
                    <CardTitle>Policy Statement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700 mb-4">
                    HSSE policy statement write-up detailing our commitment and implementation strategies.
                  </p>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    <Download className="mr-2 h-4 w-4" />
                    View & Download
                  </Button>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Questions About Our HSEQ Policies?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our HSEQ team is dedicated to ensuring our operations meet the highest standards. For inquiries or more information about our policies, please contact us.
          </p>
          <a href="/#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Contact Our Team
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import { Metadata } from 'next'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'HSEQ Policies - Primax Outdoor Advertising',
  description: "Primax's comprehensive Health, Safety, Environment & Quality policies ensuring safe operations and environmental responsibility in Uganda.",
  keywords: ['HSEQ policies', 'health and safety', 'environmental policy', 'PPE policy', 'waste management', 'quality policy'],
}

const policies = [
  {
    title: 'Health, Safety, Security & Environment Policy',
    id: 'POA/HSEQ-POL/001',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0001-DC4LiHKLuSzr6MDmWm3Gi949EDLRPf.jpg',
  },
  {
    title: 'Environmental Policy',
    id: 'POA/HSEQ-POL/002',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0002-3wo9qXvRe9Kxvr2LA5LLlrGbOvQz5x.jpg',
  },
  {
    title: 'Drug & Alcohol Policy',
    id: 'POA/HSEQ-POL/003',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0003-wwIBZVoB4jBh0ZaNvk126SAu5wIOBz.jpg',
  },
  {
    title: 'Personal Protective Equipment (PPE) Policy',
    id: 'POA/HSEQ-POL/004',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0004-vkAI9tiM1VsBlmpGHNRA7kh67Xtjyo.jpg',
  },
  {
    title: 'Quality Policy',
    id: 'POA/HSEQ-POL/005',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0005-BEEFCUbro7YCP5lLke8IzSHGUBWii0.jpg',
  },
  {
    title: 'Waste Management Policy',
    id: 'POA/HSEQ-POL/006',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Primax%20HSE%20Policies_page-0006-Lh2NvD7LTJB8TvSVrl9pivM1XZr6iH.jpg',
  },
]

export default function HSEPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HSEQ Policies</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed">
            Health, Safety, Environment &amp; Quality policies governing all operations at Primax Outdoor Advertising.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-white">
        <div className="container max-w-4xl">
          <div className="border-l-4 border-secondary pl-6">
            <p className="text-gray-700 text-lg leading-relaxed mb-3">
              At Primax Outdoor Advertising, health, safety, environment and quality are integrated into every operation. Our HSEQ framework comprises six structured policy directives ensuring continuous improvement, legal compliance, and a proactive safety culture across all levels of the organisation.
            </p>
            <p className="text-sm text-gray-500 font-medium">Signed by: Huzair Mukalazi, Managing Director &mdash; 10th January 2026</p>
          </div>
        </div>
      </section>

      {/* Policy Documents — full visible images stacked */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="space-y-10">
            {policies.map((policy) => (
              <div key={policy.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                {/* Label bar */}
                <div className="flex items-center justify-between px-6 py-3 bg-primary">
                  <h2 className="text-white font-semibold text-base md:text-lg">{policy.title}</h2>
                  <span className="text-white/70 text-sm font-mono">{policy.id}</span>
                </div>
                {/* Full policy image — unclipped, natural aspect ratio */}
                <div className="w-full">
                  <Image
                    src={policy.imageUrl}
                    alt={`${policy.title} — ${policy.id}`}
                    width={1240}
                    height={1754}
                    className="w-full h-auto"
                    quality={100}
                    priority={policy.id === 'POA/HSEQ-POL/001'}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-14 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Questions About Our HSEQ Policies?</h2>
          <p className="text-gray-700 mb-6">
            Contact our HSEQ team for any inquiries or further information about our policies and procedures.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

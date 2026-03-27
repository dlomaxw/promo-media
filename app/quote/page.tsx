import { QuoteCalculator } from "@/components/quote-calculator"
import { QuoteRequestForm } from "@/components/quote-request-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get Your Quote</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Calculate an estimate or request a detailed quote for your advertising project
            </p>
          </div>

          <div className="space-y-16">
            <QuoteCalculator />
            <QuoteRequestForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

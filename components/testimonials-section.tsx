"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Nakamya",
      position: "Marketing Director",
      company: "Coca-Cola Uganda",
      content:
        "Primax Advertising transformed our youth engagement strategy. Their 3D movie nights created an unprecedented connection with our target audience. The results exceeded all our expectations.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "James Okello",
      position: "Brand Manager",
      company: "Smirnoff East Africa",
      content:
        "The silent rave concept was revolutionary. Primax delivered an experience that had our brand trending for weeks. Their creativity and execution are unmatched in the Ugandan market.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Margaret Kisakye",
      position: "Vice Chancellor",
      company: "Kampala University",
      content:
        "Working with Primax has been exceptional. They understand how to engage students while maintaining educational value. Their events are always well-organized and impactful.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Robert Musinguzi",
      position: "Regional Manager",
      company: "Honda Uganda",
      content:
        "Primax's campus tour strategy helped us reach thousands of potential customers. Their understanding of the youth market and professional execution made our campaign a huge success.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from the brands and institutions that have experienced the Primax difference.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 border-none backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-secondary" />
              </div>

              <div className="text-center mb-8">
                <p className="text-lg md:text-xl leading-relaxed mb-6">"{testimonials[currentTestimonial].content}"</p>

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <h4 className="font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-white/80">{testimonials[currentTestimonial].position}</p>
                  <p className="text-secondary font-medium">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-secondary" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

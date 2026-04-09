"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { FadeIn } from "@/components/ui/fade-in"

export function GallerySection() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const recentWorkImages = Array.from({ length: 78 }).map((_, i) => ({
    src: `/images/recent-work/work-${(i + 1).toString().padStart(2, '0')}.jpeg`,
    alt: `Recent Project ${i + 1}`,
    title: `Recent Implementation ${i + 1}`,
    description: "Recent project execution showcasing our outdoor advertising, branding, and activation capabilities.",
    category: "Recent Work",
    client: "Various Clients",
  }))

  const galleryImages = [
    ...recentWorkImages,
    {
      src: "/images/portfolio/kfc-billboard.png",
      alt: "KFC Streetwise Four Billboard in Busiro, Central Uganda",
      title: "KFC Outdoor Campaign",
      description: "Strategic billboard placement for KFC's Streetwise Four promotion in high-traffic areas of Busiro.",
      category: "Outdoor Advertising",
      client: "KFC Uganda",
    },
    {
      src: "/images/portfolio/shell-bridge.png",
      alt: "Shell Gas Billboard on Bridge",
      title: "Shell Gas Bridge Campaign",
      description: "Overhead bridge advertising for Shell Gas, capturing attention of all passing vehicles.",
      category: "Outdoor Advertising",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/coca-cola.png",
      alt: "Coca-Cola Share a Coke Billboard",
      title: "Coca-Cola Connection Campaign",
      description: "Strategic placement of Coca-Cola's 'Share a Coke' campaign in busy urban areas.",
      category: "Outdoor Advertising",
      client: "Coca-Cola Uganda",
    },
    {
      src: "/images/portfolio/food-billboard.png",
      alt: "Food Product Billboard",
      title: "European Strongest Taste Campaign",
      description:
        "Dual billboard installation promoting food products with emotional connection between mother and child.",
      category: "Outdoor Advertising",
      client: "Food Brand",
    },
    {
      src: "/images/portfolio/shell-motocare-station.png",
      alt: "Shell Advance MotoCare Express Service Station",
      title: "Shell MotoCare Express Branding",
      description: "Complete service station branding with motorcycle service area and promotional materials.",
      category: "Branded Installations",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/shell-select-store.png",
      alt: "Shell Select Convenience Store",
      title: "Shell Select Kasangati Store",
      description: "Full convenience store branding with Shell Select identity and welcome messaging.",
      category: "Retail Branding",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/shell-service-bay.png",
      alt: "Shell MotoCare Service Bay",
      title: "Shell MotoCare Service Installation",
      description: "Motorcycle service bay with 'Great rides start here' branding and promotional displays.",
      category: "Service Center Branding",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/postbank-building.png",
      alt: "PostBank Building Branding",
      title: "PostBank Corporate Branding",
      description: "Complete building facade branding for PostBank with 'Empowering You' messaging.",
      category: "Corporate Branding",
      client: "PostBank Uganda",
    },
    {
      src: "/images/portfolio/postbank-parking.png",
      alt: "PostBank Reserved Parking Signs",
      title: "PostBank Parking Management",
      description: "Custom parking signage solution for PostBank branches with clear branding and messaging.",
      category: "Signage Solutions",
      client: "PostBank Uganda",
    },
    {
      src: "/images/portfolio/mayi-beauty.png",
      alt: "Mayi Beauty Salon Branding",
      title: "Mayi Beauty Salon Campaign",
      description: "Purple-themed beauty salon branding with 'Juvenate your hair' messaging for hair care services.",
      category: "Beauty & Wellness",
      client: "Mayi Beauty Salon",
    },
    {
      src: "/images/portfolio/school-signage-cluster.png",
      alt: "Multiple School Signage Installation",
      title: "Educational Institution Signage",
      description:
        "Comprehensive signage solutions for multiple schools including Wanyange Girls Secondary School with integrated MoMo payment information.",
      category: "Educational Partnerships",
      client: "Various Schools & MTN Uganda",
    },
    {
      src: "/images/portfolio/dstv-dishes.png",
      alt: "DSTV Satellite Dishes Production",
      title: "DSTV Installation Services",
      description: "Bulk production and installation of DSTV satellite dishes for residential and commercial clients.",
      category: "Technical Installations",
      client: "DSTV Uganda",
    },
    {
      src: "/images/portfolio/shell-gas-safety-cage.png",
      alt: "Shell Gas Safety Storage Cage",
      title: "Shell Gas Safety Solutions",
      description: "Custom safety storage solutions for Shell Gas with 'Safe for you & your family' messaging.",
      category: "Safety Installations",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/momo-display.png",
      alt: "MoMo Payment Display at Airport",
      title: "MTN MoMo Airport Campaign",
      description: "Strategic indoor advertising at baggage claim area promoting cashless payments with MTN MoMo.",
      category: "Indoor Advertising",
      client: "MTN Uganda",
    },
    {
      src: "/images/portfolio/mtn-unstoppable.png",
      alt: "MTN Together We're Unstoppable Display",
      title: "MTN Unity Campaign",
      description: "Indoor advertising at high-traffic areas with MTN's 'Together, We're Unstoppable' messaging.",
      category: "Indoor Advertising",
      client: "MTN Uganda",
    },
    {
      src: "/images/portfolio/mtn-gorilla.png",
      alt: "MTN Let's Explore Together Display",
      title: "MTN Gorilla Conservation Campaign",
      description:
        "Indoor display featuring gorilla imagery to promote MTN SIM cards while raising conservation awareness.",
      category: "Indoor Advertising",
      client: "MTN Uganda",
    },
    {
      src: "/images/portfolio/shell-cage.png",
      alt: "Shell Gas Branded Storage Cage",
      title: "Shell Gas Safety Display",
      description: "Custom branded storage solution for Shell Gas cylinders with safety information.",
      category: "Branded Installations",
      client: "Shell Uganda",
    },
    {
      src: "/images/portfolio/school-sign.png",
      alt: "Busembatia Secondary School Sign with MoMo Payment Info",
      title: "Educational Institution Partnership",
      description: "School signage with integrated payment solution information for school fees via MTN MoMo.",
      category: "Educational Partnerships",
      client: "MTN Uganda & Busembatia Secondary School",
    },
    {
      src: "/images/portfolio/display-stand.png",
      alt: "Orange Display Stand Under Construction",
      title: "Custom Display Solution",
      description: "Custom-built point-of-sale display stand for retail environments.",
      category: "Retail Displays",
      client: "Various Clients",
    },
  ]

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious()
    } else if (e.key === "ArrowRight") {
      goToNext()
    } else if (e.key === "Escape") {
      closeLightbox()
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container" style={{ backgroundColor: "#255498", padding: "3rem" }}>
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#f6f6f7" }}>Our Work Gallery</h2>
            <p className="max-w-2xl mx-auto" style={{ color: "#be7f23" }}>
              Explore our portfolio of successful advertising campaigns and installations across Uganda.
            </p>
            <div className="w-24 h-1 bg-secondary mx-auto mt-4"></div>
          </div>
        </FadeIn>

        <div className="relative flex flex-col gap-6 overflow-hidden w-full pb-8 pt-4 pointer-events-auto"
             style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          {[0, 1, 2, 3].map((rowIndex) => {
            const chunkSize = Math.ceil(galleryImages.length / 4)
            const start = rowIndex * chunkSize
            const rowImages = galleryImages.slice(start, start + chunkSize)
            
            // Alternate animation direction for rows to slide left/right
            const isReverse = rowIndex % 2 !== 0
            
            return (
              <div 
                key={rowIndex} 
                className="flex w-max animate-marquee hover:[animation-play-state:paused]"
                style={{ 
                  animationDirection: isReverse ? 'reverse' : 'normal', 
                  animationDuration: '60s' 
                }}
              >
                {[...Array(2)].map((_, loopIndex) => (
                  <div key={loopIndex} className="flex gap-6 px-3">
                    {rowImages.map((image, j) => {
                      const actualIndex = start + j
                      return (
                        <Card
                          key={`${actualIndex}-${loopIndex}`}
                          className="w-80 shrink-0 overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 border-white/20"
                          onClick={() => openLightbox(actualIndex)}
                        >
                          <div className="relative h-64 overflow-hidden bg-muted">
                            <Image
                              src={image.src || "/placeholder.svg"}
                              alt={image.alt}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 320px"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                              <div className="p-5 text-white w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-xs font-semibold uppercase tracking-wider text-secondary mb-1">{image.category}</p>
                                <h3 className="text-lg font-bold leading-tight line-clamp-2">{image.title}</h3>
                              </div>
                            </div>
                          </div>
                        </Card>
                      )
                    })}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-5xl w-[90vw] p-0 bg-black/95"
          onKeyDown={handleKeyDown}
          onInteractOutside={closeLightbox}
        >
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/20 rounded-full"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="flex items-center justify-center min-h-[50vh] max-h-[80vh] relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 z-10 text-white hover:bg-white/20 rounded-full"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={galleryImages[currentImage].src || "/placeholder.svg"}
                  alt={galleryImages[currentImage].alt}
                  width={1200}
                  height={800}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 z-10 text-white hover:bg-white/20 rounded-full"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            <div className="bg-white p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-primary">
                  {galleryImages[currentImage].title}
                </DialogTitle>
                <DialogDescription className="text-sm text-gray-500">
                  Client: {galleryImages[currentImage].client} | Category: {galleryImages[currentImage].category}
                </DialogDescription>
              </DialogHeader>
              <p className="mt-2 text-gray-700">{galleryImages[currentImage].description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

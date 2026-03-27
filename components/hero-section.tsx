"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FadeIn } from "@/components/ui/fade-in"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const totalImages = 25

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setIsOpen(true)
  }

  const closeLightbox = () => setIsOpen(false)

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious()
    else if (e.key === "ArrowRight") goToNext()
    else if (e.key === "Escape") closeLightbox()
  }

  return (
    <section className="relative py-20 pb-72 md:py-32 md:pb-80 overflow-hidden bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Experiential Advertising for the Next Generation
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={300}>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Engaging Uganda's 27.5M youth through futuristic events, education, and entertainment.
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={500}>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
              <Link href="#contact">Launch Your Campaign</Link>
            </Button>
          </FadeIn>
        </div>
      </div>

      {/* Abstract shapes */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      {/* Sleek Infinite Marquee - Bigger, Reactive, Clickable */}
      <div 
        className="absolute bottom-0 left-0 w-full overflow-hidden bg-white/30 backdrop-blur-md border-t border-white/30 py-6 z-20 pointer-events-auto"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {Array.from({ length: totalImages }).map((_, j) => (
                <div 
                  key={j} 
                  className="relative w-80 h-56 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-white/50 bg-white cursor-pointer group"
                  onClick={() => openLightbox(j)}
                >
                  <img
                    src={`/images/recent-work/work-${(j + 1).toString().padStart(2, '0')}.jpeg`}
                    alt={`Recent campaign ${j + 1}`}
                    className="object-cover w-full h-full group-hover:scale-110 group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium tracking-wide scale-90 group-hover:scale-100 transition-all duration-500 border border-white/50 bg-black/40 px-4 py-2 rounded-full shadow-xl backdrop-blur-sm pointer-events-none">
                      View full image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95 border-white/10 flex flex-col"
          onKeyDown={handleKeyDown}
        >
          <div className="relative w-full h-full flex flex-col">
            <div className="absolute top-0 w-full flex justify-between items-center p-4 z-50 bg-gradient-to-b from-black/60 to-transparent">
              <DialogHeader className="text-left w-full">
                <DialogTitle className="text-xl font-bold text-white tracking-wide">
                  Recent Campaign Experience {(currentImage + 1).toString().padStart(2, '0')}
                </DialogTitle>
              </DialogHeader>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20 rounded-full shrink-0 ml-4"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="flex flex-1 items-center justify-center relative w-full h-full p-4 overflow-hidden pt-16 pb-8">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-10 text-white hover:bg-white/20 rounded-full h-14 w-14 bg-black/40 backdrop-blur-md"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-10 w-10" />
              </Button>

              <div className="relative w-full h-full flex items-center justify-center px-16">
                <img
                  key={currentImage} // Forces re-animation on change
                  src={`/images/recent-work/work-${(currentImage + 1).toString().padStart(2, '0')}.jpeg`}
                  alt={`Recent Campaign ${(currentImage + 1)}`}
                  className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-in fade-in zoom-in-95 duration-300"
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-10 text-white hover:bg-white/20 rounded-full h-14 w-14 bg-black/40 backdrop-blur-md"
                onClick={goToNext}
              >
                <ChevronRight className="h-10 w-10" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

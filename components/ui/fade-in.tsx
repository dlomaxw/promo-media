"use client"

import React, { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function FadeIn({ children, className, delay = 0, direction = "up", ...props }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getDirectionClasses = () => {
    switch (direction) {
      case "up":
        return "translate-y-12"
      case "down":
        return "-translate-y-12"
      case "left":
        return "translate-x-12"
      case "right":
        return "-translate-x-12"
      case "none":
        return ""
      default:
        return "translate-y-12"
    }
  }

  return (
    <div
      ref={domRef}
      className={cn(
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getDirectionClasses()}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  )
}

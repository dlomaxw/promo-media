"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation on component mount
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative inline-block">
      <Image
        src="/images/logo.png"
        alt="Primax Advertising Logo"
        width={180}
        height={60}
        className={`h-auto transition-all duration-300 ${
          isLoaded ? "animate-logo-glow" : "opacity-0"
        }`}
        priority
      />
      {/* Shine effect overlay */}
      <div
        className={`absolute inset-0 animate-logo-shine ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
          backgroundSize: "1000px 100%",
          borderRadius: "4px",
        }}
      />
    </div>
  )
}

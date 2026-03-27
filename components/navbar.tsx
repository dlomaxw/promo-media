"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Primax Advertising Logo" width={180} height={60} className="h-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Services
          </Link>
          <Link href="#events" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Events
          </Link>
          <Link href="/quote" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Get Quote
          </Link>
          <Link href="#contact" className="text-sm font-medium text-primary hover:text-secondary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/register">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Register
            </Button>
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <Link href="/quote">Get Quote</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-sm font-medium text-primary hover:text-secondary" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="#about"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              href="#events"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              href="/quote"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              Get Quote
            </Link>
            <Link
              href="#contact"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="/register"
              className="block text-sm font-medium text-primary hover:text-secondary"
              onClick={toggleMenu}
            >
              Register
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="/quote">Get Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

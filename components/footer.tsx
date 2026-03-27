import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Primax Advertising Logo"
              width={180}
              height={60}
              className="h-auto invert brightness-0 invert"
            />
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2025 Primax Advertising. All rights reserved.</p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#events" className="text-sm text-gray-400 hover:text-white transition-colors">
              Events
            </Link>
            <Link href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>Design by Bright Agency</p>
        </div>
      </div>
    </footer>
  )
}

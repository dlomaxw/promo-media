import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Primax - Outdoor Advertising & Marketing Solutions in Uganda',
  description: 'Primax is Uganda\'s leading outdoor advertising and experiential marketing company. We offer 3D cinema experiences, school activations, corporate events, branding, and innovative media solutions.',
  keywords: ['outdoor advertising Uganda', 'advertising agency Kampala', 'branding solutions Uganda', 'experiential marketing', 'event marketing Uganda', 'school activations', 'corporate events Uganda', '3D cinema', 'media company Uganda'],
  generator: 'v0.app',
  applicationName: 'Primax',
  authors: [{ name: 'Primax Advertising' }],
  creator: 'Primax',
  publisher: 'Primax',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_UG',
    url: 'https://primaxadvertising.com',
    siteName: 'Primax Advertising',
    title: 'Primax - Outdoor Advertising & Marketing Solutions in Uganda',
    description: 'Uganda\'s premier advertising agency offering innovative outdoor advertising, experiential marketing, branding, and media solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Primax Advertising',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Primax - Outdoor Advertising & Marketing Solutions in Uganda',
    description: 'Uganda\'s premier advertising agency offering innovative outdoor advertising, experiential marketing, branding, and media solutions.',
    images: ['/og-image.png'],
    creator: '@primaxadvertising',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#255498',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Primax Advertising',
    url: 'https://primaxadvertising.com',
    logo: 'https://primaxadvertising.com/logo.png',
    description: 'Uganda\'s leading outdoor advertising and experiential marketing company',
    sameAs: [
      'https://www.facebook.com/primaxadvertising',
      'https://www.instagram.com/primaxadvertising',
      'https://www.linkedin.com/company/primax-advertising',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kampala',
      addressLocality: 'Kampala',
      addressRegion: 'Central',
      addressCountry: 'UG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+256-766-808-484',
      email: 'primaxoutdooradvertising@gmail.com',
      areaServed: 'UG',
      availableLanguage: ['en'],
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://primaxadvertising.com/#contact',
      },
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

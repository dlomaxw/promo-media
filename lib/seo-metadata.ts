export const servicesMetadata = {
  'branding-marketing': {
    title: 'Branding & Marketing Solutions | Primax Advertising Uganda',
    description: 'Professional branding and marketing services including building facade branding, corporate identity solutions, large format printing, and point of sale displays in Uganda.',
    keywords: ['branding solutions Uganda', 'corporate identity', 'facade branding', 'large format printing', 'marketing solutions Kampala'],
    schema: {
      '@type': 'Service',
      name: 'Branding & Marketing',
      description: 'Comprehensive branding and marketing solutions including building facade branding, corporate identity, large format printing, and point of sale displays.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Primax Advertising',
      },
      areaServed: 'UG',
    },
  },
  'service-stations': {
    title: 'Service Station Solutions | Primax Advertising Uganda',
    description: 'Complete service station branding and installation services including fuel station branding, MotoCare service bay setup, and convenience store branding solutions.',
    keywords: ['service station branding', 'fuel station solutions Uganda', 'MotoCare branding', 'service station design', 'petrol station marketing'],
    schema: {
      '@type': 'Service',
      name: 'Service Station Solutions',
      description: 'Complete service station branding and installation including fuel station designs, MotoCare service bays, and convenience store branding.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Primax Advertising',
      },
      areaServed: 'UG',
    },
  },
  'educational-partnerships': {
    title: 'School Activations & Educational Marketing | Primax Uganda',
    description: 'Educational institution partnerships including school signage solutions, payment integration systems, campus branding, and educational campaigns.',
    keywords: ['school activations Uganda', 'educational marketing', 'school signage', 'campus branding', 'educational campaigns'],
    schema: {
      '@type': 'Service',
      name: 'Educational Institution Partnerships',
      description: 'School activations and educational marketing solutions including signage, payment systems, campus branding, and campaigns.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Primax Advertising',
      },
      areaServed: 'UG',
    },
  },
  'technical-installations': {
    title: 'Technical Installation Services | Primax Advertising Uganda',
    description: 'Professional technical installation services including DSTV satellite installations, safety storage solutions, parking management systems, and custom technical solutions.',
    keywords: ['DSTV installation Uganda', 'parking management', 'technical solutions', 'safety storage', 'installation services Kampala'],
    schema: {
      '@type': 'Service',
      name: 'Technical Installations',
      description: 'Professional technical installation services including DSTV, parking management systems, safety storage solutions, and custom installations.',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Primax Advertising',
      },
      areaServed: 'UG',
    },
  },
}

export const generateServiceSchema = (serviceName: string) => {
  const metadata = servicesMetadata[serviceName as keyof typeof servicesMetadata]
  return {
    '@context': 'https://schema.org',
    ...metadata?.schema,
  }
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What outdoor advertising services does Primax offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primax offers comprehensive advertising services including branding and marketing, service station solutions, educational institution partnerships, and technical installations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Primax serve all of Uganda?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Primax serves clients throughout Uganda with headquarters in Kampala.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I get a free quote from Primax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can get a free consultation and quote by visiting our website contact form or calling +256 766 808 484.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is HSEQ compliance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HSEQ refers to Health, Safety, Environment, and Quality compliance. Primax maintains strict HSEQ policies to ensure safe and sustainable operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Primax handle 3D cinema experiences?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Primax specializes in creating 3D cinematic experiences as part of our experiential marketing services.',
      },
    },
  ],
}

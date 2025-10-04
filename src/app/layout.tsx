import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'WhatIfStudio.art - Rewriting Sad Endings Beautifully',
  description: 'WhatIfStudio.art uses AI to reimagine sad endings into beautiful alternate timelines. Experience cinematic storytelling that transforms despair into hope through innovative technology.',
  keywords: ['AI', 'filmmaking', 'storytelling', 'alternate timelines', 'cinematic', 'technology'],
  authors: [{ name: 'WhatIfStudio' }],
  creator: 'WhatIfStudio',
  publisher: 'WhatIfStudio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://whatifstudio.art'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'WhatIfStudio.art - Rewriting Sad Endings Beautifully',
    description: 'WhatIfStudio.art uses AI to reimagine sad endings into beautiful alternate timelines. Experience cinematic storytelling that transforms despair into hope through innovative technology.',
    url: 'https://whatifstudio.art',
    siteName: 'WhatIfStudio.art',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WhatIfStudio.art - Rewriting Sad Endings Beautifully',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatIfStudio.art - Rewriting Sad Endings Beautifully',
    description: 'WhatIfStudio.art uses AI to reimagine sad endings into beautiful alternate timelines. Experience cinematic storytelling that transforms despair into hope through innovative technology.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

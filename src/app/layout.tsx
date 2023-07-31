// React
import React from 'react'

// Next
import type { Metadata } from 'next'
import { inject } from '@vercel/analytics'
import { Fira_Code, Inter } from 'next/font/google'

// Styles
import '@/styles/globals.css'

// Context
import ThemeProvider from '@/context'

// Vercel Analytics
inject()

// Metadata
export const metadata: Metadata = {
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript', 'TypeScript', 'Portfolio', 'Front-End'],
  authors: [{ name: 'Carlos', url: 'https://carlosmrtzo.com/' }],
  creator: 'Carlos Martínez',
  manifest: '/manifest.webmanifest',
  category: 'portfolio',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  title: 'Carlos Martínez',
  description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
  openGraph: {
    title: 'Carlos Martínez',
    description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
    images: '/images/opengraph-image.png',
    url: 'https://carlosmrtzo.com/',
    siteName: 'Carlos Martínez',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@devilsncry3',
    title: 'Carlos Martínez',
    description: 'Front-End Developer passionate about creating web pages that stand out for their great style.',
    images: '/images/twitter-image.png'
  },
  icons: {
    shortcut: { url: '/icons/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    icon: [
      { url: '/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/favicon-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icons/favicon-128.png', sizes: '128x128', type: 'image/png' },
      { url: '/icons/android-icon-192.png', sizes: '192x192', type: 'image/png' }
    ],
    apple: [
      { url: '/icons/apple-touch-icon-60.png', sizes: '60x60', type: 'image/png' },
      { url: '/icons/apple-touch-icon-76.png', sizes: '76x76', type: 'image/png' },
      { url: '/icons/apple-touch-icon-120.png', sizes: '120x120', type: 'image/png' },
      { url: '/icons/apple-touch-icon-150.png', sizes: '150x150', type: 'image/png' },
      { url: '/icons/apple-touch-icon-152.png', sizes: '152x152', type: 'image/png' }
    ]
  }
}

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap'
})

// Layout
export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`page ${inter.variable} ${firaCode.variable}`}>
      <body className="body">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

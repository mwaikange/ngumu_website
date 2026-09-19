import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins'
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "Ngumu's Eye - Community Safety Platform",
  description: "Ngumu's Eye is a trusted community safety platform that helps you report incidents, track verification, and stay informed about what's happening in your neighborhood.",
  generator: 'v0.app',
  keywords: ['community safety', 'incident reporting', 'safety app', 'community alerts', 'Namibia', 'privacy policy', 'account removal'],
  authors: [{ name: "Ngumu's Eye" }],
  creator: "Ngumu's Eye",
  publisher: "Ngumu's Eye",
  metadataBase: new URL('https://web.ngumus-eye.site'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://web.ngumus-eye.site',
    siteName: "Ngumu's Eye",
    title: "Ngumu's Eye - Community Safety Platform",
    description: "Report incidents, verify information, and stay connected with your neighborhood. Join the trusted community safety network.",
    images: [
      {
        url: '/og-image.png',
        width: 800,
        height: 800,
        alt: "Ngumu's Eye - Community Safety Platform",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ngumu's Eye - Community Safety Platform",
    description: "Report incidents, verify information, and stay connected with your neighborhood. Join the trusted community safety network.",
    images: ['/og-image.png'],
    creator: '@ngumuseye',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

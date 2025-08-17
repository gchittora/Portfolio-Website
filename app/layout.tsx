import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Garvit Chittora - Platform Engineer',
  description: 'Platform Engineer Intern at EagleView | B.Tech CSE from LNMIIT | Building scalable cloud solutions and automation tools',
  keywords: ['Platform Engineer', 'Cloud Computing', 'DevOps', 'AWS', 'Software Engineer', 'Garvit Chittora'],
  authors: [{ name: 'Garvit Chittora' }],
  creator: 'Garvit Chittora',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://garvitchittora.dev',
    title: 'Garvit Chittora - Platform Engineer',
    description: 'Platform Engineer Intern at EagleView | Building scalable cloud solutions',
    siteName: 'Garvit Chittora Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garvit Chittora - Platform Engineer',
    description: 'Platform Engineer Intern at EagleView | Building scalable cloud solutions',
    creator: '@garvitchittora',
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
      <body className={`${inter.className} antialiased`}>
        <div className="relative min-h-screen">
          {/* Background gradient */}
          <div className="fixed inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-dark-300 -z-10" />
          
          {/* Animated background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
          
          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/site'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
  weight: ['500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: '--font-serif-display',
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Cobalt Analytix | Consumer Intelligence Platform',
  description: 'Cobalt Analytix turns blind sensory panels into scored, queryable intelligence — so FMCG teams launch products people love, not products they assume will work.',
  keywords: ['FMCG market research', 'consumer intelligence', 'sensory testing', 'product stickiness score', 'blind taste test', 'consumer panel India', 'RAG AI assistant'],
  openGraph: {
    title: 'Cobalt Analytix | Do you really know what your consumer will stick to?',
    description: 'Blind sensory panels with quantified loyalty scoring and AI-queryable panel data for FMCG teams.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Cobalt Analytix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cobalt Analytix | Do you really know what your consumer will stick to?',
    description: 'Blind sensory panels with quantified loyalty scoring and AI-queryable panel data for FMCG teams.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-sans antialiased overflow-x-clip" style={{ background: '#FFFEFF', color: '#001081' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

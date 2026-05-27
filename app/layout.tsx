import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'Discover by ForecastHUB | Consumer Intelligence Platform',
  description: 'Discover turns blind sensory panels into scored, queryable intelligence — so FMCG teams launch products people love, not products they assume will work.',
  keywords: ['FMCG market research', 'consumer intelligence', 'sensory testing', 'product stickiness score', 'blind taste test', 'consumer panel India', 'RAG AI assistant'],
  openGraph: {
    title: 'Discover | Do you really know what your consumer will stick to?',
    description: 'Blind sensory panels with quantified loyalty scoring and AI-queryable panel data for FMCG teams.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden" style={{ background: '#FFFEFF', color: '#001081' }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

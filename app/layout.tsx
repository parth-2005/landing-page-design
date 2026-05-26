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
  title: 'ForecastHUB | Blind Sensory Testing & Stickiness Scoring for FMCG',
  description: 'ForecastHUB runs double-blind sensory panels on FMCG products and delivers scored insights, an AI assistant over your panel data, and strategy recommendations — so brand and R&D teams launch with evidence.',
  keywords: ['FMCG market research', 'sensory testing', 'product stickiness score', 'blind taste test', 'consumer panel India', 'RAG research assistant'],
  openGraph: {
    title: 'ForecastHUB | Know which product wins before launch',
    description: 'Blind sensory panels with quantified loyalty scoring and AI-queryable panel data.',
    type: 'website',
  },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900 overflow-x-clip">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

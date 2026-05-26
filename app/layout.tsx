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
  title: 'Logiq | Premium Blind Sensory + Predictive Consumer Intelligence',
  description: 'Logiq helps FMCG brands see which products will win before launch with blind sensory testing, stickiness scoring, and board-ready pilot readouts.',
  keywords: ['FMCG market research', 'sensory testing', 'product stickiness score', 'blind taste test', 'consumer panel', 'predictive consumer intelligence'],
  openGraph: {
    title: 'Logiq | Know which products will win before launch',
    description: 'Blind sensory panels with quantified stickiness scoring and decision-ready pilot readouts.',
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

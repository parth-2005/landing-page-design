import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { FirstPrinciples } from '@/components/first-principles'
import { Deliverables } from '@/components/deliverables'
import { Scrollytelling } from '@/components/scrollytelling'
import { Methodology } from '@/components/methodology'
import { BentoGrid } from '@/components/bento-grid'
import { CaseStudy } from '@/components/case-study'
import { Highlights } from '@/components/highlights'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Ticker />
      <FirstPrinciples />
      <Deliverables />
      <Scrollytelling />
      <Methodology />
      <BentoGrid />
      <CaseStudy />
      <Highlights />
      <Footer />
    </main>
  )
}

import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Ticker } from '@/components/ticker'
import { FirstPrinciples } from '@/components/first-principles'
import { Deliverables } from '@/components/deliverables'
import { Scrollytelling } from '@/components/scrollytelling'
import { Methodology } from '@/components/methodology'
import { DarkCtaStrip } from '@/components/dark-cta-strip'
import { BentoGrid } from '@/components/bento-grid'
import { CaseStudy } from '@/components/case-study'
import { PilotStudyResults } from '@/components/highlights'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Ticker />
      <FirstPrinciples />
      <Deliverables />
      <Scrollytelling />
      <Methodology />
      <DarkCtaStrip />
      <BentoGrid />
      <PilotStudyResults />
      <CaseStudy />
      <Footer />
    </main>
  )
}

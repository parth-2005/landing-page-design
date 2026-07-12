'use client'

import { FAQ } from '@/components/faq'
import { BentoSolutions } from '@/components/enterprise/bento-solutions'
import { HeroSection } from '@/components/enterprise/hero-section'
import { HowItWorks } from '@/components/enterprise/how-it-works'
import { JoinUs } from '@/components/enterprise/join-us'
import { ResultsSection } from '@/components/enterprise/results-section'
import { TrendingInsights } from '@/components/enterprise/trending-insights'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function EnterpriseLanding() {
  return (
    <main className="overflow-x-clip bg-[#FFFEFF] text-[#001081]">
      <SiteHeader variant="landing" />
      <HeroSection />
      <HowItWorks />
      <ResultsSection />
      <BentoSolutions />
      <TrendingInsights />
      <FAQ />
      <JoinUs />
      <SiteFooter />
    </main>
  )
}

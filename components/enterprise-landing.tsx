'use client'

import { ChatWidget } from '@/components/chat-widget'
import { FAQ } from '@/components/faq'
import { BentoSolutions } from '@/components/enterprise/bento-solutions'
import { FullView } from '@/components/enterprise/full-view'
import { HeroSection } from '@/components/enterprise/hero-section'
import { IntelligenceHighlights } from '@/components/enterprise/intelligence-highlights'
import { JoinUs } from '@/components/enterprise/join-us'
import { TrendingInsights } from '@/components/enterprise/trending-insights'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export function EnterpriseLanding() {
  return (
    <main className="overflow-x-clip bg-[#FFFEFF] text-[#001081]">
      <SiteHeader variant="landing" />
      <HeroSection />
      <IntelligenceHighlights />
      <TrendingInsights />
      <JoinUs />
      <FullView />
      <BentoSolutions />
      <FAQ />
      <SiteFooter />
      <ChatWidget />
    </main>
  )
}

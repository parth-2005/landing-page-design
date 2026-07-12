'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function FAQ() {
  return (
    <section id="faq" className="border-t border-[color:var(--line)] bg-[color:var(--paper)] py-[clamp(96px,12vw,140px)]">
      <div className="section-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal variant="fade-up" className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-6">Common questions</p>
          <h2
            className="font-serif text-[clamp(30px,3.6vw,46px)] font-normal leading-[1.08] tracking-[-0.015em] text-[color:var(--ink)]"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            Before the first call.
          </h2>
          <p className="mt-6 max-w-[340px] text-[15px] leading-[1.7] text-[color:var(--ink)]/55">
            Don&apos;t see yours?{' '}
            <a href="#join" className="font-semibold text-[#2C6DF6] hover:text-[#0A1A38]">
              Get in touch
            </a>
            .
          </p>
        </Reveal>

        <Reveal variant="fade-up" delay={0.1}>
          <Accordion type="single" collapsible className="space-y-0">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-[color:var(--line-strong)] first:border-t first:border-t-[color:var(--line-strong)]"
              >
                <AccordionTrigger
                  className="py-5 text-left text-[16px] font-semibold text-[color:var(--ink)]
                             hover:no-underline hover:text-[#2C6DF6] transition-colors"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-6 text-[14.5px] leading-[1.75] text-[color:var(--ink)]/60">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

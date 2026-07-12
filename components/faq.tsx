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
    <section id="faq" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container flex flex-wrap gap-14">
        <Reveal variant="slide-left" className="flex-[1_1_300px]">
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
            FAQ
          </p>
          <h2
            className="text-[clamp(26px,3.2vw,36px)] font-bold tracking-[-0.02em] text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Questions before the first call.
          </h2>
          <p className="mt-[18px] max-w-[340px] text-[14.5px] text-[#001081]/50">
            Don&apos;t see yours?{' '}
            <a href="#join" className="font-semibold text-[#2C6DF6]">
              Get in touch
            </a>
            .
          </p>
        </Reveal>

        <Reveal variant="slide-right" delay={0.1} className="flex-[2_1_420px]">
          <Accordion type="single" collapsible className="space-y-0">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-[#001081]/10 py-1"
              >
                <AccordionTrigger
                  className="py-4 text-left text-[15px] font-semibold text-[#001081]
                             hover:no-underline hover:text-[#2C6DF6] transition-colors"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-[1.7] text-[#001081]/50">
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

'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Can we customise the scoring weights for our category?',
    a: 'Yes. The scoring framework applies category, channel, and demographic modifiers. Before a study begins, we align on the weights that reflect your commercial priorities — you are not locked into a generic model.',
  },
  {
    q: 'What is the minimum number of SKUs per study?',
    a: 'A study requires at least two SKUs for meaningful comparative scoring. Our pilot ran four. There is no fixed upper limit, though more SKUs require proportionally larger panel sessions to maintain statistical confidence.',
  },
  {
    q: 'How do you prevent panelists from recognising brand cues?',
    a: 'All samples are presented without packaging, brand markings, or contextual cues. Panelists evaluate only the product — taste, texture, aroma, and mouthfeel — under controlled conditions. This is the foundation of the blind protocol.',
  },
  {
    q: 'How is the honesty check enforced?',
    a: 'Responses are screened for internal consistency. A panelist who rates a sample identically across every attribute, or whose responses show no variance across SKUs, is flagged and their data is down-weighted by the confidence multiplier before it reaches the final score.',
  },
  {
    q: 'Can we query our study data after delivery?',
    a: 'Yes. Every study includes access to Ask the Data — a private AI assistant trained on your panel responses. You can query attribute-level results, compare segments, or ask follow-up questions that were not in the original study brief.',
  },
  {
    q: 'Do you cover categories beyond snacks?',
    a: 'The current pilot is in the savoury snack category. The methodology is category-agnostic — the scoring framework applies to any product where sensory attributes drive repeat purchase. We are actively running studies in adjacent categories.',
  },
]

export function FAQ() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl"
        >
          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            <span className="h-px w-8 bg-slate-300" />
            <span>Common questions</span>
          </div>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 lg:text-5xl">
            Questions we get asked before the first call.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="py-5 text-left text-sm font-semibold text-slate-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-7 text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
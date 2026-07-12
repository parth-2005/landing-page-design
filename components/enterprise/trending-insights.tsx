'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { TRENDING_ARTICLES } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function TrendingInsights() {
  const [featured, ...rest] = TRENDING_ARTICLES

  return (
    <section id="research" className="border-t border-[color:var(--line)] bg-[color:var(--paper-white)] py-[clamp(96px,12vw,140px)]">
      <div className="section-container">
        <Reveal variant="fade-up" className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-6">Research</p>
            <h2
              className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.015em] text-[color:var(--ink)]"
              style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
            >
              Perspectives.
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#2C6DF6] transition-colors hover:text-[#0A1A38]"
          >
            All perspectives
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.15fr_0.85fr]">
          {featured && (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={featured.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <span className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[0.14em] text-[#2C6DF6]">
                  {featured.tag}
                </span>
                <h3
                  className="mt-3 text-[26px] font-normal leading-[1.2] tracking-[-0.01em] text-[color:var(--ink)] transition-colors group-hover:text-[#2C6DF6]"
                  style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
                >
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[color:var(--ink)]/55">{featured.excerpt}</p>
              </Link>
            </motion.article>
          )}

          <div className="flex flex-col">
            {rest.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="border-t border-[color:var(--line)] py-6 first:border-t-0 first:pt-0"
              >
                <Link href={article.href} className="group grid grid-cols-[1fr_auto] items-start gap-5">
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#2C6DF6]">{article.tag}</span>
                    <h3 className="mt-2 text-[16.5px] font-semibold leading-[1.4] tracking-[-0.01em] text-[color:var(--ink)] transition-colors group-hover:text-[#2C6DF6]">
                      {article.title}
                    </h3>
                  </div>
                  <div className="relative h-[68px] w-[92px] shrink-0 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

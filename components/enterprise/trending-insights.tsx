'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { TRENDING_ARTICLES } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function TrendingInsights() {
  return (
    <section id="research" className="border-t border-[#001081]/7 bg-[#FFFEFF] py-[110px]">
      <div className="section-container">
        <Reveal variant="slide-left" className="mx-auto mb-16 max-w-[600px]">
          <p className="mb-3 text-[12.5px] font-bold uppercase tracking-[0.16em] text-[#2C6DF6]">
            Research
          </p>
          <h2
            className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-[#001081]"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Latest thinking.
          </h2>
        </Reveal>

        <div className="grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {TRENDING_ARTICLES.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={article.href} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <span className="mt-[18px] inline-block text-[11px] font-bold uppercase tracking-[0.06em] text-[#2C6DF6]">
                  {article.tag}
                </span>
                <h3 className="mt-2.5 mb-2 text-[17px] font-bold leading-[1.4] text-[#001081]">
                  {article.title}
                </h3>
                <p className="text-[13.5px] leading-[1.6] text-[#001081]/50">{article.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

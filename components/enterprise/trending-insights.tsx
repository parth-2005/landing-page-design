'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { TRENDING_ARTICLES } from '@/lib/enterprise-content'

export function TrendingInsights() {
  const [featured, secondary, tertiary] = TRENDING_ARTICLES

  return (
    <section id="research" className="bg-[#F2F3F3] py-20 lg:py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
              Trending
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#001081] lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Latest Insights
            </h2>
          </div>
          <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6] transition-colors hover:text-[#001081]">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link href={featured.href} className="group block overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#001081]/5">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001081]/45 via-transparent to-transparent" />
              </div>
              <div className="p-6 lg:p-8">
                <span className="inline-flex rounded-full bg-[#2C6DF6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2C6DF6]">
                  {featured.tag}
                </span>
                <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-[#001081] lg:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#001081]/55">
                  {featured.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2C6DF6]">
                  Read article
                  <ChevronRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </motion.article>

          <div className="grid gap-6">
            {[secondary, tertiary].map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <Link href={article.href} className="group flex h-full gap-5 overflow-hidden rounded-3xl border border-[#001081]/8 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="relative min-h-[140px] w-[40%] overflow-hidden rounded-2xl bg-[#001081]/5 sm:w-[38%] lg:w-[42%]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-1">
                    <div>
                      <span className="inline-flex rounded-full bg-[#2C6DF6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#2C6DF6]">
                        {article.tag}
                      </span>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-[#001081] group-hover:text-[#2C6DF6]">
                        {article.title}
                      </h3>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#2C6DF6]">
                      Read More
                      <ChevronRight className="h-4 w-4" />
                    </div>
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

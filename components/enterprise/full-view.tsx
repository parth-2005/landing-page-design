'use client'

import Link from 'next/link'
import { Search, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { FULL_VIEW_FEATURES, FULL_VIEW_POINTS } from '@/lib/enterprise-content'

export function FullView() {
  return (
    <section className="bg-[#FFFEFF] py-20 lg:py-28">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
              Comprehensive Coverage
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#001081] leading-[1.15] lg:text-5xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
              Get the Full View of Your Industry
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#001081]/55">
              From consumer taste profiles to pricing dynamics and channel behaviour — Discover provides a 360° intelligence layer that traditional research can't match.
            </p>

            <ul className="mt-8 space-y-4">
              {FULL_VIEW_FEATURES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2C6DF6]/10">
                    <div className="h-2 w-2 rounded-full bg-[#2C6DF6]" />
                  </div>
                  <span className="text-sm text-[#001081]/70">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="https://calendly.com/pjpanot260305/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-gradient-to-br from-[#F2F3F3] to-[#E5E7E8] p-8 lg:p-12">
              <div className="relative mx-auto h-64 w-64 lg:h-80 lg:w-80">
                {[1, 2, 3, 4].map((ring) => (
                  <motion.div
                    key={ring}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: ring * 0.12 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      className="rounded-full border-2 border-[#2C6DF6]"
                      style={{
                        width: `${ring * 25}%`,
                        height: `${ring * 25}%`,
                        opacity: 1 - ring * 0.2,
                        borderStyle: ring % 2 === 0 ? 'dashed' : 'solid',
                      }}
                    />
                  </motion.div>
                ))}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2C6DF6] shadow-lg">
                    <Search className="h-6 w-6 text-white" />
                  </div>
                </div>

                {FULL_VIEW_POINTS.map((point, i) => (
                  <motion.div
                    key={point.label}
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute rounded-full border border-[#001081]/8 bg-white px-3 py-1.5 text-[11px] font-bold text-[#001081] shadow-md"
                    style={{ ...point }}
                  >
                    {point.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

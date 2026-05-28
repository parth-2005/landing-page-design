'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

import { AnimatedCounter } from './animated-counter'
import { HERO_BACKGROUND } from '@/lib/enterprise-content'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden py-24 lg:py-28"
      style={{ background: HERO_BACKGROUND }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,254,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#2C6DF6]/15 blur-[120px]" />

      <div className="section-container relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-6xl"
              style={{ fontFamily: 'var(--font-plus-jakarta, system-ui, sans-serif)' }}
            >
              Do you{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6B9FFF] to-[#2C6DF6]">
                really know
              </span>{' '}
              what your consumer will stick to?
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/65">
              Blind sensory panels. Scored results. AI-queryable data — so your team launches what people actually come back for.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://calendly.com/pjpanot260305/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#solutions" className="btn-outline-white">
                Explore Solutions
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-8 text-sm text-white/50">
              <div>
                <span className="block text-2xl font-bold text-white">
                  <AnimatedCounter target={44} />
                </span>
                Panelists Verified
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <span className="block text-2xl font-bold text-white">
                  <AnimatedCounter target={76.56} decimals={1} suffix="%" />
                </span>
                Stickiness Score
              </div>
              <div className="hidden h-8 w-px bg-white/15 sm:block" />
              <div className="hidden sm:block">
                <span className="block text-2xl font-bold text-white">4</span>
                SKUs Tested
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2C6DF6]/20 blur-[80px]" />

            <div className="relative" style={{ animation: 'float 4s ease-in-out infinite' }}>
              <Image
                src="/images/mascot-removebg-preview.png"
                alt="Discover AI Mascot"
                width={420}
                height={420}
                className="relative drop-shadow-2xl"
                priority
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 top-8 rounded-2xl border border-[#001081]/5 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm lg:-left-20 lg:top-5"
              >
                <p className="text-lg font-bold text-[#001081]">Which flavor drives repeat buys?</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -right-4 bottom-16 rounded-2xl border border-[#001081]/5 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm lg:-right-20 lg:bottom-10"
              >
                <p className="text-lg font-bold text-[#2C6DF6]">Is the onion too strong?</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

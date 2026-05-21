'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HeroRight } from './hero-right'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [s3Value, setS3Value] = useState(0)
  const [walkToShop, setWalkToShop] = useState(0)
  const [s4Value, setS4Value] = useState(0)
  const [oilPenalty, setOilPenalty] = useState(0)

  useEffect(() => {
    const animateValue = (start: number, end: number, setter: (val: number) => void, duration: number) => {
      const startTime = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setter(start + (end - start) * progress)
        if (progress < 1) requestAnimationFrame(animate)
      }
      animate()
    }

    setTimeout(() => {
      animateValue(0, 76.56, setS3Value, 1500)
      animateValue(0, 58, setWalkToShop, 1500)
      animateValue(0, 42.19, setS4Value, 1500)
      animateValue(0, -1.33, setOilPenalty, 1500)
    }, 400)
  }, [])

  return (
    <section className="min-h-screen pt-30 pb-20 bg-white relative overflow-hidden flex items-center px-12">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue/5 rounded-full blur-3xl pointer-events-none -top-32 -right-40" />

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(10,25,47,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          {/* Announcement Pill */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 bg-blue-light border border-blue/20 rounded-full px-3.5 py-1.5 mb-7"
          >
            <div className="w-5.5 h-5.5 bg-blue rounded-full flex items-center justify-center text-white text-xs">
              <span className="animate-pulse">✦</span>
            </div>
            <span className="text-xs font-semibold text-blue-mid tracking-wide">
              ForecastHUB Engine v2 · Pilot live
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-serif text-5xl lg:text-7xl font-800 leading-tight tracking-tighter text-navy mb-6"
          >
            The product that wins isn&apos;t the one they stayed for.{' '}
            <span className="relative">
              stayed
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded origin-left"
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-lg text-navy-mid leading-relaxed mb-10 max-w-lg"
          >
            Logiq strips away brand equity to reveal what actually drives repeat purchase. Our ForecastHUB™ framework delivers mathematical commercial loyalty scores from double-blind sensory testing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex items-center gap-3.5 mb-13"
          >
            <button className="btn-primary">
              Request a Study <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">View pilot report</button>
          </motion.div>

          {/* Stats Strip */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-8 divide-x divide-off2"
          >
            <div>
              <div className="font-serif text-3xl font-800 text-navy">44</div>
              <div className="text-xs text-navy-mid font-medium mt-1">Field nodes</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-navy">176</div>
              <div className="text-xs text-navy-mid font-medium mt-1">Blind evaluations</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-navy">4</div>
              <div className="text-xs text-navy-mid font-medium mt-1">SKUs ranked</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Dashboard */}
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(32px)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <HeroRight s3Value={s3Value} s4Value={s4Value} walkToShop={walkToShop} oilPenalty={oilPenalty} />
        </motion.div>
      </div>
    </section>
  )
}

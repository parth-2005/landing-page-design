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
    <section 
      className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center px-12"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >

      {/* Layer 1: Color Tint */}
      <div className="absolute inset-0 z-1 bg-blue-900/10 mix-blend-multiply" />

      {/* Layer 2: Gradient Fade (hard-stop left to transparent right) */}
      <div className="absolute inset-0 z-2 bg-gradient-to-r from-white via-white/95 to-transparent" />

      {/* Layer 3: Accent Glow */}
      <div className="absolute top-0 right-1/4 w-full h-96 bg-blue-400/20 blur-[120px] z-3 pointer-events-none" />

      {/* Content Container */}
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

          {/* H1 - Massive, dominant, high-contrast */}
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-serif text-5xl lg:text-[4.2rem] leading-[1.05] tracking-tighter text-slate-900 mb-6 font-800"
          >
            The product that wins isn&apos;t the one they{' '}
            <span className="relative">
              stay for
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-accent rounded origin-left"
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Subheading - Easily readable, proper contrast */}
          <motion.p
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="text-lg font-medium text-slate-700 leading-relaxed mb-10 max-w-lg"
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
            <button className="btn-primary shadow-lg shadow-navy/20">
              Request a Study <ArrowRight className="w-4 h-4" />
            </button>
            <button className="btn-secondary">View pilot report</button>
          </motion.div>

          {/* Stats Strip - High contrast */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="flex items-center gap-8 divide-x divide-off2 mb-12"
          >
            <div>
              <div className="font-serif text-3xl font-800 text-slate-900">44</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Field nodes</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-slate-900">176</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Blind evaluations</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-slate-900">4</div>
              <div className="text-xs text-slate-600 font-medium mt-1">SKUs ranked</div>
            </div>
          </motion.div>

          {/* Social Proof - Trusted by */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="border-t border-off2 pt-8"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-slate-600 mb-3">Trusted by teams at</p>
            <div className="flex items-center gap-6">
              {['Nestlé', 'Unilever', 'PepsiCo', 'Kraft Heinz', 'Danone'].map((brand, idx) => (
                <div key={idx} className="text-sm font-semibold text-slate-400 opacity-75 hover:opacity-100 transition-opacity">
                  {brand}
                </div>
              ))}
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

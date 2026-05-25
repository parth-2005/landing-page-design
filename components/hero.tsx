'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { HeroRight } from './hero-right'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [stickinessScore, setStickinessScore] = useState(0)
  const [priceLoyalty, setPriceLoyalty] = useState(0)
  const [walkToShop, setWalkToShop] = useState(0)
  const [sampleFour, setSampleFour] = useState(0)
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
      animateValue(0, 76.56, setStickinessScore, 1500)
      animateValue(0, 68, setPriceLoyalty, 1500)
      animateValue(0, 39, setWalkToShop, 1500)
      animateValue(0, -1.33, setOilPenalty, 1500)
      animateValue(0, -1.41, setSampleFour, 1500)
    }, 400)
  }, [])

  return (
    <section 
      className="min-h-screen pt-32 pb-20 relative overflow-hidden flex items-center px-12"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070&auto=format&fit=crop)',
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
            <div className="w-5.5 h-5.5 bg-blue rounded-full flex items-center justify-center text-slate-50 text-xs">
              <span className="animate-pulse">✦</span>
            </div>
            <span className="text-xs font-semibold text-slate-700 tracking-wide">
              Pilot Study #001 · Cream & Onion Wafers · May 2026
            </span>
          </motion.div>

          {/* H1 - Massive, dominant, high-contrast */}
          <motion.h1
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="font-serif text-5xl lg:text-[4.2rem] leading-[1.05] tracking-tighter text-slate-900 mb-6 font-800"
          >
            The product that wins isn&apos;t the one they say they like. It&apos;s the one they{' '}
            <span className="relative">
              buy again
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
            ForecastHUB strips away brand equity to reveal what actually drives repeat purchase in cream & onion wafers. The pilot below shows the product story in the numbers: price loyalty, walk-to-shop behavior, and attribute penalties that predict commercial verdicts.
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
              <div className="text-xs text-slate-600 font-medium mt-1">Panelists</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-slate-900">68%</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Price loyalty</div>
            </div>
            <div className="pl-8">
              <div className="font-serif text-3xl font-800 text-slate-900">39%</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Walk-to-shop</div>
            </div>
          </motion.div>

          {/* Methodology credibility bar */}
          <motion.div
            initial={{ opacity: 0, transform: 'translateY(24px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="border-t border-off2 pt-8"
          >
            <p className="text-xs uppercase tracking-widest font-semibold text-slate-600 mb-3">Methodology credibility</p>
            <div className="flex flex-wrap items-center gap-3">
              {['ISO 11136', 'n=44 panelists', 'Double-blind', '95% confidence intervals', '4 SKUs tested'].map((label, idx) => (
                <div key={idx} className="rounded-full border border-off2 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                  {label}
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
          <HeroRight stickinessScore={stickinessScore} priceLoyalty={priceLoyalty} walkToShop={walkToShop} sampleFour={sampleFour} oilPenalty={oilPenalty} />
        </motion.div>
      </div>
    </section>
  )
}

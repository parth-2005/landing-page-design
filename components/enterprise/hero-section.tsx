'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import { CALENDLY_URL, HERO_BACKGROUND, SCORE_BARS } from '@/lib/enterprise-content'
import { TextBlurIn } from '@/components/shared/text-blur-in'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden py-[clamp(128px,20vw,180px)] pb-28 text-white"
      style={{ background: HERO_BACKGROUND }}
    >
      {/* Restrained editorial grid + a single soft cobalt wash — no drifting decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-12%] top-[-10%] h-[620px] w-[620px] rounded-full opacity-70 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(44,109,246,0.18) 0%, transparent 68%)' }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="section-container relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-8 inline-flex items-center gap-2.5 border-l-2 border-[#2C6DF6] pl-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7FA8FF]" style={{ animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">
              Pilot program &mdash; onboarding FMCG partners for Q3 2026
            </span>
          </div>

          <h1
            className="font-serif text-[clamp(40px,5.6vw,72px)] font-normal leading-[1.04] tracking-[-0.015em] text-white"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            <TextBlurIn text="Do you really know what your" immediate as="span" className="block" charStagger={0.012} />
            <TextBlurIn text="consumers will" immediate as="span" className="block" charStagger={0.012} startDelay={0.28} />
            <TextBlurIn
              text="stick to?"
              immediate
              as="span"
              className="block italic text-[#7FA8FF]"
              startDelay={0.55}
              charStagger={0.03}
            />
          </h1>

          <p className="mt-7 max-w-[480px] text-[17px] leading-[1.7] text-white/60">
            Blind sensory panels, confidence-weighted scoring, and AI-queryable panel data &mdash; so your team commits to what people actually return for, not what a focus group assumed.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-6 py-3.5 text-[15px] font-semibold text-[#0A1A38] transition-colors hover:bg-[#E5EBFF]"
            >
              Book a pilot call
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-md border border-white/25 px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/55 hover:bg-white/5"
            >
              Read the methodology
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-white/10 pt-8">
            {[
              { value: '44', label: 'Panelists verified' },
              { value: '~77%', label: 'Stickiness score (n = 44)' },
              { value: '4', label: 'SKUs tested' },
            ].map((stat) => (
              <div key={stat.label}>
                <span
                  className="block text-[28px] font-semibold leading-none text-white"
                  style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
                >
                  {stat.value}
                </span>
                <span className="mt-2 block text-[12.5px] uppercase tracking-[0.08em] text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center lg:justify-end"
        >
          {/* Editorial "report artifact" — sharp corners, hairline rules, no floating pills */}
          <div className="w-full max-w-[420px] border border-white/10 bg-white text-[#0A1A38] shadow-[0_40px_90px_rgba(0,4,30,0.5)]">
            <div className="flex items-center justify-between border-b border-[#0A1A38]/10 px-6 py-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0A1A38]/40">Sample report</p>
                <p className="mt-0.5 text-[13px] font-bold text-[#0A1A38]">Stickiness Score&trade;</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-[#0A1A38]/40">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2C6DF6]" style={{ animation: 'pulse-dot 1.6s ease-in-out infinite' }} />
                Live
              </span>
            </div>

            <div className="px-6 py-6">
              {SCORE_BARS.map((bar, i) => (
                <div key={bar.label} className="mb-4 last:mb-0">
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="text-[12.5px] font-medium text-[#0A1A38]/70">{bar.label}</span>
                    <span className={`text-[12.5px] tabular-nums ${bar.best ? 'font-bold text-[#2C6DF6]' : 'font-semibold text-[#0A1A38]/55'}`}>
                      {bar.best ? `${Math.round(bar.value)}%  ·  Top` : `${Math.round(bar.value)}%`}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden bg-[#0A1A38]/[0.07]">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full ${bar.best ? 'bg-[#2C6DF6]' : 'bg-[#0A1A38]'}`}
                      style={{ opacity: bar.best ? 1 : 0.28 }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-[#0A1A38]/10 px-6 py-3.5 text-[11px] text-[#0A1A38]/45">
              <span>Blind protocol · confidence-weighted</span>
              <span className="tabular-nums">n = 44</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

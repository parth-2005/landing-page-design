'use client'

import { RESULT_STATS } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

export function ResultsSection() {
  const [featured, ...rest] = RESULT_STATS

  return (
    <section id="results" className="bg-[#0A1A38] py-[clamp(96px,12vw,140px)] text-white">
      <div className="section-container">
        <Reveal variant="fade-up" className="mb-16 flex flex-wrap items-end justify-between gap-x-12 gap-y-8">
          <div className="max-w-[520px]">
            <p className="eyebrow mb-6 text-[#7FA8FF] [&::before]:bg-[#7FA8FF]">Pilot findings</p>
            <h2
              className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.06] tracking-[-0.015em] text-white"
              style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
            >
              Findings from the first cohort.
            </h2>
          </div>
          <p className="max-w-[340px] text-[14.5px] leading-[1.7] text-white/50">
            Signals from our Q1 2026 blind sensory pilot &mdash; 44 verified panelists, four SKUs, one category.
          </p>
        </Reveal>

        <div className="grid gap-x-10 gap-y-12 border-t border-white/12 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured && (
            <div className="border-l-2 border-[#2C6DF6] pl-7">
              <div
                className="text-[clamp(56px,7vw,84px)] font-normal leading-none tracking-[-0.02em] text-white"
                style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
              >
                {featured.value}
              </div>
              <p className="mt-6 mb-2 text-[15px] font-semibold text-white">{featured.label}</p>
              <p className="max-w-[300px] text-[14px] leading-[1.65] text-white/50">{featured.desc}</p>
            </div>
          )}

          {rest.map((stat) => (
            <div key={stat.label} className="border-l border-white/15 pl-7">
              <div
                className="text-[clamp(44px,5vw,60px)] font-normal leading-none tracking-[-0.02em] text-white/90"
                style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
              >
                {stat.value}
              </div>
              <p className="mt-5 mb-2 text-[14.5px] font-semibold text-white">{stat.label}</p>
              <p className="max-w-[300px] text-[13.5px] leading-[1.65] text-white/50">{stat.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-white/12 pt-6 text-[12.5px] text-white/35">
          Single-category pilot data. Full methodology and raw panel data available under NDA.
        </p>
      </div>
    </section>
  )
}

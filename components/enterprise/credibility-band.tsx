'use client'

import { Reveal } from '@/components/shared/reveal'

const CREDENTIALS = [
  { value: 'Blind', label: 'Unbranded protocol' },
  { value: 'Weighted', label: 'Confidence-checked responses' },
  { value: 'n = 44', label: 'Verified panelists' },
  { value: 'AI', label: 'Queryable panel data' },
]

/**
 * Sober credibility strip beneath the hero. Stands in for a client logo cloud
 * (no client logos yet) with a positioning statement + protocol credentials.
 */
export function CredibilityBand() {
  return (
    <section className="border-b border-[color:var(--line)] bg-[color:var(--paper-white)] py-14">
      <div className="section-container">
        <Reveal variant="fade-up" className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-[420px] text-[15.5px] leading-[1.65] text-[color:var(--ink)]/70">
            A research method built for one question&nbsp;&mdash; not whether people
            <span className="text-[color:var(--ink)]"> say </span>
            they like a product, but whether they
            <span className="text-[color:var(--ink)]"> come back </span>
            for it.
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-4">
            {CREDENTIALS.map((item) => (
              <div key={item.label} className="border-l border-[color:var(--line-strong)] pl-4">
                <p
                  className="text-[20px] font-semibold leading-none tracking-[-0.01em] text-[color:var(--ink)]"
                  style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
                >
                  {item.value}
                </p>
                <p className="mt-2 text-[12px] leading-snug text-[color:var(--ink)]/50">{item.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

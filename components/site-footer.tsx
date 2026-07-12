import Link from 'next/link'

import { CONTACT_EMAIL, FOOTER_BACKGROUND, FOOTER_LINKS } from '@/lib/enterprise-content'

export function SiteFooter() {
  return (
    <footer style={{ background: FOOTER_BACKGROUND }}>
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-[34px] w-[34px] items-center justify-center bg-white/10 text-[15px] font-semibold text-white" style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}>
                C
              </div>
              <p className="text-[15px] font-semibold text-white" style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}>Cobalt Analytix</p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              The intelligence layer for FMCG teams who need faster formulation decisions and defensible product launches backed by real consumer data.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white transition-colors hover:text-[#A5C4FF]">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('mailto:') ? (
                      <a href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">© 2026 Cobalt Analytix. All rights reserved.</p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link href="/privacy" className="transition-colors hover:text-white/60">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/60">Terms</Link>
            <Link href="/security" className="transition-colors hover:text-white/60">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

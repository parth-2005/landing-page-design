'use client'

import Link from 'next/link'
import { Linkedin, Twitter } from 'lucide-react'

import { FOOTER_BACKGROUND, FOOTER_LINKS } from '@/lib/enterprise-content'

export function Footer() {
  return (
    <footer id="contact" style={{ background: FOOTER_BACKGROUND }}>
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white">
                D
              </div>
              <div>
                <p className="text-sm font-bold text-white">Discover</p>
                <p className="text-[11px] text-white/40">by ForecastHUB</p>
              </div>
            </div>
            <p className="max-w-sm leading-relaxed text-sm text-white/45">
              The intelligence layer for FMCG teams who need faster formulation decisions and defensible product launches backed by real consumer data.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="ForecastHUB on LinkedIn" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 transition-colors hover:bg-white/15 hover:text-white">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" aria-label="ForecastHUB on X" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 text-white/50 transition-colors hover:bg-white/15 hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/35">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => {
                  const href =
                    link === 'FAQ' ? '#faq' :
                    link === 'Blog' ? '/blogs' :
                    link === 'Contact' ? '#contact' :
                    link === 'Careers' ? 'mailto:careers@forecasthub.in' :
                    '#'

                  return (
                    <li key={link}>
                      {href.startsWith('mailto:') ? (
                        <a href={href} className="text-sm text-white/50 transition-colors hover:text-white">
                          {link}
                        </a>
                      ) : (
                        <Link href={href} className="text-sm text-white/50 transition-colors hover:text-white">
                          {link}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-white/30">© 2026 ForecastHUB. All rights reserved.</p>
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

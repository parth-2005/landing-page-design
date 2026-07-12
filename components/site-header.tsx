"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { CALENDLY_URL, NAV_ITEMS } from '@/lib/enterprise-content'

type SiteHeaderProps = {
  variant?: 'landing' | 'content'
}

export function SiteHeader({ variant = 'content' }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(variant === 'content')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (variant === 'content') return

    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [variant])

  const isLanding = variant === 'landing'
  const headerClassName = isLanding
    ? `fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/8 bg-[#000C42]/85 backdrop-blur-xl'
          : 'bg-transparent border-b border-transparent'
      }`
    : 'sticky top-0 z-50 border-b border-[#001081]/8 bg-[#FFFEFF]/90 backdrop-blur-xl'

  const navItems = isLanding
    ? NAV_ITEMS.map((item) => ({ label: item.label, href: `#${item.id}` }))
    : [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact', href: '/contact' },
      ]

  return (
    <header className={headerClassName}>
      <div className="section-container flex items-center justify-between gap-6 py-3.5">
        <Link href={isLanding ? '#top' : '/'} className="group flex items-center gap-2.5">
          <div className={`flex h-[34px] w-[34px] items-center justify-center rounded-lg text-[13px] font-bold transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${isLanding ? 'bg-white/15 text-white' : 'bg-[#001081] text-white'}`}>
            C
          </div>
          <p className={`text-sm font-bold tracking-tight ${isLanding ? 'text-white' : 'text-[#001081]'}`}>
            Cobalt Analytix
          </p>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[13.5px] font-medium transition-colors ${
                isLanding ? 'text-white/65 hover:text-white' : 'text-[#001081]/65 hover:text-[#001081]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 sm:flex">
          {isLanding && (
            <Link
              href="#join"
              className="rounded-lg border border-white/20 px-4 py-2 text-[13.5px] font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join waitlist
            </Link>
          )}
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-lg px-[18px] py-2 text-[13.5px] font-semibold transition-colors ${
              isLanding ? 'bg-white text-[#000C42] hover:bg-[#E5EBFF]' : 'bg-[#001081] text-white hover:bg-[#0A1A8F]'
            }`}
          >
            Book a pilot call
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 transition-colors md:hidden ${isLanding ? 'text-white' : 'text-[#001081]'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`space-y-4 border-t px-6 py-6 md:hidden ${
            isLanding ? 'border-white/8 bg-[#000C42]' : 'border-[#001081]/8 bg-[#FFFEFF]'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-medium ${isLanding ? 'text-white' : 'text-[#001081]'}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 block w-full rounded-lg px-5 py-3 text-center text-sm font-semibold ${
              isLanding ? 'bg-white text-[#000C42]' : 'bg-[#001081] text-white'
            }`}
          >
            Book a pilot call
          </Link>
        </motion.div>
      )}
    </header>
  )
}

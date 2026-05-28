"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/enterprise-content'

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
  const navLinkStyle = scrolled ? 'text-[#001081]/70 hover:text-[#001081]' : 'text-white/80 hover:text-white'
  const headerClassName = isLanding
    ? `top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'fixed border-b border-[#001081]/8 bg-[#FFFEFF]/92 backdrop-blur-xl'
          : 'absolute bg-transparent'
      }`
    : 'sticky top-0 z-50 border-b border-[#001081]/8 bg-[#FFFEFF]/90 backdrop-blur-xl'

  const navItems = isLanding
    ? NAV_ITEMS.map((item) => ({
        label: item,
        href: item === 'Contact' ? '/contact' : `#${item.toLowerCase()}`,
      }))
    : [
        { label: 'Home', href: '/' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'FAQ', href: '/#faq' },
        { label: 'Contact', href: '/#contact' },
      ]

  return (
    <header className={headerClassName}>
      <div className="section-container flex items-center justify-between gap-6 py-4">
        <Link href={isLanding ? '#top' : '/'} className="flex items-center gap-3">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold ${scrolled ? 'bg-[#001081] text-white' : 'bg-white/15 text-white backdrop-blur-sm'}`}>
            D
          </div>
          <div>
            <p className={`text-sm font-bold tracking-tight transition-colors ${scrolled ? 'text-[#001081]' : 'text-white'}`}>
              Discover
            </p>
            <p className={`text-[11px] transition-colors ${scrolled ? 'text-[#001081]/50' : 'text-white/60'}`}>
              by ForecastHUB
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={`text-sm font-medium transition-colors ${isLanding ? navLinkStyle : 'text-[#001081]/65 hover:text-[#001081]'}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="https://calendly.com/pjpanot260305/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              isLanding
                ? scrolled
                  ? 'border-[#001081]/12 text-[#001081] hover:bg-[#F2F3F3]'
                  : 'border-white/25 text-white hover:bg-white/10'
                : 'border-[#001081]/12 text-[#001081] hover:bg-[#F2F3F3]'
            }`}
          >
            Book appointment
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 transition-colors md:hidden ${isLanding && !scrolled ? 'text-white' : 'text-[#001081]'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 border-t border-[#001081]/8 bg-[#FFFEFF] px-6 py-6 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium text-[#001081]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://calendly.com/pjpanot260305/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full justify-center"
          >
            Book appointment
          </Link>
        </motion.div>
      )}
    </header>
  )
}

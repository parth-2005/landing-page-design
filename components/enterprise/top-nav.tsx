'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import { NAV_ITEMS } from '@/lib/enterprise-content'

export function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkStyle = scrolled ? 'text-[#001081]/70 hover:text-[#001081]' : 'text-white/80 hover:text-white'

  return (
    <header
      id="top-nav"
      className={`top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'fixed border-b border-[#001081]/8 bg-[#FFFEFF]/92 backdrop-blur-xl'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between gap-6 py-4">
        <Link href="#top" className="flex items-center gap-3">
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
              scrolled ? 'bg-[#001081] text-white' : 'bg-white/15 text-white backdrop-blur-sm'
            }`}
          >
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

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${linkStyle}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Link
            href="#join"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'border border-[#001081]/12 text-[#001081] hover:bg-[#F2F3F3]'
                : 'border border-white/25 text-white hover:bg-white/10'
            }`}
          >
            Sign Up
          </Link>
          <Link
            href="https://calendly.com/pjpanot260305/30min"
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
              scrolled
                ? 'bg-[#2C6DF6] text-white hover:bg-[#1A5AE0] shadow-md'
                : 'bg-white text-[#001081] hover:bg-[#F2F3F3]'
            }`}
          >
            Book appointment
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 transition-colors lg:hidden ${scrolled ? 'text-[#001081]' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4 border-t border-[#001081]/8 bg-[#FFFEFF] px-6 py-6 lg:hidden"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={item === 'Contact' ? '#contact' : `#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-medium text-[#001081]"
            >
              {item}
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

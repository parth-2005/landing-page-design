'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isStuck, setIsStuck] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-900 px-12 transition-all duration-400 ${
        isStuck
          ? 'bg-white/92 backdrop-blur-xl border-b border-off2 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-17">
        {/* Brand */}
        <Link href="#" className="flex items-center gap-2">
          <svg className="w-7.5 h-7.5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2.5 20.5 11 12 21.5 3.5 11 12 2.5Z" className="fill-navy" />
            <path d="M12 6.2 16.6 11 12 15.8 7.4 11 12 6.2Z" className="fill-accent" />
          </svg>
          <span className="font-serif font-800 text-xl text-slate-900 tracking-tighter">
            Logiq
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            ForecastHUB
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Methodology
          </Link>
          <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
            Enterprise
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="btn-ghost">Log in</button>
          <button className="btn-cta">Request a study</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-off2 shadow-lg">
          <div className="flex flex-col gap-4 p-4">
            <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              ForecastHUB
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Methodology
            </Link>
            <Link href="#" className="text-sm font-medium text-slate-700 hover:text-slate-900">
              Enterprise
            </Link>
            <button className="btn-ghost w-full text-left">Log in</button>
            <button className="btn-cta w-full justify-center">Request a study</button>
          </div>
        </div>
      )}
    </nav>
  )
}

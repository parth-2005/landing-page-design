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
          <div className="w-7.5 h-7.5 bg-navy rounded flex items-center justify-center relative overflow-hidden">
            <div className="w-3 h-3 bg-accent rotate-45" />
          </div>
          <span className="font-serif font-800 text-xl text-navy tracking-tighter">
            Logiq
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-9">
          <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue transition-colors">
            ForecastHUB
          </Link>
          <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue transition-colors">
            Dashboard
          </Link>
          <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue transition-colors">
            Methodology
          </Link>
          <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue transition-colors">
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
            <X className="w-6 h-6 text-navy" />
          ) : (
            <Menu className="w-6 h-6 text-navy" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-off2 shadow-lg">
          <div className="flex flex-col gap-4 p-4">
            <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue">
              ForecastHUB
            </Link>
            <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue">
              Methodology
            </Link>
            <Link href="#" className="text-sm font-medium text-navy-mid hover:text-blue">
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

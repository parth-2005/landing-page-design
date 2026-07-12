'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { JOIN_BACKGROUND } from '@/lib/enterprise-content'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = 'idle' | 'invalid' | 'submitting' | 'success' | 'error'

export function JoinUs() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleJoin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmed = email.trim()
    if (!trimmed || !EMAIL_PATTERN.test(trimmed)) {
      setStatus('invalid')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        setErrorMessage(data?.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setEmail('')
      setStatus('success')

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setErrorMessage('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="join" className="relative overflow-hidden py-[100px]" style={{ background: JOIN_BACKGROUND }}>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(107,159,255,0.35) 0%, transparent 70%)' }}
      />

      <div className="section-container relative z-10 max-w-[600px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.02em] text-white"
            style={{ fontFamily: 'var(--font-plus-jakarta)' }}
          >
            Join the brands making <span className="text-[#7FA8FF]">smarter decisions</span>
          </h2>
          <p className="mt-[18px] text-[16.5px] text-white/50">
            Be an early design partner as we expand Cobalt Analytix beyond the pilot cohort.
          </p>

          <form onSubmit={handleJoin} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setStatus('idle')
              }}
              placeholder="Enter your work email"
              disabled={status === 'submitting'}
              className="w-full max-w-[300px] flex-1 rounded-lg border border-white/15 bg-white/8 px-[18px] py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#2C6DF6] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="whitespace-nowrap rounded-lg bg-[#2C6DF6] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1A5AE0] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'success' ? "✓ You're on the list" : status === 'submitting' ? 'Submitting…' : 'Request early access'}
            </button>
          </form>
          {status === 'invalid' && (
            <p className="mt-3 text-[13px] text-[#FFB4B4]">Enter a valid work email to continue.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-[13px] text-[#FFB4B4]">{errorMessage}</p>
          )}

          <p className="mt-4 text-[12.5px] text-white/30">Free to join. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  )
}

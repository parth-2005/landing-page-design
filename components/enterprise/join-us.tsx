'use client'

import { type FormEvent, useEffect, useRef, useState } from 'react'

import { JOIN_BACKGROUND } from '@/lib/enterprise-content'
import { Reveal } from '@/components/shared/reveal'

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
    <section id="join" className="relative overflow-hidden py-[clamp(90px,11vw,128px)]" style={{ background: JOIN_BACKGROUND }}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="section-container relative z-10 max-w-[640px] text-center">
        <Reveal variant="fade-up">
          <p className="eyebrow mb-6 justify-center text-[#7FA8FF] [&::before]:bg-[#7FA8FF]">Early access</p>
          <h2
            className="font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.08] tracking-[-0.015em] text-white"
            style={{ fontFamily: 'var(--font-serif-display, Georgia, serif)' }}
          >
            Partner with us before the pilot expands.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-white/55">
            Join as an early design partner as we take Cobalt Analytix beyond the first cohort.
          </p>

          <form onSubmit={handleJoin} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <input
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value)
                setStatus('idle')
              }}
              placeholder="Enter your work email"
              disabled={status === 'submitting'}
              className="w-full max-w-[320px] flex-1 rounded-md border border-white/15 bg-white/[0.06] px-[18px] py-3.5 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[#7FA8FF] disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="whitespace-nowrap rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-[#0A1A38] transition-colors hover:bg-[#E5EBFF] disabled:cursor-not-allowed disabled:opacity-60"
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
        </Reveal>
      </div>
    </section>
  )
}

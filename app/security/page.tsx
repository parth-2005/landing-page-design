import Link from 'next/link'

import { CONTACT_EMAIL } from '@/lib/enterprise-content'

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFF]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link href="/" className="mb-8 block text-sm text-[#2C6DF6]">
          ← Back to home
        </Link>
        <h1
          className="mb-3 text-4xl font-extrabold text-[#001081]"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Security
        </h1>
        <p className="mb-10 text-sm text-[#001081]/40">Last updated: July 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-[#001081]/70">
          <p>
            We&apos;re an early-stage pilot program, so this page describes the practical measures in place today
            rather than a formal compliance certification — that will come as the product matures.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Encryption in transit</h2>
            <p>
              The site is served entirely over HTTPS/TLS. The waitlist form submits to our own API, which connects
              to our database over an encrypted connection.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Data storage</h2>
            <p>
              Waitlist emails are stored in Neon, a managed Postgres provider, which encrypts data at rest. We
              collect the minimum needed for this site to function: an email address and a timestamp — no
              passwords, no payment details, no other personal data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Subprocessors</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Vercel</strong> — hosting and privacy-friendly page-view analytics.
              </li>
              <li>
                <strong>Neon</strong> — Postgres database for waitlist signups.
              </li>
              <li>
                <strong>Calendly</strong> — call scheduling, governed by Calendly&apos;s own security practices.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Reporting a concern</h2>
            <p>
              If you find a security issue with this site, email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#2C6DF6]">
                {CONTACT_EMAIL}
              </a>{' '}
              — we&apos;ll respond directly.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

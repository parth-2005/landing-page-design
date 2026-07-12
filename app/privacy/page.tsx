import Link from 'next/link'

import { CONTACT_EMAIL } from '@/lib/enterprise-content'

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="mb-10 text-sm text-[#001081]/40">Last updated: July 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-[#001081]/70">
          <p>
            This policy covers the cobaltanalytix.com website. It does not cover data collected during a
            commissioned consumer research study — panelist recruitment and responses in an active study are
            governed by that study&apos;s own participation agreement, not this page.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">What we collect</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Waitlist signups:</strong> if you submit the &quot;Request early access&quot; form, we store
                your email address and the time you submitted it.
              </li>
              <li>
                <strong>Anything you send us directly:</strong> if you email us or book a call, we keep whatever you
                choose to share in that conversation.
              </li>
              <li>
                <strong>Aggregate site analytics:</strong> we use Vercel Analytics, which reports page views without
                cookies or cross-site tracking and does not build a personal profile of individual visitors.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">How we use it</h2>
            <p>
              To respond to your inquiries, to notify waitlist members about pilot program updates, and to
              understand overall site usage. We do not sell your data, and we do not share it with third parties
              for their own marketing.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Where it&apos;s stored</h2>
            <p>
              Waitlist emails are stored in a Neon Postgres database. Scheduling a call goes through Calendly,
              which processes that booking under its own privacy policy — we don&apos;t control how Calendly handles
              that data.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Your choices</h2>
            <p>
              Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#2C6DF6]">
                {CONTACT_EMAIL}
              </a>{' '}
              at any time to see what we have on file for you, or to have it deleted.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Changes</h2>
            <p>
              We&apos;ll update the date at the top of this page if this policy changes. As an early-stage pilot
              program, expect this to evolve alongside the product.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

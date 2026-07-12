import Link from 'next/link'

import { CONTACT_EMAIL } from '@/lib/enterprise-content'

export default function TermsPage() {
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
          Terms of Use
        </h1>
        <p className="mb-10 text-sm text-[#001081]/40">Last updated: July 2026</p>

        <div className="space-y-8 text-[15px] leading-relaxed text-[#001081]/70">
          <p>
            These terms cover your use of the cobaltanalytix.com website. Cobalt Analytix is currently running a
            pilot program — by using this site or joining the waitlist, you agree to the terms below.
          </p>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">The service</h2>
            <p>
              This site describes our consumer intelligence methodology (blind sensory panels, confidence-weighted
              scoring, the Stickiness Score) and lets you request a pilot call or join our early-access waitlist.
              Commissioned research studies themselves are scoped and delivered under a separate agreement with
              each client, not under these website terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">No guaranteed outcomes</h2>
            <p>
              Scores, stats, and figures shown on this site (including pilot findings like our reported stickiness
              percentages) describe results from our own pilot cohort and are provided for illustration. They are
              not a guarantee of results for your product or category — actual study findings depend on your
              specific brief, category, and sample.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Intellectual property</h2>
            <p>
              &quot;Stickiness Score&quot; and the scoring methodology described on this site are the property of
              Cobalt Analytix. Site content — text, design, and blog articles — may not be reproduced commercially
              without our permission.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Acceptable use</h2>
            <p>
              Don&apos;t use this site to submit false information, attempt to access data that isn&apos;t yours, or
              disrupt the site&apos;s normal operation (including automated scraping outside of standard search-engine
              indexing).
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Third-party services</h2>
            <p>
              Booking a call uses Calendly; joining the waitlist stores your email with our database provider,
              Neon. Your use of those integrations is also subject to their own terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">No warranty, limited liability</h2>
            <p>
              This site and its content are provided &quot;as is,&quot; without warranties of any kind, during our
              pilot phase. To the extent permitted by law, Cobalt Analytix isn&apos;t liable for indirect or
              consequential damages arising from your use of this site.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Governing law</h2>
            <p>[Governing jurisdiction to be confirmed as the company formalizes its legal entity.]</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-bold text-[#001081]">Questions</h2>
            <p>
              Reach us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#2C6DF6]">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

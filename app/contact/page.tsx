import Link from 'next/link'
import { ArrowRight, Mail, CalendarDays } from 'lucide-react'

import { CONTACT_EMAIL } from '@/lib/enterprise-content'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FFFEFF] text-[#001081]">
      <SiteHeader variant="content" />
      <main>
        <section className="border-b border-[#001081]/8 bg-gradient-to-b from-[#F2F3F3] to-[#FFFEFF]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
                Contact
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
                Talk to the team.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#001081]/58">
                If you want to discuss a study, ask for a demo, or explore how the Discover panel can support your category, reach out directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`mailto:${CONTACT_EMAIL}`} className="btn-primary">
                  <Mail className="h-4 w-4" />
                  {CONTACT_EMAIL}
                </Link>
                <Link
                  href="https://calendly.com/pjpanot260305/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <CalendarDays className="h-4 w-4" />
                  Book appointment
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-[#001081]/8 bg-white p-8 shadow-sm lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2C6DF6]">
                Best ways to reach us
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-2xl bg-[#F2F3F3] p-5">
                  <p className="text-sm font-semibold text-[#001081]">Email</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-flex items-center gap-2 text-sm text-[#2C6DF6] transition-colors hover:text-[#001081]">
                    <Mail className="h-4 w-4" />
                    {CONTACT_EMAIL}
                  </a>
                </div>

                <div className="rounded-2xl bg-[#F2F3F3] p-5">
                  <p className="text-sm font-semibold text-[#001081]">Schedule a call</p>
                  <Link href="https://calendly.com/pjpanot260305/30min" target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-2 text-sm text-[#2C6DF6] transition-colors hover:text-[#001081]">
                    Book a 30-minute slot
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="rounded-2xl bg-[#F2F3F3] p-5">
                  <p className="text-sm font-semibold text-[#001081]">What to include</p>
                  <p className="mt-2 text-sm leading-7 text-[#001081]/58">
                    A short note about your category, the number of SKUs, and the type of decision you want to make is enough to get started.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

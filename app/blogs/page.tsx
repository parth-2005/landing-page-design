import Link from 'next/link'

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFF]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1
          className="mb-4 text-4xl font-extrabold text-[#001081]"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Insights & Research
        </h1>
        <p className="mb-12 text-lg text-[#001081]/50">
          Intelligence from the ForecastHUB panel lab.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F2F3F3] p-8 text-center">
          <p className="text-base text-[#001081]/60">
            Full reports and articles are being prepared. Check back soon — or{' '}
            <Link href="/#join" className="font-semibold text-[#2C6DF6] underline">
              join our list
            </Link>{' '}
            to get notified.
          </p>
        </div>
      </div>
    </main>
  )
}import Link from 'next/link'

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFF]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h1
          className="mb-4 text-4xl font-extrabold text-[#001081]"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Insights & Research
        </h1>
        <p className="mb-12 text-lg text-[#001081]/50">
          Intelligence from the ForecastHUB panel lab.
        </p>
        <div className="rounded-2xl border border-[#E5E7EB] bg-[#F2F3F3] p-8 text-center">
          <p className="text-base text-[#001081]/60">
            Full reports and articles are being prepared. Check back soon - or{' '}
            <Link href="/#join" className="font-semibold text-[#2C6DF6] underline">
              join our list
            </Link>{' '}
            to get notified.
          </p>
        </div>
      </div>
    </main>
  )
}
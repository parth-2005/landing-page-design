import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FFFEFF]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link href="/" className="mb-8 block text-sm text-[#2C6DF6]">
          ← Back to home
        </Link>
        <h1
          className="mb-6 text-4xl font-extrabold text-[#001081]"
          style={{ fontFamily: 'var(--font-plus-jakarta)' }}
        >
          Terms of Use
        </h1>
        <p className="text-[#001081]/50 text-base leading-relaxed">
          Coming soon.
        </p>
      </div>
    </main>
  )
}
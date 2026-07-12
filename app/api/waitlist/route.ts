import { NextResponse } from 'next/server'

import { getSql } from '@/lib/db'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  const email = typeof body === 'object' && body !== null && 'email' in body ? String((body as { email: unknown }).email).trim() : ''

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Enter a valid work email to continue.' }, { status: 400 })
  }

  try {
    const sql = getSql()
    await sql`insert into waitlist_signups (email) values (${email}) on conflict (email) do nothing`
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Failed to record waitlist signup', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}

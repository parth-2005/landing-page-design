-- Run this once against your Neon database (SQL editor in the Neon console,
-- or `psql "$DATABASE_URL" -f db/schema.sql`) before the waitlist form will work.

create table if not exists waitlist_signups (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamptz not null default now()
);

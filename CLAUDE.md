# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the Next.js (App Router) marketing/landing site for **Cobalt Analytix**, a consumer-intelligence platform for FMCG teams (blind sensory panels, stickiness scoring, AI-queryable panel data). The repo is bootstrapped and continuously synced from **v0.app** — merges to `main` auto-deploy, and v0 chats may push commits directly to this repo. The current landing page was synced from a Claude Design project (`Discover Landing.dc.html`) via the `claude_design` MCP.

## Commands

Package manager: **pnpm** is the source of truth (`pnpm-lock.yaml` is committed); a `package-lock.json` is also present but not authoritative.

```bash
pnpm dev      # start dev server (http://localhost:3000)
pnpm build    # production build
pnpm start    # run production build
pnpm lint     # eslint .
```

There is no test suite configured in this repo.

Note: `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — TypeScript errors will not fail `pnpm build`, so run `tsc --noEmit` manually if you need type-error signal.

### Environment

The waitlist form (`components/enterprise/join-us.tsx` → `app/api/waitlist/route.ts`) needs a Neon Postgres database. Copy `.env.example` to `.env.local`, set `DATABASE_URL`, and run `db/schema.sql` against that database once (Neon SQL console or `psql "$DATABASE_URL" -f db/schema.sql`) before the form will work.

## Architecture

- **Single-page landing site**: `app/page.tsx` renders one component, `EnterpriseLanding` (`components/enterprise-landing.tsx`), which composes the whole homepage from section components in `components/enterprise/`: `HeroSection` → `HowItWorks` → `ResultsSection` → `BentoSolutions` → `TrendingInsights` → `JoinUs`, plus `FAQ` (`components/faq.tsx`), wrapped by `SiteHeader`/`SiteFooter`. To change homepage section order or content, edit this file; to change a section's copy/behavior, edit the matching file under `components/enterprise/`.
- **Waitlist backend**: `app/api/waitlist/route.ts` is a Next.js Route Handler that validates the email server-side and inserts it into Neon Postgres via `lib/db.ts` (`@neondatabase/serverless`, `sql` tagged-template queries). `db/schema.sql` holds the one-time table migration — there's no migration runner, so schema changes must be applied manually.
- **Centralized content/copy**: Most homepage strings, stats, gradients, and derived data (`RESULT_STATS`, `METHODOLOGY_STEPS`, `TRENDING_ARTICLES`, `SOLUTIONS`, `FAQS`, `FOOTER_LINKS`, `HERO_BACKGROUND`, `NAV_ITEMS`, etc.) live in `lib/enterprise-content.ts` rather than inline in components — check there first before hardcoding copy in a component. `FOOTER_LINKS` entries are `{ label, href }` objects — every link must resolve to a real route or anchor; don't reintroduce placeholder `href="#"` links.
- **Blog system is file-based, not a CMS**: Blog metadata (slug, title, excerpt, category, image, `fileName`) is declared in `lib/blogs-data.ts`; the actual article body is a markdown file in `blogs/*.md`. `lib/blogs.tsx` reads the markdown file at request time (`fs.readFile`) and contains a small hand-rolled markdown-to-JSX renderer (`renderMarkdown`) supporting `#`/`##`/`###` headings, `> ` blockquotes, `*`/`- ` lists, `---` rules, and inline `` `code` ``/`**bold**`/`*italic*` — it is not a full markdown parser, so unsupported syntax will render as plain text. `app/blogs/page.tsx` lists all posts; `app/blogs/[slug]/page.tsx` renders one post and calls `generateStaticParams()` for static generation. To add a blog post: add an entry to `BLOGS` in `lib/blogs-data.ts` and add the corresponding `.md` file in `blogs/`.
- **UI primitives**: `components/ui/*` are shadcn/ui (New York style) components generated per `components.json` (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`). Treat these as generated/library code — prefer composing them rather than heavily editing, and use the shadcn conventions (CVA variants, Radix primitives) already established if adding new ones.
- **Styling**: Tailwind v4 (`@import 'tailwindcss'` in `app/globals.css`, no separate Tailwind CSS config path set in `components.json`). Brand colors are defined in both `tailwind.config.ts` (`primary` = `#2C6DF6`, `deep` = `#001081`, custom `white`/`gray` scale) and as raw hex/rgba literals inline in many components (e.g. `text-[#001081]`, gradients like `HERO_BACKGROUND`) — the two aren't always kept in sync, so match whichever pattern the surrounding component already uses. Reusable button styles (`.btn-primary`, `.btn-secondary`) and keyframe animations are defined in `app/globals.css` under `@layer components`.
- **Fonts**: `Plus_Jakarta_Sans` (headings, `--font-plus-jakarta`) and `Inter` (body, `--font-inter`) are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables consumed by Tailwind's `fontFamily.sans`/`fontFamily.heading`.
- **Other routes**: `app/contact`, `app/privacy`, `app/security`, `app/terms` are standalone static pages outside the main landing composition.
- **Analytics**: `@vercel/analytics` is only mounted when `NODE_ENV === 'production'` (see `app/layout.tsx`).

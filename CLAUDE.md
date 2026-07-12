# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is the Next.js (App Router) marketing/landing site for **Discover by ForecastHUB**, a consumer-intelligence platform for FMCG teams (blind sensory panels, stickiness scoring, AI-queryable panel data). The repo is bootstrapped and continuously synced from **v0.app** — merges to `main` auto-deploy, and v0 chats may push commits directly to this repo.

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

## Architecture

- **Single-page landing site**: `app/page.tsx` renders one component, `EnterpriseLanding` (`components/enterprise-landing.tsx`), which composes the whole homepage from section components in `components/enterprise/`: `HeroSection` → `IntelligenceHighlights` → `TrendingInsights` → `JoinUs` → `FullView` → `BentoSolutions` → `FAQ`, wrapped by `SiteHeader`/`SiteFooter` and `ChatWidget`. To change homepage section order or content, edit this file; to change a section's copy/behavior, edit the matching file under `components/enterprise/`.
- **Centralized content/copy**: Most homepage strings, stats, gradients, and derived data (`INSIGHT_STATS`, `TRENDING_ARTICLES`, `FULL_VIEW_FEATURES`, `HERO_BACKGROUND`, nav items, etc.) live in `lib/enterprise-content.ts` rather than inline in components — check there first before hardcoding copy in a component.
- **Blog system is file-based, not a CMS**: Blog metadata (slug, title, excerpt, category, image, `fileName`) is declared in `lib/blogs-data.ts`; the actual article body is a markdown file in `blogs/*.md`. `lib/blogs.tsx` reads the markdown file at request time (`fs.readFile`) and contains a small hand-rolled markdown-to-JSX renderer (`renderMarkdown`) supporting `#`/`##`/`###` headings, `> ` blockquotes, `*`/`- ` lists, `---` rules, and inline `` `code` ``/`**bold**`/`*italic*` — it is not a full markdown parser, so unsupported syntax will render as plain text. `app/blogs/page.tsx` lists all posts; `app/blogs/[slug]/page.tsx` renders one post and calls `generateStaticParams()` for static generation. To add a blog post: add an entry to `BLOGS` in `lib/blogs-data.ts` and add the corresponding `.md` file in `blogs/`.
- **UI primitives**: `components/ui/*` are shadcn/ui (New York style) components generated per `components.json` (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`). Treat these as generated/library code — prefer composing them rather than heavily editing, and use the shadcn conventions (CVA variants, Radix primitives) already established if adding new ones.
- **Styling**: Tailwind v4 (`@import 'tailwindcss'` in `app/globals.css`, no separate Tailwind CSS config path set in `components.json`). Brand colors are defined in both `tailwind.config.ts` (`primary` = `#2C6DF6`, `deep` = `#001081`, custom `white`/`gray` scale) and as raw hex/rgba literals inline in many components (e.g. `text-[#001081]`, gradients like `HERO_BACKGROUND`) — the two aren't always kept in sync, so match whichever pattern the surrounding component already uses. Reusable button styles (`.btn-primary`, `.btn-secondary`) and keyframe animations are defined in `app/globals.css` under `@layer components`.
- **Fonts**: `Plus_Jakarta_Sans` (headings, `--font-plus-jakarta`) and `Inter` (body, `--font-inter`) are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables consumed by Tailwind's `fontFamily.sans`/`fontFamily.heading`.
- **Other routes**: `app/contact`, `app/privacy`, `app/security`, `app/terms` are standalone static pages outside the main landing composition.
- **Analytics**: `@vercel/analytics` is only mounted when `NODE_ENV === 'production'` (see `app/layout.tsx`).

@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static travel handbook for a 2026/04/24–04/28 Seoul family trip. Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion. Content is primarily zh-TW. Output is a static export deployed to GitHub Pages under `/seoul-travel-2026`.

## Commands

- `npm run dev` — local dev server (http://localhost:3000)
- `npm run build` — produces static export in `out/` (driven by `output: "export"` in `next.config.ts`)
- `npm run start` — serve production build (note: with static export, prefer serving `out/` directly)
- `npm run lint` — ESLint (flat config `eslint.config.mjs`, extends `next/core-web-vitals`, `next/typescript`)

No test framework is configured.

## Architecture

### Static export + basePath

`next.config.ts` sets `output: "export"`, `basePath: "/seoul-travel-2026"`, `assetPrefix`, and `images.unoptimized: true`. Next.js rewrites routes/`<Link>` hrefs/`<Image>` src automatically, but **raw string paths do not get prefixed**. For any string path referenced from code (e.g. `<img src>`, CSS `url()` interpolated in JS, manually-built hrefs), wrap with `withBasePath()` from `app/lib/base-path.ts`. The `BASE_PATH` constant there must stay in sync with `basePath` in `next.config.ts`.

Implications of static export: no server components doing runtime data fetching, no route handlers, no middleware, no ISR. Everything must be prerenderable at build time. Dynamic routes (`app/day/[id]/page.tsx`) require `generateStaticParams`.

### Routing structure

- `app/page.tsx` — landing
- `app/flight-hotel/page.tsx`
- `app/preparation/page.tsx`
- `app/shopping/page.tsx` + sub-pages (`olive-young`, `convenience-store`, `tax-refund`)
- `app/day/[id]/page.tsx` — per-day itinerary, statically generated

`app/components/` holds shared presentational components (Navbar, cards, timeline items, decorative PaperCard/WashiTape/PillHeader). `Navbar` is rendered from `app/layout.tsx`.

### Content source

Human-authored markdown in `doc/` (`itinerary.md`, `DAY2.md`…`DAY5.md`, `shopping-*.md`, `tax-refund.md`, `power-bank-regulations.md`) is the reference content. Page `.tsx` files currently transcribe that content as JSX. When adding/updating trip info, check `doc/` for the source of truth and keep both in sync.

### Styling

Tailwind v4 via `@tailwindcss/postcss`. The scrapbook/handbook aesthetic (paper texture, washi tape, pill headers) lives in `app/globals.css` plus decorative components. Fonts (`Fredoka`, `Noto Sans TC`) are loaded via `next/font` in `app/layout.tsx` as CSS variables (`--font-fredoka`, `--font-noto-sans-tc`).

## Working here

- Next.js 16 + React 19 are recent — consult `node_modules/next/dist/docs/` before relying on training-data APIs (see `AGENTS.md`).
- Any new string-based asset or link path must go through `withBasePath()` or it will 404 on GitHub Pages.
- This is a content-heavy site, not an app — prefer editing the existing page under the matching route.

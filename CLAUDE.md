# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Run production build locally
npm run lint     # Run ESLint
```

> **Important:** This project uses Next.js 16 with React 19 and Tailwind CSS v4. APIs, file conventions, and `use cache` patterns differ from Next.js 13–15. Read `node_modules/next/dist/docs/` before writing new route handlers or cache logic.

## Architecture

**Captiva** is a marketing/portfolio site for a Spanish digital agency. Every page is a standalone route under `src/app/`, composed from `src/components/`.

### Routing

- `app/page.tsx` — Home (Hero → ValueProps → Testimonials → Footer)
- `app/servicios/`, `app/portfolio/`, `app/proceso/`, `app/nosotros/`, `app/contacto/` — Static marketing pages
- `app/proyecto/[slug]/page.tsx` — Dynamic project detail, reads from `src/data/projects.ts`
- `app/api/contact/route.ts` — POST endpoint; validates fields, sends emails via **Resend** (`RESEND_API_KEY`, `CONTACT_EMAIL` env vars)

### Layout wrappers (applied globally in `app/layout.tsx`)

- `SmoothScroll` — Lenis (duration 1.2s); resets to top on route change
- `GrainOverlay` — CSS film grain texture overlaid on every page
- `PageTransition` — Framer Motion fade between routes

### Design system (`src/app/globals.css`)

Tailwind v4 `@theme inline` block defines CSS variables:

| Token | Value |
|-------|-------|
| `--color-bg` | `#0d0d14` |
| `--color-surface` | `#13131f` |
| `--color-accent` | `#4f46e5` (indigo) |
| `--color-text-primary` | `#e8e8f2` |
| `--color-text-muted` | `#8888aa` |
| `--color-border` | `#1e1e2e` |

Fonts: **Bricolage Grotesque** (display/headings) via `font-display`, **DM Sans** (body) via `font-body`.

### Animation conventions

- All animated components are `"use client"` with Framer Motion
- `SplitText` splits text into word-level `<motion.span>` elements for staggered reveals
- `MagneticWrapper` adds cursor-following magnetic pull to CTA buttons
- Standard easing: `[0.22, 1, 0.36, 1]`

### Data

`src/data/projects.ts` exports a `projects` array with 9 case studies (fitness/coaching niche). Each entry: `slug`, `title`, `category`, `challenge`, `solution`, `automation`, `metrics[]`, `gradient` (Tailwind gradient classes), `color`.

### Contact form

`src/components/Contact.tsx` POSTs `{ nombre, email, telefono, mensaje }` to `/api/contact`. WhatsApp number and Calendly username are hardcoded in that component — update before going live.

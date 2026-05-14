# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow obligatorio (NO negociable)

Cada cambio en este proyecto DEBE seguir este flujo sin excepción:

1. **Issue** — crear issue en GitHub antes de empezar (`gh issue create`)
2. **Rama** — `git checkout -b tipo/nombre-descriptivo` (nunca trabajar en `main` directamente)
3. **Commits** — usar el skill `work-unit-commits` para planificar commits como unidades revisables
4. **PR** — abrir PR con el skill `gentle-ai-branch-pr` al terminar
5. **Engram** — guardar decisiones, bugs y descubrimientos proactivamente sin que el usuario lo pida

### Tipos de rama
- `feat/` — nueva funcionalidad
- `fix/` — corrección de bug
- `refactor/` — refactor sin cambio funcional
- `style/` — cambios visuales / copy
- `chore/` — configuración, dependencias

### Reglas adicionales
- **Nunca pushear directo a `main`** — siempre rama + PR
- **Bugs → `scope: personal` en Engram** — para que estén disponibles en todos los proyectos
- **No usar `data-lenis-prevent`** en contenedores que en desktop son grids de ancho completo (bloquea el scroll de la rueda)
- **`overflow-x-clip` en vez de `overflow-x-hidden`** en contenedores con GSAP ScrollTrigger para no crear scroll containers secundarios
- **Scroll horizontal en mobile**: no usar negative margin tricks — dejar que el `px-6` de la sección padre actúe como margen natural, cards al 85% de ancho

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
| `--color-background` | `#0d0d14` |
| `--color-surface` | `#13131f` |
| `--color-accent` | `#4f46e5` (indigo) |
| `--color-accent-hover` | `#6366f1` |
| `--color-text-primary` | `#e8e8f2` |
| `--color-text-muted` | `#8888aa` |
| `--color-border` | `#1e1e2e` |

Components use **inline styles** with the raw hex values (not Tailwind utilities) for colors — match this pattern when editing or creating components. The `cn()` helper (`src/lib/utils.ts`) is available for conditional classnames.

Fonts: **Bricolage Grotesque** (display/headings) via `font-display`, **DM Sans** (body) via `font-body`.

### Animation conventions

- All animated components are `"use client"` with Framer Motion
- `SplitText` splits text into word-level `<motion.span>` elements for staggered reveals
- `MagneticWrapper` adds cursor-following magnetic pull to CTA buttons
- Standard easing: `[0.22, 1, 0.36, 1]`

### Data

`src/data/projects.ts` exports a `projects` array (currently 6 case studies across mixed niches: dental, physio, fitness, real estate, e-commerce). Each entry: `name`, `slug`, `type`, `tagline`, `context`, `url`, `gradient` (raw CSS `linear-gradient()` string — not Tailwind classes), `metrics[]` (`{ value, label }`), `challenge`, `automation`.

### Portfolio screenshot assets

Each project requires `public/portfolio/{slug}/desktop.jpg` and `mobile.jpg`. The `la-botanica` project additionally requires `tablet.jpg` — it's the only entry that renders a 3-device mockup (laptop + iPad + phone). All other projects use laptop + phone only.

The `PortfolioScroll` component is SSR-disabled via a `dynamic()` import inside `PortfolioClient` — this is intentional because GSAP ScrollTrigger requires a DOM. Don't remove the wrapper.

### story-scroll (GSAP scroll engine)

`src/components/ui/story-scroll.tsx` exports `FlowArt` (container) and `FlowSection` (per-project panel). The engine pins each section until the next one scrolls in, and rotates the incoming section's inner div from 30° → 0° as it enters. `overflow-x-clip` is used (not `overflow-x-hidden`) to avoid creating a secondary scroll container that breaks ScrollTrigger.

### Contact form

`src/components/Contact.tsx` POSTs `{ nombre, email, telefono, mensaje }` to `/api/contact`. WhatsApp number and Calendly username are hardcoded in that component — update before going live.

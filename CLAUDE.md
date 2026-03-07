# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

authored.systems — an educational website explaining a framework for operational systems where humans author the rules and machines enforce them. The site covers ten principles, six primitives (Policy, Procedure, Asset, Person, Event, Ledger), and the role of AI at the edges. Connected to the Runbook product (onrunbook.com).

## Commands

```bash
npm run dev       # Local dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

No test suite or linter is configured.

## Tech Stack

- **Astro 5** static site generator with MDX support
- **Tailwind CSS 3** with `@tailwindcss/typography` plugin
- **Scrollama** for scroll-driven interactions on `/explain`
- **TypeScript** (strict config via `astro/tsconfigs/strict`)
- No client-side framework — interactivity uses vanilla JS in `<script>` tags

## Architecture

**Layouts** — `Base.astro` provides nav/footer chrome for all pages. `Essay.astro` extends Base with prose formatting for markdown content.

**Pages** — File-based routing in `src/pages/`. Static pages (`index`, `explain`, `glossary`, `architect`, `about`) plus dynamic `essays/[id].astro` for essay rendering.

**Content Collections** — Essays live as markdown files in `src/content/essays/` with typed frontmatter schema defined in `src/content.config.ts`. Schema fields: `title`, `subtitle?`, `date`, `description`, `order`, `series?`, `draft?`. Drafts are filtered out in production. Essays are grouped by `series` and sorted by `order`.

**Styling** — Custom Tailwind color palette: `ink` (text), `paper` (background), `muted` (secondary text), `rule` (borders), `accent` (blue highlights). Fonts: Inter (sans) and JetBrains Mono (mono). Prose content uses `max-w-[65ch]`; page containers use `max-w-3xl`.

## Conventions

- Kebab-case for file names, PascalCase for Astro component names
- Consistent page spacing: `py-16 px-6` vertical/horizontal rhythm
- Minimal JavaScript footprint — prefer CSS and Intersection Observer over JS frameworks
- Global styles imported in Base.astro via `src/styles/global.css`

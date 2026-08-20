<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Cain — portfolio

Personal portfolio. Next.js 16 App Router, Tailwind v4, MDX. Single light
appearance; there is no dark theme and no theme toggle.

## Commands

- `npm run dev` — dev server on http://localhost:3000
- `npm run build` — production build, also runs TypeScript
- `npm run lint` — ESLint

Verify with `npm run build && npm run lint` before considering a change done.

## Where content lives

- `src/lib/site.ts` — name, role, company, links, canonical URL
- `src/content/projects.ts` — every project; also drives `/work/[slug]`
- `src/content/experience.ts` — the role timeline; `end: null` means current
- Profile picture — fetched from GitHub (`site.links.github.handle` in
  `src/lib/site.ts`) and revalidated every 24 hours in `src/app/page.tsx`.

## Conventions

- Colours are OKLCH tokens defined in the `@theme` block of
  `src/app/globals.css`. Never hard-code a colour in a component. Note that
  Lightning CSS emits an sRGB hex fallback for each one, and OKLab lightness is
  much darker than CIE lightness at the same number — check the compiled hex
  before trusting an `L` value.
- Semantic type scale: `text-caption`, `text-body-sm`, `text-body`,
  `text-title`, `text-heading`. Avoid arbitrary font sizes.
- Heading sizes must descend by level: `h1` is `text-title` semibold, section
  `h2` is `text-body` semibold, card and row `h3` is `text-body` medium.
- Elevation comes from `shadow-card` / `shadow-card-hover`, not borders.
  `border-line` is only for structural dividers.
- The accent colour means one thing: interactive.
- Never `transition: all` — name the properties. Every hover animation pairs
  with a `motion-reduce:` reset.
- Card radii are concentric: 12px inner + 6px padding = 18px outer.
- Buttons and button-styled links share `buttonClass` from
  `src/components/button.tsx`. Do not re-declare the control styles inline.
- Share cards come from `src/components/og-card.tsx`. The image renderer has no
  OKLCH support, so that file holds sRGB copies of the tokens — update both
  places when a colour changes.

## Generated routes

`sitemap.xml`, `robots.txt`, and `opengraph-image` at the root and inside the
project segment. Adding a project picks all of these up automatically; nothing
needs registering.

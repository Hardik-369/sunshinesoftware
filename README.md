# SunshineSoftware — Learn. Build. Research.

Single-page website for [sunshinesoftware.in](https://sunshinesoftware.in/): a premium,
editorial-style presence covering the three pillars — **Learn** (internships & courses),
**Build** (development services), **Research** (research support).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion (restrained, reduced-motion aware)
- Lucide React icons

## Getting started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Configuration

Everything that could change lives in `data/` — nothing is hard-coded in components:

- `data/company.ts` — name, URL, contact details (email, phones, address), the Google
  Form URLs (`contactFormUrl` / `contactFormEmbedUrl`), socials, nav, footer groups,
  principles. **Empty strings are hidden automatically** (footer, contact section,
  JSON-LD).
- `data/courses.ts`, `data/internships.ts`, `data/services.ts`, `data/research.ts`,
  `data/projects.ts`, `data/faqs.ts`, `data/team.ts` — page content. `data/team.ts`
  holds the founder profile; drop the founder photo at
  `public/team/ashwini-nalawade.png` (the founder section already points there).

### Contact form

All contact CTAs and the contact section use the Google Form configured in
`data/company.ts` (`contactFormUrl` for buttons, `contactFormEmbedUrl` for the embedded
iframe). To switch to a different form, update those two URLs.

## SEO

- Metadata API in `app/layout.tsx` + per-page via `lib/seo.ts` (`generatePageMetadata`,
  plus route-specific generators ready for future `/internships`, `/courses`,
  `/development`, `/research`, `/projects`, `/blog` routes).
- Valid JSON-LD: Organization, WebSite, WebPage, FAQPage, Course, Service (factual only —
  no invented ratings, awards, or papers).
- Programmatic `app/sitemap.ts` and `app/robots.ts`; future routes just need to be added
  to the `routes` array in the sitemap.

## Integrity

No fabricated stats, clients, testimonials, prices, placements, or papers. Featured
research is labelled by stage (Working Paper / Prototype); projects show an honest empty
state until real work is published in `data/projects.ts`.
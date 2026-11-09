# X2 Weddings and Events

## Architecture

TanStack Start with React 19 and TypeScript. The index route renders `src/components/MarketingPage.tsx`. Root metadata uses `src/data/site.ts`. Global styles live in `src/styles.css`. Static photographs are in `public/img/` and are served through Netlify Image CDN.

## Design conventions

Keep the ivory, terracotta, and sage palette, Cormorant Garamond headings, and DM Sans body typography. Use responsive grids, visible keyboard focus, meaningful alt text, and reduced-motion support. Browser APIs belong in effects and event handlers so SSR remains safe.

## Enquiries

The `event-enquiry` form sends URL-encoded data to `/__forms.html`. The static registration in `public/__forms.html` must match every submitted field. Keep the honeypot and explicit success, pending, and error states. Submission errors preserve entered data. The feature marker under `.netlify/features` enables Netlify Forms on deployment. No custom database is needed for these form submissions.

## Content

The business has over ten years of experience. Gallery imagery is inspiration, not verified client work. Do not add invented testimonials, event counts, locations, or pricing. The contact email comes from the supplied visual reference. Page metadata must remain specific to X2; do not add an Open Graph image because the platform supplies it.

## Tooling

Use pnpm. The Netlify Vite adapter manages deployment. Development runs through `netlify dev --port 8889`. Generated route types are managed by TanStack. Avoid committing generated build output.

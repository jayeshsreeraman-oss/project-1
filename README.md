# X2 Weddings and Events

An editorial wedding and event planning website celebrating over ten years of industry experience. Includes responsive navigation, service sections, a photographic inspiration gallery with accessible image dialogs, and an event enquiry form.

Built with React 19, TypeScript, TanStack Start, Vite, and CSS. Netlify Forms handles enquiries; Netlify Image CDN optimizes photographs. The main garden image was generated for this website; supporting photographs are sourced from Unsplash. Gallery photographs are presented as inspiration rather than past client projects.

## Local development

Use Node 22.13+ or Node 24 and pnpm.

```sh
pnpm install
netlify dev --port 8889
```

Netlify Forms processes enquiries on a deployed site. Form submissions are available through the site's Netlify dashboard. Configure submission notifications there if required.

Brand metadata is in `src/data/site.ts`, page content in `src/components/MarketingPage.tsx`, and visual styles in `src/styles.css`.

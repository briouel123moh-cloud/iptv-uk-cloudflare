# IPTV UK — iptvuk-iptv-uk.store

This is the production Next.js static-export site for **IPTV UK** at **https://iptvuk-iptv-uk.store**.

## Project overview

- Canonical domain: `iptvuk-iptv-uk.store`
- Primary SEO keyword: `iptv uk`
- Framework: Next.js App Router with static export
- Sitemap: generated from `src/app/sitemap.ts` and `dynamic_slugs.txt`
- Robots: generated from `src/app/robots.ts`

## Pages included

### Static pages

| Route | Directory |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about/` | `src/app/about/` |
| `/pricing/` | `src/app/pricing/` |
| `/faq/` | `src/app/faq/` |
| `/contact/` | `src/app/contact/` |
| `/refund/` | `src/app/refund/` |
| `/dmca/` | `src/app/dmca/` |
| `/bbc-iptv-uk/` | `src/app/bbc-iptv-uk/` |
| `/sky-cinema-iptv/` | `src/app/sky-cinema-iptv/` |
| `/sky-sports-iptv-uk/` | `src/app/sky-sports-iptv-uk/` |
| `/iptv-firestick-uk/` | `src/app/iptv-firestick-uk/` |
| `/iptv-iphone-uk/` | `src/app/iptv-iphone-uk/` |
| `/iptv-uk-guide/` | `src/app/iptv-uk-guide/` |
| `/blog/` | `src/app/blog/page.tsx` |

### Blog posts

Blog posts are served from `src/app/blog/[slug]/page.tsx` and supplemented by `dynamic_slugs.txt` for sitemap generation.

## SEO maintenance notes

- Keep canonical URL, Open Graph URL, sitemap host, robots host, and feed URLs sourced from `src/lib/site-config.ts`.
- Keep the exact-match phrase `iptv uk` in high-value locations only: title, H1, first paragraph, major section headings, metadata, and relevant internal anchor text.
- Avoid hardcoded production domains outside config unless the file is static content that requires an absolute URL.
- Keep internal links trailing-slashed to match the static export configuration.

## Cloudflare Pages deployment

Use these exact settings in **Workers & Pages → your Pages project → Settings → Builds & deployments**:

| Setting | Value |
|---|---|
| Framework preset | `Next.js (Static HTML Export)` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | leave blank / repository root |
| Production branch | `main` |

The site currently uses `output: 'export'` in `next.config.ts`, so `npm run build` creates static HTML in `out/`. If the Cloudflare build command and output directory are left empty, Cloudflare may upload the repository root instead of the generated site; that root folder does not contain `index.html`, which causes the homepage to return HTTP 404.

This repository also includes `wrangler.toml` with `pages_build_output_dir = "out"` for Cloudflare Pages direct deployments. For a manual deploy after building locally, run:

```bash
npm run deploy:cloudflare
```

## Install and run locally

```bash
npm install
npm run dev
```

## Build and lint

```bash
npm run lint
npm run build
```

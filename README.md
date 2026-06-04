# New IPTV Site — 39 Indexed Pages

This folder is a standalone Next.js project containing the **39 pages indexed by Google** from iptvuk-elite.com.
Use it as the basis of a new GitHub repo to deploy on a new domain.

---

## Pages included

### Static pages (13 + homepage + blog listing)
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

### Blog posts (22 slugs)
All served from `src/app/blog/[slug]/page.tsx`:

- `iptv-uk-beginners-guide`
- `is-iptv-legal-uk`
- `best-iptv-uk-2026`
- `what-is-epg-guide`
- `watch-iptv-iphone-ipad-uk`
- `best-iptv-apps-smart-tv-2026`
- `free-vs-premium-iptv-risks`
- `iptv-uk-monthly-cost`
- `best-iptv-firestick-uk-2026`
- `iptv-premier-league-uk`
- `iptv-uk-vs-virgin-media`
- `spot-fake-iptv-sellers-uk`
- `iptv-multiple-devices-uk`
- `resell-iptv-uk-plans`
- `watch-ufc-ppv-iptv-uk`
- `tivimate-no-epg-fix`
- `install-iptv-samsung-tv-2026`
- `watch-uk-tv-ireland-guide`
- `how-to-get-a-free-iptv-trial-without-any-commitment-2026`
- `iptv-firestick-guide-best-apps-setup-safety-in-2026`
- `how-to-get-a-risk-free-iptv-subscription-in-2026`
- `smart-tv-iptv-setup-guide-samsung-lg-and-android-tv`

---

## Setup steps

### 1. Replace the domain

Open `src/lib/site-config.ts` and replace every occurrence of `YOUR-NEW-DOMAIN.com` with your actual new domain:

```ts
domain: 'www.your-actual-domain.com',
baseUrl: 'https://www.your-actual-domain.com',
```

Also update `siteConfig.name` if you want a different brand name.

### 2. Modify content (important for re-indexing)

Before deploying, change the content on each page enough for Google to treat it as a new page:
- Edit titles, descriptions, and at least a few paragraphs per page
- Change H1/H2 headings so they differ from the original
- Update the `date` field in each blog post to today's date

Blog post content is in `src/app/blog/[slug]/page.tsx` in the `blogPosts` object.
Static page content is in each page's own `src/app/[route]/page.tsx`.

### 3. Install and run locally

```bash
npm install
npm run dev
```

### 4. Deploy to new domain

1. Create a new GitHub repo from this folder
2. Deploy to Vercel (or any Next.js host) and point your new domain to it
3. Submit the new sitemap to Google Search Console

---

## Setting up the redirect to iptv-uk-iptv.co.uk

**Only enable the redirect AFTER Google has indexed all 39 pages on the new domain.**
Enabling it too early will prevent indexing.

Once indexed, add this block to `vercel.json` (inside the top-level JSON object, alongside `"headers"`):

```json
"redirects": [
  {
    "source": "/(.*)",
    "destination": "https://iptv-uk-iptv.co.uk/$1",
    "permanent": true,
    "statusCode": 301
  }
]
```

This sends a 301 redirect from every page on the new domain to the same path on `iptv-uk-iptv.co.uk`.

---

## Build & lint

```bash
npm run lint
npm run build
```

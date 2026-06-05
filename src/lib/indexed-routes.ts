// Canonical list of the reduced URL set kept for Google-indexed pages.
// Keep this in sync with dynamic_slugs.txt and the real src/app/**/page.tsx files.

export const INDEXED_STATIC_ROUTES = [
  '',
  'about',
  'bbc-iptv-uk',
  'blog',
  'blog/best-iptv-uk-providers-2026',
  'contact',
  'dmca',
  'faq',
  'iptv-firestick-uk',
  'iptv-iphone-uk',
  'iptv-uk-guide',
  'pricing',
  'refund',
  'sky-cinema-iptv',
  'sky-sports-iptv-uk',
] as const;

export const INDEXED_BLOG_SLUGS = [
  'iptv-uk-beginners-guide',
  'is-iptv-legal-uk',
  'best-iptv-uk-2026',
  'what-is-epg-guide',
  'watch-iptv-iphone-ipad-uk',
  'best-iptv-apps-smart-tv-2026',
  'free-vs-premium-iptv-risks',
  'iptv-uk-monthly-cost',
  'best-iptv-firestick-uk-2026',
  'iptv-premier-league-uk',
  'iptv-uk-vs-virgin-media',
  'spot-fake-iptv-sellers-uk',
  'iptv-multiple-devices-uk',
  'resell-iptv-uk-plans',
  'watch-ufc-ppv-iptv-uk',
  'tivimate-no-epg-fix',
  'install-iptv-samsung-tv-2026',
  'watch-uk-tv-ireland-guide',
  'how-to-get-a-free-iptv-trial-without-any-commitment-2026',
  'iptv-firestick-guide-best-apps-setup-safety-in-2026',
  'how-to-get-a-risk-free-iptv-subscription-in-2026',
  'smart-tv-iptv-setup-guide-samsung-lg-and-android-tv',
] as const;

export const INDEXED_BLOG_SLUG_SET = new Set<string>(INDEXED_BLOG_SLUGS);

const INDEXED_INTERNAL_PATHS = new Set<string>([
  ...INDEXED_STATIC_ROUTES.map((route) => (route ? `/${route}/` : '/')),
  ...INDEXED_BLOG_SLUGS.map((slug) => `/blog/${slug}/`),
]);

export function normalizeInternalHref(href: string): string | null {
  if (!href) return null;

  const withoutOrigin = href.replace(/^https:\/\/www\.iptv-uk-iptv\.co\.uk/i, '');
  if (/^[a-z][a-z0-9+.-]*:/i.test(withoutOrigin) || withoutOrigin.startsWith('//')) {
    return null;
  }

  const [withoutHash] = withoutOrigin.split('#');
  const [pathname] = withoutHash.split('?');
  if (!pathname.startsWith('/')) return null;
  if (pathname === '/') return '/';
  if (/\.[a-z0-9]+$/i.test(pathname)) return pathname;

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function isIndexedInternalHref(href: string): boolean {
  const normalized = normalizeInternalHref(href);
  return normalized !== null && INDEXED_INTERNAL_PATHS.has(normalized);
}

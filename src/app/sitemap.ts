export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import fs from 'node:fs';
import path from 'node:path';

const staticRoutes = [
  '',
  'about',
  'blog',
  'catalog',
  'channels',
  'contact',
  'pricing',
  'faq',
  'iptv-uk-guide',
  'iptv-firestick-uk',
  'iptv-smart-tv-uk',
  'iptv-fire-tv-cube-uk',
  'iptv-android-box-uk',
  'iptv-iphone-uk',
  'iptv-pc-mac-uk',
  'iptv-mag-box-uk',
  'premier-league-iptv-uk',
  'champions-league-iptv-uk',
  'boxing-ufc-iptv-uk',
  'f1-iptv-uk',
  'sky-sports-iptv',
  'sky-sports-iptv-uk',
  'bt-sport-iptv',
  'bt-sport-iptv-uk',
  'tnt-sports-iptv-uk',
  'sky-cinema-iptv',
  'sky-atlantic-iptv',
  'bbc-iptv-uk',
  'itv-iptv-uk',
  'channel-4-iptv',
  'iptv-vs-sky-uk',
  'iptv-vs-now-tv-uk',
  'iptv-vs-bt-tv',
  'iptv-vs-freeview',
  'iptv-vs-virgin-media-uk',
  'privacy',
  'terms',
  'refund',
  'dmca',
  'setup/smart-tv',
  'setup/xtream-codes',
  'blog/best-iptv-uk-providers-2026',
];

function readDynamicSlugs(): string[] {
  try {
    const file = path.join(process.cwd(), 'dynamic_slugs.txt');
    return fs
      .readFileSync(file, 'utf8')
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
  } catch {
    return [];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: route ? `${SITE_CONFIG.baseUrl}/${route}/` : `${SITE_CONFIG.baseUrl}/`,
    lastModified: now,
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  const blogEntries = readDynamicSlugs().map((slug) => ({
    url: `${SITE_CONFIG.baseUrl}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}

export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';
import fs from 'node:fs';
import path from 'node:path';

const staticRoutes = [
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

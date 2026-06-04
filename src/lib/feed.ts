import fs from 'node:fs';
import path from 'node:path';
import { SITE_CONFIG } from '@/lib/site-config';

type FeedPost = {
  slug: string;
  url: string;
  title: string;
  publishedAt: string;
};

function titleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function getFeedPosts(): FeedPost[] {
  const file = path.join(process.cwd(), 'dynamic_slugs.txt');

  try {
    const slugs = fs
      .readFileSync(file, 'utf8')
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);

    return slugs.map((slug) => ({
      slug,
      url: `${SITE_CONFIG.baseUrl}/blog/${slug}/`,
      title: titleFromSlug(slug),
      publishedAt: new Date().toISOString(),
    }));
  } catch {
    return [];
  }
}

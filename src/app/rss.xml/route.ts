export const dynamic = 'force-static';

import { SITE_CONFIG } from '@/lib/site-config';
import { getFeedPosts } from '@/lib/feed';

export async function GET() {
  const posts = getFeedPosts();
  const buildDate = new Date().toUTCString();

  const items = posts
    .map(
      (post) => `<item>
  <title><![CDATA[${post.title}]]></title>
  <link>${post.url}</link>
  <guid>${post.url}</guid>
  <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
</item>`,
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>IPTV UK Elite Blog</title>
  <link>${SITE_CONFIG.baseUrl}/blog/</link>
  <description>Latest IPTV UK guides, setup tutorials, and streaming news.</description>
  <language>en-gb</language>
  <lastBuildDate>${buildDate}</lastBuildDate>
  ${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

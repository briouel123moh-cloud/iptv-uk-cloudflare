import { SITE_CONFIG } from '@/lib/site-config';
import { getFeedPosts } from '@/lib/feed';

export async function GET() {
  const posts = getFeedPosts();
  const updated = new Date().toISOString();

  const entries = posts
    .map(
      (post) => `<entry>
  <title>${post.title}</title>
  <link href="${post.url}" />
  <id>${post.url}</id>
  <updated>${post.publishedAt}</updated>
  <summary>Read the full article on IPTV UK Elite.</summary>
</entry>`,
    )
    .join('\n');

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>IPTV UK Elite Blog</title>
  <id>${SITE_CONFIG.baseUrl}/blog/</id>
  <updated>${updated}</updated>
  <link href="${SITE_CONFIG.baseUrl}/atom.xml" rel="self"/>
  <link href="${SITE_CONFIG.baseUrl}/blog/"/>
  ${entries}
</feed>`;

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

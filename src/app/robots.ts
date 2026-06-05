export const dynamic = 'force-static';
import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*?_rsc=',
        '/api/',
      ],
    },
    sitemap: `${SITE_CONFIG.baseUrl}/sitemap.xml`,
    host: SITE_CONFIG.domain,
  };
}

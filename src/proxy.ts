// Edge canonicalization: force canonical host + trailing slash in one redirect.
// This avoids multi-hop redirect chains between Next.js and Vercel.

import { SITE_CONFIG } from '@/lib/site-config';
import { NextRequest, NextResponse } from 'next/server';

const CANONICAL_HOST = SITE_CONFIG.domain;
const LEGACY_HOSTS = new Set([
  'iptvuk-elite.com',
  'primestream-iptvuk.online',
  'www.primestream-iptvuk.online',
]);

function shouldForceTrailingSlash(pathname: string): boolean {
  if (pathname === '/' || pathname.endsWith('/')) return false;
  const lastSegment = pathname.split('/').pop() ?? '';
  return !lastSegment.includes('.');
}

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? '';
  const bareHost = host.split(':')[0];
  const shouldForceHost = LEGACY_HOSTS.has(bareHost);
  const shouldAddSlash = shouldForceTrailingSlash(request.nextUrl.pathname);

  if (shouldForceHost || shouldAddSlash) {
    const url = request.nextUrl.clone();
    if (shouldForceHost) {
      url.protocol = 'https';
      url.host = CANONICAL_HOST;
      url.port = '';
    }
    if (shouldAddSlash) {
      url.pathname = `${url.pathname}/`;
    }
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next.js internals, static assets, and crawlable public files.
  matcher: '/((?!_next/static|_next/image|robots\\.txt|sitemap\\.xml|sitemap\\.xsl|llms\\.txt|favicon\\.ico|icon\\.png|logo\\.png|og-image\\.png).*)',
};

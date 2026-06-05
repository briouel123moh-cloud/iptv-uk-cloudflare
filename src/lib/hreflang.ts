// hreflang.ts — Centralised hreflang / alternates builder
// Import this wherever a page needs internationalisation meta links.
//
// This site now keeps hreflang conservative for the reduced UK-only index.
// Cross-domain alternates are intentionally omitted.
//
//   - en-GB → the page's own canonical URL (UK-specific content)
//   - x-default → same as en-GB (UK is the default for unmatched locales)

interface AlternatesConfig {
  /** Only hreflang language alternates; canonical must be set by each page metadata object. */
  languages: Record<string, string>;
}

/**
 * Builds the `alternates` block for Next.js page metadata.
 *
 * @param pageCanonicalUrl - The full canonical URL for the current page,
 *   including a trailing slash (required by `trailingSlash: true` in next.config.ts).
 *   Example: `"https://www.iptvuk-elite.com/pricing/"`
 *   Exception: the root homepage may omit the slash: `"https://www.iptvuk-elite.com/"`.
 */
export function buildAlternates(pageCanonicalUrl: string): AlternatesConfig {
  return {
    languages: {
      // Keep alternates conservative for indexing stability.
      // Cross-domain hreflang should only be enabled when all domains
      // have strict reciprocal mappings at page-level.
      'en-GB':   pageCanonicalUrl,
      'x-default': pageCanonicalUrl,
    },
  };
}

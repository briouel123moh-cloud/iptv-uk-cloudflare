// hreflang.ts — Centralised hreflang / alternates builder
// Import this wherever a page needs internationalisation meta links.
//
// Design rationale for bilateral hreflang across sister sites:
//   Each sister site covers a different country/language and has its OWN
//   content structure that does NOT mirror IPTV-UK's page hierarchy.
//   Therefore all hreflang entries for sister sites point to those sites'
//   roots — the most relevant available alternative for each locale.
//
//   - en-GB  → the page's own canonical URL (UK-specific content)
//   - en-IE  → Emerald IPTV Ireland root (country-specific site, no sub-page mirror)
//   - en     → Nordic IPTV root  (default English fallback for Nordic visitors)
//   - sv-SE / nb-NO / da-DK / fi-FI → Nordic language-prefix root paths
//   - de-DE  → IPTV Deutsch root (country-specific German site)
//   - x-default → same as en-GB (UK is the "default" for unmatched locales)

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

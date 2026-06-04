// Single source of truth for all canonical domain/URL and contact configuration.
// Import this wherever a domain or full URL is needed — never hardcode URLs.
// TODO: Replace iptv-uk-iptv.co.uk with your actual new domain before deploying.

export const SITE_CONFIG = {
  /** Canonical domain WITH www */
  domain: 'www.iptv-uk-iptv.co.uk',
  /** Canonical base URL WITH www, no trailing slash */
  baseUrl: 'https://www.iptv-uk-iptv.co.uk',
  /** Canonical sister-site base URLs */
  sisterSites: {
    ireland: 'https://emeraldiptv.irish',
    nordic:  'https://www.nordiciptv-elite.com',
    germany: 'https://www.iptvdeutsch-anbieter.com',
  },
  /** Official social profiles */
  socialProfiles: {
    youtube: 'https://www.youtube.com/@GLOBAL_IPTV_HUB',
    linkedin: 'https://www.linkedin.com/company/iptv-global-hub/',
  },
  /** Redirect target domain — visitors are sent here after indexing */
  redirectTarget: 'https://iptv-uk-iptv.co.uk',
} as const;

export const siteConfig = {
  name: 'IPTV UK',
  whatsapp: '+447418316577',
  email: 'contact@iptvuk-elite.com',
  domain: 'https://www.iptv-uk-iptv.co.uk',
} as const;

export const getWhatsAppLink = (message: string = 'Hi, I\'m interested in IPTV UK Elite') => {
  return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
};

/**
 * Generate hreflang `alternates.languages` for a given UK page.
 *
 * @param ukPath      - The path on iptvuk-elite.com, e.g. '/pricing/' or '/iptv-firestick-uk/'
 * @param sisterSlug  - Optional. If provided, sister sites link to the same slug path.
 *                      If omitted, sister sites link to their own homepage (used for pages
 *                      like /pricing/, /faq/, /about/, /contact/ that have no sister equivalent).
 *
 * Always includes x-default pointing to the UK URL (authoritative English default).
 * Germany (de-DE) always maps to the DEUTSCH homepage — no page-level equivalents exist.
 */
export function getHreflangLanguages(
  ukPath: string,
  sisterSlug?: string,
): Record<string, string> {
  const { baseUrl, sisterSites } = SITE_CONFIG;
  const irelandUrl  = sisterSlug ? `${sisterSites.ireland}/${sisterSlug}/`     : `${sisterSites.ireland}/`;
  const nordicUrl   = sisterSlug ? `${sisterSites.nordic}/${sisterSlug}/`      : `${sisterSites.nordic}/`;
  const swedishUrl  = sisterSlug ? `${sisterSites.nordic}/sv/${sisterSlug}/`   : `${sisterSites.nordic}/sv/`;
  const norwegianUrl = sisterSlug ? `${sisterSites.nordic}/no/${sisterSlug}/`  : `${sisterSites.nordic}/no/`;
  const danishUrl   = sisterSlug ? `${sisterSites.nordic}/da/${sisterSlug}/`   : `${sisterSites.nordic}/da/`;
  const finnishUrl  = sisterSlug ? `${sisterSites.nordic}/fi/${sisterSlug}/`   : `${sisterSites.nordic}/fi/`;
  return {
    'en-GB':     `${baseUrl}${ukPath}`,
    'en-IE':     irelandUrl,
    'en':        nordicUrl,
    'sv-SE':     swedishUrl,
    'nb-NO':     norwegianUrl,
    'da-DK':     danishUrl,
    'fi-FI':     finnishUrl,
    'de-DE':     `${sisterSites.germany}/`,
    'x-default': `${baseUrl}${ukPath}`,
  };
}

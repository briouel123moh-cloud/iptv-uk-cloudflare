// Single source of truth for all canonical domain/URL and contact configuration.
// Import this wherever a domain or full URL is needed — never hardcode URLs.
export const SITE_CONFIG = {
  /** Canonical domain without www */
  domain: 'iptvuk-iptv-uk.store',
  /** Canonical base URL without www, no trailing slash */
  baseUrl: 'https://iptvuk-iptv-uk.store',
  /** Official social profiles for structured data and footer links */
  socialProfiles: {
    youtube: 'https://www.youtube.com/@IPTVUK_IPTV_UK',
    linkedin: 'https://www.linkedin.com/company/iptvuk-iptv-uk/',
  },
  /** Canonical brand/domain phrases used by SEO metadata */
  brandName: 'IPTV UK',
  targetKeyword: 'iptv uk',
  localMarket: 'United Kingdom',
} as const;

export const siteConfig = {
  name: 'IPTV UK',
  whatsapp: '+447418316577',
  email: 'contact@iptvuk-iptv-uk.store',
  domain: 'https://iptvuk-iptv-uk.store',
} as const;

export const getWhatsAppLink = (message: string = 'Hi, I\'m interested in IPTV UK') => {
  return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
};

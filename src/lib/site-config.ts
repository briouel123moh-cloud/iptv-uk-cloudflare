// Single source of truth for all canonical domain/URL and contact configuration.
// Import this wherever a domain or full URL is needed — never hardcode URLs.
export const SITE_CONFIG = {
  /** Canonical domain without www */
  domain: 'iptv-uk-iptv.co.uk',
  /** Canonical base URL without www, no trailing slash */
  baseUrl: 'https://iptv-uk-iptv.co.uk',
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
  email: 'contact@iptv-uk-iptv.co.uk',
  domain: 'https://iptv-uk-iptv.co.uk',
} as const;

export const getWhatsAppLink = (message: string = 'Hi, I\'m interested in IPTV UK') => {
  return `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
};

// Root layout with global metadata, fonts, and Organization schema
// SEO: Global meta tags, Open Graph, Twitter Cards
// GEO: Organization schema for UK presence
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import SiteLayout from '@/components/layout/SiteLayout';
import { SITE_CONFIG } from '@/lib/site-config';

// SEO: Global metadata
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  title: {
    default: 'Buy IPTV UK Subscription | Premium UK IPTV Service from £12',
    // Keep template plain to avoid duplicate brand tokens when pages already
    // include brand in their own titles.
    template: '%s',
  },
  description:
    'Buy IPTV UK subscription with 45,000+ live channels, sports and VOD. Works on Firestick, Smart TV, Android and iPhone. Free 24-hour trial and 30-day money-back guarantee.',
  keywords: [
    'iptv uk',
    'best iptv uk 2026',
    'uk iptv subscription',
    'buy iptv uk',
    'iptv uk sports',
    'premium iptv uk',
    'iptv uk free trial',
    'iptv for firestick uk',
  ],
  authors: [{ name: 'IPTV UK' }],
  creator: 'IPTV UK',
  publisher: 'IPTV UK',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: `${SITE_CONFIG.baseUrl}/`,
    siteName: 'IPTV UK',
    title: 'Buy IPTV UK Subscription | Premium UK IPTV Service from £12',
    description:
      'Buy IPTV UK subscription with 45,000+ live channels and VOD. Works on Firestick, Smart TV and all major devices. Free trial available.',
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'IPTV UK 2026 - Best UK IPTV Subscription Service',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buy IPTV UK Subscription | Premium UK IPTV Service from £12',
    description:
      'Best IPTV UK subscription with 45,000+ live channels, 100,000+ VOD, 4K quality. Free trial available.',
    images: [`${SITE_CONFIG.baseUrl}/og-image.webp`],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/`,
    types: {
      'application/rss+xml': `${SITE_CONFIG.baseUrl}/rss.xml`,
      'application/atom+xml': `${SITE_CONFIG.baseUrl}/atom.xml`,
    },
    // Note: per-page hreflang languages are added in each page's own metadata
    // via buildAlternates() from @/lib/hreflang. The layout only carries the
    // root canonical; individual pages must define their own alternates.
  },
  verification: {
    google: 't7LsCunk1jJbV0BzIHaxLXI5TL1mG6Zl41slGzhRSss',
  },
  other: {
    'thumbnail': `${SITE_CONFIG.baseUrl}/og-image.webp`
  }
};

// Explicit viewport export — ensures mobile-friendly rendering and
// prevents Google's "not mobile-friendly" penalty in Search Console.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f172a',
};

// GEO: LocalBusiness schema for SEO — global, injected on every page
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_CONFIG.baseUrl}/#business`,
  name: 'IPTV UK',
  legalName: 'IPTV UK',
  alternateName: 'IPTV UK',
  url: SITE_CONFIG.baseUrl,
  logo: `${SITE_CONFIG.baseUrl}/logo.webp`,
  image: `${SITE_CONFIG.baseUrl}/og-image.webp`,
  description:
    'Premium IPTV UK subscription service offering 45,000+ live channels, 100,000+ VOD content, and 4K streaming quality to customers across the United Kingdom.',
  foundingDate: '2019',
  priceRange: '£12 – £55',
  telephone: '+447418316577',
  email: 'contact@iptv-uk-iptv.co.uk',
  openingHours: 'Mo-Su 00:00-24:00',
  founder: {
    '@type': 'Person',
    name: 'James Carter',
    jobTitle: 'Founder & CEO',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '124 City Road',
    addressLocality: 'London',
    postalCode: 'EC1V 2NX',
    addressCountry: 'GB',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      availableLanguage: 'English',
      areaServed: 'GB',
      email: 'contact@iptv-uk-iptv.co.uk',
    },
  ],
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  currenciesAccepted: 'GBP',
  paymentAccepted: 'PayPal, Credit Card, Bank Transfer, Cryptocurrency',
  sameAs: [
    SITE_CONFIG.socialProfiles.youtube,
    SITE_CONFIG.socialProfiles.linkedin,
  ],
};

// WebSite schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_CONFIG.baseUrl}/#website`,
  name: 'IPTV UK',
  url: SITE_CONFIG.baseUrl,
};

// Service schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IPTV UK Subscription 2026',
  provider: {
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.baseUrl}/#business`
  },
  description: 'Premium IPTV subscription service for the UK in 2026 with 45,000+ live channels, 100,000+ VOD, 4K quality, 30-day guarantee, and 24/7 support.',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IPTV UK Plans 2026',
    itemListElement: [
      {
        '@type': 'Offer',
        name: '1 Month IPTV UK',
        price: '12',
        priceCurrency: 'GBP'
      },
      {
        '@type': 'Offer',
        name: '6 Months IPTV UK',
        price: '45',
        priceCurrency: 'GBP'
      },
      {
        '@type': 'Offer',
        name: '12 Months IPTV UK',
        price: '55',
        priceCurrency: 'GBP'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        {/* SEO: JSON-LD structured data — lightweight, fine in <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        {/* Favicon */}
        <link rel="icon" type="image/webp" href="/icon.webp" />
        <link rel="apple-touch-icon" href="/icon.webp" />
        <Script
  id="sa-dynamic-optimization"
  strategy="beforeInteractive"
  src="data:text/javascript;base64,dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpO3NjcmlwdC5zZXRBdHRyaWJ1dGUoIm5vd3Byb2NrZXQiLCAiIik7c2NyaXB0LnNldEF0dHJpYnV0ZSgibml0cm8tZXhjbHVkZSIsICIiKTtzY3JpcHQuc3JjID0gImh0dHBzOi8vZGFzaGJvYXJkLnNlYXJjaGF0bGFzLmNvbS9zY3JpcHRzL2R5bmFtaWNfb3B0aW1pemF0aW9uLmpzIjtzY3JpcHQuZGF0YXNldC51dWlkID0gIjUyMjQ3OTFlLTY5ZTgtNDRiMS05N2JjLWIyNmEzYzFhZjkxYSI7c2NyaXB0LmlkID0gInNhLWR5bmFtaWMtb3B0aW1pemF0aW9uLWxvYWRlciI7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpOw=="
  {...({
    nowprocket: 'true',
    'nitro-exclude': 'true',
    'data-uuid': '5224791e-69e8-44b1-97bc-b26a3c1af91a',
  } satisfies Record<string, string>)}
/>
      </head>
      <body className="antialiased">
        {/* GTM (noscript) — not render-blocking, stays here */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5XJ3V5S6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <SiteLayout>{children}</SiteLayout>

        {/*
          CWV FIX: <Script> MUST be inside <body>, never inside <head>.
          Even with strategy="afterInteractive", placing it in <head> causes
          Next.js to ignore the strategy and inject it as a blocking script.
          Moving it here means GTM loads after the page is interactive,
          eliminating the render-blocking delay on LCP and FCP.
        */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XJ3V5S6');`}
        </Script>
      </body>
    </html>
  );
}

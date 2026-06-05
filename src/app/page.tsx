// Homepage - composes all home sections
// SEO: Primary landing page with WebPage schema
// CWV: Sections lazy loaded below fold
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { SITE_CONFIG } from '@/lib/site-config';
import { CORE_BUYING_KEYWORDS } from '@/lib/seo-keywords';

// CWV FIX: Hero loads eagerly — it's above the fold and drives LCP
import HomeHeroSection from '@/components/sections/HomeHeroSection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

/*
  CWV FIX: All below-the-fold sections use dynamic imports.
  Previously all 9 components were statically bundled together, forcing the
  browser to download and parse all their JS before the page could become
  interactive. Now only the Hero is in the critical bundle. Everything else
  is split into separate chunks and deferred.
  ssr: true ensures HTML is still server-rendered so SEO is unaffected.
*/
const HomeBenefitsSection = dynamic(
  () => import('@/components/sections/HomeBenefitsSection'),
  { ssr: true }
);
const HomeDevicesSection = dynamic(
  () => import('@/components/sections/HomeDevicesSection'),
  { ssr: true }
);
const HomeSportsSection = dynamic(
  () => import('@/components/sections/HomeSportsSection'),
  { ssr: true }
);
const HomeChannelsSection = dynamic(
  () => import('@/components/sections/HomeChannelsSection'),
  { ssr: true }
);
const HomeVODSection = dynamic(
  () => import('@/components/sections/HomeVODSection'),
  { ssr: true }
);
const HomePricingPreviewSection = dynamic(
  () => import('@/components/sections/HomePricingPreviewSection'),
  { ssr: true }
);
const HomeTrialCTASection = dynamic(
  () => import('@/components/sections/HomeTrialCTASection'),
  { ssr: true }
);
const HomeTestimonialsSection = dynamic(
  () => import('@/components/sections/HomeTestimonialsSection'),
  { ssr: true }
);
const HomeFAQPreviewSection = dynamic(
  () => import('@/components/sections/HomeFAQPreviewSection'),
  { ssr: true }
);
const KeywordHubSection = dynamic(
  () => import('@/components/sections/KeywordHubSection'),
  { ssr: true }
);
const CompetitorComparisonSection = dynamic(
  () => import('@/components/sections/CompetitorComparisonSection'),
  { ssr: true }
);

export const metadata: Metadata = applySeoFixes("/", {
  title: 'IPTV UK | Best IPTV UK Subscription 2026 – 45,000+ Channels, Sky Sports, 2 Free Trials',
  description:
    '#1 IPTV UK service 2026. Get IPTV UK with Sky Sports, Premier League, BBC & 45,000+ live channels from £12/month. 2 free IPTV UK trials per user. Instant activation. 30-day money-back. Try IPTV UK free now.',
  keywords: [...CORE_BUYING_KEYWORDS, 'iptv uk', 'iptv uk subscription', 'iptv uk channels', 'iptv uk sports', 'iptv uk firestick', 'best iptv uk', 'iptv uk free trial', 'buy iptv uk', 'iptv uk 2026', 'uk iptv'],
  alternates: {
    canonical: '/',
    ...buildAlternates(`${SITE_CONFIG.baseUrl}/`),
  },
  openGraph: {
    title: 'IPTV UK | Best IPTV UK Subscription 2026 – 45,000+ Channels, 2 Free Trials',
    description: '#1 IPTV UK service. Buy IPTV UK from £12/month — Sky Sports, Premier League, 45,000+ channels, 4K. 2 free IPTV UK trials. 30-day money-back.',
    url: `${SITE_CONFIG.baseUrl}/`,
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/images/best-iptv-uk-2026-uk-iptv-30000-channels-premier-league-sky-bt-movies-series-4k.webp`,
        width: 1200,
        height: 675,
        alt: 'Best IPTV UK 2026 — 45,000+ UK IPTV channels, Sky Sports, Premier League, 4K'
      },
      {
        url: `${SITE_CONFIG.baseUrl}/og-image.webp`,
        width: 1200,
        height: 630,
        alt: 'IPTV UK 2026 — Best UK IPTV Subscription from £12/month'
      }
    ]
  }
});

// Product schema for homepage
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_CONFIG.baseUrl}/#product`,
  name: 'IPTV UK Elite Subscription',
  image: [
    `${SITE_CONFIG.baseUrl}/images/best-iptv-uk-2026-uk-iptv-30000-channels-premier-league-sky-bt-movies-series-4k.webp`,
    `${SITE_CONFIG.baseUrl}/og-image.webp`,
    `${SITE_CONFIG.baseUrl}/images/premier-league-live-iptv-uk-elite-380-matches-sky-sports-tnt-sports-4k.webp`
  ],
  description:
    'Premium IPTV UK subscription 2026 with 45,000+ live channels, 100,000+ VOD, 4K Ultra HD streaming, 99.9% uptime, and 24/7 support. Free 24-hour trial & 30-day money-back guarantee.',
  brand: {
    '@type': 'Brand',
    name: 'IPTV UK Elite',
  },
  offers: {
    '@type': 'AggregateOffer',
    url: `${SITE_CONFIG.baseUrl}/pricing/`,
    priceCurrency: 'GBP',
    lowPrice: '12.00',
    highPrice: '55.00',
    offerCount: '4',
    availability: 'https://schema.org/InStock',
    hasMerchantReturnPolicy: {
      '@type': 'MerchantReturnPolicy',
      applicableCountry: 'GB',
      returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
      merchantReturnDays: '30',
      returnMethod: 'https://schema.org/ReturnByMail',
      returnFees: 'https://schema.org/FreeReturn',
    },
    shippingDetails: {
      '@type': 'OfferShippingDetails',
      shippingRate: { '@type': 'MonetaryAmount', value: '0', currency: 'GBP' },
      shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'GB' },
      deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
        transitTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 0, unitCode: 'DAY' },
      },
    },
  },
};

// FAQPage schema — matches exact text displayed in HomeFAQPreviewSection
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is IPTV UK and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPTV UK (Internet Protocol Television United Kingdom) is a streaming service that delivers live TV channels, movies, and on-demand content over the internet instead of traditional satellite or cable. IPTV UK Elite provides access to 45,000+ live channels and 100,000+ VOD content that you can watch on any device with an internet connection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is IPTV UK legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IPTV technology itself is completely legal and is used by major providers like BBC iPlayer, ITV Hub, and Sky Go. The legality depends on the content being streamed. IPTV UK Elite operates as a legitimate service provider. Users should ensure they comply with local laws regarding content consumption.',
      },
    },
    {
      '@type': 'Question',
      name: 'What internet speed do I need for IPTV UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For smooth IPTV streaming in the UK, we recommend a minimum of 10 Mbps for HD quality and 25 Mbps for 4K Ultra HD quality. Most UK broadband connections exceed these requirements. A stable connection is more important than raw speed for buffer-free viewing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I set up IPTV on Firestick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Setting up IPTV on Amazon Firestick takes just 5 minutes. After subscribing, we send you login credentials via WhatsApp. Download our recommended IPTV player app from the Amazon App Store, enter your credentials, and start watching. Our 24/7 support team can guide you through the entire process.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a money-back guarantee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, IPTV UK Elite offers a full 30-day money-back guarantee on all subscription plans. If you are not completely satisfied with our service for any reason, contact us within 30 days for a full refund, no questions asked.',
      },
    },
  ],
};

// WebPage schema with primaryImageOfPage
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_CONFIG.baseUrl}/#webpage`,
  url: `${SITE_CONFIG.baseUrl}/`,
  name: 'Best IPTV UK 2026 | 45,000+ Channels, 4K, Free Trial - IPTV UK Elite',
  description: 'IPTV UK Elite: Best IPTV UK subscription 2026. 45,000+ live channels, 100,000+ VOD, 4K streaming & 30-day guarantee. Free 24-hour trial.',
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_CONFIG.baseUrl}/images/best-iptv-uk-2026-uk-iptv-30000-channels-premier-league-sky-bt-movies-series-4k.webp`,
    width: 1200,
    height: 675
  }
};

export default function HomePage() {
  return (
    <>
      {/* SEO: Product schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* SEO: FAQPage schema — enables FAQ rich results in SERPs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* SEO: WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Hero loads eagerly — above the fold */}
      <HomeHeroSection />
      {/* All sections below are lazy-loaded — JS deferred, HTML still SSR'd */}
      <HomeBenefitsSection />
      <CompetitorComparisonSection />
      <HomeDevicesSection />
      <HomeSportsSection />
      <HomeChannelsSection />
      <HomeVODSection />
      <HomePricingPreviewSection />
      <HomeTrialCTASection />
      <HomeTestimonialsSection />
      <HomeFAQPreviewSection />
      <KeywordHubSection />
    </>
  );
}

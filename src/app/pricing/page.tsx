// Pricing page with Product schema
// SEO: Targets "iptv uk price", "cheap iptv uk"

import { Metadata } from 'next';
import Image from 'next/image';
import PricingPlansSection from '@/components/sections/PricingPlansSection';
import HomeTrialCTASection from '@/components/sections/HomeTrialCTASection';
import { buildAlternates } from '@/lib/hreflang';
import { CORE_BUYING_KEYWORDS } from '@/lib/seo-keywords';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/pricing/", {
    title: 'IPTV UK Prices 2026 – Best Value IPTV UK Plans from £12/Month | Buy IPTV UK',
    description:
        'Buy IPTV UK from £12/month. Best IPTV UK price in 2026 — Sky Sports, Premier League, 45,000+ UK channels, 4K, 100,000+ VOD. Compare IPTV UK plans. Free trial + 30-day money-back. IPTV UK instant activation.',
    keywords: [...CORE_BUYING_KEYWORDS, 'iptv uk', 'iptv uk price', 'iptv uk subscription', 'iptv uk plans', 'buy iptv uk', 'iptv uk monthly', 'iptv uk cost', 'cheap iptv uk', 'best iptv uk price', 'iptv uk 2026'],
    alternates: {
        canonical: '/pricing/',
        ...buildAlternates('https://www.iptvuk-elite.com/pricing/'),
    },
    openGraph: {
        title: 'IPTV UK Prices 2026 – Best IPTV UK Plans from £12/Month',
        description: 'Best IPTV UK price 2026. Sky Sports, Premier League, 45,000+ channels. IPTV UK plans from £12. Free trial. 30-day money-back. Buy IPTV UK now.',
        url: 'https://www.iptvuk-elite.com/pricing/',
    },
});

const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "GBP" },
    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "GB" },
    "deliveryTime": {
        "@type": "ShippingDeliveryTime",
        "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" },
        "transitTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 0, "unitCode": "DAY" },
    },
};

const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "GB",
    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
    "merchantReturnDays": 30,
};

const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://www.iptvuk-elite.com/pricing/#product",
    "name": "IPTV UK Elite Subscription",
    "image": "https://www.iptvuk-elite.com/og-image.webp",
    "description": "Premium IPTV UK subscription with 45,000+ live channels, 100,000+ VOD, 4K Ultra HD streaming, 99.9% uptime, and 24/7 WhatsApp support. Choose from 1-month, 3-month, 6-month, or 12-month plans. 30-day money-back guarantee.",
    "brand": { "@type": "Brand", "name": "IPTV UK Elite" },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "2847",
        "reviewCount": "2847"
    },
    "review": [
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Michael Thompson"
            },
            "reviewBody": "Best IPTV service I've used in the UK. Crystal clear 4K streams, reliable service, and excellent customer support via WhatsApp. Sky Sports works flawlessly on my Firestick.",
            "datePublished": "2026-04-15"
        },
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Sarah Jenkins"
            },
            "reviewBody": "Outstanding value for money. 45,000+ channels including all the UK sports and entertainment I need. Setup on Smart TV was straightforward, and the EPG guide is comprehensive.",
            "datePublished": "2026-04-10"
        },
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "David Richardson"
            },
            "reviewBody": "Very satisfied with the service. Occasional minor buffering during peak times but overall excellent quality and channel selection. Much cheaper than Sky.",
            "datePublished": "2026-03-28"
        }
    ],
    "offers": [
        {
            "@type": "Offer",
            "name": "1 Month Plan",
            "url": "https://www.iptvuk-elite.com/pricing/",
            "priceCurrency": "GBP",
            "price": "12.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "12.00",
                "priceCurrency": "GBP",
                "unitText": "MONTH",
                "billingDuration": { "@type": "QuantitativeValue", "value": 1, "unitCode": "MON" },
            },
            "hasMerchantReturnPolicy": returnPolicy,
            "shippingDetails": shippingDetails,
        },
        {
            "@type": "Offer",
            "name": "3 Month Plan",
            "url": "https://www.iptvuk-elite.com/pricing/",
            "priceCurrency": "GBP",
            "price": "28.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "28.00",
                "priceCurrency": "GBP",
                "unitText": "PLAN",
                "billingDuration": { "@type": "QuantitativeValue", "value": 3, "unitCode": "MON" },
            },
            "hasMerchantReturnPolicy": returnPolicy,
            "shippingDetails": shippingDetails,
        },
        {
            "@type": "Offer",
            "name": "6 Month Plan",
            "url": "https://www.iptvuk-elite.com/pricing/",
            "priceCurrency": "GBP",
            "price": "42.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "42.00",
                "priceCurrency": "GBP",
                "unitText": "PLAN",
                "billingDuration": { "@type": "QuantitativeValue", "value": 6, "unitCode": "MON" },
            },
            "hasMerchantReturnPolicy": returnPolicy,
            "shippingDetails": shippingDetails,
        },
        {
            "@type": "Offer",
            "name": "12 Month Plan",
            "url": "https://www.iptvuk-elite.com/pricing/",
            "priceCurrency": "GBP",
            "price": "55.00",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "55.00",
                "priceCurrency": "GBP",
                "unitText": "PLAN",
                "billingDuration": { "@type": "QuantitativeValue", "value": 12, "unitCode": "MON" },
            },
            "hasMerchantReturnPolicy": returnPolicy,
            "shippingDetails": shippingDetails,
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.iptvuk-elite.com/" },
        { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.iptvuk-elite.com/pricing/" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does IPTV cost in the UK per month?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IPTV UK Elite plans start from £12/month. Longer plans reduce the monthly equivalent cost and include the same core channel and VOD access.",
            },
        },
        {
            "@type": "Question",
            "name": "Do you offer a free IPTV trial before buying?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. A free 24-hour IPTV trial is available so you can test stream quality, channels, and device compatibility before buying.",
            },
        },
        {
            "@type": "Question",
            "name": "Which devices are supported on IPTV UK plans?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plans work on Firestick, Smart TVs, Android boxes, iPhone/iPad, and PC/Mac with supported IPTV player apps.",
            },
        },
    ],
};

export default function PricingPage() {
    return (
        <>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-8 container mx-auto px-4">IPTV UK Pricing 2026 — Best IPTV UK Plans from £12/Month</h1>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/iptv-uk-elite-pricing-plans-2026.webp"
                        alt="IPTV UK Elite subscription plans 2026 — monthly from £12, quarterly £28, annual £55"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
            <PricingPlansSection />
            <HomeTrialCTASection />
        </>
    );
}

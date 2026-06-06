// IPTV UK Guide page - content hub
// SEO: Targets informational intent for "iptv uk" and related queries

import { Metadata } from 'next';
import Image from 'next/image';
import IPTVGuideIntroSection from '@/components/sections/IPTVGuideIntroSection';
import IPTVGuideHowItWorksSection from '@/components/sections/IPTVGuideHowItWorksSection';
import IPTVGuideDevicesSection from '@/components/sections/IPTVGuideDevicesSection';
import IPTVGuideLegalSafetySection from '@/components/sections/IPTVGuideLegalSafetySection';
import IPTVGuideBuyingTipsSection from '@/components/sections/IPTVGuideBuyingTipsSection';
import Button from '@/components/ui/Button';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes, getInternalLinkTarget, getSeoFix } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/iptv-uk-guide/", {
    title: 'IPTV UK Guide 2026 – Complete Setup, Buying & Legal Guide for UK IPTV',
    description:
        'The ultimate IPTV UK guide for 2026. Learn what IPTV UK is, how to set it up on any device, which IPTV UK service to choose, legality in the UK, and how to get 2 free IPTV UK trials. Start here.',
    alternates: {
        canonical: '/iptv-uk-guide/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/iptv-uk-guide/'),
    },
    openGraph: {
        title: 'IPTV UK Guide 2026 – Complete Setup, Buying & Legal Guide',
        description: 'The ultimate IPTV UK guide 2026. What is IPTV UK, how to set it up, which IPTV UK service to choose, is it legal, and how to get 2 free IPTV UK trials. Everything you need.',
        url: 'https://iptv-uk-iptv.co.uk/iptv-uk-guide/',
        images: [
            {
                url: 'https://iptv-uk-iptv.co.uk/images/iptv-uk-guide-setup-buying-tips.webp',
                width: 1200,
                height: 675,
                alt: 'IPTV UK guide 2026 — complete setup, buying tips and legal guide for UK IPTV',
                type: 'image/webp',
            },
        ],
    },
});

// Article schema for content hub
const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to IPTV UK 2026',
    description:
        'Comprehensive guide covering everything about IPTV in the United Kingdom including how it works, device compatibility, legal considerations, and tips for choosing the best IPTV provider.',
    image: {
        '@type': 'ImageObject',
        url: 'https://iptv-uk-iptv.co.uk/images/iptv-uk-guide-setup-buying-tips.webp',
        width: 1200,
        height: 675,
    },
    url: 'https://iptv-uk-iptv.co.uk/iptv-uk-guide/',
    author: {
        '@type': 'Person',
        name: 'James Carter',
        url: 'https://iptv-uk-iptv.co.uk/about/',
    },
    publisher: {
        '@type': 'Organization',
        name: 'IPTV UK',
        logo: {
            '@type': 'ImageObject',
            url: 'https://iptv-uk-iptv.co.uk/logo.webp',
            width: 200,
            height: 60,
        },
    },
    datePublished: '2024-01-01',
    dateModified: '2026-04-01',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://iptv-uk-iptv.co.uk/iptv-uk-guide/',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'IPTV UK Guide', item: 'https://iptv-uk-iptv.co.uk/iptv-uk-guide/' },
    ],
};

export default function IPTVUKGuidePage() {
    const seoFix = getSeoFix('/iptv-uk-guide/');
    const guideLink = getInternalLinkTarget(seoFix?.linkFix, '/pricing/');

    return (
        <>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-8 container mx-auto px-4">Complete IPTV UK Guide 2026</h1>
            <h2 className="text-xl md:text-2xl text-slate-300 text-center -mt-2 mb-8 container mx-auto px-4">
                {seoFix?.h2 ?? 'IPTV UK Explained: Live TV Streaming Over the Internet'}
            </h2>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/iptv-uk-guide-setup-buying-tips.webp"
                        alt="Complete IPTV UK guide 2026 — setup, devices, buying tips and legal information"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
            <IPTVGuideIntroSection />
            <IPTVGuideHowItWorksSection />
            <IPTVGuideDevicesSection />
            <IPTVGuideLegalSafetySection />
            <IPTVGuideBuyingTipsSection />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="flex justify-center">
                    <Button href={guideLink} variant="outline" size="lg">
                        View IPTV UK Pricing
                    </Button>
                </div>
            </div>
        </>
    );
}

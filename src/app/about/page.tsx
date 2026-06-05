// About page
// SEO: E-E-A-T signals — named founder, team, mission, physical address, Organization schema

import { Metadata } from 'next';
import Image from 'next/image';
import AboutBrandSection from '@/components/sections/AboutBrandSection';
import { buildAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/site-config';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/about/", {
    title: 'About IPTV UK – Your Trusted IPTV UK Provider Since 2019',
    description:
        'Meet the team behind the UK\'s best IPTV UK service. 10,000+ happy UK customers, 45,000+ channels, 4K streaming & 24/7 WhatsApp support. London-based IPTV UK provider since 2019.',
    alternates: {
        canonical: '/about/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/about/'),
    },
});

const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://iptv-uk-iptv.co.uk/#organization',
    name: 'IPTV UK',
    legalName: 'IPTV UK',
    url: 'https://iptv-uk-iptv.co.uk',
    logo: 'https://iptv-uk-iptv.co.uk/logo.webp',
    image: 'https://iptv-uk-iptv.co.uk/og-image.webp',
    foundingDate: '2019',
    founder: {
        '@type': 'Person',
        name: 'James Carter',
        jobTitle: 'Founder & CEO',
        url: 'https://iptv-uk-iptv.co.uk/about/',
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
    email: 'contact@iptv-uk-iptv.co.uk',
    areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
    },
    numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 10,
    },
    sameAs: [
        SITE_CONFIG.socialProfiles.youtube,
        SITE_CONFIG.socialProfiles.linkedin,
    ],
    description:
        'Premium IPTV UK subscription service offering 45,000+ live channels, 100,000+ VOD content, and 4K streaming quality to customers across the United Kingdom since 2019.',
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'About', item: 'https://iptv-uk-iptv.co.uk/about/' },
    ],
};

export default function AboutPage() {
    return (
        <>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-8 container mx-auto px-4">IPTV UK: Premium 45,000+ Live UK Channels &amp; 24/7 Support</h1>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/iptv-uk-team-about.webp"
                        alt="IPTV UK team — UK's premium IPTV service provider since 2019"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
            <AboutBrandSection />
        </>
    );
}

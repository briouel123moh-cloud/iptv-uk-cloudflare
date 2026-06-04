// Contact page
// SEO: LocalBusiness schema for UK presence

import { Metadata } from 'next';
import Image from 'next/image';
import ContactFormSection from '@/components/sections/ContactFormSection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/contact/", {
    title: 'Contact IPTV UK – WhatsApp Support 24/7, Reply in Minutes',
    description:
        'Need help with your IPTV UK subscription? Contact our IPTV UK support team 24/7 via WhatsApp — most queries answered in minutes. Free IPTV UK trial setup help available instantly.',
    alternates: {
        canonical: '/contact/',
        ...buildAlternates('https://www.iptvuk-elite.com/contact/'),
    },
});

// LocalBusiness schema for UK presence
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.iptvuk-elite.com/#business',
    name: 'IPTV UK Elite',
    description:
        'Premium IPTV subscription service for UK customers with 24/7 customer support.',
    url: 'https://www.iptvuk-elite.com',
    image: 'https://www.iptvuk-elite.com/og-image.webp',
    telephone: '+447418316577',
    email: 'contact@iptvuk-elite.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '124 City Road',
        addressLocality: 'London',
        postalCode: 'EC1V 2NX',
        addressCountry: 'GB',
    },
    areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
    },
    openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
    },
};

export default function ContactPage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iptvuk-elite.com/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.iptvuk-elite.com/contact/' },
        ],
    };

    return (
        <>
            <h1 className="sr-only">Contact IPTV UK Elite</h1>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/iptv-uk-elite-whatsapp-support.webp"
                        alt="Contact IPTV UK Elite — 24/7 WhatsApp and email support always available"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
            <ContactFormSection />
        </>
    );
}

// Contact page
// SEO: LocalBusiness schema for UK presence

import { Metadata } from 'next';
import Image from 'next/image';
import ContactFormSection from '@/components/sections/ContactFormSection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/contact/", {
    title: 'Contact IPTV UK – 24/7 WhatsApp Support | Reply in Under 5 Mins',
    description:
        'Contact IPTV UK 24/7 — instant WhatsApp support, usually answered in under 5 minutes. Get help with IPTV UK setup, your free trial, billing or technical issues. We\'re always on.',
    alternates: {
        canonical: '/contact/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/contact/'),
    },
    openGraph: {
        title: 'Contact IPTV UK – 24/7 WhatsApp Support, Reply in Minutes',
        description: 'IPTV UK support is available 24/7 via WhatsApp. Get help with setup, free trials, billing or technical issues — most queries answered in minutes.',
        url: 'https://iptv-uk-iptv.co.uk/contact/',
        images: [
            {
                url: 'https://iptv-uk-iptv.co.uk/images/iptv-uk-whatsapp-support.webp',
                width: 1200,
                height: 675,
                alt: 'IPTV UK 24/7 WhatsApp support — get help with your IPTV UK subscription in minutes',
                type: 'image/webp',
            },
        ],
    },
});

// LocalBusiness schema for UK presence
const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://iptv-uk-iptv.co.uk/#business',
    name: 'IPTV UK',
    description:
        'Premium IPTV subscription service for UK customers with 24/7 customer support.',
    url: 'https://iptv-uk-iptv.co.uk',
    image: 'https://iptv-uk-iptv.co.uk/og-image.webp',
    telephone: '+447418316577',
    email: 'contact@iptv-uk-iptv.co.uk',
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://iptv-uk-iptv.co.uk/contact/' },
        ],
    };

    return (
        <>
            <h1 className="sr-only">Contact IPTV UK</h1>
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
                        src="/images/iptv-uk-whatsapp-support.webp"
                        alt="Contact IPTV UK — 24/7 WhatsApp and email support always available"
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

// IPTV iPhone & iPad UK landing page
// SEO: Targets "iptv iphone uk", "iptv ipad uk", "iptv app iphone uk 2026"

import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FallbackImage from '@/components/ui/FallbackImage';
import RelatedContentSection from '@/components/sections/RelatedContentSection';
import { buildAlternates } from '@/lib/hreflang';
import { MERCHANT_RETURN_POLICY, OFFER_SHIPPING_DETAILS, PRODUCT_IMAGE, PRICE_VALID_UNTIL } from '@/lib/schema-constants';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/iptv-iphone-uk/", {
    title: 'Best IPTV UK for iPhone & iPad 2026 – Stream IPTV UK on iOS Anywhere',
    description:
        'Stream IPTV UK on your iPhone or iPad anywhere in the UK. Best iOS IPTV UK apps 2026 — IPTV Smarters, GSE & more. Watch 45,000+ UK channels on iOS. 5-minute setup. From £12/month.',
    alternates: {
        canonical: '/iptv-iphone-uk/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/iptv-iphone-uk/'),
    },
    openGraph: {
        title: 'IPTV on iPhone & iPad UK 2026 – Best iOS Apps & Setup',
        description: 'Watch IPTV on your iPhone or iPad in the UK. 45,000+ channels on the go. From £12/month.',
        url: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/',
        type: 'website',
    },
});

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/#service',
    name: 'IPTV Service for iPhone and iPad UK',
    description: 'Premium IPTV subscription for iPhone and iPad in the UK. 45,000+ live channels in HD and 4K via dedicated iOS app.',
    provider: {
        '@type': 'Organization',
        name: 'IPTV UK',
        '@id': 'https://iptv-uk-iptv.co.uk/#business',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    serviceType: 'IPTV Streaming Subscription',
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'GBP',
        lowPrice: '12.00',
        highPrice: '55.00',
        offerCount: '4',
        availability: 'https://schema.org/InStock',
    },
};

const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'IPTV UK – iPhone & iPad Subscription',
    description: 'IPTV for iPhone and iPad UK. Watch live TV, sports and VOD on iOS. 45,000+ channels. Xtream Codes compatible.',
    image: PRODUCT_IMAGE,
    brand: { '@type': 'Brand', name: 'IPTV UK' },
    offers: [
        { '@type': 'Offer', price: '12.00', priceCurrency: 'GBP', name: '1 Month', url: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '28.00', priceCurrency: 'GBP', name: '3 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '42.00', priceCurrency: 'GBP', name: '6 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '55.00', priceCurrency: 'GBP', name: '12 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is the best IPTV app for iPhone UK in 2026?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best IPTV apps for iPhone UK in 2026 are IPTV Smarters Pro (best overall), GSE Smart IPTV (best for M3U playlists), and Flex IPTV (best UI). All are available on the iOS App Store and support IPTV UK subscriptions.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I watch IPTV on my iPad UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The same iOS IPTV apps — IPTV Smarters Pro, GSE Smart IPTV, and Flex IPTV — work on iPad as well as iPhone. The larger iPad screen makes it an excellent device for watching live sports and TV series on the go.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I cast IPTV from iPhone to my TV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. You can cast IPTV from your iPhone to any AirPlay 2-compatible device, including Apple TV (all models from 4th gen onwards) and many Smart TVs with AirPlay 2 built in (Samsung, LG, Sony from 2019+).',
            },
        },
        {
            '@type': 'Question',
            name: 'Does IPTV work on iPhone with mobile data UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV works on iPhone over 4G and 5G mobile data. For HD quality you need at least 10 Mbps data speed. 5G connections easily support 4K streams. Be mindful of your data plan — an hour of HD IPTV uses approximately 2–3 GB.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a free IPTV trial for iPhone UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK offers a free 24-hour trial that works on iPhone and iPad. Contact us via WhatsApp to claim your iOS trial — no App Store purchase or credit card required.',
            },
        },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'IPTV on iPhone & iPad UK', item: 'https://iptv-uk-iptv.co.uk/iptv-iphone-uk/' },
    ],
};

export default function IPTVIPhoneUKPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                            iPhone & iPad IPTV UK 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            IPTV on iPhone & iPad UK 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Take your TV everywhere. Watch 45,000+ live channels, Sky Sports, Premier League, and 100,000+ VOD titles on your iPhone or iPad — at home, at work, or abroad. HD & 4K on WiFi or 5G.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20IPTV%20on%20my%20iPhone%20UK" variant="primary" size="lg" target="_blank" rel="noopener noreferrer" title="Get IPTV on WhatsApp">
                                Get IPTV for iPhone
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20iPhone%20IPTV" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free 24-Hour Trial
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
                            {['iPhone & iPad Support', 'AirPlay to TV', 'WiFi & 5G', 'App Store Available'].map((item) => (
                                <span key={item} className="flex items-center gap-2">
                                    <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                    <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/iptv-iphone-uk-app-setup.webp"
                            alt="IPTV on iPhone UK — best iOS IPTV app setup guide 2026"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
            </section>


            {/* Hero figure */}
            <div className="bg-slate-900 pb-0">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <figure className="hero-image-container my-8 rounded-xl overflow-hidden max-w-4xl mx-auto">
                        <FallbackImage
                            src="/images/pages/iptv-iphone-uk-hero.webp"
                            alt={"Hand holding iPhone displaying live football match from IPTV UK, with player controls and match details visible, in a cozy living room setting."}
                            width={800}
                            height={450}
                            className="w-full h-auto bg-slate-800"
                        />
                    </figure>
                </div>
            </div>
            {/* Overview */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">IPTV on iPhone UK – The Mobile Revolution</h2>

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/iphone-iptv-uk-channels-screen.webp"
                                alt="iPhone showing UK IPTV app with Sky Sports live stream"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                            <p>
                                With iPhone and iPad IPTV, your entire television subscription fits in your pocket. Whether you&apos;re commuting to work, waiting at the airport, or relaxing in the garden, IPTV UK delivers live UK channels, international sports, and on-demand content directly to your iOS device over WiFi or mobile data.
                            </p>
                            <p>
                                The iOS App Store contains several excellent IPTV players that work seamlessly with IPTV UK. Unlike Android, iOS does not require sideloading or enabling unknown sources — simply download an app from the App Store, enter your subscription credentials, and begin watching. The setup process takes under five minutes on any iPhone or iPad model.
                            </p>
                            <p>
                                One of the biggest advantages of iPhone IPTV is AirPlay compatibility. Using AirPlay 2, you can instantly mirror your IPTV stream from your iPhone to any Apple TV, Samsung Smart TV, LG Smart TV, or Sony Bravia with AirPlay 2 built in. This means your phone becomes a remote control and portable TV in one — watch on the go, then cast to the big screen when you get home.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best iOS Apps */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Best IPTV Apps for iPhone UK 2026</h2>
                        <figure className="in-content-feature my-8 rounded-xl overflow-hidden">
                            <FallbackImage
                                src="/images/pages/iptv-iphone-uk-feature.webp"
                                alt={"iPhone displaying IPTV Smart TV app interface with live channel listings, including BBC One, ITV, and Sky channels, highlighting premium IPTV service features for mobile viewing."}
                                width={800}
                                height={450}
                                loading="lazy"
                                className="w-full h-auto bg-slate-800"
                            />
                        </figure>

                        <p className="text-slate-400 mb-10">All available on the iOS App Store. All compatible with IPTV UK.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: 'IPTV Smarters Pro', rating: '★★★★★', desc: 'Best overall iOS IPTV app. Supports Xtream Codes, M3U, and MAC address login. Clean interface, EPG, multi-screen support, and favourites. Free to download.' },
                                { name: 'GSE Smart IPTV', rating: '★★★★☆', desc: 'Excellent for M3U playlist management. Supports AirPlay natively. Great for users who prefer managing channel lists manually with custom categories.' },
                                { name: 'Flex IPTV', rating: '★★★★☆', desc: 'Beautiful iOS-native interface. Smooth channel switching, EPG support, and AirPlay. Recommended for users who value aesthetics alongside functionality.' },
                                { name: 'OTT Navigator', rating: '★★★★☆', desc: 'Feature-rich IPTV player with an excellent EPG and channel organisation system. Supports Xtream Codes and M3U. Great for large channel lists like IPTV UK.' },
                            ].map((app) => (
                                <div key={app.name} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-white font-semibold">{app.name}</p>
                                        <span className="text-emerald-400 text-sm">{app.rating}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm">{app.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Setup Guide */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Set Up IPTV on iPhone – Step by Step</h2>
                        <p className="text-slate-400 mb-10">Get IPTV running on your iPhone or iPad in under 5 minutes.</p>
                        <div className="space-y-6">
                            {[
                                { step: '01', title: 'Download an IPTV App from the App Store', desc: 'Open the Apple App Store on your iPhone or iPad. Search for "IPTV Smarters Pro" and download it for free. No payment required for the app itself.' },
                                { step: '02', title: 'Subscribe to IPTV UK', desc: 'Contact IPTV UK via WhatsApp and select your subscription plan (1, 3, 6, or 12 months). You\'ll receive your Server URL, Username, and Password instantly.' },
                                { step: '03', title: 'Open the App and Log In', desc: 'Launch IPTV Smarters Pro. Tap "Login with Xtream Codes API". Enter your Server URL (provided by us), your Username, and your Password. Tap the login button.' },
                                { step: '04', title: 'Wait for Channels to Load', desc: 'Your full channel list with 45,000+ channels and the EPG programme guide will load within 30–60 seconds. Channels are organised by category: UK, Sports, Entertainment, News, International, etc.' },
                                { step: '05', title: 'Watch Live or Cast to TV', desc: 'Start watching directly on your iPhone, or tap the AirPlay icon to cast to your Smart TV or Apple TV. Use the EPG to browse upcoming programmes and never miss a live event.' },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 bg-slate-900 rounded-xl p-6 border border-slate-700">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-xl flex items-center justify-center">
                                        <span className="text-emerald-400 font-bold text-sm">{item.step}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing CTA */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Watching on Your iPhone Today</h2>
                        <p className="text-emerald-50 text-lg mb-8">From £12/month. iPhone, iPad & Apple TV compatible. No contract.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[{ period: '1 Month', price: '£12' }, { period: '3 Months', price: '£28' }, { period: '6 Months', price: '£42' }, { period: '12 Months', price: '£55' }].map((plan) => (
                                <div key={plan.period} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-white font-bold text-2xl">{plan.price}</div>
                                    <div className="text-emerald-100 text-sm mt-1">{plan.period}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20IPTV%20for%20my%20iPhone%20UK" variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-emerald-50" target="_blank" rel="noopener noreferrer" title="Get IPTV on WhatsApp">
                                Subscribe Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20iPhone%20IPTV" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Get Free Trial
                            </Button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Related guides */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <RelatedContentSection heading={"IPTV Device Guides: Smart TV, Android Box & Mobile Data"} items={[
    { slug: '/iptv-smart-tv-uk/', title: 'IPTV on Smart TV UK 2026', description: 'Cast from your iPhone to a Smart TV — or watch IPTV directly on the big screen.', category: 'Devices' },
    { slug: '/iptv-android-box-uk/', title: 'IPTV on Android Box UK 2026', description: 'Best Android TV boxes for home IPTV — pair with iPhone for the ultimate setup.', category: 'Devices' },
    { slug: 'iptv-mobile-data-4g-5g', title: 'IPTV on 4G & 5G Mobile Data UK', description: 'Watch IPTV on your iPhone using EE, Vodafone, O2 and Three mobile data.', category: 'Guides' },
                        ]} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">iPhone & iPad IPTV UK – Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: 'What is the best IPTV app for iPhone UK in 2026?', a: 'IPTV Smarters Pro is the top choice — free from the App Store, supports Xtream Codes, and offers a clean interface with EPG. GSE Smart IPTV and Flex IPTV are strong alternatives.' },
                                { q: 'Can I watch IPTV on my iPad UK?', a: 'Yes. All iOS IPTV apps work on iPad. The larger screen makes iPad especially great for watching sports and movies. AirPlay lets you cast from iPad to any compatible Smart TV.' },
                                { q: 'Can I cast IPTV from iPhone to my TV?', a: 'Yes — use AirPlay 2 to cast to Apple TV or any AirPlay 2 Smart TV (Samsung, LG, Sony 2019+). Many IPTV apps also support Chromecast casting.' },
                                { q: 'Does IPTV work on iPhone with mobile data?', a: 'Yes. IPTV works on 4G and 5G. HD streaming uses around 2–3 GB per hour. 5G easily supports 4K streams. Use WiFi calling or monitor data usage if on a limited plan.' },
                                { q: 'Is there a free IPTV trial for iPhone UK?', a: 'Yes. IPTV UK offers a free 24-hour iOS trial. Contact us via WhatsApp to receive your trial credentials instantly — no credit card or App Store purchase needed.' },
                            ].map((item) => (
                                <div key={item.q} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                    <h3 className="text-white font-semibold text-lg mb-3">{item.q}</h3>
                                    <p className="text-slate-300 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

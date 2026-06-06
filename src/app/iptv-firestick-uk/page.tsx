// IPTV Firestick UK landing page
// SEO: Targets "iptv firestick uk", "best iptv for firestick uk 2026", "how to get iptv on firestick"

import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { buildAlternates } from '@/lib/hreflang';
import { MERCHANT_RETURN_POLICY, OFFER_SHIPPING_DETAILS, PRODUCT_IMAGE, PRICE_VALID_UNTIL } from '@/lib/schema-constants';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/iptv-firestick-uk/", {
    title: 'IPTV UK on Firestick 2026 – Best Setup Guide | 2 Free Trials, 5-Min Install',
    description:
        'Best IPTV UK for Firestick 2026. Set up in 5 minutes — 45,000+ channels, Sky Sports, Premier League & 4K HD. 2 free IPTV UK trials per user, no card needed. From £12/month. 24/7 setup support.',
    alternates: {
        canonical: '/iptv-firestick-uk/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/iptv-firestick-uk/'),
    },
    openGraph: {
        title: 'IPTV UK on Firestick 2026 – 2 Free Trials | Setup in 5 Minutes',
        description: 'Best IPTV UK for Firestick — 45,000+ channels, Sky Sports & 4K. Setup in 5 minutes. 2 free IPTV UK trials per user, no card. From £12/month. 24/7 support.',
        url: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/',
        type: 'website',
        images: [
            {
                url: 'https://iptv-uk-iptv.co.uk/images/best-iptv-firestick-uk-2026-hero.webp',
                width: 1200,
                height: 675,
                alt: 'Best IPTV UK for Firestick 2026 — setup guide with 2 free trials and 45,000+ channels',
                type: 'image/webp',
            },
        ],
    },
});

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/#service',
    name: 'IPTV Service for Amazon Firestick UK',
    description: 'Premium IPTV subscription for Amazon Firestick UK. 45,000+ live channels in HD and 4K, 100,000+ VOD, 7-day catch-up. Works on all Firestick models.',
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
    name: 'IPTV UK – Firestick Subscription',
    description: 'Premium IPTV subscription for Amazon Firestick UK. 45,000+ channels, HD & 4K quality, UK sports included.',
    image: PRODUCT_IMAGE,
    brand: { '@type': 'Brand', name: 'IPTV UK' },
    offers: [
        { '@type': 'Offer', price: '12.00', priceCurrency: 'GBP', name: '1 Month', url: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '28.00', priceCurrency: 'GBP', name: '3 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '42.00', priceCurrency: 'GBP', name: '6 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
        { '@type': 'Offer', price: '55.00', priceCurrency: 'GBP', name: '12 Months', url: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/', availability: 'https://schema.org/InStock', priceValidUntil: PRICE_VALID_UNTIL, hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY, shippingDetails: OFFER_SHIPPING_DETAILS },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'IPTV on Firestick UK', item: 'https://iptv-uk-iptv.co.uk/iptv-firestick-uk/' },
    ],
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'How do I get IPTV on my Firestick in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'To get IPTV on Firestick UK: enable Apps from Unknown Sources in Developer Options, install the Downloader app, download IPTV Smarters Pro APK, then enter your IPTV UK credentials (server URL, username, password) to start streaming 45,000+ channels.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the best IPTV app for Firestick UK in 2026?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'The best IPTV apps for Firestick UK in 2026 are IPTV Smarters Pro (best overall), TiviMate (best interface), and GSE Smart IPTV (best for M3U playlists). IPTV Smarters Pro is recommended for beginners due to its simple setup and Xtream Codes support.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does IPTV UK work on all Firestick models?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK works on all Amazon Firestick models including Firestick Lite, Firestick 4K, Firestick 4K Max, and Fire TV Cube. Any Firestick model capable of running apps supports IPTV streaming.',
            },
        },
        {
            '@type': 'Question',
            name: 'What internet speed do I need for IPTV on Firestick?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For HD quality IPTV on Firestick you need at least 10 Mbps. For 4K Ultra HD streaming, 25 Mbps is recommended. Most UK broadband connections handle this easily. A wired Ethernet connection via the Ethernet adapter gives the best results.',
            },
        },
        {
            '@type': 'Question',
            name: 'Why is my IPTV buffering on Firestick?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV buffering on Firestick is usually caused by slow internet speed, WiFi interference, or overloaded Firestick memory. Fix by: restarting your router and Firestick, clearing app cache, using a wired Ethernet adapter, or reducing stream quality from 4K to HD temporarily.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a free trial for IPTV on Firestick?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK offers a free 24-hour trial with full access to all 45,000+ channels on your Firestick. No credit card required. Contact us via WhatsApp to claim your free Firestick IPTV trial.',
            },
        },
    ],
};

export default function IPTVFirestickUKPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                            Firestick IPTV UK 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            IPTV on Firestick UK 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Turn your Amazon Firestick into the ultimate TV streaming device. 45,000+ live channels, Sky Sports, Premier League, 100,000+ VOD — all in HD and 4K. Set up in under 10 minutes.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20IPTV%20on%20my%20Firestick%20UK" variant="primary" size="lg" target="_blank" rel="noopener noreferrer" title="Get IPTV on WhatsApp">
                                Get IPTV for Firestick
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20IPTV%20on%20Firestick" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free 24-Hour Trial
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
                            {['All Firestick Models', 'Setup in 10 Minutes', 'HD & 4K Streams', '45,000+ Channels'].map((item) => (
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
                            src="/images/iptv-firestick-uk-setup-step-by-step.webp"
                            alt="How to install IPTV on Firestick UK — step-by-step setup guide 2026"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
            </section>

            {/* Overview */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Use IPTV on Firestick UK?</h2>

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/firestick-iptv-uk-channels-screen.webp"
                                alt="Amazon Firestick showing IPTV UK channels menu"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                            <p>
                                The Amazon Firestick is the UK&apos;s most popular streaming device — and for good reason. It&apos;s affordable, compact, plugs directly into any HDMI TV, and supports virtually every streaming app available. When paired with a premium IPTV subscription like IPTV UK, the Firestick transforms into a complete television replacement capable of delivering thousands of live channels, catch-up TV, and on-demand movies far exceeding anything available through traditional pay-TV providers.
                            </p>
                            <p>
                                Unlike Sky or Virgin Media, IPTV on Firestick requires no satellite dish, no engineer installation, and no lengthy contract. You already own the hardware — the Firestick you have right now is all you need. Simply install a compatible IPTV app, enter your subscription credentials, and within minutes you&apos;re watching Sky Sports, Premier League football, BBC, ITV, Channel 4, and 45,000+ channels from around the world in full HD or 4K.
                            </p>
                            <p>
                                IPTV UK has been optimised specifically for Amazon Firestick performance. Our servers deliver streams at consistent bitrates to ensure buffer-free playback even on older Firestick models. With a UK broadband connection of 10 Mbps or above, you&apos;ll enjoy smooth HD streaming, and 25 Mbps or above unlocks full 4K Ultra HD quality on any content broadcast in that resolution.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Device Compatibility */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Compatible Firestick Models</h2>
                        <p className="text-slate-400 mb-10">IPTV UK works perfectly on every Amazon Firestick and Fire TV device.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: 'Firestick 4K Max (2023)', desc: 'Best Firestick for IPTV. Wi-Fi 6E support, Dolby Vision, HDR10+, and blazing fast performance. Recommended.' },
                                { name: 'Firestick 4K (2023)', desc: 'Excellent 4K HDR streaming with Dolby Vision. Great value for 4K IPTV in the UK.' },
                                { name: 'Firestick Lite', desc: 'Budget option supporting HD streams. Perfect for bedrooms and secondary TVs. Handles HD IPTV flawlessly.' },
                                { name: 'Firestick (3rd Gen)', desc: 'The standard HD Firestick. Supports up to 1080p HD IPTV streaming with reliable performance.' },
                                { name: 'Fire TV Cube (3rd Gen)', desc: 'The most powerful Fire TV device. Built-in Ethernet port eliminates WiFi buffering. Ideal for living rooms.' },
                                { name: 'Fire TV Stick (All Older Models)', desc: 'All legacy Firestick models from 2016 onward are supported. May need to clear cache regularly.' },
                            ].map((device) => (
                                <div key={device.name} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <div>
                                            <p className="text-white font-semibold mb-1">{device.name}</p>
                                            <p className="text-slate-400 text-sm">{device.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step Setup Guide */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How to Set Up IPTV on Firestick UK – Step by Step</h2>
                        <p className="text-slate-400 mb-10">Follow these 5 simple steps to get IPTV running on your Firestick in under 10 minutes.</p>
                        <div className="space-y-6">
                            {[
                                {
                                    step: '01',
                                    title: 'Enable Apps from Unknown Sources',
                                    desc: 'On your Firestick home screen, go to Settings (gear icon) → My Fire TV → Developer Options. Toggle on "Apps from Unknown Sources" and "ADB Debugging". This allows you to install IPTV apps not available in the Amazon App Store.',
                                },
                                {
                                    step: '02',
                                    title: 'Install the Downloader App',
                                    desc: 'Return to the Firestick home screen and use the search bar to find "Downloader". Install this free app from the Amazon App Store. Downloader lets you access any APK file via a URL — it\'s essential for sideloading IPTV apps.',
                                },
                                {
                                    step: '03',
                                    title: 'Download IPTV Smarters Pro',
                                    desc: 'Open the Downloader app and navigate to the IPTV Smarters Pro APK download URL (available from our WhatsApp support). Download and install the APK. IPTV Smarters Pro is the recommended app for its clean interface and Xtream Codes support.',
                                },
                                {
                                    step: '04',
                                    title: 'Enter Your IPTV UK Credentials',
                                    desc: 'Open IPTV Smarters Pro and select "Login with Xtream Codes API". Enter the Server URL, Username, and Password sent to you by IPTV UK when you subscribed. Your full channel list will load within seconds.',
                                },
                                {
                                    step: '05',
                                    title: 'Start Watching Live TV',
                                    desc: 'Browse through Live TV, Movies, or TV Series. Use the EPG (Electronic Programme Guide) to see what\'s on now and what\'s coming up. Favourite your most-watched channels for quick access. Enjoy HD and 4K streaming instantly.',
                                },
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

            {/* Troubleshooting */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Firestick IPTV Troubleshooting</h2>
                        <p className="text-slate-400 mb-10">Common issues and how to fix them quickly.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                {
                                    problem: 'Buffering or Freezing',
                                    fix: 'Restart router and Firestick. Clear IPTV app cache (Settings → Applications → Manage Installed Apps). Use a wired Ethernet adapter for the most stable connection. Try switching from 4K to HD stream.',
                                },
                                {
                                    problem: 'Channels Not Loading',
                                    fix: 'Force close and reopen the IPTV app. Check your subscription is active by logging into the portal. Ensure your internet is working. Contact IPTV UK support via WhatsApp for a server status update.',
                                },
                                {
                                    problem: 'App Crashing on Firestick',
                                    fix: 'Clear the app cache and data, then restart the Firestick. If the issue persists, uninstall and reinstall the IPTV app. Older Firestick models benefit from Force Stop before launching the app.',
                                },
                                {
                                    problem: 'EPG Not Showing',
                                    fix: 'In IPTV Smarters Pro, go to Settings and trigger an EPG reload. If the guide is blank, wait 5–10 minutes for data to populate. Ensure your player is set to receive EPG from the Xtream Codes server.',
                                },
                                {
                                    problem: 'Black Screen on Playback',
                                    fix: 'Try switching the video player within the app (most IPTV apps offer multiple player options). Update the IPTV app to the latest version. Check the TV\'s HDMI-CEC settings aren\'t causing conflicts.',
                                },
                                {
                                    problem: 'Slow Firestick Performance',
                                    fix: 'Clear cache for all apps via Settings → Applications. Disable or uninstall apps you don\'t use. Restart your Firestick weekly. Ensure Firestick is not too hot — adequate ventilation helps performance.',
                                },
                            ].map((item) => (
                                <div key={item.problem} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                                    <p className="text-emerald-400 font-semibold mb-2">{item.problem}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">{item.fix}</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get IPTV on Your Firestick Today</h2>
                        <p className="text-emerald-50 text-lg mb-8">From £12/month. 45,000+ channels. All devices. No contract.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[
                                { period: '1 Month', price: '£12' },
                                { period: '3 Months', price: '£28' },
                                { period: '6 Months', price: '£42' },
                                { period: '12 Months', price: '£55' },
                            ].map((plan) => (
                                <div key={plan.period} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-white font-bold text-2xl">{plan.price}</div>
                                    <div className="text-emerald-100 text-sm mt-1">{plan.period}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20IPTV%20for%20my%20Firestick%20UK" variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-emerald-50" target="_blank" rel="noopener noreferrer" title="Get IPTV on WhatsApp">
                                Subscribe Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20IPTV%20on%20Firestick" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Get Free Trial
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">IPTV Firestick UK – Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: 'How do I get IPTV on my Firestick in the UK?',
                                    a: 'Enable Apps from Unknown Sources in Firestick Developer Options, install the Downloader app, download IPTV Smarters Pro, then enter your IPTV UK credentials to stream 45,000+ channels instantly.',
                                },
                                {
                                    q: 'What is the best IPTV app for Firestick UK in 2026?',
                                    a: 'IPTV Smarters Pro is the top choice for its easy setup and clean interface. TiviMate is excellent for advanced users wanting a premium EPG experience. Both work perfectly with IPTV UK.',
                                },
                                {
                                    q: 'Does IPTV UK work on all Firestick models?',
                                    a: 'Yes — all Firestick models from the original to the latest Firestick 4K Max are supported. The Fire TV Cube is also fully compatible. We recommend the Firestick 4K Max for the best 4K IPTV experience.',
                                },
                                {
                                    q: 'What internet speed do I need for IPTV on Firestick?',
                                    a: 'HD streaming requires 10 Mbps minimum. 4K Ultra HD requires 25 Mbps or above. Most UK broadband packages far exceed this. For the best experience, use a wired Ethernet connection via the Firestick Ethernet adapter.',
                                },
                                {
                                    q: 'Why is my IPTV buffering on Firestick?',
                                    a: 'Common causes: slow WiFi signal, app cache buildup, or peak-time server load. Solutions: move closer to your router, clear the IPTV app cache, use a wired connection, or switch from 4K to HD stream quality.',
                                },
                                {
                                    q: 'Is there a free trial for IPTV on Firestick?',
                                    a: 'Yes! IPTV UK offers a free 24-hour trial with full access to all channels on your Firestick. No credit card needed. Contact us via WhatsApp to claim your trial immediately.',
                                },
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

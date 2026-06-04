// BBC IPTV UK landing page
// SEO: Targets "bbc iptv uk", "watch bbc on iptv uk 2026"

import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FallbackImage from '@/components/ui/FallbackImage';
import RelatedContentSection from '@/components/sections/RelatedContentSection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/bbc-iptv-uk/", {
    title: 'Watch BBC on IPTV UK 2026 – BBC One, Two, Three, Four & Catch-Up in HD',
    description:
        'Get all BBC channels on IPTV UK — BBC One, BBC Two, BBC Three, BBC Four & CBeebies in HD. Watch IPTV UK BBC coverage live and on-demand with 7-day catch-up. From £12/month. No contract.',
    alternates: {
        canonical: '/bbc-iptv-uk/',
        ...buildAlternates('https://www.iptvuk-elite.com/bbc-iptv-uk/'),
    },
});

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I watch BBC channels on IPTV in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK Elite includes BBC One, BBC Two, BBC Three, BBC Four, BBC News, BBC Parliament, CBBC, CBeebies, and BBC Alba — all streamed in HD quality directly over your internet connection.',
            },
        },
        {
            '@type': 'Question',
            name: 'What BBC content can I watch on IPTV UK Elite?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'You can watch all live BBC programming including EastEnders, Match of the Day, Strictly Come Dancing, Doctor Who, BBC News at Ten, Panorama, Wimbledon, Six Nations rugby, BBC sports events, drama series, documentaries, and children\'s programming on CBBC and CBeebies.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does IPTV BBC work outside the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK Elite delivers BBC channels to subscribers worldwide. Customers in Spain, France, Australia, Canada, and beyond use IPTV UK Elite to watch live BBC programming and other UK channels from wherever they are in the world.',
            },
        },
        {
            '@type': 'Question',
            name: 'What devices can I watch BBC on via IPTV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK Elite supports Amazon Firestick, Samsung and LG Smart TVs, Android TV boxes, MAG boxes, Apple TV, iOS and Android smartphones and tablets, and any device with a compatible IPTV player such as TiviMate, GSE Smart IPTV, or IPTV Smarters.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a free trial to watch BBC on IPTV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK Elite offers a completely free 24-hour trial with full access to all BBC channels and 45,000+ other live channels. No credit card required — contact us on WhatsApp to activate your trial.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Watch BBC on IPTV UK 2026',
    description:
        'Complete guide to watching BBC channels on IPTV UK in 2026. All BBC channels listed, pricing comparison, compatible devices, and setup guide.',
    author: { '@type': 'Organization', name: 'IPTV UK Elite' },
    publisher: {
        '@type': 'Organization',
        name: 'IPTV UK Elite',
        logo: { '@type': 'ImageObject', url: 'https://www.iptvuk-elite.com/logo.webp' },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://www.iptvuk-elite.com/bbc-iptv-uk/',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iptvuk-elite.com/' },
        { '@type': 'ListItem', position: 2, name: 'Watch BBC on IPTV UK 2026', item: 'https://www.iptvuk-elite.com/bbc-iptv-uk/' },
    ],
};

export default function BBCIPTVUKPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                            BBC on IPTV UK 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Watch BBC on IPTV UK 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            All BBC channels — BBC One, BBC Two, BBC Three, BBC Four, BBC News, CBBC, CBeebies and more — streamed in HD through IPTV UK Elite. Watch live UK TV at home or anywhere in the world. From just £12/month.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20watch%20BBC%20on%20IPTV%20UK" variant="primary" size="lg" target="_blank" rel="noopener noreferrer" title="Watch sports with IPTV on WhatsApp">
                                Get BBC on IPTV Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20to%20test%20BBC%20IPTV%20UK" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free 24-Hour Trial
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
                            {['All BBC Channels', 'HD Quality', 'Watch Worldwide', 'No TV Licence Needed for IPTV'].map((item) => (
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
                            src="/images/bbc-iptv-uk-channels-streaming.webp"
                            alt="Watch BBC channels via IPTV UK — BBC One, Two, Three, Four and News"
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
                            src="/images/pages/bbc-iptv-uk-hero.webp"
                            alt={"Family watching BBC News at Six on television in a cozy living room, featuring a news anchor discussing the cost of living crisis, with bookshelves and warm lighting in the background."}
                            width={800}
                            height={450}
                            className="w-full h-auto bg-slate-800"
                        />
                    </figure>
                </div>
            </div>
            {/* Channel Overview */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">BBC on IPTV UK — Channel Overview</h2>

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/bbc-iptv-uk-iplayer-alternative.webp"
                                alt="BBC IPTV UK alternative to iPlayer — all BBC channels live"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                            <p>
                                The BBC (British Broadcasting Corporation) operates some of the world's most respected television channels. From the flagship BBC One — home to prime-time dramas, national events, EastEnders, Strictly Come Dancing, and major live sport including Match of the Day — to the innovative BBC Three, relaunched as a linear channel in 2022 and now a home for youth-oriented drama and comedy, the BBC portfolio is among the richest in British broadcasting history.
                            </p>
                            <p>
                                Watching BBC channels through IPTV UK Elite gives you live access to all of these channels without needing a traditional TV aerial or a paid subscription to a TV provider. IPTV delivers BBC streams over your broadband connection, making it possible to watch BBC One live regardless of whether you're in London, Edinburgh, or even living abroad as an expat.
                            </p>
                            <p>
                                BBC coverage includes some of the biggest sporting events of the year — Wimbledon tennis, Six Nations rugby, the London Marathon, FA Cup football, athletics championships, and cycling — alongside world-class documentary series, news programming, and entertainment. With IPTV UK Elite, you get all of this and 45,000+ additional channels from around the world in a single, affordable subscription.
                            </p>
                            <p>
                                Setup is straightforward. Once you subscribe, you'll receive login credentials via WhatsApp. Enter these into your IPTV player of choice — TiviMate, IPTV Smarters, GSE Smart IPTV, or any M3U-compatible player — and you're watching live BBC within minutes. The service works on Firestick, Smart TVs, Android boxes, iOS, and Android devices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Channels Included */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All BBC Channels Included</h2>
                        <figure className="in-content-feature my-8 rounded-xl overflow-hidden">
                            <FallbackImage
                                src="/images/pages/bbc-iptv-uk-feature.webp"
                                alt={"BBC channels displayed on a television screen, featuring BBC One, Two, Three, Four, News, and Sport with program details and times, highlighting IPTV UK Elite's offerings for accessing live BBC content."}
                                width={800}
                                height={450}
                                loading="lazy"
                                className="w-full h-auto bg-slate-800"
                            />
                        </figure>

                        <p className="text-slate-400 mb-10">Every BBC television channel, included as standard with all IPTV UK Elite plans.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: 'BBC One', desc: 'Flagship channel — EastEnders, Match of the Day, Strictly, major live events, and national news.' },
                                { name: 'BBC Two', desc: 'Documentaries, arts, history, science, comedy, and cultural programming for all ages.' },
                                { name: 'BBC Three', desc: 'Youth-oriented drama and comedy including Normal People, Fleabag, and reality programming.' },
                                { name: 'BBC Four', desc: 'Arts, classical music, foreign language films, history documentaries, and specialist programming.' },
                                { name: 'BBC News', desc: '24-hour rolling news coverage — UK and world news, live press conferences, and breaking stories.' },
                                { name: 'BBC Parliament', desc: 'Live coverage of House of Commons debates, committee hearings, and PMQs.' },
                                { name: 'CBBC', desc: "Children's programming for 6–12 year olds — Blue Peter, Horrible Histories, and original drama." },
                                { name: 'CBeebies', desc: "Pre-school children's television — In the Night Garden, Bluey, Hey Duggee, and Bing." },
                                { name: 'BBC Alba', desc: 'Gaelic language programming — drama, sport, music, and culture from Scotland.' },
                                { name: 'BBC Regional Variations', desc: 'BBC One and Two regional variations for England, Scotland, Wales, and Northern Ireland.' },
                            ].map((ch) => (
                                <div key={ch.name} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        <div>
                                            <p className="text-white font-semibold mb-1">{ch.name}</p>
                                            <p className="text-slate-400 text-sm">{ch.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* IPTV vs Traditional */}
            <section className="py-16 md:py-20 bg-slate-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IPTV BBC vs Traditional Methods</h2>
                        <p className="text-slate-400 mb-10">Compare IPTV UK Elite with traditional ways of watching BBC in the UK.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="py-3 px-4 text-slate-400 font-medium">Feature</th>
                                        <th className="py-3 px-4 text-emerald-400 font-semibold">IPTV UK Elite</th>
                                        <th className="py-3 px-4 text-slate-400 font-medium">Traditional (Aerial/Cable)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {[
                                        ['Monthly Cost', 'From £12/month (all channels)', 'TV aerial free + £169.50/yr TV licence'],
                                        ['All BBC Channels', 'Yes', 'Yes (with aerial)'],
                                        ['Available Abroad', 'Yes, worldwide', 'No (geo-restricted)'],
                                        ['Total Channels', '45,000+ worldwide', '~70 Freeview channels'],
                                        ['Device Flexibility', 'Any device anywhere', 'Mainly TV with aerial point'],
                                        ['HD Quality', 'Yes', 'Yes (most channels)'],
                                        ['Setup', '5 minutes, any device', 'Aerial installation required'],
                                        ['International Channels', 'Yes, 45,000+', 'Very limited'],
                                        ['Sports Channels', 'All Sky Sports, TNT, BT', 'Free-to-air only'],
                                        ['Free Trial', '24-hour trial', 'N/A'],
                                    ].map(([feature, iptv, trad]) => (
                                        <tr key={feature} className="hover:bg-slate-700/30">
                                            <td className="py-3 px-4 text-slate-300 font-medium">{feature}</td>
                                            <td className="py-3 px-4 text-emerald-400">{iptv}</td>
                                            <td className="py-3 px-4 text-slate-400">{trad}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Watch All BBC Channels on IPTV Today</h2>
                        <p className="text-emerald-50 text-lg mb-8">BBC One, Two, Three, Four, News and more — all included. No contract. Works anywhere in the world.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[{ period: '1 Month', price: '£12' }, { period: '3 Months', price: '£28' }, { period: '6 Months', price: '£42' }, { period: '12 Months', price: '£55' }].map((plan) => (
                                <div key={plan.period} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-white font-bold text-2xl">{plan.price}</div>
                                    <div className="text-emerald-100 text-sm mt-1">{plan.period}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20subscribe%20to%20watch%20BBC%20on%20IPTV%20UK" variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-emerald-50" target="_blank" rel="noopener noreferrer" title="Order IPTV on WhatsApp">
                                Subscribe Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20to%20watch%20BBC%20on%20IPTV" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
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
                        <RelatedContentSection heading={"IPTV UK Elite Related Guides: Channels, Setup & More"} items={[
    { slug: '/itv-iptv-uk/', title: 'ITV on IPTV UK 2026', description: 'Watch ITV1, ITV2, ITV3, ITV4 and ITVBe live on IPTV without any app restrictions.', category: 'Entertainment' },
    { slug: '/channel-4-iptv/', title: 'Channel 4 on IPTV UK 2026', description: 'Watch Channel 4, E4, Film4 and More4 on IPTV — no VPN, no geo-blocks.', category: 'Entertainment' },
    { slug: 'iptv-channels-uk-2026', title: 'Full UK IPTV Channel List 2026', description: "Every channel included in IPTV UK Elite's 45,000+ channel lineup explained.", category: 'Guides' },
                        ]} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">BBC IPTV UK – Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: 'Can I watch BBC channels on IPTV in the UK?', a: 'Yes. IPTV UK Elite includes BBC One, BBC Two, BBC Three, BBC Four, BBC News, BBC Parliament, CBBC, CBeebies, and BBC Alba — all streamed in HD quality directly over your internet connection.' },
                                { q: 'What BBC content can I watch on IPTV UK Elite?', a: "You can watch all live BBC programming including EastEnders, Match of the Day, Strictly Come Dancing, Doctor Who, BBC News at Ten, Panorama, Wimbledon, Six Nations rugby, and children's programming on CBBC and CBeebies." },
                                { q: 'Does IPTV BBC work outside the UK?', a: 'Yes. IPTV UK Elite delivers BBC channels to subscribers worldwide. Customers in Spain, France, Australia, Canada, and beyond use IPTV UK Elite to watch live BBC programming from wherever they are.' },
                                { q: 'What devices can I watch BBC on via IPTV?', a: 'IPTV UK Elite supports Amazon Firestick, Samsung and LG Smart TVs, Android TV boxes, MAG boxes, Apple TV, iOS and Android smartphones and tablets, and any device with a compatible IPTV player such as TiviMate or IPTV Smarters.' },
                                { q: 'Is there a free trial to watch BBC on IPTV?', a: 'Yes. IPTV UK Elite offers a completely free 24-hour trial with full access to all BBC channels and 45,000+ other live channels. No credit card required — contact us on WhatsApp to activate your trial.' },
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

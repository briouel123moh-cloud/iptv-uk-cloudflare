// Sky Cinema IPTV landing page
// SEO: Targets "sky cinema iptv", "watch sky cinema on iptv uk 2026"

import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FallbackImage from '@/components/ui/FallbackImage';
import RelatedContentSection from '@/components/sections/RelatedContentSection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/sky-cinema-iptv/", {
    title: 'Sky Cinema on IPTV UK 2026 – All Sky Cinema Channels, No Contract',
    description:
        'Watch all Sky Cinema channels via IPTV UK without a Sky contract. Sky Cinema Premiere, Action, Comedy, Drama & more — all included in every IPTV UK plan from £12/month. Latest movies, no commitment.',
    alternates: {
        canonical: '/sky-cinema-iptv/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/sky-cinema-iptv/'),
    },
});

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I watch Sky Cinema on IPTV in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK includes all Sky Cinema channels — Sky Cinema Premiere, Action, Comedy, Drama, Family, Sci-Fi & Horror, Thriller, Disney, Select, and Animation — all streaming in HD without a Sky subscription or Sky Q box.',
            },
        },
        {
            '@type': 'Question',
            name: 'What films can I watch on Sky Cinema via IPTV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sky Cinema on IPTV UK gives you access to hundreds of the latest Hollywood releases, blockbuster franchises, Disney and Pixar films, animated features, thrillers, comedies, dramas, and family films — including Sky Cinema Originals.',
            },
        },
        {
            '@type': 'Question',
            name: 'How much does Sky Cinema cost on IPTV versus a Sky subscription?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Sky Cinema through Sky typically costs £11/month as an add-on to an existing Sky TV package, which itself starts at £26/month — making Sky Cinema around £37+ per month total. IPTV UK includes all Sky Cinema channels for just £12/month, covering all 45,000+ channels.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does Sky Cinema IPTV have the latest films?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The Sky Cinema channels included in IPTV UK broadcast the same content as the official Sky Cinema service, including the latest theatrical releases and Sky Cinema Originals, typically available within weeks of cinema release.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a free trial for Sky Cinema on IPTV?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK offers a free 24-hour trial with full access to all Sky Cinema channels and 45,000+ live channels. No credit card required — contact us via WhatsApp to activate your trial.',
            },
        },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Watch Sky Cinema on IPTV UK 2026',
    description:
        'Complete guide to watching all Sky Cinema channels on IPTV UK in 2026. Channels listed, pricing comparison, device compatibility, and FAQ.',
    author: { '@type': 'Organization', name: 'IPTV UK' },
    publisher: {
        '@type': 'Organization',
        name: 'IPTV UK',
        logo: { '@type': 'ImageObject', url: 'https://iptv-uk-iptv.co.uk/logo.webp' },
    },
    datePublished: '2026-01-01',
    dateModified: '2026-03-01',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://iptv-uk-iptv.co.uk/sky-cinema-iptv/',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'Sky Cinema on IPTV UK 2026', item: 'https://iptv-uk-iptv.co.uk/sky-cinema-iptv/' },
    ],
};

export default function SkyCinemaIPTVPage() {
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
                            Sky Cinema on IPTV UK 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Watch Sky Cinema on IPTV UK 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            All Sky Cinema channels — Premiere, Action, Comedy, Drama, Family, Sci-Fi & Horror, Disney and more — streamed in HD through IPTV UK. The latest films, Sky Cinema Originals, and hundreds of classics. From just £12/month.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20watch%20Sky%20Cinema%20on%20IPTV%20UK" variant="primary" size="lg" target="_blank" rel="noopener noreferrer" title="Watch sports with IPTV on WhatsApp">
                                Get Sky Cinema on IPTV
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20to%20test%20Sky%20Cinema%20IPTV" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free 24-Hour Trial
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
                            {['11 Cinema Channels', 'Latest Hollywood Films', 'HD Streaming', 'No Sky Contract'].map((item) => (
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
                            src="/images/sky-cinema-iptv-uk-movies.webp"
                            alt="Sky Cinema on IPTV UK — latest movies without a Sky contract"
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
                            src="/images/pages/sky-cinema-iptv-hero.webp"
                            alt={"Home theater setup with large screen displaying \"The Silent City\" on Sky Cinema, featuring cozy seating, popcorn, and a remote control, illustrating IPTV UK&apos;s Sky Cinema offerings."}
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Sky Cinema IPTV — What&apos;s Included?</h2>

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/sky-cinema-iptv-channels-list.webp"
                                alt="Sky Cinema IPTV UK channel list — all Sky Cinema channels"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                            <p>
                                Sky Cinema is the UK&apos;s premier movie subscription service, offering a constantly rotating library of the latest Hollywood releases, blockbuster franchises, independent films, and Sky Cinema Originals — exclusive films produced by Sky that cannot be found anywhere else. With dedicated channels for every taste — action, comedy, drama, family, sci-fi, horror, and Disney — there&apos;s always something new to watch.
                            </p>
                            <p>
                                Sky Cinema Originals have included major productions such as Operation Mincemeat, The Witchfinder, You Are Not My Mother, A Boy Called Christmas, and many more. These exclusives are available the moment they premiere on Sky Cinema, just as they are through a standard Sky subscription.
                            </p>
                            <p>
                                Through IPTV UK, all Sky Cinema channels are included as part of your subscription — no additional Sky package required, no Sky Q box, and no long-term contract. You simply stream live Sky Cinema over your broadband connection to any compatible device: Firestick, Smart TV, Android box, tablet, or smartphone.
                            </p>
                            <p>
                                The Sky Cinema Premiere channel is the jewel in the crown, showcasing the biggest recent theatrical releases — often available on Sky Cinema within four to six months of their UK cinema debut. In 2026, Sky Cinema Premiere continues to deliver the best in mainstream cinema directly to your screen on the same schedule as a traditional Sky subscription.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Channels Included */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All Sky Cinema Channels Included</h2>
                        <figure className="in-content-feature my-8 rounded-xl overflow-hidden">
                            <FallbackImage
                                src="/images/pages/sky-cinema-iptv-feature.webp"
                                alt={"Sky Cinema interface on TV displaying movie selections including \"Mission: Impossible - Dead Reckoning,\" \"Top Gun: Maverick,\" \"Barbie,\" and \"Oppenheimer,\" highlighting categories like Premiere, Action, Comedy, and Drama, relevant to IPTV UK subscription offerings."}
                                width={800}
                                height={450}
                                loading="lazy"
                                className="w-full h-auto bg-slate-800"
                            />
                        </figure>

                        <p className="text-slate-400 mb-10">Every Sky Cinema channel, all included with your IPTV UK subscription.</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { name: 'Sky Cinema Premiere', desc: 'The latest Hollywood blockbusters and most recent cinema releases, available within months of theatrical debut.' },
                                { name: 'Sky Cinema Action', desc: 'Non-stop action films — Mission Impossible, Fast & Furious, John Wick, superhero blockbusters, and more.' },
                                { name: 'Sky Cinema Comedy', desc: 'The best in comedy — rom-coms, stand-up specials, animated films, and classic British comedies.' },
                                { name: 'Sky Cinema Drama', desc: 'Award-winning dramas, biopics, true crime films, and critically acclaimed independent cinema.' },
                                { name: 'Sky Cinema Family', desc: 'Family-friendly entertainment — animated features, classic family films, and kid-friendly adventures.' },
                                { name: 'Sky Cinema Sci-Fi & Horror', desc: 'Science fiction epics, supernatural horror, psychological thrillers, and cult genre classics.' },
                                { name: 'Sky Cinema Thriller', desc: 'Edge-of-your-seat thrillers, espionage films, crime mysteries, and suspense cinema.' },
                                { name: 'Sky Cinema Disney', desc: 'Disney classics, Pixar masterpieces, Star Wars films, and Marvel Cinematic Universe titles.' },
                                { name: 'Sky Cinema Select', desc: 'A curated mix across all genres — great for browsing when you want variety.' },
                                { name: 'Sky Cinema Animation', desc: 'Dedicated animation channel — DreamWorks, Aardman, Studio Ghibli, and Disney/Pixar favourites.' },
                                { name: 'Sky Cinema Originals', desc: 'Exclusive Sky-produced films — available nowhere else, premiering directly on Sky Cinema.' },
                            ].map((ch) => (
                                <div key={ch.name} className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IPTV Sky Cinema vs Sky Subscription</h2>
                        <p className="text-slate-400 mb-10">Compare IPTV UK against a traditional Sky Cinema subscription in 2026.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="py-3 px-4 text-slate-400 font-medium">Feature</th>
                                        <th className="py-3 px-4 text-emerald-400 font-semibold">IPTV UK</th>
                                        <th className="py-3 px-4 text-slate-400 font-medium">Sky Cinema (via Sky)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {[
                                        ['Monthly Cost', 'From £12/month', '£37+/month (Sky TV + Cinema add-on)'],
                                        ['Contract', 'No contract', '18-month minimum'],
                                        ['Hardware Required', 'Use existing device', 'Sky Q box required'],
                                        ['Satellite Dish', 'Not needed', 'Required'],
                                        ['Sky Cinema Channels', 'All channels included', 'All channels included'],
                                        ['Sky Cinema Originals', 'Yes', 'Yes'],
                                        ['Total Channels', '45,000+ worldwide', '~350 Sky channels'],
                                        ['VOD Library', '100,000+ movies & series', 'Sky Store (paid extras)'],
                                        ['Setup Time', '5 minutes', '7–14 day installation'],
                                        ['Free Trial', '24-hour trial', 'No free trial'],
                                    ].map(([feature, iptv, sky]) => (
                                        <tr key={feature} className="hover:bg-slate-700/30">
                                            <td className="py-3 px-4 text-slate-300 font-medium">{feature}</td>
                                            <td className="py-3 px-4 text-emerald-400">{iptv}</td>
                                            <td className="py-3 px-4 text-slate-400">{sky}</td>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Watch Sky Cinema on IPTV — Choose Your Plan</h2>
                        <p className="text-emerald-50 text-lg mb-8">All Sky Cinema channels included. Plus 45,000+ other channels. No contract required.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[{ period: '1 Month', price: '£12' }, { period: '3 Months', price: '£28' }, { period: '6 Months', price: '£42' }, { period: '12 Months', price: '£55' }].map((plan) => (
                                <div key={plan.period} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-white font-bold text-2xl">{plan.price}</div>
                                    <div className="text-emerald-100 text-sm mt-1">{plan.period}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20subscribe%20for%20Sky%20Cinema%20on%20IPTV%20UK" variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-emerald-50" target="_blank" rel="noopener noreferrer" title="Order IPTV on WhatsApp">
                                Subscribe Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20Sky%20Cinema%20IPTV" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
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
                        <RelatedContentSection heading={"Comprehensive IPTV Guides: Sky Atlantic, BBC & VOD Content"} items={[
    { slug: '/sky-atlantic-iptv/', title: 'Sky Atlantic on IPTV UK 2026', description: 'Watch Sky Atlantic — Game of Thrones, Succession, Euphoria and more on IPTV.', category: 'Entertainment' },
    { slug: '/bbc-iptv-uk/', title: 'BBC on IPTV UK 2026', description: 'All BBC channels on IPTV UK — BBC One through Four plus CBBC live streams.', category: 'Entertainment' },
    { slug: 'iptv-uk-movies-series', title: 'Movies & Series on IPTV UK 2026', description: '100,000+ films and box sets on IPTV UK — same-week releases and Sky Cinema titles.', category: 'Content' },
                        ]} />
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Sky Cinema IPTV – Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: 'Can I watch Sky Cinema on IPTV in the UK?', a: 'Yes. IPTV UK includes all Sky Cinema channels — Premiere, Action, Comedy, Drama, Family, Sci-Fi & Horror, Thriller, Disney, Select, Animation, and Originals — streaming in HD without a Sky subscription or Sky Q box.' },
                                { q: 'What films can I watch on Sky Cinema via IPTV?', a: 'Sky Cinema on IPTV UK gives you access to the latest Hollywood releases, blockbuster franchises, Disney and Pixar films, animated features, thrillers, comedies, dramas, and family films — including exclusive Sky Cinema Originals.' },
                                { q: 'How much does Sky Cinema cost on IPTV versus a Sky subscription?', a: 'Sky Cinema through Sky typically costs £37+/month when combined with a required base Sky TV package. IPTV UK includes all Sky Cinema channels for just £12/month, plus 45,000+ other channels worldwide.' },
                                { q: 'Does Sky Cinema IPTV have the latest films?', a: 'Yes. The Sky Cinema channels in IPTV UK broadcast the same content as the official Sky Cinema service, including the latest theatrical releases and Sky Cinema Originals.' },
                                { q: 'Is there a free trial for Sky Cinema on IPTV?', a: 'Yes. IPTV UK offers a free 24-hour trial with full access to all Sky Cinema channels and 45,000+ live channels. No credit card required — contact us via WhatsApp to activate your trial.' },
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

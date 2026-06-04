// Watch Sky Sports Without Sky - IPTV Alternative
// SEO: Targets "watch sky sports without sky 2026", "sky sports iptv uk", "sky sports alternative uk"

import { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/sky-sports-iptv-uk/", {
    title: 'Sky Sports on IPTV UK 2026 – All 10 Channels, No Sky Contract, From £12',
    description:
        'Watch every Sky Sports channel on IPTV UK — Sky Sports Main Event, Premier League, F1 & all 10 channels. IPTV UK Sky Sports costs a fraction of a Sky contract. No dish. From £12/month.',
    alternates: {
        canonical: '/sky-sports-iptv-uk/',
        ...buildAlternates('https://www.iptvuk-elite.com/sky-sports-iptv-uk/'),
    },
    openGraph: {
        title: 'Watch Sky Sports Without Sky 2026 – IPTV UK Alternative',
        description: 'Watch all 10 Sky Sports channels without Sky TV. IPTV delivers them all for £12/month.',
        url: 'https://www.iptvuk-elite.com/sky-sports-iptv-uk/',
        type: 'website',
    },
});

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Can I watch Sky Sports without a Sky subscription UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Options include NOW TV Sports pass (£34.99/month), Sky Sports on Virgin Media (add-on), Sky Sports on BT TV (add-on), and IPTV UK Elite (£12/month). IPTV is the cheapest way to access all 10 Sky Sports channels without a Sky subscription or satellite dish.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is the cheapest way to watch Sky Sports in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK Elite at £12/month is the cheapest way to access all Sky Sports channels in the UK. This compares to NOW TV Sports pass at £34.99/month, Sky Sports direct at £25+/month (on top of a Sky base package), Virgin Media sports add-on at £18/month, and BT TV sports add-on at £15/month.',
            },
        },
        {
            '@type': 'Question',
            name: 'Does IPTV include all Sky Sports channels?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK Elite includes all 10 Sky Sports channels: Sky Sports Main Event, Premier League, Football, Cricket, Golf, F1, Action, Arena, Mix, and Sky Sports News — all in HD and 4K quality.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I watch Sky Sports F1 without Sky?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Sky Sports F1 is included in IPTV UK Elite at no extra cost. Watch every Formula 1 race weekend — practice, qualifying, and race — in HD and 4K without a Sky subscription or satellite dish.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I watch Sky Sports cricket without Sky UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Sky Sports Cricket is included in IPTV UK Elite. Watch England home internationals, The Ashes, The Hundred, IPL, and international T20 cricket in full HD without a Sky subscription.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is there a free trial to watch Sky Sports without Sky?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. IPTV UK Elite offers a free 24-hour trial with access to all 10 Sky Sports channels. Contact us via WhatsApp — no credit card required. Test every Sky Sports channel before committing.',
            },
        },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.iptvuk-elite.com/' },
        { '@type': 'ListItem', position: 2, name: 'Watch Sky Sports Without Sky 2026', item: 'https://www.iptvuk-elite.com/sky-sports-iptv-uk/' },
    ],
};

const skyChannels = [
    { name: 'Sky Sports Main Event', sport: 'Premier League, Boxing, Major Events', quality: '4K UHD' },
    { name: 'Sky Sports Premier League', sport: 'Dedicated Premier League 24/7', quality: '4K UHD' },
    { name: 'Sky Sports Football', sport: 'EFL, Scottish Premiership, La Liga, Serie A', quality: 'HD' },
    { name: 'Sky Sports Cricket', sport: 'England Internationals, The Ashes, IPL', quality: 'HD' },
    { name: 'Sky Sports Golf', sport: 'Masters, Open, US Open, Ryder Cup', quality: 'HD' },
    { name: 'Sky Sports F1', sport: 'Every F1 Race Weekend – Practice to Race', quality: '4K UHD' },
    { name: 'Sky Sports Action', sport: 'NFL, NBA, Darts, Rugby League, Extreme', quality: 'HD' },
    { name: 'Sky Sports Arena', sport: 'Tennis, Snooker, Cycling, Mixed Events', quality: 'HD' },
    { name: 'Sky Sports Mix', sport: 'Mixed Sports – Catch Events You Might Miss', quality: 'HD' },
    { name: 'Sky Sports News', sport: '24/7 Sports News, Transfers, Live Updates', quality: 'HD' },
];

export default function SkySportsIPTVUKPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                            Sky Sports Without Sky 2026
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                            Watch Sky Sports Without Sky 2026
                        </h1>
                        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                            All 10 Sky Sports channels — Premier League, F1, Cricket, Golf, and more — delivered over your broadband. No Sky subscription, no satellite dish, no contract. The cheapest way to watch Sky Sports in 2026.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20watch%20Sky%20Sports%20without%20Sky%20UK" variant="primary" size="lg" target="_blank" rel="noopener noreferrer" title="Watch sports with IPTV on WhatsApp">
                                Get Sky Sports on IPTV
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20Sky%20Sports%20without%20Sky" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free 24-Hour Trial
                            </Button>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6 mt-10 text-slate-400 text-sm">
                            {['All 10 Sky Sports Channels', 'No Sky Subscription', 'From £12/month', '4K Quality'].map((item) => (
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
                            src="/images/sky-sports-iptv-uk-premier-league-live.webp"
                            alt="Sky Sports IPTV UK — watch Premier League live without a Sky subscription"
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ways to Watch Sky Sports Without Sky in 2026</h2>

                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/sky-sports-channels-iptv-uk-guide.webp"
                                alt="All Sky Sports channels available via IPTV UK Elite"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-slate-300 space-y-4">
                            <p>
                                Millions of UK sports fans want Sky Sports without the commitment and cost of a full Sky subscription. In 2026, there are several ways to access Sky Sports without Sky TV — but they vary considerably in cost, flexibility, and value.
                            </p>
                        </div>
                        <div className="mt-8 space-y-4">
                            {[
                                { method: 'IPTV UK Elite', cost: '£12/month', contract: 'No contract', note: 'Best value – all 10 Sky Sports channels plus 45,000+ more', highlight: true },
                                { method: 'NOW TV Sports Pass', cost: '£34.99/month', contract: 'Monthly (auto-renewing)', note: 'Sky Sports channels only, limited 4K with extra Boost add-on', highlight: false },
                                { method: 'Virgin Media (Sky Sports add-on)', cost: '£18/month add-on', contract: '18-month bundle required', note: 'Requires Virgin Media cable subscription', highlight: false },
                                { method: 'BT TV (Sky Sports bolt-on)', cost: '£25/month add-on', contract: '24-month broadband bundle', note: 'Requires BT broadband subscription', highlight: false },
                            ].map((opt) => (
                                <div key={opt.method} className={`rounded-xl p-5 border ${opt.highlight ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-900 border-slate-700'}`}>
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div className="flex items-center gap-3">
                                            {opt.highlight && <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>}
                                            <p className={`font-semibold ${opt.highlight ? 'text-white' : 'text-slate-300'}`}>{opt.method}</p>
                                        </div>
                                        <span className={`font-bold ${opt.highlight ? 'text-emerald-400' : 'text-slate-400'}`}>{opt.cost}</span>
                                    </div>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm">
                                        <span className="text-slate-400">Contract: {opt.contract}</span>
                                    </div>
                                    <p className={`mt-2 text-sm ${opt.highlight ? 'text-emerald-100' : 'text-slate-400'}`}>{opt.note}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Channel List */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">All 10 Sky Sports Channels Included</h2>
                        <p className="text-slate-400 mb-10">Every Sky Sports channel available in IPTV UK Elite — no add-ons, no extras.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700">
                                        <th className="py-3 px-4 text-slate-400 font-medium">Channel</th>
                                        <th className="py-3 px-4 text-slate-400 font-medium">What's Covered</th>
                                        <th className="py-3 px-4 text-slate-400 font-medium">Quality</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-700/50">
                                    {skyChannels.map((ch) => (
                                        <tr key={ch.name} className="hover:bg-slate-800/50">
                                            <td className="py-3 px-4 text-emerald-400 font-medium">{ch.name}</td>
                                            <td className="py-3 px-4 text-slate-300 text-sm">{ch.sport}</td>
                                            <td className="py-3 px-4 text-slate-400 text-sm">{ch.quality}</td>
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Cheapest Way to Watch Sky Sports UK</h2>
                        <p className="text-emerald-50 text-lg mb-8">All 10 Sky Sports channels. No Sky needed. From £12/month.</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                            {[{ period: '1 Month', price: '£12' }, { period: '3 Months', price: '£28' }, { period: '6 Months', price: '£42' }, { period: '12 Months', price: '£55' }].map((plan) => (
                                <div key={plan.period} className="bg-white/10 rounded-xl p-4 text-center border border-white/20">
                                    <div className="text-white font-bold text-2xl">{plan.price}</div>
                                    <div className="text-emerald-100 text-sm mt-1">{plan.period}</div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20Sky%20Sports%20on%20IPTV%20without%20Sky%20UK" variant="outline" size="lg" className="bg-white text-emerald-600 border-white hover:bg-emerald-50" target="_blank" rel="noopener noreferrer" title="Watch sports with IPTV on WhatsApp">
                                Get Sky Sports Now
                            </Button>
                            <Button href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20a%20free%20trial%20for%20Sky%20Sports%20without%20Sky" variant="outline" size="lg" target="_blank" rel="noopener noreferrer" title="Start free IPTV trial on WhatsApp">
                                Free Trial
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-slate-900">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Sky Sports Without Sky – Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {[
                                { q: 'Can I watch Sky Sports without a Sky subscription UK?', a: 'Yes. Options include NOW TV (£34.99/month), Virgin Media add-on, BT TV add-on, and IPTV UK Elite (£12/month). IPTV is the cheapest and most flexible option for all 10 Sky Sports channels.' },
                                { q: 'What is the cheapest way to watch Sky Sports UK?', a: 'IPTV UK Elite at £12/month is the cheapest way to watch all Sky Sports channels — significantly cheaper than NOW TV Sports pass (£34.99/month) or any Sky bundle.' },
                                { q: 'Does IPTV include all Sky Sports channels?', a: 'Yes — all 10: Main Event, Premier League, Football, Cricket, Golf, F1, Action, Arena, Mix, and News. All in HD, with 4K available for Main Event, Premier League, and F1.' },
                                { q: 'Can I watch Sky Sports F1 without Sky?', a: 'Yes. Sky Sports F1 is included in IPTV UK Elite. Watch every race weekend — practice, qualifying, race — in HD and 4K without a Sky subscription.' },
                                { q: 'Can I watch Sky Sports cricket without Sky UK?', a: 'Yes. Sky Sports Cricket is included in every IPTV UK Elite subscription — England home tests, The Ashes, The Hundred, IPL, all in full HD.' },
                                { q: 'Is there a free trial to watch Sky Sports without Sky?', a: 'Yes. IPTV UK Elite offers a free 24-hour trial with all 10 Sky Sports channels. No credit card needed — contact us via WhatsApp.' },
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

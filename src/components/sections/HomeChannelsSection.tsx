// SEO/AEO: Channels section with UK emphasis
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const channelCategories = [
    {
        name: 'UK National & Premium',
        channels: ['BBC One HD', 'BBC Two', 'ITV 1', 'Channel 4', 'Channel 5', 'Sky Atlantic', 'Sky Max', 'Sky Witness', 'Sky Comedy', 'Dave'],
        icon: '🇬🇧'
    },
    {
        name: 'Live Sports',
        channels: ['Sky Sports Main Event', 'Sky Sports Premier League', 'Sky Sports F1', 'TNT Sports 1', 'TNT Sports 2', 'Eurosport', 'DAZN', 'Racing TV'],
        icon: '⚽'
    },
    {
        name: 'Movies & Cinema',
        channels: ['Sky Cinema Premiere', 'Sky Cinema Action', 'Sky Cinema Family', 'Sky Cinema Thriller', 'Sky Cinema Comedy', 'Film4', 'Talking Pictures'],
        icon: '🎬'
    },
    {
        name: 'US & Canada',
        channels: ['HBO', 'Showtime', 'AMC', 'FX', 'USA Network', 'ABC', 'CBS', 'NBC', 'FOX', 'ESPN', 'TSN', 'Sportsnet'],
        icon: '🇺🇸'
    },
    {
        name: 'International (150+)',
        channels: ['Arabic Pack', 'French Pack', 'German Pack', 'Spanish Pack', 'Indian Pack', 'African Pack', 'Turkish Pack', 'Portuguese'],
        icon: '🌍'
    }
];

export default function HomeChannelsSection() {
    return (
        <section className="py-16 lg:py-24 bg-slate-950" aria-labelledby="channels-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="45,000+ Channels & 100,000+ VOD"
                    subtitle="The most comprehensive IPTV channel selection for the UK with all your favorite local, premium, and international content."
                    as="h2"
                />

                {/* AEO: Answer paragraph for channel queries */}
                <p className="text-center text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    IPTV UK Elite includes every major UK channel including BBC One, BBC Two, ITV,
                    Channel 4, and Channel 5, plus comprehensive sports packages
                    (Premier League, Champions League, UFC, F1), and over 100,000 on-demand movies and series
                    updated daily. All in stunning 4K and Full HD quality.
                </p>

                {/* SEO: Channel lineup showcase image */}
                <div className="mb-12">
                    <Image
                        src="/images/iptv-uk-guide-setup-buying-tips.webp"
                        alt="UK IPTV channels 2026 — Sky Sports, TNT Sports, BBC, ITV and 45,000+ live channels in 4K quality on IPTV UK Elite"
                        title="IPTV UK Channels 2026 — Sky Sports, TNT Sports, BBC & 45,000+ Live Channels"
                        width={1200}
                        height={630}
                        className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl ring-1 ring-emerald-500/20"
                        loading="lazy"
                    />
                </div>

                {/* Channel Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {channelCategories.map((category) => (
                        <div
                            key={category.name}
                            className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-emerald-500/30 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-3xl">{category.icon}</span>
                                <h3 className="text-xl font-bold text-white">
                                    {category.name}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.channels.map((channel) => (
                                    <Badge key={channel} variant="primary">
                                        {channel}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 lg:p-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white mb-12 shadow-lg shadow-emerald-900/20">
                    {[
                        { value: '45,000+', label: 'Live Channels' },
                        { value: '100,000+', label: 'Movies & Series' },
                        { value: '4K/FHD', label: 'Streaming Quality' },
                        { value: '150+', label: 'Countries Covered' }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl lg:text-4xl font-bold">{stat.value}</div>
                            <div className="text-emerald-100/80 text-sm lg:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Link to all channels */}
                <div className="text-center">
                    <Button href="/iptv-uk-guide/" variant="outline" size="lg" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all">
                        🔍 Read the IPTV UK Channel Guide
                    </Button>
                </div>
            </div>
        </section>
    );
}

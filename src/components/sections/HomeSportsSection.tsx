// Sports section highlighting live sports coverage
// SEO: Targets "iptv uk sports" keyword
// AEO: Clear sports content listing for AI extraction

import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const sportsCategories = [
    {
        name: 'Premier League',
        description: 'Every match live including Arsenal, Man City, Man United, Liverpool, Chelsea, and Tottenham.',
    },
    {
        name: 'Champions League',
        description: 'Full UEFA Champions League coverage with all matches from group stage to the final.',
    },
    {
        name: 'Sky Sports',
        description: 'Complete Sky Sports package including Sky Sports Main Event, Football, F1, Golf, and more.',
    },
    {
        name: 'BT Sport',
        description: 'Full BT Sport lineup with Premier League, Champions League, UFC, and exclusive content.',
    },
    {
        name: 'Boxing & UFC',
        description: 'All major boxing events and UFC pay-per-views included at no extra cost.',
    },
    {
        name: 'Formula 1',
        description: 'Every F1 race live including practice sessions, qualifying, and main race coverage.',
    },
    {
        name: 'Cricket',
        description: 'International cricket, IPL, The Ashes, and county cricket matches live.',
    },
    {
        name: 'Tennis',
        description: 'Wimbledon, US Open, Australian Open, and ATP/WTA tour coverage.',
    },
];

export default function HomeSportsSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Badge variant="warning">⚽ Live Sports</Badge>
                </div>

                {/* SEO: H2 targeting sports keywords */}
                <SectionTitle
                    title="IPTV UK Sports – Never Miss a Match"
                    subtitle="Watch Premier League, Champions League, Boxing, UFC, F1, and all major sporting events live in stunning HD quality."
                />

                {/* AEO: Answer paragraph for "What sports can I watch on IPTV UK?" */}
                <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    IPTV UK offers the most comprehensive sports coverage in the UK market.
                    Stream every Premier League match, Champions League game, UFC pay-per-view event,
                    and Formula 1 race live. Our sports IPTV package includes Sky Sports, BT Sport,
                    ESPN, and all major sports networks – all included in your subscription at no extra cost.
                </p>

                {/* Premier League IPTV UK streaming image */}
                <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-emerald-500/20">
                    <Image
                        src="/images/premier-league-live-iptv-uk-380-matches-sky-sports-tnt-sports-4k.webp"
                        alt="Watch Premier League live via IPTV UK — all 380 matches included Sky Sports and TNT Sports"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-12">
                    {sportsCategories.map((sport, index) => (
                        <div
                            key={index}
                            className="p-4 lg:p-6 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700/50 hover:border-amber-500/50 transition-all hover:scale-[1.02]"
                        >
                            <h3 className="text-white font-semibold mb-2">{sport.name}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{sport.description}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <Button
                        href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20watch%20sports%20on%20IPTV"
                        variant="primary"
                        size="lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Watch UK Sports on IPTV via WhatsApp"
                    >
                        Start Watching Sports Now
                    </Button>
                </div>
            </div>
        </section>
    );
}

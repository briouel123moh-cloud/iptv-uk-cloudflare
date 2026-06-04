// IPTV Guide intro section - educational content hub
// SEO: Targets "what is iptv uk" informational intent
// AEO: Clear definitions for AI extraction

import SectionTitle from '@/components/ui/SectionTitle';

export default function IPTVGuideIntroSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Complete Guide to IPTV UK"
                    subtitle="Everything you need to know about IPTV services in the United Kingdom – from basics to buying tips."
                />

                <div className="max-w-4xl mx-auto">
                    {/* AEO: Definition section - answer-first content */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
                            What is IPTV UK?
                        </h2>
                        <p className="text-slate-300 leading-relaxed mb-4">
                            IPTV UK (Internet Protocol Television United Kingdom) is a streaming technology that
                            delivers television content over the internet rather than through traditional satellite,
                            cable, or terrestrial signals. Unlike on-demand services like Netflix, IPTV provides
                            access to live TV channels, making it a complete replacement for traditional television
                            services like Sky, Virgin Media, or Freeview.
                        </p>
                        <p className="text-slate-300 leading-relaxed">
                            UK IPTV services typically offer thousands of live channels including all UK Freeview
                            channels, premium sports (Sky Sports, BT Sport), movie channels, international content,
                            and a Video on Demand (VOD) library with movies and TV series. The main appeal of
                            IPTV UK is the significantly lower cost compared to traditional cable or satellite
                            subscriptions while offering more content.
                        </p>
                    </div>

                    {/* Key benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-white mb-3">✅ Benefits of IPTV UK</h3>
                            <ul className="text-slate-300 space-y-2">
                                <li>• Much cheaper than Sky or Virgin Media</li>
                                <li>• More content (45,000+ channels typical)</li>
                                <li>• Works on any device with internet</li>
                                <li>• No contracts or installation required</li>
                                <li>• Watch from anywhere in the world</li>
                                <li>• VOD library with movies and series</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-white mb-3">📋 What You Need</h3>
                            <ul className="text-slate-300 space-y-2">
                                <li>• Stable internet (10+ Mbps for HD)</li>
                                <li>• Compatible streaming device</li>
                                <li>• IPTV subscription from a provider</li>
                                <li>• IPTV player app (usually free)</li>
                                <li>• No satellite dish or aerial needed</li>
                                <li>• Optional: VPN for extra privacy</li>
                            </ul>
                        </div>
                    </div>

                    {/* Industry context */}
                    <div className="p-6 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                        <h3 className="text-lg font-semibold text-white mb-3">
                            🇬🇧 IPTV UK Market Overview (2026)
                        </h3>
                        <p className="text-slate-300 leading-relaxed">
                            The UK IPTV market has grown significantly as more households seek alternatives to
                            expensive cable and satellite subscriptions. With average UK broadband speeds now
                            exceeding 100 Mbps, streaming quality rivals traditional broadcast, and the convenience
                            of watching on any device has made IPTV increasingly popular for sports fans, movie
                            enthusiasts, and cord-cutters looking to reduce their entertainment bills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

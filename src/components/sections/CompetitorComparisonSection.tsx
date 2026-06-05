import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CompetitorComparisonSection() {
    return (
        <section className="py-16 lg:py-24 bg-slate-950" aria-labelledby="comparison-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Compare IPTV Features Before You Buy"
                    subtitle="Use transparent criteria to compare channel depth, support, reliability, and refund policies."
                    as="h2"
                />

                <div className="max-w-5xl mx-auto mt-12 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {/* Features Column */}
                        <div className="p-6 bg-slate-900 font-bold text-white border-b md:border-b-0 md:border-r border-slate-800">
                            <div className="h-12 hidden md:block"></div>
                            <div className="py-4 border-b border-slate-800">Live TV Channels</div>
                            <div className="py-4 border-b border-slate-800">VOD Movies & Series</div>
                            <div className="py-4 border-b border-slate-800">UK Server Uptime</div>
                            <div className="py-4 border-b border-slate-800">Premier League & UFC</div>
                            <div className="py-4 border-b border-slate-800">Free Trial Period</div>
                            <div className="py-4">Money-Back Guarantee</div>
                        </div>

                        {/* Competitor Column */}
                        <div className="p-6 text-center border-b md:border-b-0 md:border-r border-slate-800 bg-slate-900/50">
                            <div className="h-12 text-lg font-bold text-slate-500 mb-4">Typical Market Provider</div>
                            <div className="py-4 border-b border-slate-800 text-slate-400">15,000–25,000</div>
                            <div className="py-4 border-b border-slate-800 text-slate-400">20,000–50,000</div>
                            <div className="py-4 border-b border-slate-800 text-slate-400">95–98%</div>
                            <div className="py-4 border-b border-slate-800 text-slate-400">Varies by event</div>
                            <div className="py-4 border-b border-slate-800 text-slate-400">6–12 hours</div>
                            <div className="py-4 text-slate-400">Limited or none</div>
                        </div>

                        {/* Our Column */}
                        <div className="p-6 text-center bg-emerald-600/90 text-white relative shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]">
                            <div className="absolute top-0 right-0 bg-amber-400 text-slate-900 text-[10px] font-black px-3 py-1 uppercase tracking-widest rounded-bl-lg shadow-md">Winner</div>
                            <div className="h-12 text-xl font-black mb-4">IPTV UK</div>
                            <div className="py-4 border-b border-emerald-500/50 font-bold text-lg text-amber-300 drop-shadow-sm">45,000+ (Verified)</div>
                            <div className="py-4 border-b border-emerald-500/50 font-bold">100,000+ (Daily Updates)</div>
                            <div className="py-4 border-b border-emerald-500/50 font-bold">99.9% (UK Optimized)</div>
                            <div className="py-4 border-b border-emerald-500/50 font-bold">4K Zero-Lag Guarantee</div>
                            <div className="py-4 border-b border-emerald-500/50 font-bold">Full 24 Hours</div>
                            <div className="py-4 font-bold text-lg text-amber-300 drop-shadow-sm">30-Day Money-Back</div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mt-12 text-center">
                    <p className="text-lg text-slate-400 leading-relaxed">
                        When searching for a <strong>Premium IPTV</strong> service, numbers matter. 
                        Compare verified plan details, support quality, and refund terms before subscribing.
                        <strong> IPTV UK</strong> focuses on transparent pricing, a broad UK channel lineup,
                        and a risk-free <strong>30-day guarantee</strong> so new customers can test service fit.
                    </p>
                </div>
            </div>
        </section>
    );
}

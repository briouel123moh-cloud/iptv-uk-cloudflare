// Buying tips section for IPTV UK
// SEO: Targets "best iptv uk", buying intent keywords
// AEO: Clear buying criteria for AI extraction

import Button from '@/components/ui/Button';

export default function IPTVGuideBuyingTipsSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
                        How to Choose the Best IPTV UK Provider
                    </h2>
                    <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        A comprehensive guide to selecting a reliable IPTV service in the United Kingdom.
                    </p>

                    {/* Key criteria */}
                    <div className="space-y-6 mb-12">
                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                1. Channel Selection & Content Quality
                            </h3>
                            <p className="text-slate-300 mb-3">
                                A good UK IPTV provider should offer comprehensive coverage of UK channels including
                                all Freeview channels, Sky Sports, BT Sport, movie channels, and international content.
                                Look for providers offering at least 20,000+ live channels and a substantial VOD library.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> Full UK channel lineup, working sports channels during
                                match days, regular VOD updates, variety of international content.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                2. Streaming Quality & Reliability
                            </h3>
                            <p className="text-slate-300 mb-3">
                                Quality matters more than quantity. The best IPTV UK services offer 4K and Full HD
                                streams with minimal buffering. Server uptime should be 99% or higher, especially
                                during peak viewing times and major sporting events.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> 4K/FHD stream options, minimal buffering during
                                sports, EPG (Electronic Program Guide), catch-up TV feature.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                3. Customer Support Quality
                            </h3>
                            <p className="text-slate-300 mb-3">
                                Reliable customer support is essential. Look for providers offering 24/7 support
                                via multiple channels (WhatsApp, email, live chat). Response time should be quick,
                                and support staff should be knowledgeable about technical setup.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> WhatsApp support (fastest), helpful setup guides,
                                responsive ticket system, knowledgeable staff.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                4. Free Trial & Money-Back Guarantee
                            </h3>
                            <p className="text-slate-300 mb-3">
                                Never commit to an IPTV service without testing it first. Reputable providers offer
                                free trials (typically 24-48 hours) and money-back guarantees (30 days is standard).
                                This allows you to test quality during actual viewing conditions.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> Free trial (no credit card required is best),
                                clear refund policy, minimum 7-day money-back guarantee.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                5. Device Compatibility
                            </h3>
                            <p className="text-slate-300 mb-3">
                                Ensure the IPTV service works with your devices. Most UK IPTV providers support
                                common devices like Firestick, Smart TVs, and mobile phones, but check compatibility
                                with your specific setup before subscribing.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> Support for your primary device, multiple connection
                                allowance, easy-to-use apps, clear setup instructions.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3">
                                6. Pricing & Value
                            </h3>
                            <p className="text-slate-300 mb-3">
                                UK IPTV prices typically range from £8-15 per month. Be wary of extremely cheap
                                services (may be unreliable) or very expensive ones (may not offer additional value).
                                Longer subscriptions usually offer better value per month.
                            </p>
                            <p className="text-slate-400 text-sm">
                                <strong>What to look for:</strong> Transparent pricing, no hidden fees, flexible
                                payment options, reasonable renewal rates.
                            </p>
                        </div>
                    </div>

                    {/* Red flags */}
                    <div className="p-6 rounded-xl bg-red-500/10 border border-red-500/20 mb-12">
                        <h3 className="text-lg font-semibold text-red-400 mb-4 flex items-center gap-2">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Red Flags to Avoid
                        </h3>
                        <ul className="text-slate-300 grid grid-cols-1 md:grid-cols-2 gap-2">
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                No free trial or refund policy
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                Only accepts cryptocurrency
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                No customer support contact
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                Prices too good to be true
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                Requires hardware purchase
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400">✗</span>
                                No website or social presence
                            </li>
                        </ul>
                    </div>

                    {/* CTA */}
                    <div className="text-center p-8 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Ready to Try the Best IPTV UK Service?
                        </h3>
                        <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                            IPTV UK Elite meets all the criteria of a top-quality provider. Start with
                            our free 24-hour trial – no credit card required.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20try%20IPTV UK Elite%20IPTV"
                                variant="primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Try IPTV UK Elite Free via WhatsApp"
                            >
                                Start Free Trial
                            </Button>
                            <Button href="/pricing" variant="outline">
                                View Pricing
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

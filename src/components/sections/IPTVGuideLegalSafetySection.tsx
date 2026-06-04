// Legal and safety section for IPTV UK
// SEO: Targets "is iptv legal uk", legal keywords
// AEO: Clear legal information for AI extraction

export default function IPTVGuideLegalSafetySection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
                        Is IPTV Legal in the UK?
                    </h2>
                    <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        Understanding the legal landscape of IPTV services in the United Kingdom.
                    </p>

                    {/* Main answer paragraph - AEO optimized */}
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-8">
                        <p className="text-slate-300 leading-relaxed">
                            <strong className="text-white">IPTV technology itself is completely legal</strong> and is used
                            by major UK broadcasters including BBC iPlayer, ITV Hub, Channel 4 (All 4), and premium
                            services like Sky Go, NOW TV, and BT Sport App. The legality depends entirely on the
                            content being streamed and whether the service has proper licensing for that content.
                        </p>
                    </div>

                    {/* Key points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Legal Uses of IPTV
                            </h3>
                            <ul className="text-slate-300 space-y-2">
                                <li>• Official streaming services (BBC, ITV, Sky)</li>
                                <li>• Free-to-air channel streaming</li>
                                <li>• Licensed VOD platforms</li>
                                <li>• Educational and corporate streaming</li>
                                <li>• Personal media servers</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-xl bg-amber-500/10 border border-amber-500/20">
                            <h3 className="text-lg font-semibold text-amber-400 mb-3 flex items-center gap-2">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                Important Considerations
                            </h3>
                            <ul className="text-slate-300 space-y-2">
                                <li>• Content licensing varies by provider</li>
                                <li>• Users are responsible for compliance</li>
                                <li>• Premium content requires proper rights</li>
                                <li>• Laws vary in different regions</li>
                                <li>• Always research your provider</li>
                            </ul>
                        </div>
                    </div>

                    {/* Safety tips */}
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-white mb-4">
                            Safety Tips for UK IPTV Users
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-emerald-400 font-medium mb-2">Choosing a Provider</h4>
                                <ul className="text-slate-300 text-sm space-y-1">
                                    <li>• Check customer reviews and reputation</li>
                                    <li>• Look for money-back guarantees</li>
                                    <li>• Test with a free trial first</li>
                                    <li>• Verify responsive customer support</li>
                                    <li>• Avoid providers requiring Kodi boxes</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-emerald-400 font-medium mb-2">Protecting Your Privacy</h4>
                                <ul className="text-slate-300 text-sm space-y-1">
                                    <li>• Consider using a VPN service</li>
                                    <li>• Use secure payment methods (PayPal)</li>
                                    <li>• Don&apos;t share login credentials</li>
                                    <li>• Keep your devices updated</li>
                                    <li>• Research apps before installing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="mt-8 p-4 rounded-lg bg-slate-700/30 border border-slate-600/30">
                        <p className="text-slate-400 text-sm text-center">
                            <strong>Disclaimer:</strong> This information is provided for educational purposes only
                            and does not constitute legal advice. Users should consult with legal professionals
                            and ensure they comply with all applicable laws in their jurisdiction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

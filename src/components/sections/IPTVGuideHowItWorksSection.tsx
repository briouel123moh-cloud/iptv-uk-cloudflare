// How IPTV works section
// SEO: Answers "how does iptv work"
// AEO: Step-by-step explanation for AI extraction

export default function IPTVGuideHowItWorksSection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8 text-center">
                        How Does IPTV UK Work?
                    </h2>

                    {/* AEO: Answer paragraph */}
                    <p className="text-slate-300 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                        IPTV delivers television content through your internet connection using Internet Protocol
                        (IP) technology. Unlike traditional broadcast methods, IPTV streams content on-demand
                        from remote servers directly to your device, allowing for features like pause, rewind,
                        catch-up TV, and multi-device viewing.
                    </p>

                    {/* Step-by-step process */}
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Choose Your IPTV Provider</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Select a reputable UK IPTV provider like IPTV UK Elite that offers reliable service,
                                    good channel selection, and responsive customer support. Look for providers that
                                    offer free trials so you can test the service before committing.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Subscribe & Receive Credentials</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    After subscribing, you receive login credentials (usually M3U URL or Xtream Codes
                                    login details) via email or WhatsApp. These credentials connect your IPTV app to
                                    the provider&apos;s streaming servers.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Install an IPTV Player App</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Download and install an IPTV player app on your device. Popular options include
                                    IPTV Smarters, TiviMate (Android), GSE Smart IPTV (iOS), or VLC for computers.
                                    Most providers recommend specific apps that work best with their service.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Enter Your Login Details</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Open your IPTV app and enter the login credentials provided by your service.
                                    The app will connect to the streaming servers and download the channel list.
                                    This process typically takes 1-2 minutes.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center">
                                5
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">Start Watching!</h3>
                                <p className="text-slate-300 leading-relaxed">
                                    Browse through categories, select a channel, and enjoy live TV. The content
                                    streams in real-time from the IPTV provider&apos;s servers to your screen. You can
                                    also access VOD content, catch-up TV, and EPG (program guide) features.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Technical diagram */}
                    <div className="mt-12 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <h3 className="text-lg font-semibold text-white mb-4 text-center">Technical Flow</h3>
                        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
                            <div className="p-4 rounded-lg bg-slate-700/50">
                                <p className="text-emerald-400 font-medium">Content Sources</p>
                                <p className="text-slate-400 text-sm">Live TV feeds</p>
                            </div>
                            <span className="text-emerald-500 text-2xl">→</span>
                            <div className="p-4 rounded-lg bg-slate-700/50">
                                <p className="text-emerald-400 font-medium">IPTV Servers</p>
                                <p className="text-slate-400 text-sm">Encode & distribute</p>
                            </div>
                            <span className="text-emerald-500 text-2xl">→</span>
                            <div className="p-4 rounded-lg bg-slate-700/50">
                                <p className="text-emerald-400 font-medium">Your Internet</p>
                                <p className="text-slate-400 text-sm">Broadband connection</p>
                            </div>
                            <span className="text-emerald-500 text-2xl">→</span>
                            <div className="p-4 rounded-lg bg-slate-700/50">
                                <p className="text-emerald-400 font-medium">Your Device</p>
                                <p className="text-slate-400 text-sm">IPTV app displays</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

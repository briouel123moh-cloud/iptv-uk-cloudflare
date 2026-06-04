// IPTV devices guide section
// SEO: Targets "iptv for firestick", "iptv smart tv", device keywords
// AEO: Device compatibility info for AI extraction

export default function IPTVGuideDevicesSection() {
    const devices = [
        {
            category: 'Streaming Devices',
            items: [
                {
                    name: 'Amazon Firestick',
                    description: 'The most popular device for IPTV UK. All Firestick models work perfectly including Fire TV Stick Lite, Firestick 4K, Fire TV Stick 4K Max, and Fire TV Cube.',
                    setup: 'Install IPTV Smarters or TiviMate from Amazon App Store, enable Apps from Unknown Sources for additional apps.',
                    rating: 'Excellent',
                },
                {
                    name: 'NVIDIA Shield',
                    description: 'Premium Android TV box with powerful hardware for 4K HDR streaming. Considered the best Android TV device available.',
                    setup: 'Install TiviMate or IPTV Smarters from Google Play Store. No additional configuration needed.',
                    rating: 'Excellent',
                },
                {
                    name: 'Android TV Box',
                    description: 'Budget-friendly option with many models available (Xiaomi Mi Box, generic boxes). Quality varies by manufacturer.',
                    setup: 'Install IPTV apps from Play Store. Some boxes may require sideloading apps.',
                    rating: 'Good',
                },
            ],
        },
        {
            category: 'Smart TVs',
            items: [
                {
                    name: 'Samsung Smart TV',
                    description: 'Tizen OS supports several IPTV apps. Newer models have better app support and performance.',
                    setup: 'Install Smart IPTV or IPTV Smarters from Samsung App Store. Some apps require web-based activation.',
                    rating: 'Good',
                },
                {
                    name: 'LG Smart TV',
                    description: 'WebOS provides smooth IPTV experience. Look for Smart IPTV or SS IPTV in the LG Content Store.',
                    setup: 'Install Smart IPTV app, upload M3U playlist via web interface.',
                    rating: 'Good',
                },
                {
                    name: 'Android TV (Sony, TCL, etc.)',
                    description: 'Full Android TV support means access to all IPTV apps from Google Play Store.',
                    setup: 'Install TiviMate or IPTV Smarters directly from Play Store.',
                    rating: 'Excellent',
                },
            ],
        },
        {
            category: 'Mobile & Tablets',
            items: [
                {
                    name: 'Android Phone/Tablet',
                    description: 'Wide app selection with IPTV Smarters and OTT Navigator being popular choices.',
                    setup: 'Download app from Play Store, enter credentials, start watching.',
                    rating: 'Excellent',
                },
                {
                    name: 'iPhone & iPad',
                    description: 'iOS app selection is more limited but GSE Smart IPTV and IPTV Smarters work well.',
                    setup: 'Download GSE Smart IPTV from App Store, add playlist via app or URL.',
                    rating: 'Good',
                },
            ],
        },
        {
            category: 'Computers',
            items: [
                {
                    name: 'Windows PC',
                    description: 'Use VLC Media Player (free) or dedicated IPTV apps. Best for multi-tasking while watching.',
                    setup: 'Download VLC, open M3U playlist file. Or use web-based IPTV players.',
                    rating: 'Good',
                },
                {
                    name: 'Mac',
                    description: 'VLC for Mac works perfectly. IINA is another excellent free option for Mac users.',
                    setup: 'Download VLC or IINA, open M3U playlist URL.',
                    rating: 'Good',
                },
            ],
        },
        {
            category: 'Set-Top Boxes',
            items: [
                {
                    name: 'MAG Boxes',
                    description: 'Dedicated IPTV hardware with middleware support. Popular models include MAG 322, 324, 420, 424.',
                    setup: 'Provider configures your MAC address on their portal. Simple plug-and-play.',
                    rating: 'Excellent',
                },
                {
                    name: 'Formuler Boxes',
                    description: 'Premium set-top boxes with MyTVOnline app built-in. Models like Z8, Z10, GTV include voice control.',
                    setup: 'Add portal URL in MyTVOnline app. Advanced features include catch-up and recording.',
                    rating: 'Excellent',
                },
            ],
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">
                        IPTV UK Compatible Devices
                    </h2>
                    <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        IPTV works on virtually any device with an internet connection. Here&apos;s a
                        comprehensive guide to setting up IPTV on popular devices in the UK.
                    </p>

                    <div className="space-y-12">
                        {devices.map((category, catIndex) => (
                            <div key={catIndex}>
                                <h3 className="text-xl font-semibold text-emerald-400 mb-6">
                                    {category.category}
                                </h3>
                                <div className="space-y-4">
                                    {category.items.map((device, devIndex) => (
                                        <div
                                            key={devIndex}
                                            className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <h4 className="text-lg font-semibold text-white">
                                                    {device.name}
                                                </h4>
                                                <span className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${device.rating === 'Excellent'
                                                        ? 'bg-emerald-500/20 text-emerald-400'
                                                        : 'bg-amber-500/20 text-amber-400'
                                                    }
                        `}>
                                                    {device.rating}
                                                </span>
                                            </div>
                                            <p className="text-slate-300 mb-3">{device.description}</p>
                                            <p className="text-slate-400 text-sm">
                                                <strong className="text-slate-300">Setup:</strong> {device.setup}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

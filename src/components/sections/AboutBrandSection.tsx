// About brand section for E-E-A-T signals
// SEO: Founder story, team bios, mission statement, founding story, physical address

import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';

export default function AboutBrandSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="IPTV UK Elite: Trusted Premium UK IPTV Service Since 2019"
                    subtitle="Your trusted partner for premium IPTV entertainment in the United Kingdom since 2019."
                />

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                        <p className="text-xl text-slate-300 leading-relaxed italic">
                            &ldquo;To give every UK household — and British expats around the world — access to the best of
                            British and international television at a price that&apos;s fair, with support that&apos;s
                            genuinely helpful, every day of the year.&rdquo;
                        </p>
                    </div>
                </div>

                {/* Founder Story */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-white mb-10 text-center">Our Story</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                        {/* Founder photo placeholder */}
                        <div className="flex flex-col items-center">
                            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-5xl font-bold text-white mb-4 shadow-lg ring-4 ring-emerald-500/20">
                                JC
                            </div>
                            <p className="text-xl font-semibold text-white">James Carter</p>
                            <p className="text-emerald-400 text-sm mt-1">Founder &amp; CEO</p>
                            <p className="text-slate-500 text-xs mt-1">Manchester, UK</p>
                        </div>

                        {/* Founding story */}
                        <div className="md:col-span-2 space-y-4">
                            <p className="text-slate-300 leading-relaxed">
                                &ldquo;In 2018, I was paying over £100 a month for Sky and barely watching half the channels.
                                When I finally cut the cord and switched to streaming services, I found myself juggling
                                five different apps just to catch Premier League matches and the occasional boxset.
                                It was expensive, fragmented, and honestly exhausting.&rdquo;
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                That frustration led James to spend months researching IPTV technology. By early 2019,
                                he had built a small but reliable streaming platform for friends and family in Manchester.
                                Word spread quickly — within a year, IPTV UK Elite had grown from a side project into a
                                proper business serving hundreds of UK customers.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                Today, IPTV UK Elite serves over 10,000 subscribers across the United Kingdom and beyond.
                                The mission remains exactly the same as it was on day one: give people access to great TV
                                without overpriced contracts or unnecessary complexity.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <p className="text-4xl font-bold text-emerald-400 mb-2">5+</p>
                            <p className="text-slate-400">Years in Business</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <p className="text-4xl font-bold text-emerald-400 mb-2">10K+</p>
                            <p className="text-slate-400">UK Customers</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <p className="text-4xl font-bold text-emerald-400 mb-2">4.9/5</p>
                            <p className="text-slate-400">Average Rating</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                            <p className="text-4xl font-bold text-emerald-400 mb-2">99.9%</p>
                            <p className="text-slate-400">Server Uptime</p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-white mb-10 text-center">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                                JC
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">James Carter</h3>
                            <p className="text-emerald-400 text-sm mb-3">Founder &amp; CEO</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                10+ years in streaming technology and network engineering. Founded IPTV UK Elite
                                after years of frustration with overpriced legacy TV providers. Based in Manchester.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                                SP
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Sarah Palmer</h3>
                            <p className="text-emerald-400 text-sm mb-3">Head of Customer Support</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Leads our round-the-clock support team, ensuring every subscriber gets fast,
                                friendly help whenever they need it. Based in Leeds, supporting customers across
                                the UK and beyond.
                            </p>
                        </div>

                        <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 text-center">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                                MT
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-1">Mohammed Tahir</h3>
                            <p className="text-emerald-400 text-sm mb-3">Head of Infrastructure</p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Oversees our server infrastructure across multiple UK data centres. Responsible
                                for maintaining our 99.9% uptime SLA and delivering 4K streaming quality to
                                every subscriber.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20">
                            <h3 className="text-xl font-semibold text-white mb-3">Quality First</h3>
                            <p className="text-slate-300">
                                We never compromise on streaming quality. Our 4K and HD streams are optimised
                                for UK broadband connections, delivering buffer-free entertainment every time.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20">
                            <h3 className="text-xl font-semibold text-white mb-3">Customer Focused</h3>
                            <p className="text-slate-300">
                                Our 24/7 support team is here to help with any issue. We pride ourselves on
                                fast response times and going above and beyond to solve problems.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
                            <h3 className="text-xl font-semibold text-white mb-3">Continuous Innovation</h3>
                            <p className="text-slate-300">
                                We continuously upgrade our infrastructure and add new features based on
                                customer feedback to provide the best IPTV experience in the UK market.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Office Address */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50">
                        <h2 className="text-xl font-semibold text-white mb-4">Registered Office</h2>
                        <address className="text-slate-300 not-italic leading-relaxed">
                            <strong className="text-white">IPTV UK Elite Ltd</strong><br />
                            124 City Road<br />
                            London<br />
                            EC1V 2NX<br />
                            United Kingdom
                        </address>
                        <p className="text-slate-400 text-sm mt-4">
                            <strong className="text-slate-300">Email:</strong>{' '}
                            <a
                                href="mailto:contact@iptvuk-elite.com"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                            >
                                contact@iptvuk-elite.com
                            </a>
                        </p>
                        <p className="text-slate-400 text-sm mt-1">
                            <strong className="text-slate-300">Support:</strong>{' '}
                            <a
                                href="https://wa.me/447418316577?text=Hi%20IPTV%20UK%20Elite%2C%20I%20need%20support%20with%20my%20IPTV%20service"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Get IPTV UK Support via WhatsApp"
                            >
                                WhatsApp 24/7
                            </a>
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-slate-300 mb-6">
                        Ready to experience premium UK IPTV? Start with a free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            href="https://wa.me/447418316577?text=Hi%20IPTV%20UK%20Elite%2C%20I%20want%20a%20free%20trial"
                            variant="primary"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Start Free IPTV Trial via WhatsApp"
                        >
                            Start Free Trial
                        </Button>
                        <Button href="/contact" variant="outline">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

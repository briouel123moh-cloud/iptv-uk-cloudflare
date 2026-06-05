// VOD section showcasing movies and series library
// SEO: Targets VOD and streaming content keywords
// AEO: Clear VOD content description for AI extraction

import SectionTitle from '@/components/ui/SectionTitle';

export default function HomeVODSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="100,000+ Movies & Series On Demand"
                    subtitle="Access a massive VOD library with the latest movies, TV series, and exclusive content updated daily."
                />

                {/* AEO: Answer paragraph for "What VOD content is included with IPTV UK?" */}
                <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    IPTV UK includes over 100,000 movies and TV series in our Video on Demand library.
                    Watch the latest Hollywood blockbusters, popular Netflix and Amazon originals, classic films,
                    and complete TV series box sets. New content is added daily, so you&apos;ll never run out of
                    things to watch. All VOD content is available in HD and 4K quality where available.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Movies */}
                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
                        <span className="text-6xl mb-4 block">🎬</span>
                        <h3 className="text-2xl font-bold text-white mb-3">Movies</h3>
                        <p className="text-slate-300 mb-4">
                            50,000+ movies including new releases, classics, action, comedy, horror, and more. Updated weekly with the latest cinema releases.
                        </p>
                        <ul className="text-left text-slate-400 space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Latest cinema releases
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                4K & HDR quality
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Multiple genres
                            </li>
                        </ul>
                    </div>

                    {/* TV Series */}
                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                        <span className="text-6xl mb-4 block">📺</span>
                        <h3 className="text-2xl font-bold text-white mb-3">TV Series</h3>
                        <p className="text-slate-300 mb-4">
                            45,000+ complete TV series with all seasons and episodes. From Breaking Bad to The Crown, we have every show you love.
                        </p>
                        <ul className="text-left text-slate-400 space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Complete box sets
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Latest episodes daily
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Netflix & Amazon originals
                            </li>
                        </ul>
                    </div>

                    {/* Kids & Family */}
                    <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                        <span className="text-6xl mb-4 block">👨‍👩‍👧‍👦</span>
                        <h3 className="text-2xl font-bold text-white mb-3">Kids & Family</h3>
                        <p className="text-slate-300 mb-4">
                            Dedicated kids zone with Disney, Nickelodeon, Cartoon Network, and family-friendly content for all ages.
                        </p>
                        <ul className="text-left text-slate-400 space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Disney & Pixar content
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Educational shows
                            </li>
                            <li className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Safe viewing zone
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

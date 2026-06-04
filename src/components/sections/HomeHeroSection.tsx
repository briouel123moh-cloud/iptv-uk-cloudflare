// Hero section for homepage
// SEO: Primary H1 with target keyword "IPTV UK"
// AEO: Answer-first paragraph for AI extraction
// CWV: Above-fold content optimized, no layout shift

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function HomeHeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 lg:py-32">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Trust Badge */}
                    <Badge variant="success" className="mb-4">
                        🇬🇧 UK IPTV Subscription • Instant Activation • 30-Day Guarantee
                    </Badge>

                    {/* 2 Free Trials Banner */}
                    <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/50 rounded-full px-5 py-2 mb-6 text-amber-300 font-semibold text-sm md:text-base animate-pulse">
                        🎁 LIMITED OFFER: 2 Free IPTV UK Trials Per User — No Card Required
                    </div>

                    {/* SEO: Primary H1 with "IPTV UK" keyword */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        #1 IPTV UK Subscription 2026 —
                        <span className="block mt-2"><span className="text-emerald-400">45,000+ UK Channels</span> from £12/month</span>
                    </h1>

                    {/* AEO: Answer-first paragraph (40-60 words) for AI extraction */}
                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        The best IPTV UK service in 2026. Get your IPTV UK subscription with Sky Sports, Premier League, BBC, ITV and 45,000+ live channels in HD/4K.
                        Works on Firestick, Smart TV, iPhone and Android. Every new IPTV UK user gets <strong className="text-emerald-400">2 free 24-hour trials</strong> — no credit card, no commitment.
                    </p>

                    {/* Benefits list */}
                    <ul className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base text-slate-300">
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            45,000+ IPTV UK Channels
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            HD & 4K UK Streams
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Firestick, Smart TV, iOS & Android
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            24/7 WhatsApp Support
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-amber-300 font-semibold">2 Free IPTV UK Trials Per User</span>
                        </li>
                    </ul>

                    {/* Dual CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20my%20free%20IPTV%20UK%20trial%20(Trial%201)"
                            variant="primary"
                            size="lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Start Free IPTV UK Trial — No Credit Card Required"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            🎁 Claim Free IPTV UK Trial
                        </Button>
                        <Button
                            href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20to%20subscribe%20to%20IPTV%20UK"
                            variant="secondary"
                            size="lg"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Buy IPTV UK Plan — From £12/month"
                        >
                            Buy IPTV UK Plan – From £12
                        </Button>
                    </div>

                    <div className="mt-6">
                        <p className="text-slate-500 text-xs">⭐ 2 free IPTV UK trials per user • No credit card • Cancel anytime</p>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Fast Setup via WhatsApp
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            30-Day Money Back Guarantee
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            Works With Major UK Broadband Providers
                        </span>
                    </div>

                    {/* Hero image — keyword-optimised for IPTV UK streaming */}
                    <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-emerald-500/20">
                        <Image
                            src="/images/best-iptv-uk-2026-uk-iptv-30000-channels-premier-league-sky-bt-movies-series-4k.webp"
                            alt="Best IPTV UK 2026 - UK IPTV with 45,000+ live channels including Premier League, Sky Sports, BT Sport, BBC, ITV, movies, series and world channels in 4K IPTV"
                            width={1200}
                            height={675}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

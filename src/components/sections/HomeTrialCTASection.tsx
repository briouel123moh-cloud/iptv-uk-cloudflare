// Trial CTA section
// SEO: Targets "iptv uk free trial" keyword
// Conversion: Strong call-to-action for trial signups

import Button from '@/components/ui/Button';

export default function HomeTrialCTASection() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* SEO: H2 targeting free trial keyword */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Get 2 Free IPTV UK Trials — Every New User
                    </h2>

                    {/* AEO: Answer paragraph for "Can I try IPTV UK for free?" */}
                    <p className="text-lg md:text-xl text-emerald-50 mb-4 max-w-2xl mx-auto leading-relaxed">
                        Every new IPTV UK user gets <strong>2 free 24-hour trials</strong> — no credit card, no commitment, no catch.
                        Test our full IPTV UK service twice before you decide: all 45,000+ live channels, Sky Sports, Premier League, BBC, VOD and 4K streams included in every trial.
                    </p>
                    <p className="text-base text-emerald-100/80 mb-8 max-w-xl mx-auto">
                        Not sure after trial 1? Use trial 2 on a different device. We want you 100% confident before you subscribe to IPTV UK.
                    </p>

                    {/* Trust indicators */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10 text-emerald-100">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No Credit Card Required
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            2 Free Trials Per User
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Full Access to All Channels
                        </span>
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            IPTV UK Setup in 5 Minutes
                        </span>
                    </div>

                    {/* CTA Button */}
                    <Button
                        href="https://wa.me/447418316577?text=Hi%2C%20I%20want%20my%20free%20IPTV%20UK%20trial%20(no%20card%20needed)"
                        variant="outline"
                        size="lg"
                        className="bg-white text-emerald-600 border-white hover:bg-emerald-50 hover:text-emerald-700"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Get 2 Free IPTV UK Trials — No Credit Card Required"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        🎁 Claim Your 2 Free IPTV UK Trials
                    </Button>
                </div>
            </div>
        </section>
    );
}

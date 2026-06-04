// Pricing preview section for homepage
// SEO: Targets "cheap iptv uk", "iptv uk subscription" keywords
// AEO: Clear pricing info for AI extraction

import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';

const plans = [
    {
        name: '1 Month',
        price: '£12',
        period: '/month',
        devices: 'From 1-3 devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & HD Quality',
            '1-3 Device Options',
            '24/7 WhatsApp Support',
        ],
        popular: false,
        note: 'Starting price for 1 device',
    },
    {
        name: '6 Months',
        price: '£42',
        period: '/6 months',
        devices: 'From 1-3 devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & HD Quality',
            '1-3 Device Options',
            '24/7 Priority Support',
            'Save up to 53%',
        ],
        popular: false,
        note: 'Starting price for 1 device',
    },
    {
        name: '12 Months',
        price: '£55',
        period: '/year',
        devices: 'From 1-3 devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & HD Quality',
            '1-3 Device Options',
            'VIP 24/7 Support',
            '2 Months FREE',
            'Save up to 69%',
        ],
        popular: true,
        note: 'Best value! From £55/year',
    },
];

export default function HomePricingPreviewSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* SEO: H2 targeting pricing keywords */}
                <SectionTitle
                    title="IPTV UK Subscription Plans"
                    subtitle="Affordable UK IPTV pricing with flexible device options. Choose 1, 2, or 3 devices for any plan duration."
                />

                {/* AEO: Pricing answer paragraph */}
                <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    IPTV UK Elite offers competitively priced subscription plans starting from just £12 per month.
                    Need to share with family? All plans are available with <strong className="text-emerald-400">1, 2, or 3 device connections</strong>.
                    All plans include full access to 45,000+ live channels, 100,000+ VOD content, 4K streaming quality,
                    and 24/7 customer support. We offer a 30-day money-back guarantee on all subscriptions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`relative ${plan.popular ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/10 to-teal-500/5' : ''}`}
                        >
                            {plan.popular && (
                                <Badge variant="success" className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    Most Popular
                                </Badge>
                            )}

                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-emerald-400 text-sm font-medium mb-4">{plan.devices}</p>
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                                    <span className="text-slate-400">{plan.period}</span>
                                </div>
                                <p className="text-slate-500 text-xs mb-6">{plan.note}</p>

                                <ul className="space-y-3 mb-8 text-left">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-slate-300">
                                            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    href={`https://wa.me/447418316577?text=Hi%2C%20I%20want%20the%20${encodeURIComponent(plan.name)}%20IPTV%20plan`}
                                    variant={plan.popular ? 'primary' : 'outline'}
                                    fullWidth
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={`Get ${plan.name} IPTV Plan via WhatsApp`}
                                >
                                    Get This Plan
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Link to full pricing page */}
                <div className="text-center">
                    <Link
                        href="/pricing"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                    >
                        View All Plans & Device Options
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Full pricing plans section with multi-device options
// SEO: Product schema included, targets pricing keywords
// GEO: UK pricing in GBP

import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

const plans = [
    {
        name: '1 Month',
        price: '£12',
        period: '/month',
        originalPrice: '£15',
        description: 'Perfect for trying out our UK IPTV service',
        devices: '1 Device',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '1 Device Connection',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up',
            '24/7 WhatsApp Support',
            'Free Setup Assistance',
        ],
        notIncluded: ['Recording Feature', 'Multi-device'],
        popular: false,
        saving: null,
    },
    {
        name: '1 Month - 2 Devices',
        price: '£18',
        period: '/month',
        originalPrice: '£24',
        description: 'Share with family on 2 devices',
        devices: '2 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '2 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up',
            '24/7 WhatsApp Support',
            'Free Setup Assistance',
        ],
        notIncluded: ['Recording Feature'],
        popular: false,
        saving: 'Save 25%',
    },
    {
        name: '1 Month - 3 Devices',
        price: '£22',
        period: '/month',
        originalPrice: '£30',
        description: 'Whole family entertainment',
        devices: '3 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '3 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up',
            '24/7 Priority Support',
            'Free Setup Assistance',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 27%',
    },
    {
        name: '3 Months',
        price: '£28',
        period: '/quarter',
        originalPrice: '£45',
        description: 'Great value for committed users',
        devices: '1 Device',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '1 Device Connection',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up',
            '24/7 Priority Support',
            'Free Setup Assistance',
        ],
        notIncluded: ['Recording Feature'],
        popular: false,
        saving: 'Save 38%',
    },
    {
        name: '3 Months - 2 Devices',
        price: '£38',
        period: '/quarter',
        originalPrice: '£54',
        description: 'Share IPTV with family',
        devices: '2 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '2 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            '24/7 Priority Support',
            'Free Setup Assistance',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 30%',
    },
    {
        name: '3 Months - 3 Devices',
        price: '£45',
        period: '/quarter',
        originalPrice: '£66',
        description: 'Best 3-month family value',
        devices: '3 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '3 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            '24/7 Priority Support',
            'Free Setup Assistance',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 32%',
    },
    {
        name: '6 Months',
        price: '£42',
        period: '/6 months',
        originalPrice: '£90',
        description: 'Popular half-year choice',
        devices: '1 Device',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '1 Device Connection',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            '24/7 Priority Support',
            'Free Setup Assistance',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 53%',
    },
    {
        name: '6 Months - 2 Devices',
        price: '£55',
        period: '/6 months',
        originalPrice: '£108',
        description: 'Family entertainment for 6 months',
        devices: '2 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '2 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            'VIP 24/7 Support',
            'Free Setup Assistance',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 49%',
    },
    {
        name: '6 Months - 3 Devices',
        price: '£65',
        period: '/6 months',
        originalPrice: '£126',
        description: 'Whole family for 6 months',
        devices: '3 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '3 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            'VIP 24/7 Support',
            'Free Setup Assistance',
            'Early Access to Features',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 48%',
    },
    {
        name: '12 Months',
        price: '£55',
        period: '/year',
        originalPrice: '£180',
        description: 'Best annual value!',
        devices: '1 Device',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '1 Device Connection',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            'VIP 24/7 Support',
            'Free Setup Assistance',
            '2 Months FREE Bonus',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 69%',
    },
    {
        name: '12 Months - 2 Devices',
        price: '£75',
        period: '/year',
        originalPrice: '£216',
        description: 'Best family value - 2 screens',
        devices: '2 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '2 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            'VIP 24/7 Support',
            'Free Setup Assistance',
            'Early Access to Features',
            '2 Months FREE Bonus',
        ],
        notIncluded: [],
        popular: true,
        saving: 'Save 65%',
    },
    {
        name: '12 Months - 3 Devices',
        price: '£90',
        period: '/year',
        originalPrice: '£264',
        description: 'Ultimate family package!',
        devices: '3 Devices',
        features: [
            '45,000+ Live Channels',
            '100,000+ VOD Library',
            '4K & Full HD Quality',
            '3 Device Connections',
            'EPG (Electronic Program Guide)',
            '7-Day Catch Up + Recording',
            'VIP 24/7 Support',
            'Free Setup Assistance',
            'Early Access to Features',
            '2 Months FREE Bonus',
        ],
        notIncluded: [],
        popular: false,
        saving: 'Save 66%',
    },
];

export default function PricingPlansSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="IPTV UK Subscription Plans & Pricing"
                    subtitle="Transparent UK IPTV pricing with multi-device options. Choose your perfect plan and start streaming today."
                />

                {/* AEO: Pricing answer paragraph */}
                <p className="text-center text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                    IPTV UK offers flexible subscription plans starting from just £12 per month for 1 device.
                    Need to share with family? Our 2-device and 3-device options offer great value.
                    All plans include full access to 45,000+ live channels, 100,000+ VOD content, 4K streaming quality,
                    and our 30-day money-back guarantee.
                </p>

                {/* Duration filter hint */}
                <div className="text-center mb-12">
                    <p className="text-slate-400 text-sm">
                        💡 <span className="text-emerald-400">Tip:</span> Longer subscriptions = bigger savings! Annual plans save up to 69%.
                    </p>
                </div>

                {/* 1 Month Plans */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        <span className="text-emerald-400">1 Month</span> Plans
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {plans.slice(0, 3).map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>

                {/* 3 Month Plans */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        <span className="text-emerald-400">3 Month</span> Plans
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {plans.slice(3, 6).map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>

                {/* 6 Month Plans */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-8">
                        <span className="text-emerald-400">6 Month</span> Plans
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {plans.slice(6, 9).map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>

                {/* 12 Month Plans - Best Value */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white text-center mb-2">
                        <span className="text-emerald-400">12 Month</span> Plans
                    </h3>
                    <p className="text-center text-yellow-400 text-sm mb-8">🏆 Best Value - Includes 2 Months FREE!</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {plans.slice(9, 12).map((plan, index) => (
                            <PlanCard key={index} plan={plan} />
                        ))}
                    </div>
                </div>

                {/* Trust and payment info */}
                <div className="mt-16 max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-white font-semibold mb-2">30-Day Money Back</p>
                            <p className="text-slate-400 text-sm">Not satisfied? Full refund within 30 days, no questions asked.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className="text-white font-semibold mb-2">Secure Payment</p>
                            <p className="text-slate-400 text-sm">PayPal, credit cards, and crypto accepted. All transactions encrypted.</p>
                        </div>
                        <div>
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div>
                            <p className="text-white font-semibold mb-2">Instant Activation</p>
                            <p className="text-slate-400 text-sm">Get your login within 15-30 minutes. Start watching immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface PlanProps {
    plan: {
        name: string;
        price: string;
        period: string;
        originalPrice: string;
        description: string;
        devices: string;
        features: string[];
        notIncluded: string[];
        popular: boolean;
        saving: string | null;
    };
}

function PlanCard({ plan }: PlanProps) {
    return (
        <Card
            className={`relative flex flex-col ${plan.popular
                ? 'border-emerald-500 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 lg:scale-105 lg:z-10'
                : ''
                }`}
        >
            {plan.popular && (
                <Badge variant="success" className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                </Badge>
            )}

            {plan.saving && !plan.popular && (
                <Badge variant="warning" className="absolute -top-3 right-4">
                    {plan.saving}
                </Badge>
            )}

            <div className="flex-1">
                <p className="text-lg font-semibold text-white mb-1 text-center">{plan.name}</p>
                <p className="text-emerald-400 text-sm text-center mb-2 font-medium">{plan.devices}</p>
                <p className="text-slate-400 text-sm text-center mb-4">{plan.description}</p>

                <div className="text-center mb-2">
                    {plan.originalPrice && (
                        <span className="text-slate-500 line-through text-lg mr-2">
                            {plan.originalPrice}
                        </span>
                    )}
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400">{plan.period}</span>
                </div>

                {/* Show saving badge below price for popular plan */}
                {plan.saving && plan.popular && (
                    <div className="text-center mb-4">
                        <Badge variant="warning">
                            {plan.saving}
                        </Badge>
                    </div>
                )}
                {!plan.popular && <div className="mb-4"></div>}

                <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                    {plan.notIncluded.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-slate-500 text-sm line-through">
                            <svg className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <Button
                href={`https://wa.me/447418316577?text=Hi%2C%20I%20want%20the%20${encodeURIComponent(plan.name)}%20IPTV%20UK%20plan%20for%20${encodeURIComponent(plan.price)}`}
                variant={plan.popular ? 'primary' : 'outline'}
                fullWidth
                target="_blank"
                rel="noopener noreferrer"
                title={`Order ${plan.name} IPTV Plan via WhatsApp`}
            >
                Order Now via WhatsApp
            </Button>
        </Card>
    );
}

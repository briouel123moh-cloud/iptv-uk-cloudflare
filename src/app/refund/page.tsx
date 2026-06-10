// Refund Policy page
// SEO: Legal compliance page

import { Metadata } from 'next';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';
import { buildAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/site-config';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/refund/", {
    title: 'IPTV UK Refund Policy – 30-Day Money-Back Guarantee | No Questions Asked',
    description:
        'Not happy with your IPTV UK subscription? Get a full refund within 30 days, no questions asked. Learn exactly how the IPTV UK 30-day money-back guarantee works and how to claim yours fast.',
    alternates: {
        canonical: '/refund/',
        ...buildAlternates('https://iptvuk-iptv-uk.store/refund/'),
    },
    openGraph: {
        title: 'IPTV UK Refund Policy – 30-Day Money-Back Guarantee, No Questions',
        description: 'IPTV UK offers a full 30-day money-back guarantee, no questions asked. Find out exactly how to claim your refund quickly and easily.',
        url: 'https://iptvuk-iptv-uk.store/refund/',
        images: [
            {
                url: `${SITE_CONFIG.baseUrl}/og-image.webp`,
                width: 1200,
                height: 630,
                alt: 'IPTV UK refund policy — 30-day money-back guarantee, no questions asked',
                type: 'image/webp',
            },
        ],
    },
});

export default function RefundPage() {
    const refundSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Refund Policy – IPTV UK',
        url: `${SITE_CONFIG.baseUrl}/refund/`,
        description: 'Refund policy and 30-day money-back guarantee terms for IPTV UK.',
        image: `${SITE_CONFIG.baseUrl}/images/refund-policy-iptv-uk.svg`,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptvuk-iptv-uk.store/' },
            { '@type': 'ListItem', position: 2, name: 'Refund Policy', item: 'https://iptvuk-iptv-uk.store/refund/' },
        ],
    };

    return (
        <section className="py-16 md:py-24 bg-slate-900 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(refundSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="sr-only">Refund Policy – IPTV UK</h1>
                <SectionTitle
                    title="IPTV UK Refund Policy: 30-Day Money-Back Guarantee"
                    subtitle="30-Day Money-Back Guarantee"
                />
                <div className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/refund-policy-iptv-uk.svg"
                        alt={"IPTV UK refund policy graphic highlighting 30-day money-back guarantee terms and website update information."}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                {/* Highlight Box */}
                <div className="max-w-4xl mx-auto mb-12">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 text-center">
                        <div className="text-4xl mb-4">💰</div>
                        <h2 className="text-2xl font-bold text-white mb-2">IPTV UK Refund Policy: 30-Day Money-Back Guarantee</h2>
                        <p className="text-slate-300">
                            Not satisfied with our service? Get a full refund within 30 days of purchase – no questions asked.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 text-slate-300">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Your Satisfaction</h2>
                        <p className="leading-relaxed">
                            At IPTV UK, we stand behind the quality of our service. We believe that
                            you should have the opportunity to experience our IPTV service risk-free. That&apos;s why
                            we offer a comprehensive 30-day money-back guarantee on all subscription plans.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">30-Day Money-Back Guarantee</h2>
                        <p className="leading-relaxed mb-4">
                            If you are not completely satisfied with our service for any reason, you may request
                            a full refund within 30 days of your initial purchase date. This applies to all
                            subscription plans:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>1-Month subscriptions (all device tiers)</li>
                            <li>3-Month subscriptions (all device tiers)</li>
                            <li>6-Month subscriptions (all device tiers)</li>
                            <li>12-Month subscriptions (all device tiers)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Eligibility for Refund</h2>
                        <p className="leading-relaxed mb-4">To be eligible for a refund, you must meet the following criteria:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Time limit:</strong> Request must be made within 30 days of purchase</li>
                            <li><strong className="text-white">First-time purchase:</strong> Refunds apply to your initial subscription only</li>
                            <li><strong className="text-white">Account in good standing:</strong> Your account must not have violated our Terms of Service</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">How to Request a Refund</h2>
                        <p className="leading-relaxed mb-4">Requesting a refund is simple:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong className="text-white">Contact us via WhatsApp</strong> (fastest method) or email at contact@iptvuk-iptv-uk.store</li>
                            <li><strong className="text-white">Provide your order details</strong> including your email address and payment reference</li>
                            <li><strong className="text-white">State your reason for the refund</strong> (optional, but helps us improve)</li>
                            <li><strong className="text-white">Receive confirmation</strong> of your refund request within 24 hours</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Refund Processing</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">Processing time:</strong> Refunds are processed within 5-7 business days</li>
                            <li><strong className="text-white">Refund method:</strong> Refunds are issued to your original payment method</li>
                            <li><strong className="text-white">PayPal:</strong> Refunds typically appear within 1-2 business days</li>
                            <li><strong className="text-white">Credit/Debit cards:</strong> May take 5-10 business days depending on your bank</li>
                            <li><strong className="text-white">Cryptocurrency:</strong> Refunded in GBP equivalent via PayPal or bank transfer</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Non-Refundable Situations</h2>
                        <p className="leading-relaxed mb-4">Refunds may not be available in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Requests made after the 30-day refund period</li>
                            <li>Renewals of existing subscriptions (only initial purchases qualify)</li>
                            <li>Accounts terminated due to Terms of Service violations</li>
                            <li>Fraudulent or abusive refund requests</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Free Trial Alternative</h2>
                        <p className="leading-relaxed">
                            If you&apos;re unsure about committing to a paid subscription, we recommend starting with
                            our <strong className="text-white">free 24-hour trial</strong>. This allows you to test our service with full
                            access to all features before making a payment. Contact us via WhatsApp to request your free trial.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Service Issues</h2>
                        <p className="leading-relaxed mb-4">
                            Before requesting a refund, please contact our 24/7 support team. Many issues can be
                            resolved quickly, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Buffering or streaming quality issues</li>
                            <li>App configuration problems</li>
                            <li>Channel or content availability questions</li>
                            <li>Device compatibility concerns</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Our support team is available around the clock via WhatsApp and typically resolves
                            issues within minutes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                        <p className="leading-relaxed mb-4">
                            For refund requests or questions about this policy, please contact us:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong className="text-white">WhatsApp:</strong> Available 24/7 (fastest response)</li>
                            <li><strong className="text-white">Email:</strong> contact@iptvuk-iptv-uk.store</li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            We process all legitimate refund requests promptly and aim to resolve any concerns
                            to ensure your complete satisfaction.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
}

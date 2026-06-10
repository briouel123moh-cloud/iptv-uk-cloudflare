// DMCA Policy Page
// Legal page for copyright compliance

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import { buildAlternates } from '@/lib/hreflang';
import { SITE_CONFIG } from '@/lib/site-config';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/dmca/", {
    title: 'DMCA Policy – IPTV UK Copyright Compliance & Takedown Notices',
    description:
        'IPTV UK DMCA and copyright compliance policy. How to submit a takedown request. Our IPTV UK commitment to intellectual property rights and rightholder cooperation in the UK.',
    alternates: {
        canonical: '/dmca/',
        ...buildAlternates('https://iptvuk-iptv-uk.store/dmca/'),
    },
    openGraph: {
        title: 'DMCA Policy – IPTV UK Copyright Compliance & Takedown Notices',
        description: 'IPTV UK DMCA and copyright compliance policy. How to submit a copyright takedown request and our commitment to intellectual property rights.',
        url: 'https://iptvuk-iptv-uk.store/dmca/',
        images: [
            {
                url: `${SITE_CONFIG.baseUrl}/og-image.webp`,
                width: 1200,
                height: 630,
                alt: 'IPTV UK DMCA policy — copyright compliance and takedown notices',
                type: 'image/webp',
            },
        ],
    },
});

export default function DMCAPage() {
    const dmcaSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'DMCA Policy – IPTV UK',
        url: `${SITE_CONFIG.baseUrl}/dmca/`,
        description: 'Copyright complaint and DMCA notice policy for IPTV UK.',
        image: `${SITE_CONFIG.baseUrl}/images/dmca-policy-copyright-compliance-uk.svg`,
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptvuk-iptv-uk.store/' },
            { '@type': 'ListItem', position: 2, name: 'DMCA Policy', item: 'https://iptvuk-iptv-uk.store/dmca/' },
        ],
    };

    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dmcaSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="sr-only">DMCA Policy – IPTV UK</h1>
                <SectionTitle
                    title="IPTV UK DMCA Notice & Takedown Policy"
                    subtitle="Digital Millennium Copyright Act Notice and Takedown Policy"
                />
                <div className="max-w-4xl mx-auto mb-10 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/dmca-policy-copyright-compliance-uk.svg"
                        alt={"IPTV UK DMCA policy graphic highlighting copyright compliance and submission of infringement notices, updated April 2026."}
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>

                <div className="max-w-4xl mx-auto prose prose-invert prose-emerald">
                    <div className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700">

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Introduction
                        </h2>
                        <p className="text-slate-300 mb-6">
                            IPTV UK respects the intellectual property rights of others and expects our users to do the same.
                            In accordance with the Digital Millennium Copyright Act of 1998 (&quot;DMCA&quot;), we will respond expeditiously to
                            claims of copyright infringement that are reported to our designated copyright agent.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Reporting Copyright Infringement
                        </h2>
                        <p className="text-slate-300 mb-4">
                            If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement,
                            please provide our copyright agent with the following information in accordance with the DMCA:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                            <li>A physical or electronic signature of the copyright owner or authorized representative</li>
                            <li>Identification of the copyrighted work claimed to have been infringed</li>
                            <li>Identification of the material that is claimed to be infringing, with enough detail so we can locate it</li>
                            <li>Your contact information (address, telephone number, and email)</li>
                            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner</li>
                            <li>A statement that the information in the notification is accurate and, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Contact Our DMCA Agent
                        </h2>
                        <p className="text-slate-300 mb-6">
                            DMCA notices should be sent to our designated copyright agent at:
                        </p>
                        <div className="bg-slate-900/50 rounded-lg p-6 mb-6">
                            <p className="text-emerald-400 font-mono">
                                Email: dmca@iptvuk-iptv-uk.store
                            </p>
                            <p className="text-slate-400 mt-2">
                                Please include &quot;DMCA Notice&quot; in the subject line
                            </p>
                        </div>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Counter-Notification
                        </h2>
                        <p className="text-slate-300 mb-6">
                            If you believe that your content was removed or disabled by mistake or misidentification,
                            you may submit a counter-notification to our copyright agent containing the following:
                        </p>
                        <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
                            <li>Your physical or electronic signature</li>
                            <li>Identification of the material that was removed and its location before removal</li>
                            <li>A statement under penalty of perjury that you have a good faith belief the material was removed by mistake</li>
                            <li>Your name, address, telephone number, and consent to jurisdiction</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Repeat Infringers
                        </h2>
                        <p className="text-slate-300 mb-6">
                            In accordance with the DMCA and other applicable law, we have adopted a policy of terminating,
                            in appropriate circumstances, users who are deemed to be repeat infringers. We may also limit access
                            to our service and/or terminate accounts of any users who infringe intellectual property rights.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mb-4">
                            Good Faith
                        </h2>
                        <p className="text-slate-300 mb-6">
                            Please note that under Section 512(f) of the DMCA, any person who knowingly materially misrepresents
                            that material or activity is infringing may be subject to liability for damages. Do not make false claims.
                        </p>

                        <div className="mt-8 pt-8 border-t border-slate-700">
                            <p className="text-slate-400 text-sm">
                                Last updated: February 2026
                            </p>
                            <div className="mt-4 flex flex-wrap gap-4">
                                <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                    ← Back to Home
                                </Link>
                                <Link href="/contact" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                    Contact Us
                                </Link>
                                <Link href="/faq" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                    FAQ
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

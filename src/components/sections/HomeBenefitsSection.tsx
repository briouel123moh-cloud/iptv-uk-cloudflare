// Benefits section highlighting key differentiators
// SEO: H2 with relevant keywords
// AEO: Clear answer-first content for each benefit

import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

const benefits = [
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>
        ),
        title: '45,000+ Live Channels',
        description: 'Access the UK\'s largest IPTV channel library — all Sky Sports, TNT Sports, Premier League, BBC, ITV, Channel 4, and 50+ international country packages. Updated daily.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Zero Buffering Guaranteed',
        description: 'Our anti-freeze server technology and UK-optimised CDN infrastructure eliminates buffering. 99.9% uptime — never miss a Premier League match, UFC event, or F1 race.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: '4K Ultra HD Quality',
        description: 'Stream in crystal-clear 4K, Full HD 1080p, and HD on every channel. Our servers deliver razor-sharp picture quality that makes every match and movie look stunning.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
        title: 'VPN Compatible',
        description: 'Full compatibility with ExpressVPN, NordVPN, Surfshark, and all major VPN providers. Bypass ISP throttling and stream privately from anywhere in the world.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
        title: '24/7 WhatsApp Support',
        description: 'Instant help from our support team, available around the clock via WhatsApp. Most setup issues resolved in under 5 minutes. Real people, not bots.',
    },
    {
        icon: (
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: '30-Day Money Back',
        description: 'Full 30-day money-back guarantee on every plan — no questions asked. Plus a free 24-hour trial before you commit. Zero risk to try the UK\'s best IPTV service.',
    },
];

export default function HomeBenefitsSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* SEO: H2 with target keywords */}
                <SectionTitle
                    title="Why IPTV UK Elite Beats Every Competitor"
                    subtitle="More channels, zero buffering, VPN compatible, and 24/7 real human support — at a fraction of Sky's price."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <Card key={index} className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 mb-6 mx-auto">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {benefit.title}
                            </h3>
                            {/* AEO: Detailed description for AI extraction */}
                            <p className="text-slate-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Footer component with navigation, contact info
// SEO: footer with proper semantic structure

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

const footerNavigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'IPTV UK Guide', href: '/iptv-uk-guide' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ],
    devices: [
        { name: 'IPTV for Firestick UK', href: '/iptv-firestick-uk/' },
        { name: 'IPTV for iPhone UK', href: '/iptv-iphone-uk/' },
        { name: 'Smart TV IPTV Setup', href: '/blog/smart-tv-iptv-setup-guide-samsung-lg-and-android-tv/' },
        { name: 'Samsung TV IPTV Setup', href: '/blog/install-iptv-samsung-tv-2026/' },
        { name: 'IPTV Multiple Devices', href: '/blog/iptv-multiple-devices-uk/' },
        { name: 'BBC IPTV UK', href: '/bbc-iptv-uk/' },
    ],
    setup: [
        { name: 'Firestick Setup Guide', href: '/iptv-firestick-uk/' },
        { name: 'iPhone/iPad Setup', href: '/iptv-iphone-uk/' },
        { name: 'Beginner IPTV Guide', href: '/blog/iptv-uk-beginners-guide/' },
        { name: 'Best Smart TV Apps', href: '/blog/best-iptv-apps-smart-tv-2026/' },
        { name: 'TiviMate No EPG Fix', href: '/blog/tivimate-no-epg-fix/' },
        { name: 'What Is EPG?', href: '/blog/what-is-epg-guide/' },
    ],
    sports: [
        { name: 'Sky Sports IPTV UK', href: '/sky-sports-iptv-uk/' },
        { name: 'Sky Cinema IPTV', href: '/sky-cinema-iptv/' },
        { name: 'Premier League IPTV UK', href: '/blog/iptv-premier-league-uk/' },
        { name: 'Watch UFC PPV IPTV UK', href: '/blog/watch-ufc-ppv-iptv-uk/' },
        { name: 'BBC IPTV UK', href: '/bbc-iptv-uk/' },
    ],
    blog: [
        { name: 'Best IPTV UK 2026', href: '/blog/best-iptv-uk-2026/' },
        { name: 'Best IPTV Providers UK', href: '/blog/best-iptv-uk-providers-2026/' },
        { name: 'IPTV Legal UK Guide', href: '/blog/is-iptv-legal-uk/' },
        { name: 'IPTV UK Monthly Cost', href: '/blog/iptv-uk-monthly-cost/' },
        { name: 'Free vs Premium IPTV Risks', href: '/blog/free-vs-premium-iptv-risks/' },
        { name: 'Spot Fake IPTV Sellers', href: '/blog/spot-fake-iptv-sellers-uk/' },
    ],
    legal: [
        { name: 'Refund Policy', href: '/refund' },
        { name: 'DMCA Policy', href: '/dmca' },
        { name: 'Contact', href: '/contact' },
    ],
};
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 lg:gap-10">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-white mb-4">
                            <span className="text-emerald-500">IPTV</span>
                            <span>UK</span>
                            <span className="text-xs font-normal bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                                Elite
                            </span>
                        </Link>
                        {/* AEO: Clear brand description for AI extraction */}
                        <p className="text-slate-400 mb-4 max-w-md">
                            IPTV UK Elite is a premium IPTV subscription service, offering 45,000+ live
                            channels, 100,000+ VOD content, and 4K quality streaming. Serving customers
                            across London, Manchester, Birmingham, Glasgow, Liverpool, Leeds, and beyond.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-2 text-slate-400">
                            <p>
                                <strong className="text-white">24/7 Support:</strong>{' '}
                                <a
                                    href="https://wa.me/447418316577?text=Hi%20IPTV%20UK%20Elite%2C%20I%20need%20support%20with%20my%20IPTV%20service"
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Get IPTV UK Support via WhatsApp"
                                >
                                    WhatsApp
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">Email:</strong>{' '}
                                <a
                                    href="mailto:contact@iptvuk-elite.com"
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                >
                                    contact@iptvuk-elite.com
                                </a>
                            </p>
                            <p>
                                <strong className="text-white">Social:</strong>{' '}
                                <a
                                    href={SITE_CONFIG.socialProfiles.youtube}
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    YouTube
                                </a>
                                {' · '}
                                <a
                                    href={SITE_CONFIG.socialProfiles.linkedin}
                                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </p>
                            <address className="not-italic text-sm text-slate-500 mt-3 leading-relaxed">
                                IPTV UK Elite Ltd<br />
                                124 City Road, London<br />
                                EC1V 2NX, United Kingdom
                            </address>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerNavigation.main.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Setup Guides */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Setup Guides</h3>
                        <ul className="space-y-2">
                            {footerNavigation.setup.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Devices */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Devices & Comparisons</h3>
                        <ul className="space-y-2">
                            {footerNavigation.devices.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sports */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Sports & Channels</h3>
                        <ul className="space-y-2">
                            {footerNavigation.sports.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog Keywords */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Popular Blog Guides</h3>
                        <ul className="space-y-2">
                            {footerNavigation.blog.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {footerNavigation.legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Trust Badges */}
                        <div className="mt-6 space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                30-Day Money Back Guarantee
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Secure Payment
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-500 text-sm text-center md:text-left">
                            © {currentYear} IPTV UK Elite. All rights reserved.
                        </p>
                        {/* GEO: UK city mentions for local SEO */}
                        <p className="text-slate-600 text-xs text-center md:text-right">
                            Serving IPTV customers in London, Manchester, Birmingham, Glasgow, Liverpool,
                            Leeds, Sheffield, Edinburgh, Bristol, and across the UK.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Header component with responsive navigation and CTAs
// SEO: semantic nav, proper aria labels
// A11Y: keyboard navigation, focus management, skip link target
// CWV: minimal layout shift with fixed height

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getWhatsAppLink } from '@/lib/site-config';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'IPTV UK Guide', href: '/iptv-uk-guide' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800">
            <nav
                className="container mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-xl md:text-2xl font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                        <span className="text-emerald-500">IPTV</span>
                        <span>UK</span>
                        <span className="text-xs md:text-sm font-normal bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">
                            Elite
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            href={getWhatsAppLink("Hi IPTV UK Elite, I want a free trial")}
                            variant="outline"
                            size="sm"
                            external
                            title="Start Free IPTV Trial via WhatsApp"
                        >
                            Free Trial
                        </Button>
                        <Button
                            href={getWhatsAppLink("Hi IPTV UK Elite, I want to order")}
                            variant="primary"
                            size="sm"
                            external
                            title="Order IPTV UK Elite via WhatsApp"
                        >
                            Get IPTV Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div
                        id="mobile-menu"
                        className="lg:hidden py-4 border-t border-slate-800 bg-slate-900"
                    >
                        <div className="flex flex-col gap-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-base font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/50 rounded-lg transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-2 mt-4 px-4">
                                <Button
                                    href={getWhatsAppLink("Hi IPTV UK Elite, I want a free trial")}
                                    variant="outline"
                                    fullWidth
                                    external
                                    title="Start Free IPTV Trial via WhatsApp"
                                >
                                    Free Trial
                                </Button>
                                <Button
                                    href={getWhatsAppLink("Hi IPTV UK Elite, I want to order")}
                                    variant="primary"
                                    fullWidth
                                    external
                                    title="Order IPTV UK Elite via WhatsApp"
                                >
                                    Get IPTV Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

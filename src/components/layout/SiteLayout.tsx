// SiteLayout wrapper component
// A11Y: Skip-to-content link for keyboard users
// SEO: Proper semantic structure with header, main, footer

import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface SiteLayoutProps {
    children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-slate-900">
            {/* A11Y: Skip link for keyboard navigation */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-emerald-500 focus:text-white focus:rounded-lg focus:outline-none"
            >
                Skip to main content
            </a>

            <Header />

            {/* Main content with proper padding for fixed header */}
            <main id="main-content" className="flex-1 pt-16 md:pt-20">
                {children}
            </main>

            <Footer />
        </div>
    );
}

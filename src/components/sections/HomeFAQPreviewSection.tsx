// FAQ preview section for homepage
// SEO: FAQ schema included, targets common search queries
// AEO: Structured Q&A for AI extraction

'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';

const faqs = [
    {
        question: 'What is IPTV UK and how does it work?',
        answer: 'IPTV UK (Internet Protocol Television United Kingdom) is a streaming service that delivers live TV channels, movies, and on-demand content over the internet instead of traditional satellite or cable. IPTV UK provides access to 45,000+ live channels and 100,000+ VOD content that you can watch on any device with an internet connection.',
    },
    {
        question: 'Is IPTV UK legal?',
        answer: 'IPTV technology itself is completely legal and is used by major providers like BBC iPlayer, ITV Hub, and Sky Go. The legality depends on the content being streamed. IPTV UK operates as a legitimate service provider. Users should ensure they comply with local laws regarding content consumption.',
    },
    {
        question: 'What internet speed do I need for IPTV UK?',
        answer: 'For smooth IPTV streaming in the UK, we recommend a minimum of 10 Mbps for HD quality and 25 Mbps for 4K Ultra HD quality. Most UK broadband connections exceed these requirements. A stable connection is more important than raw speed for buffer-free viewing.',
    },
    {
        question: 'How do I set up IPTV on Firestick?',
        answer: 'Setting up IPTV on Amazon Firestick takes just 5 minutes. After subscribing, we send you login credentials via WhatsApp. Download our recommended IPTV player app from the Amazon App Store, enter your credentials, and start watching. Our 24/7 support team can guide you through the entire process.',
    },
    {
        question: 'Do you offer a money-back guarantee?',
        answer: 'Yes, IPTV UK offers a full 30-day money-back guarantee on all subscription plans. If you are not completely satisfied with our service for any reason, contact us within 30 days for a full refund, no questions asked.',
    },
];

export default function HomeFAQPreviewSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24 bg-slate-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Frequently Asked Questions"
                    subtitle="Got questions about IPTV UK? Find answers to the most common questions below."
                />

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-slate-700 last:border-b-0"
                        >
                            <button
                                className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="text-lg font-medium text-white pr-8">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-6 h-6 text-emerald-500 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {openIndex === index && (
                                <div className="pb-6">
                                    {/* AEO: Clear answer content */}
                                    <p className="text-slate-300 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Link to full FAQ page */}
                <div className="mt-12 text-center">
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                    >
                        View All FAQs
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}

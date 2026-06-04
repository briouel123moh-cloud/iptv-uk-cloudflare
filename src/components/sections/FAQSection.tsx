// Full FAQ section with comprehensive questions
// SEO: FAQPage schema, targets IPTV UK questions
// AEO: Structured Q&A for AI extraction

'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const faqCategories = [
    {
        category: 'General Questions',
        faqs: [
            {
                question: 'What is IPTV UK and how does it work?',
                answer: 'IPTV UK (Internet Protocol Television United Kingdom) is a streaming service that delivers live TV channels, movies, and on-demand content over the internet instead of traditional satellite or cable. IPTV UK Elite provides access to 45,000+ live channels and 100,000+ VOD content that you can watch on any device with an internet connection. The service works by streaming content through our secure servers directly to your device using an IPTV player app.',
            },
            {
                question: 'Is IPTV UK legal?',
                answer: 'IPTV technology itself is completely legal and is used by major providers like BBC iPlayer, ITV Hub, and Sky Go. The legality depends on the content being streamed. IPTV UK Elite operates as a legitimate service provider offering entertainment content. Users are responsible for ensuring they comply with local laws and regulations regarding content consumption in their jurisdiction.',
            },
            {
                question: 'What makes IPTV UK Elite better than other UK IPTV providers?',
                answer: 'IPTV UK Elite offers superior quality with 45,000+ channels (more than most competitors), 4K Ultra HD streaming, 99.9% guaranteed uptime, 24/7 WhatsApp support, and a genuine 30-day money-back guarantee. Our service has been rated 4.9/5 by over 2,500 UK customers, and we have been serving UK and international customers for over 5 years.',
            },
            {
                question: 'Which IPTV is best in the UK?',
                answer: 'IPTV UK Elite is widely regarded as the best IPTV service in the UK, offering 45,000+ live channels, 100,000+ VOD, 4K Ultra HD quality, 99.9% uptime, and 24/7 WhatsApp support at prices from just £12/month. Key factors that make us stand out: UK-based customer support, instant setup on Firestick and Smart TV, 7-day catch-up TV, and a genuine 30-day money-back guarantee. We have served 10,000+ UK customers since 2019.',
            },
            {
                question: 'Is IPTV blocked in the UK on Firestick?',
                answer: 'IPTV itself is not blocked on Firestick in the UK — Amazon Firestick fully supports IPTV apps like IPTV Smarters, TiviMate, and Perfect Player. Some UK ISPs (Sky Broadband, Virgin Media) may throttle streaming traffic, which can cause buffering. The fix is simple: use a VPN, or switch to a wired ethernet connection via a Firestick ethernet adapter. IPTV UK Elite provides full setup guidance and 24/7 support to resolve any ISP throttling issues.',
            },
            {
                question: 'Can I watch IPTV for free in the UK?',
                answer: 'Yes — IPTV UK Elite offers a completely free 24-hour trial with access to all 45,000+ channels and features, no credit card required. Simply contact us via WhatsApp to request your trial and we will set it up within minutes. After the trial, paid plans start from just £12/month, which is a fraction of the cost of Sky or Virgin Media.',
            },
        ],
    },
    {
        category: 'Technical Questions',
        faqs: [
            {
                question: 'What internet speed do I need for IPTV UK?',
                answer: 'For smooth IPTV streaming in the UK, we recommend a minimum of 10 Mbps for SD/HD quality, 15 Mbps for Full HD 1080p, and 25 Mbps or higher for 4K Ultra HD quality. Most UK broadband connections easily exceed these requirements. A stable, wired connection is preferable to WiFi for the best viewing experience.',
            },
            {
                question: 'What devices are compatible with IPTV UK?',
                answer: 'IPTV UK Elite works on virtually all streaming devices: Amazon Firestick (all models), Android TV boxes, Smart TVs (Samsung, LG, Sony, TCL, Hisense), Apple TV, iPhones, iPads, Android phones and tablets, Windows and Mac computers, MAG boxes, Formuler devices, and any device supporting M3U playlist format or IPTV apps.',
            },
            {
                question: 'How do I set up IPTV on Firestick?',
                answer: 'Setting up IPTV on Amazon Firestick is simple: 1) Subscribe to IPTV UK Elite and receive your login credentials via WhatsApp. 2) On your Firestick, go to Settings > My Fire TV > Developer Options and enable "Apps from Unknown Sources". 3) Download an IPTV player app (we recommend IPTV Smarters or TiviMate). 4) Enter your IPTV UK Elite login credentials. 5) Start watching! Our 24/7 support team can guide you through every step.',
            },
            {
                question: 'Can I use IPTV on multiple devices?',
                answer: 'Yes! All our plans are available with 1, 2, or 3 device connections. You can choose the number of devices when subscribing. For example, a 12-month plan costs £55 for 1 device, £75 for 2 devices, or £90 for 3 devices streaming simultaneously. You can install the app on unlimited devices, but only the number included in your plan can stream at the same time.',
            },
            {
                question: 'Do you include an Electronic Program Guide (EPG)?',
                answer: 'Yes, IPTV UK Elite includes a comprehensive Electronic Program Guide (EPG) that shows current and upcoming programs for all UK channels and most international channels. The EPG is updated automatically and allows you to see what is on now, schedule recordings (on supported apps), and browse programs up to 7 days in advance.',
            },
        ],
    },
    {
        category: 'Content Questions',
        faqs: [
            {
                question: 'What channels are included with IPTV UK?',
                answer: 'IPTV UK Elite offers 45,000+ live channels including all UK Freeview channels, Sky Sports, BT Sport, Premier League, Champions League, Sky Cinema, HBO, Netflix originals, international channels from 50+ countries, news channels (BBC, Sky News, CNN), premium movie channels, kids channels (Disney, Nickelodeon, Cartoon Network), and specialist channels for every interest.',
            },
            {
                question: 'What sports can I watch on IPTV UK?',
                answer: 'Our sports coverage is comprehensive: Premier League (all matches), Champions League, Europa League, FA Cup, EFL, Sky Sports (all channels), BT Sport (all channels), boxing (all major fights), UFC (including pay-per-views), Formula 1, cricket (International, IPL, county), rugby (Six Nations, Premiership), tennis (Wimbledon, ATP), golf (PGA, Masters), and much more – all included at no extra cost.',
            },
            {
                question: 'How large is the VOD library?',
                answer: 'Our Video on Demand library contains over 100,000 movies and TV series. This includes the latest Hollywood releases (often available within days of theatrical release), complete TV series box sets, Netflix and Amazon originals, documentaries, kids content, and international films. New content is added daily to keep the library fresh and up-to-date.',
            },
            {
                question: 'Do you offer catch-up and recording features?',
                answer: 'Yes, IPTV UK Elite includes 7-day catch-up TV for most UK channels, allowing you to watch programs you missed in the past week. Recording functionality is available on compatible apps like TiviMate, where you can schedule and record live TV to watch later. The 6-month and annual plans include enhanced recording features.',
            },
        ],
    },
    {
        category: 'Subscription & Payment',
        faqs: [
            {
                question: 'What subscription plans do you offer?',
                answer: 'We offer flexible subscription plans with multi-device options: 1 Month (from £12 for 1 device, £18 for 2 devices, £22 for 3 devices), 3 Months (from £28), 6 Months (from £42), and 12 Months (from £55 for 1 device, £75 for 2 devices, £90 for 3 devices with 2 months free). All plans include full access to all 45,000+ channels and 100,000+ VOD content.',
            },
            {
                question: 'How do I pay for IPTV UK subscription?',
                answer: 'We accept multiple secure payment methods: PayPal, credit/debit cards (Visa, Mastercard, American Express), bank transfer, and cryptocurrency (Bitcoin, Ethereum). All transactions are encrypted and secure. After payment, your login credentials are sent via WhatsApp within 15-30 minutes.',
            },
            {
                question: 'Do you offer a free trial?',
                answer: 'Yes! IPTV UK Elite offers a completely free 24-hour trial with full access to all channels and features. No credit card is required for the trial. Simply contact us via WhatsApp to request your free trial, and we will set up your account within minutes.',
            },
            {
                question: 'What is your refund policy?',
                answer: 'We offer a 30-day money-back guarantee on all subscription plans. If you are not satisfied with our service for any reason, contact us within 30 days of your purchase for a full refund, no questions asked. Refunds are processed within 5-7 business days to your original payment method.',
            },
        ],
    },
    {
        category: 'Support & Troubleshooting',
        faqs: [
            {
                question: 'How do I contact customer support?',
                answer: 'Our friendly support team is available 24/7 via WhatsApp (fastest response), email at contact@iptvuk-elite.com, and our online contact form. WhatsApp is the quickest way to get help – most queries are resolved within minutes. We provide support in English and can assist with setup, technical issues, billing, and any other questions.',
            },
            {
                question: 'What should I do if I experience buffering?',
                answer: 'Buffering is usually caused by internet issues rather than our service. Try these steps: 1) Check your internet speed (should be 10+ Mbps). 2) Use a wired ethernet connection instead of WiFi. 3) Restart your router and device. 4) Clear the IPTV app cache. 5) Try a different IPTV player app. 6) Use a VPN if your ISP is throttling streaming. If issues persist, contact our 24/7 support for personalized help.',
            },
            {
                question: 'How quickly can I start watching after subscribing?',
                answer: 'Very quickly! After your payment is confirmed, we send your login credentials via WhatsApp within 15-30 minutes (often faster). Installing an IPTV app and entering your credentials takes just 5 minutes. Most customers are watching their favourite channels within 20-30 minutes of subscribing.',
            },
        ],
    },
];

export default function FAQSection() {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="IPTV UK Frequently Asked Questions"
                    subtitle="Find comprehensive answers to all your questions about IPTV UK services, setup, pricing, and more."
                />

                <div className="max-w-4xl mx-auto space-y-8">
                    {faqCategories.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                                {category.category}
                            </h3>
                            <div className="space-y-2">
                                {category.faqs.map((faq, faqIndex) => {
                                    const itemId = `${catIndex}-${faqIndex}`;
                                    const isOpen = openItems[itemId];

                                    return (
                                        <div
                                            key={faqIndex}
                                            className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
                                        >
                                            <button
                                                className="w-full p-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                                onClick={() => toggleItem(itemId)}
                                                aria-expanded={isOpen}
                                            >
                                                <span className="text-base font-medium text-white pr-4">
                                                    {faq.question}
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 text-emerald-500 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {isOpen && (
                                                <div className="px-5 pb-5">
                                                    <p className="text-slate-300 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

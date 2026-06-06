// FAQ page with FAQPage schema
// SEO: Targets IPTV UK questions

import { Metadata } from 'next';
import Image from 'next/image';
import FAQSection from '@/components/sections/FAQSection';
import HomeTrialCTASection from '@/components/sections/HomeTrialCTASection';
import { buildAlternates } from '@/lib/hreflang';
import { applySeoFixes } from '@/lib/seo-fixes';

export const metadata: Metadata = applySeoFixes("/faq/", {
    title: 'IPTV UK FAQ 2026 – Is IPTV UK Legal? Costs? Setup? 25+ Expert Answers',
    description:
        'Got IPTV UK questions? Get expert answers: Is IPTV UK legal? How much does IPTV UK cost? Which devices work? Firestick setup? 25+ IPTV UK FAQs answered — plus how to claim your 2 free trials.',
    alternates: {
        canonical: '/faq/',
        ...buildAlternates('https://iptv-uk-iptv.co.uk/faq/'),
    },
    openGraph: {
        title: 'IPTV UK FAQ 2026 – Every IPTV UK Question Answered (25+)',
        description: 'Is IPTV UK legal? What does IPTV UK cost? How do I set up on Firestick? 25+ expert answers — plus get 2 free IPTV UK trials. All your IPTV UK questions answered.',
        url: 'https://iptv-uk-iptv.co.uk/faq/',
        images: [
            {
                url: 'https://iptv-uk-iptv.co.uk/images/iptv-uk-faq-common-questions.webp',
                width: 1200,
                height: 675,
                alt: 'IPTV UK FAQ 2026 — 25+ common questions about IPTV UK answered by experts',
                type: 'image/webp',
            },
        ],
    },
});

// FAQPage schema — all 16 Q&A pairs for AI/LLM citation discoverability
const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is IPTV UK and how does it work?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK (Internet Protocol Television United Kingdom) is a streaming service that delivers live TV channels, movies, and on-demand content over the internet instead of traditional satellite or cable. IPTV UK provides access to 45,000+ live channels and 100,000+ VOD content that you can watch on any device with an internet connection. The service works by streaming content through our secure servers directly to your device using an IPTV player app.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is IPTV UK legal?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV technology itself is completely legal and is used by major providers like BBC iPlayer, ITV Hub, and Sky Go. The legality depends on the content being streamed. IPTV UK operates as a legitimate service provider offering entertainment content. Users are responsible for ensuring they comply with local laws and regulations regarding content consumption in their jurisdiction.',
            },
        },
        {
            '@type': 'Question',
            name: 'What makes IPTV UK better than other UK IPTV providers?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK offers superior quality with 45,000+ channels (more than most competitors), 4K Ultra HD streaming, 99.9% guaranteed uptime, 24/7 WhatsApp support, and a genuine 30-day money-back guarantee. Our service has been rated 4.9/5 by over 2,500 UK customers, and we have been serving UK and international customers for over 5 years.',
            },
        },
        {
            '@type': 'Question',
            name: 'What internet speed do I need for IPTV UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'For smooth IPTV streaming in the UK, we recommend a minimum of 10 Mbps for SD/HD quality, 15 Mbps for Full HD 1080p, and 25 Mbps or higher for 4K Ultra HD quality. Most UK broadband connections easily exceed these requirements. A stable, wired connection is preferable to WiFi for the best viewing experience.',
            },
        },
        {
            '@type': 'Question',
            name: 'What devices are compatible with IPTV UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK works on virtually all streaming devices: Amazon Firestick (all models), Android TV boxes, Smart TVs (Samsung, LG, Sony, TCL, Hisense), Apple TV, iPhones, iPads, Android phones and tablets, Windows and Mac computers, MAG boxes, Formuler devices, and any device supporting M3U playlist format or IPTV apps.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I set up IPTV on Firestick?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Setting up IPTV on Amazon Firestick is simple: 1) Subscribe to IPTV UK and receive your login credentials via WhatsApp. 2) On your Firestick, go to Settings > My Fire TV > Developer Options and enable "Apps from Unknown Sources". 3) Download an IPTV player app (we recommend IPTV Smarters or TiviMate). 4) Enter your IPTV UK login credentials. 5) Start watching! Our 24/7 support team can guide you through every step.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I use IPTV on multiple devices?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! All our plans are available with 1, 2, or 3 device connections. You can choose the number of devices when subscribing. For example, a 12-month plan costs £55 for 1 device, £75 for 2 devices, or £90 for 3 devices streaming simultaneously. You can install the app on unlimited devices, but only the number included in your plan can stream at the same time.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you include an Electronic Program Guide (EPG)?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, IPTV UK includes a comprehensive Electronic Program Guide (EPG) that shows current and upcoming programs for all UK channels and most international channels. The EPG is updated automatically and allows you to see what is on now, schedule recordings (on supported apps), and browse programs up to 7 days in advance.',
            },
        },
        {
            '@type': 'Question',
            name: 'What channels are included with IPTV UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK offers 45,000+ live channels including all UK Freeview channels (BBC One, BBC Two, ITV, Channel 4, Channel 5), Sky Sports (all channels), TNT Sports (all channels), Sky Cinema, international channels from 50+ countries, news channels (BBC News, Sky News, CNN), kids channels (Disney, Nickelodeon, Cartoon Network), and specialist channels for every interest. Our VOD library separately contains 100,000+ movies and TV series from international studios.',
            },
        },
        {
            '@type': 'Question',
            name: 'What sports can I watch on IPTV UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our sports coverage is comprehensive: Premier League (all matches), Champions League, Europa League, FA Cup, EFL, Sky Sports (all channels), BT Sport (all channels), boxing (all major fights), UFC (including pay-per-views), Formula 1, cricket (International, IPL, county), rugby (Six Nations, Premiership), tennis (Wimbledon, ATP), golf (PGA, Masters), and much more – all included at no extra cost.',
            },
        },
        {
            '@type': 'Question',
            name: 'How large is the VOD library?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our Video on Demand library contains over 100,000 movies and TV series. This includes the latest Hollywood releases, complete TV series box sets, international cinema from Europe, Asia, and Latin America, documentaries, kids content, and classic UK programming. New content is added daily to keep the library fresh and up-to-date.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you offer catch-up and recording features?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, IPTV UK includes 7-day catch-up TV for most UK channels, allowing you to watch programs you missed in the past week. Recording functionality is available on compatible apps like TiviMate, where you can schedule and record live TV to watch later. The 6-month and annual plans include enhanced recording features.',
            },
        },
        {
            '@type': 'Question',
            name: 'What subscription plans do you offer?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer flexible subscription plans with multi-device options: 1 Month (from £12 for 1 device, £18 for 2 devices, £22 for 3 devices), 3 Months (from £28), 6 Months (from £42), and 12 Months (from £55 for 1 device, £75 for 2 devices, £90 for 3 devices with 2 months free). All plans include full access to all 45,000+ channels and 100,000+ VOD content.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I pay for IPTV UK subscription?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We accept multiple secure payment methods: PayPal, credit/debit cards (Visa, Mastercard, American Express), bank transfer, and cryptocurrency (Bitcoin, Ethereum). All transactions are encrypted and secure. After payment, your login credentials are sent via WhatsApp within 15-30 minutes.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you offer a free trial?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes! IPTV UK offers a completely free 24-hour trial with full access to all channels and features. No credit card is required for the trial. Simply contact us via WhatsApp to request your free trial, and we will set up your account within minutes.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is your refund policy?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We offer a 30-day money-back guarantee on all subscription plans. If you are not satisfied with our service for any reason, contact us within 30 days of your purchase for a full refund, no questions asked. Refunds are processed within 5-7 business days to your original payment method.',
            },
        },
        {
            '@type': 'Question',
            name: 'How do I contact customer support?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Our friendly support team is available 24/7 via WhatsApp (fastest response), email at contact@iptv-uk-iptv.co.uk, and our online contact form. WhatsApp is the quickest way to get help – most queries are resolved within minutes. We provide support in English and can assist with setup, technical issues, billing, and any other questions.',
            },
        },
        {
            '@type': 'Question',
            name: 'What should I do if I experience buffering?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Buffering is usually caused by internet issues rather than our service. Try these steps: 1) Check your internet speed (should be 10+ Mbps). 2) Use a wired ethernet connection instead of WiFi. 3) Restart your router and device. 4) Clear the IPTV app cache. 5) Try a different IPTV player app. 6) Use a VPN if your ISP is throttling streaming. If issues persist, contact our 24/7 support for personalized help.',
            },
        },
        {
            '@type': 'Question',
            name: 'How quickly can I start watching after subscribing?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Very quickly! After your payment is confirmed, we send your login credentials via WhatsApp within 15-30 minutes (often faster). Installing an IPTV app and entering your credentials takes just 5 minutes. Most customers are watching their favourite channels within 20-30 minutes of subscribing.',
            },
        },

        {
            '@type': 'Question',
            name: 'Which IPTV is best in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV UK is widely regarded as the best IPTV service in the UK, offering 45,000+ live channels, 100,000+ VOD, 4K Ultra HD quality, 99.9% uptime, and 24/7 WhatsApp support from £12/month. Key advantages: instant setup on Firestick and Smart TV, 7-day catch-up TV, 30-day money-back guarantee, and over 10,000 UK customers served since 2019.',
            },
        },
        {
            '@type': 'Question',
            name: 'Is IPTV blocked in the UK on Firestick?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'IPTV is not blocked on Firestick in the UK — Amazon Firestick fully supports IPTV apps like IPTV Smarters and TiviMate. Some ISPs (Sky Broadband, Virgin Media) throttle streaming traffic, causing buffering. Solutions: use a VPN or connect via wired ethernet adapter. IPTV UK provides full setup support to resolve ISP throttling.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I watch IPTV for free in the UK?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes — IPTV UK offers a free 24-hour trial with full access to all 45,000+ channels, no credit card required. Contact us via WhatsApp to request your free trial and we will set it up within minutes. Paid plans start from £12/month after the trial.',
            },
        },
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://iptv-uk-iptv.co.uk/' },
        { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://iptv-uk-iptv.co.uk/faq/' },
    ],
};

export default function FAQPage() {
    return (
        <>
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center py-8 container mx-auto px-4">IPTV UK FAQ – Frequently Asked Questions</h1>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/images/iptv-uk-faq-common-questions.webp"
                        alt="IPTV UK frequently asked questions — complete answers to the most common IPTV questions 2026"
                        width={1200}
                        height={675}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
            <FAQSection />
            <HomeTrialCTASection />
        </>
    );
}

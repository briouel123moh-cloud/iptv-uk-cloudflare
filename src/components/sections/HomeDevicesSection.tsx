// Devices section showing compatibility
// SEO: Targets "iptv for firestick uk" and device keywords
// AEO: Clear device compatibility info for AI extraction

import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

const devices = [
    {
        name: 'Amazon Firestick',
        description: 'Works perfectly with all Amazon Firestick models including Firestick 4K, Fire TV Stick Lite, and Fire TV Cube.',
        icon: '🔥',
    },
    {
        name: 'Smart TV',
        description: 'Compatible with Samsung, LG, Sony, TCL, Hisense, and all major Smart TV brands with our dedicated apps.',
        icon: '📺',
    },
    {
        name: 'Mobile & Tablet',
        description: 'Stream on iPhone, iPad, Android phones, and tablets with our easy-to-use mobile apps for IPTV UK.',
        icon: '📱',
    },
    {
        name: 'Android TV Box',
        description: 'Full support for NVIDIA Shield, Xiaomi Mi Box, and all Android TV boxes for the ultimate IPTV experience.',
        icon: '📦',
    },
    {
        name: 'Computer',
        description: 'Watch on Windows PC, Mac, and Linux computers using our web player or VLC media player integration.',
        icon: '💻',
    },
    {
        name: 'MAG & Formuler',
        description: 'Native support for MAG devices and Formuler set-top boxes with EPG and channel grouping features.',
        icon: '📡',
    },
];

export default function HomeDevicesSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* SEO: H2 targeting device-related keywords */}
                <SectionTitle
                    title="IPTV UK Compatible with All Your Devices"
                    subtitle="Watch IPTV UK Elite IPTV on any device, anywhere. Our UK IPTV service works seamlessly on Firestick, Smart TV, mobile, and more."
                />

                {/* AEO: Answer paragraph for "What devices work with IPTV UK?" */}
                <p className="text-center text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
                    IPTV UK Elite is compatible with all major streaming devices including Amazon Firestick,
                    Smart TVs (Samsung, LG, Sony), Android and iOS mobile devices, computers, MAG boxes, and
                    Formuler devices. Simply download our app or use M3U playlist integration to start watching
                    45,000+ channels on your preferred device.
                </p>

                {/* Device compatibility hero image */}
                <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/images/iptv-uk-channels-sports-entertainment.webp"
                        alt="UK IPTV channels including Sky Sports, BBC, ITV and 45,000+ live channels on any device"
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {devices.map((device, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-colors group"
                        >
                            <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                {device.icon}
                            </span>
                            <h3 className="text-white font-semibold text-center mb-2">
                                {device.name}
                            </h3>
                            <p className="text-slate-400 text-sm text-center leading-relaxed">
                                {device.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-slate-300 mb-4">
                        Need help setting up IPTV on your device? Our 24/7 support team will guide you through the installation.
                    </p>
                    <a
                        href="https://wa.me/447418316577?text=Hi%2C%20I%20need%20help%20setting%20up%20IPTV"
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Get Free IPTV Setup Help via WhatsApp"
                    >
                        Get Free Setup Assistance
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

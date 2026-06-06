// Testimonials section with UK customer reviews
// SEO: E-E-A-T signals with UK city mentions
// GEO: Local signals for UK geographic targeting

import Card from '@/components/ui/Card';
import SectionTitle from '@/components/ui/SectionTitle';

const testimonials = [
    {
        name: 'James Wilson',
        location: 'London, UK',
        rating: 5,
        text: 'Best IPTV service I\'ve used in the UK. The Premier League coverage is excellent - never misses a match. Zero buffering even during big games. Highly recommend IPTV UK!',
    },
    {
        name: 'Sarah Thompson',
        location: 'Manchester, UK',
        rating: 5,
        text: 'Switched from traditional cable and saving over £100 per month. The picture quality is amazing in 4K, and the VOD library keeps the whole family entertained.',
    },
    {
        name: 'David Brown',
        location: 'Birmingham, UK',
        rating: 5,
        text: 'Been with IPTV UK for 8 months now. The customer support on WhatsApp is incredibly fast - they helped me set up my Firestick in minutes. Great value for money.',
    },
    {
        name: 'Emma Roberts',
        location: 'Glasgow, Scotland',
        rating: 5,
        text: 'As a UK expat, I was struggling to find reliable UK IPTV abroad. IPTV UK works perfectly - I can watch all my favourite UK shows and sports from anywhere.',
    },
    {
        name: 'Michael Clarke',
        location: 'Liverpool, UK',
        rating: 5,
        text: 'The sports coverage is unreal. Every football match, UFC event, and F1 race in crystal clear quality. No more missing out on pay-per-view events!',
    },
    {
        name: 'Rachel Green',
        location: 'Leeds, UK',
        rating: 5,
        text: 'Started with the free trial and was blown away by the quality. Now on the annual plan and couldn\'t be happier. The kids love the massive VOD library too.',
    },
];

export default function HomeTestimonialsSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="What UK Customers Say About IPTV UK"
                    subtitle="Join thousands of satisfied customers across the UK enjoying premium IPTV streaming."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} glassmorphism>
                            {/* Star rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-amber-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial text */}
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Customer info */}
                            <div className="flex items-center gap-3">
                                {/* Avatar placeholder */}
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <p className="text-white font-medium">{testimonial.name}</p>
                                    <p className="text-slate-400 text-sm">{testimonial.location}</p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Trust summary */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-6 flex-wrap justify-center text-slate-400">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-white font-semibold">4.9/5</span> Average Rating
                        </span>
                        <span>|</span>
                        <span><span className="text-white font-semibold">Customer</span> Feedback Highlights</span>
                        <span>|</span>
                        <span><span className="text-white font-semibold">10,000+</span> Happy UK Customers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

import Link from 'next/link';

type KeywordHubSectionProps = {
  title?: string;
  subtitle?: string;
};

const planAndChannelLinks = [
  { href: '/pricing/', label: 'Plans & Prices' },
  { href: '/sky-sports-iptv-uk/', label: 'Sky Sports Guide' },
  { href: '/blog/best-iptv-uk-2026/', label: 'Best IPTV UK Guide' },
  { href: '/blog/best-iptv-uk-providers-2026/', label: 'Provider Comparison' },
];

const setupAndHelpLinks = [
  { href: '/iptv-firestick-uk/', label: 'Firestick Setup' },
  { href: '/iptv-iphone-uk/', label: 'iPhone & iPad Setup' },
  { href: '/blog/iptv-uk-beginners-guide/', label: 'Beginner Guide' },
  { href: '/blog/tivimate-no-epg-fix/', label: 'Fix TiviMate EPG' },
];

export default function KeywordHubSection({
  title = 'Helpful IPTV UK Guides',
  subtitle = 'Choose the next guide based on what you want to do: compare plans, check channel options, set up your device, or fix a common app issue.',
}: KeywordHubSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-slate-300 leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <article className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-emerald-300 mb-3">Compare plans and channels</h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              Review pricing, sports coverage, channel options, and provider comparisons before choosing a subscription.
            </p>
            <ul className="space-y-3">
              {planAndChannelLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-200 hover:text-emerald-300 transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-6 md:p-8">
            <h3 className="text-xl font-semibold text-indigo-300 mb-3">Set up your device</h3>
            <p className="text-slate-300 leading-relaxed mb-5">
              Follow step-by-step setup help for popular devices and solve common player issues quickly.
            </p>
            <ul className="space-y-3">
              {setupAndHelpLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-200 hover:text-indigo-300 transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

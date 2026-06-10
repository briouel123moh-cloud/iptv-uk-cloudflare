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

const freshnessSignals = [
  'Updated IPTV UK homepage copy for 2026 search intent, device compatibility, and faster decision-making.',
  'Clearer IPTV UK trial messaging: no card required, setup guidance included, and WhatsApp activation in minutes.',
  'Expanded internal links for IPTV UK pricing, Firestick setup, iPhone setup, sports guides, legal guidance, and troubleshooting.',
  'Consistent canonical domain, brand wording, structured data, and contact details for iptvuk-iptv-uk.store.',
];

const localSearchClusters = [
  'IPTV UK London',
  'IPTV UK Manchester',
  'IPTV UK Birmingham',
  'IPTV UK Glasgow',
  'IPTV UK Liverpool',
  'IPTV UK Leeds',
  'IPTV UK Sheffield',
  'IPTV UK Edinburgh',
  'IPTV UK Bristol',
];

export default function KeywordHubSection({
  title = 'Helpful IPTV UK Guides',
  subtitle = 'Choose the next guide based on what you want to do: compare plans, check channel options, set up your device, or fix a common app issue.',
}: KeywordHubSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300 mb-3">
            Fresh IPTV UK content for 2026
          </p>
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

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="lg:col-span-2 rounded-2xl border border-slate-700 bg-slate-950/70 p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              What changed on IPTV UK for 2026?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              This IPTV UK page has been refreshed to make the service easier to compare: clearer plan pricing,
              stronger Firestick and Smart TV setup paths, updated trial instructions, and more internal links to
              high-intent IPTV UK guides. The goal is simple: help UK viewers find pricing, compatibility,
              sports coverage, channel information, support, and refund terms without hunting through thin pages.
            </p>
            <p className="text-slate-300 leading-relaxed">
              If you are searching for IPTV UK in 2026, start with the free trial, test your real device and home
              broadband connection, then choose the monthly, quarterly, six-month, or annual IPTV UK plan that fits
              your household. Every major setup route links from this hub, including Firestick IPTV UK, iPhone IPTV UK,
              Smart TV IPTV UK, sports IPTV UK, and IPTV UK troubleshooting guides.
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {freshnessSignals.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <aside className="rounded-2xl border border-amber-400/25 bg-amber-400/5 p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4">IPTV UK local searches</h3>
            <p className="text-slate-300 leading-relaxed mb-4">
              IPTV UK works across the country on fast broadband, fibre, 4G, and 5G connections. These local terms help
              viewers find setup support by city.
            </p>
            <div className="flex flex-wrap gap-2">
              {localSearchClusters.map((term) => (
                <span key={term} className="rounded-full bg-slate-800 px-3 py-1 text-sm text-amber-200">
                  {term}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

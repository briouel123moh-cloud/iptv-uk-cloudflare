import Link from 'next/link';

type KeywordHubSectionProps = {
  title?: string;
  subtitle?: string;
};

const buyingIntentLinks = [
  { href: '/pricing/', label: 'Buy IPTV UK Plans & Prices' },
  { href: '/iptv-firestick-uk/', label: 'Best IPTV for Firestick UK' },
  { href: '/iptv-iphone-uk/', label: 'IPTV on iPhone & iPad UK' },
  { href: '/sky-sports-iptv-uk/', label: 'Sky Sports IPTV UK Guide' },
  { href: '/blog/best-iptv-uk-2026/', label: 'Best IPTV UK 2026' },
  { href: '/blog/best-iptv-uk-providers-2026/', label: 'Best IPTV Providers UK 2026' },
];

const infoIntentLinks = [
  { href: '/blog/is-iptv-legal-uk/', label: 'Is IPTV Legal in UK?' },
  { href: '/blog/iptv-uk-beginners-guide/', label: 'IPTV UK Beginner Guide' },
  { href: '/blog/iptv-uk-monthly-cost/', label: 'IPTV UK Monthly Cost' },
  { href: '/blog/what-is-epg-guide/', label: 'What Is EPG? TV Guide Explained' },
  { href: '/blog/free-vs-premium-iptv-risks/', label: 'Free vs Premium IPTV Risks' },
  { href: '/blog/tivimate-no-epg-fix/', label: 'TiviMate No EPG Fix' },
];

export default function KeywordHubSection({
  title = 'Popular IPTV UK Topics',
  subtitle = 'Explore buying guides, setup tutorials, troubleshooting, and legal information to help you choose the right IPTV UK subscription.',
}: KeywordHubSectionProps) {
  return (
    <section className="py-14 md:py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
          <p className="text-slate-300">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/5 p-6">
            <h3 className="text-lg font-semibold text-emerald-300 mb-4">Buying Intent Keywords</h3>
            <ul className="space-y-3">
              {buyingIntentLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-200 hover:text-emerald-300 transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo-500/25 bg-indigo-500/5 p-6">
            <h3 className="text-lg font-semibold text-indigo-300 mb-4">Informational Keywords</h3>
            <ul className="space-y-3">
              {infoIntentLinks.map((item) => (
                <li key={item.href}>
                  <Link className="text-slate-200 hover:text-indigo-300 transition-colors" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

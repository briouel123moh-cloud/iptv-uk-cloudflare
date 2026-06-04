import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { SITE_CONFIG } from '@/lib/site-config';

const sisterSites = [
  {
    flag: '🇮🇪',
    gradientFrom: 'from-green-600',
    gradientTo: 'to-orange-500',
    heading: 'Looking for IPTV in Ireland?',
    headingId: 'ie-link-heading',
    description: (<>Irish viewers get the best experience with our sister brand <strong className="text-white">Emerald IPTV Ireland</strong>. Full GAA, RTÉ, TG4 coverage with Ireland-optimized servers and 24/7 Irish support.</>),
    buttonLabel: 'Visit Emerald IPTV Ireland →',
    href: SITE_CONFIG.sisterSites.ireland,
  },
  {
    flag: '🇸🇪',
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-yellow-400',
    heading: 'Looking for IPTV in Scandinavia?',
    headingId: 'nordic-link-heading',
    description: (<>Customers across Norway, Sweden, Denmark, and Finland can enjoy our sister brand <strong className="text-white">Nordic IPTV Subscription</strong>. Optimized for Nordic networks with local sports and Nordic channels.</>),
    buttonLabel: 'Visit Nordic IPTV Subscription →',
    href: SITE_CONFIG.sisterSites.nordic,
  },
  {
    flag: '🇩🇪',
    gradientFrom: 'from-gray-600',
    gradientTo: 'to-yellow-500',
    heading: 'Looking for IPTV in Germany?',
    headingId: 'de-link-heading',
    description: (<>German viewers can rely on our sister brand <strong className="text-white">IPTV Deutschland</strong>. Bundesliga, ARD, ZDF and all major German channels with German-optimized servers.</>),
    buttonLabel: 'Visit IPTV Deutschland →',
    href: SITE_CONFIG.sisterSites.germany,
  },
];

export default function HomeEuropeLinkSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-900" aria-labelledby="sister-sites-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our IPTV Services Across Europe"
          subtitle="IPTV UK Elite is optimized for UK viewers. For customers elsewhere in Europe, we have dedicated sister services."
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {sisterSites.map((site) => (
            <Card key={site.headingId} glassmorphism hover={false}>
              <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-2xl bg-gradient-to-br ${site.gradientFrom} ${site.gradientTo} flex items-center justify-center text-4xl lg:text-5xl`}>
                    {site.flag}
                  </div>
                </div>
                <div className="flex-grow text-center md:text-left">
                  <h3 id={site.headingId} className="text-2xl lg:text-3xl font-bold text-white mb-3">{site.heading}</h3>
                  <p className="text-slate-300 mb-4">{site.description}</p>
                  <Button href={site.href} variant="primary" size="md" target="_blank" rel="noopener noreferrer">{site.buttonLabel}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

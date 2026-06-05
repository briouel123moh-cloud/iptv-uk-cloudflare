// RelatedContentSection — Phase 3 Internal Siloing
// Server component: renders a topically-clustered grid of related page links.
// Used by both blog posts (via relatedSlugs + RELATED_META) and static pages (inline items).

import Link from 'next/link';
import { isIndexedInternalHref } from '@/lib/indexed-routes';

export type RelatedItem = {
    /** Blog slug (e.g. 'fix-iptv-buffering-bt-virgin') OR absolute path (e.g. '/sky-sports-iptv/') */
    slug: string;
    title: string;
    description: string;
    category?: string;
};

interface RelatedContentSectionProps {
    items: RelatedItem[];
    heading?: string;
}

export default function RelatedContentSection({
    items,
    heading = 'Related Guides',
}: RelatedContentSectionProps) {
    if (!items || items.length === 0) return null;

    return (
        <section aria-label="Related guides" className="mt-16 pt-12 border-t border-slate-700/50">
            <h2 className="text-2xl font-semibold text-white mb-8">{heading}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => {
                    const href = item.slug.startsWith('/')
                        ? item.slug
                        : `/blog/${item.slug}/`;

                    if (!isIndexedInternalHref(href)) return null;

                    return (
                        <Link
                            key={item.slug}
                            href={href}
                            className="group block bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-emerald-500/50 transition-colors"
                        >
                            {item.category && (
                                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide mb-2 block">
                                    {item.category}
                                </span>
                            )}
                            <p className="text-white font-semibold mb-2 group-hover:text-emerald-400 transition-colors leading-snug">
                                {item.title}
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                                {item.description}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}

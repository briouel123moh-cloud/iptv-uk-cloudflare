// Section title component for consistent H2 styling
// SEO: semantic H2 with proper hierarchy
// AEO: clear section delineation for AI extraction

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SectionTitle({
    title,
    subtitle,
    centered = true,
    className = '',
    as: Tag = 'h2',
}: SectionTitleProps) {
    return (
        <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
            <Tag className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {title}
            </Tag>
            {subtitle && (
                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

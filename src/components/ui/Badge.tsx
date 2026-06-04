// Badge component for labels (Popular, New, etc.)
// A11Y: proper contrast ratios

import { ReactNode } from 'react';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning';

interface BadgeProps {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}

export default function Badge({
    children,
    variant = 'primary',
    className = '',
}: BadgeProps) {
    const variants: Record<BadgeVariant, string> = {
        primary: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        secondary: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
        success: 'bg-green-500/20 text-green-400 border-green-500/30',
        warning: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    };

    return (
        <span
            className={`
        inline-flex items-center px-3 py-1
        text-xs font-semibold uppercase tracking-wider
        rounded-full border
        ${variants[variant]}
        ${className}
      `}
        >
            {children}
        </span>
    );
}

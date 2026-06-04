// Card component for features, pricing, testimonials
// CWV: lightweight, no layout shifts

import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glassmorphism?: boolean;
}

export default function Card({
    children,
    className = '',
    hover = true,
    glassmorphism = false,
}: CardProps) {
    const baseStyles = `
    rounded-2xl p-6
    transition-all duration-300 ease-in-out
  `;

    const hoverStyles = hover
        ? 'hover:scale-[1.02] hover:shadow-2xl'
        : '';

    const glassStyles = glassmorphism
        ? 'bg-white/10 backdrop-blur-lg border border-white/20'
        : 'bg-slate-800/50 border border-slate-700/50 shadow-xl';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}>
            {children}
        </div>
    );
}

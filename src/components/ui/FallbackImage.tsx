'use client';

import { useState } from 'react';

interface FallbackImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    loading?: 'eager' | 'lazy';
}

export default function FallbackImage({
    src,
    alt,
    width,
    height,
    className,
    loading,
}: FallbackImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            width={width}
            height={height}
            className={className}
            loading={loading}
            onError={() => {
                // Fallback chain: .webp -> .svg -> /og-image.webp
                if (imgSrc.endsWith('.webp')) {
                    setImgSrc(src.replace('.webp', '.svg'));
                } else if (imgSrc.endsWith('.svg')) {
                    setImgSrc('/og-image.webp');
                }
            }}
        />
    );
}

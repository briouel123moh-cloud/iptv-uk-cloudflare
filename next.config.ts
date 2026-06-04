import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  // Image optimization — critical for Core Web Vitals / LCP
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'iptvuk-elite.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.iptvuk-elite.com',
        pathname: '/**',
      },
    ],
  },

  // CWV: Inlines critical CSS, defers the rest — removes blocking CSS chunk
  experimental: {
    optimizeCss: true,
  },

  // Enable gzip/brotli compression for all responses
  compress: true,

  // Power-pack: enable React strict mode to catch hydration issues
  reactStrictMode: true,

  env: {
    SITE_URL: 'https://www.iptvuk-elite.com',
  },

  // Headers for performance & security that also help SEO trust signals
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Cache control for better performance
          { key: 'Vary', value: 'Accept-Encoding' },
        ],
      },
      {
        // Long-term cache for static assets (Next.js builds include content hash)
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Cache images for 7 days
        source: '/:all*.(jpg|jpeg|png|webp|avif|svg|ico)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ];
  },

};

export default nextConfig;

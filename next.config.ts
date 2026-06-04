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
        hostname: 'iptv-uk-iptv.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.iptv-uk-iptv.co.uk',
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
    SITE_URL: 'https://iptv-uk-iptv.co.uk',
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Next.js to build pure static HTML (bypasses Cloudflare's buggy server engine)
  output: 'export',
  trailingSlash: true,

  // Must disable Next.js built-in image optimization for static exports
  // (Cloudflare handles image optimization automatically at the network edge)
  images: {
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
  },

  compress: true,
  reactStrictMode: true,

  env: {
    SITE_URL: 'https://iptv-uk-iptv.co.uk',
  },
};

export default nextConfig;

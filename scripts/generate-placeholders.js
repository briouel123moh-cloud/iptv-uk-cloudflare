/* eslint-disable @typescript-eslint/no-require-imports */
// Generate branded SVG placeholder images for all targeted pages.
// Run: node scripts/generate-placeholders.js
// Outputs: public/images/blog/{slug}-hero.svg, public/images/blog/{slug}-feature.svg
//          public/images/pages/{slug}-hero.svg, public/images/pages/{slug}-feature.svg
// These act as the .svg fallback in the FallbackImage component's
// fallback chain: .webp -> .svg -> /og-image.png

const fs = require('fs');
const path = require('path');

function makeSvg(label, variant = 'hero', w = 800, h = 450) {
    const subText = variant === 'hero' ? 'Hero Image' : 'Feature Illustration';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#1e293b"/>
  <rect x="0" y="${h - 3}" width="${w}" height="3" fill="#10b981" opacity="0.6"/>
  <text x="50%" y="45%" font-family="system-ui,sans-serif" font-size="16"
    fill="#64748b" text-anchor="middle" dominant-baseline="middle">${label}</text>
  <text x="50%" y="58%" font-family="system-ui,sans-serif" font-size="12"
    fill="#475569" text-anchor="middle" dominant-baseline="middle">${subText} · IPTV UK</text>
</svg>`;
}

const blogSlugs = [
    '4k-iptv-services-uk',
    'best-internet-speed-4k-iptv',
    'best-iptv-apps-smart-tv-2026',
    'best-iptv-player-apps-ranked',
    'best-iptv-zgemma-enigma2',
    'best-vpn-iptv-uk-2026',
    'boxing-ppv-iptv-uk-guide',
    'common-iptv-error-codes',
    'euro-2026-iptv-uk-guide',
    'fastest-iptv-activation-uk',
    'fix-iptv-buffering-bt-virgin',
    'fix-no-audio-sound-iptv',
    'formula-1-f1-iptv-uk',
    'formuler-z11-vs-firestick-4k',
    'free-vs-premium-iptv-risks',
    'how-to-record-iptv-uk',
    'install-downloader-firestick-2026',
    'install-iptv-lg-tv-2026',
    'install-iptv-smart-tv-uk',
    'iptv-android-box-uk',
    'iptv-channels-uk-2026',
    'iptv-expats-australia-guide',
    'iptv-expats-uk-tv-abroad',
    'iptv-football-streams-uk',
    'iptv-free-trial-uk-2026',
    'iptv-mobile-data-4g-5g',
    'iptv-on-nintendo-switch-guide',
    'iptv-parental-controls',
    'iptv-premier-league-uk',
    'iptv-smarters-no-video-fix',
    'iptv-uk-24-7-support',
    'iptv-uk-beginners-guide',
    'iptv-uk-movies-series',
    'iptv-uk-no-buffering',
    'iptv-uk-payment-methods',
    'iptv-uk-pubs-clubs-2026',
    'iptv-vs-freeview-play',
    'iptv-vs-sky-bitrate-quality',
    'iptv-vs-sky-glass-cost-uk',
    'm3u-playlist-guide-beginners',
    'multi-room-iptv-guide',
    'nvidia-shield-pro-iptv-review',
    'resell-iptv-uk-plans',
    'tivimate-401-error-fix',
    'tivimate-companion-setup-guide',
    'tivimate-no-epg-fix',
    'tivimate-premium-guide-uk',
    'watch-ufc-ppv-iptv-uk',
    'watch-uk-tv-ireland-guide',
    'what-is-epg-guide',
    'world-cup-2026-iptv-uk',
    'xtream-codes-firestick-guide',
];

const pageSlugs = [
    'bbc-iptv-uk',
    'boxing-ufc-iptv-uk',
    'bt-sport-iptv',
    'bt-sport-iptv-uk',
    'champions-league-iptv-uk',
    'channel-4-iptv',
    'f1-iptv-uk',
    'iptv-android-box-uk',
    'iptv-fire-tv-cube-uk',
    'iptv-iphone-uk',
    'iptv-mag-box-uk',
    'iptv-pc-mac-uk',
    'iptv-smart-tv-uk',
    'iptv-vs-bt-tv',
    'iptv-vs-freeview',
    'iptv-vs-now-tv-uk',
    'iptv-vs-sky-uk',
    'iptv-vs-virgin-media-uk',
    'itv-iptv-uk',
    'premier-league-iptv-uk',
    'sky-atlantic-iptv',
    'sky-cinema-iptv',
    'sky-sports-iptv',
    'tnt-sports-iptv-uk',
];

let created = 0;

for (const slug of blogSlugs) {
    const dir = path.join('public', 'images', 'blog');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${slug}-hero.svg`), makeSvg(slug, 'hero'));
    fs.writeFileSync(path.join(dir, `${slug}-feature.svg`), makeSvg(slug, 'feature'));
    created += 2;
}

for (const slug of pageSlugs) {
    const dir = path.join('public', 'images', 'pages');
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${slug}-hero.svg`), makeSvg(slug, 'hero'));
    fs.writeFileSync(path.join(dir, `${slug}-feature.svg`), makeSvg(slug, 'feature'));
    created += 2;
}

console.log(`✓ Created ${created} SVG placeholder files.`);
console.log(`  Blog: public/images/blog/ (${blogSlugs.length * 2} files)`);
console.log(`  Pages: public/images/pages/ (${pageSlugs.length * 2} files)`);

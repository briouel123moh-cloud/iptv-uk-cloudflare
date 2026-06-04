// related-meta.ts — Single source of truth for related content metadata.
// Used by the blog template to resolve relatedSlugs → RelatedItem objects.
// Keys are blog post slugs; static page paths use the absolute path convention (see RelatedContentSection).

import type { RelatedItem } from '@/components/sections/RelatedContentSection';

export const RELATED_META: Record<string, RelatedItem> = {
    // ─── Buffering / Technical cluster ───────────────────────────────────────
    'fix-iptv-buffering-bt-virgin': {
        slug: 'fix-iptv-buffering-bt-virgin',
        title: 'Fix IPTV Buffering on BT & Virgin Media',
        description: 'Disable BT Web Protect and Virgin Web Safe to stop peak-hours buffering instantly.',
        category: 'Troubleshooting',
    },
    'iptv-uk-no-buffering': {
        slug: 'iptv-uk-no-buffering',
        title: 'The No-Buffering Checklist for 2026',
        description: 'Expert checklist for a perfectly stable, buffer-free IPTV experience on any UK connection.',
        category: 'Technical',
    },
    'best-internet-speed-4k-iptv': {
        slug: 'best-internet-speed-4k-iptv',
        title: 'Best Internet Speed for 4K IPTV UK',
        description: 'Real-world speed tests on BT, Virgin, Sky, and EE — what you actually need for UHD.',
        category: 'Technical',
    },
    'fix-no-audio-sound-iptv': {
        slug: 'fix-no-audio-sound-iptv',
        title: 'Fix No Audio / Sound on IPTV',
        description: 'Step-by-step audio troubleshooting for TiviMate, IPTV Smarters, and Smart TV players.',
        category: 'Troubleshooting',
    },
    'common-iptv-error-codes': {
        slug: 'common-iptv-error-codes',
        title: 'Common IPTV Error Codes Explained',
        description: 'What every error code means and the fastest fix — from 401 Unauthorized to buffering timeouts.',
        category: 'Troubleshooting',
    },
    'tivimate-401-error-fix': {
        slug: 'tivimate-401-error-fix',
        title: 'TiviMate 401 Error Fix',
        description: 'Resolve TiviMate authentication failures caused by expired credentials or server-side blocks.',
        category: 'Troubleshooting',
    },
    'tivimate-no-epg-fix': {
        slug: 'tivimate-no-epg-fix',
        title: 'TiviMate No EPG Fix',
        description: 'Fix missing TV guide data in TiviMate — force EPG refresh, check XMLTV URL, and clear cache.',
        category: 'Troubleshooting',
    },
    'iptv-smarters-no-video-fix': {
        slug: 'iptv-smarters-no-video-fix',
        title: 'IPTV Smarters No Video Fix',
        description: 'Resolve black screen and no-video errors in IPTV Smarters Pro on Firestick and Android.',
        category: 'Troubleshooting',
    },

    // ─── Device Setup cluster ─────────────────────────────────────────────────
    'best-iptv-apps-smart-tv-2026': {
        slug: 'best-iptv-apps-smart-tv-2026',
        title: 'Best IPTV Apps for Samsung & LG Smart TVs 2026',
        description: 'IBO Player, Nanomid, and IPTV Smarters Pro ranked for Samsung Tizen and LG WebOS.',
        category: 'Reviews',
    },
    'install-iptv-smart-tv-uk': {
        slug: 'install-iptv-smart-tv-uk',
        title: 'Install IPTV on Smart TV UK',
        description: 'Step-by-step installation guide for Samsung, LG, Hisense, and Sony Smart TVs.',
        category: 'Tutorials',
    },
    'install-iptv-lg-tv-2026': {
        slug: 'install-iptv-lg-tv-2026',
        title: 'Install IPTV on LG TV 2026',
        description: 'How to sideload and configure IPTV apps on LG WebOS 6+ with full channel guide.',
        category: 'Tutorials',
    },
    'install-downloader-firestick-2026': {
        slug: 'install-downloader-firestick-2026',
        title: 'Install Downloader on Firestick 2026',
        description: 'Enable ADB debugging and use Downloader to sideload any IPTV app on Fire TV Stick.',
        category: 'Tutorials',
    },
    'formuler-z11-vs-firestick-4k': {
        slug: 'formuler-z11-vs-firestick-4k',
        title: 'Formuler Z11 vs Firestick 4K',
        description: 'Which device wins for IPTV in 2026? Hardware specs, app support, and real-world performance.',
        category: 'Reviews',
    },
    'best-iptv-zgemma-enigma2': {
        slug: 'best-iptv-zgemma-enigma2',
        title: 'Best IPTV for Zgemma & Enigma2',
        description: 'Configure M3U playlists and Xtream Codes on Zgemma H9S, H10, and Enigma2 receivers.',
        category: 'Tutorials',
    },
    'iptv-on-nintendo-switch-guide': {
        slug: 'iptv-on-nintendo-switch-guide',
        title: 'IPTV on Nintendo Switch Guide',
        description: 'Watch live UK TV on Nintendo Switch — browser method and compatible player apps.',
        category: 'Guides',
    },
    'iptv-android-box-uk': {
        slug: 'iptv-android-box-uk',
        title: 'Best IPTV Android Box UK 2026',
        description: 'Top Android TV boxes for IPTV UK — X96 Max, Nvidia Shield, and budget picks compared.',
        category: 'Reviews',
    },
    'nvidia-shield-pro-iptv-review': {
        slug: 'nvidia-shield-pro-iptv-review',
        title: 'Nvidia Shield Pro IPTV Review',
        description: 'Is the Shield Pro worth £199 for IPTV? Performance, Plex, 4K, and TiviMate tested.',
        category: 'Reviews',
    },
    'xtream-codes-firestick-guide': {
        slug: 'xtream-codes-firestick-guide',
        title: 'Xtream Codes on Firestick Guide',
        description: 'Add your IPTV subscription using Xtream Codes API in IPTV Smarters and TiviMate.',
        category: 'Tutorials',
    },
    'tivimate-premium-guide-uk': {
        slug: 'tivimate-premium-guide-uk',
        title: 'TiviMate Premium Guide UK',
        description: 'Unlock TiviMate Premium features — multi-panel, recording, catch-up, and EPG setup.',
        category: 'Guides',
    },
    'tivimate-companion-setup-guide': {
        slug: 'tivimate-companion-setup-guide',
        title: 'TiviMate Companion Setup Guide',
        description: 'Activate TiviMate Premium via the Companion app on Android — full walkthrough.',
        category: 'Tutorials',
    },
    'best-iptv-player-apps-ranked': {
        slug: 'best-iptv-player-apps-ranked',
        title: 'Best IPTV Player Apps Ranked 2026',
        description: 'TiviMate vs IPTV Smarters vs GSE vs VLC — ranked for UK users on every device.',
        category: 'Reviews',
    },

    // ─── Sports cluster ───────────────────────────────────────────────────────
    'boxing-ppv-iptv-uk-guide': {
        slug: 'boxing-ppv-iptv-uk-guide',
        title: 'Boxing PPV on IPTV UK Guide',
        description: 'Watch Anthony Joshua, Tyson Fury, and world championship bouts on IPTV — no PPV fee.',
        category: 'Sports',
    },
    'euro-2026-iptv-uk-guide': {
        slug: 'euro-2026-iptv-uk-guide',
        title: 'Euro 2026 IPTV UK Guide',
        description: 'Watch every Euro 2026 match live on IPTV UK — BBC, ITV, and international feeds.',
        category: 'Sports',
    },
    'formula-1-f1-iptv-uk': {
        slug: 'formula-1-f1-iptv-uk',
        title: 'Formula 1 / F1 IPTV UK',
        description: 'Stream every F1 race, qualifying, and practice session live via Sky Sports F1 on IPTV.',
        category: 'Sports',
    },
    'iptv-football-streams-uk': {
        slug: 'iptv-football-streams-uk',
        title: 'IPTV Football Streams UK',
        description: 'Premier League, Championship, FA Cup, Champions League — all football streams covered.',
        category: 'Sports',
    },
    'iptv-premier-league-uk': {
        slug: 'iptv-premier-league-uk',
        title: 'IPTV for Premier League UK',
        description: 'Watch all 380 Premier League matches including blacked-out 3pm Saturday kick-offs.',
        category: 'Sports',
    },
    'watch-ufc-ppv-iptv-uk': {
        slug: 'watch-ufc-ppv-iptv-uk',
        title: 'Watch UFC PPV on IPTV UK',
        description: 'Stream every UFC event on TNT Sports Box Office via IPTV — skip the per-event charge.',
        category: 'Sports',
    },
    'world-cup-2026-iptv-uk': {
        slug: 'world-cup-2026-iptv-uk',
        title: 'World Cup 2026 IPTV UK Guide',
        description: 'Stream FIFA World Cup 2026 USA/Canada/Mexico on BBC, ITV, and international channels.',
        category: 'Sports',
    },

    // ─── Comparisons cluster ──────────────────────────────────────────────────
    'iptv-vs-freeview-play': {
        slug: 'iptv-vs-freeview-play',
        title: 'IPTV vs Freeview Play',
        description: 'Freeview Play has 70 channels; IPTV UK Elite has 45,000+. The full cost comparison.',
        category: 'Comparisons',
    },
    'iptv-vs-sky-bitrate-quality': {
        slug: 'iptv-vs-sky-bitrate-quality',
        title: 'IPTV vs Sky: Bitrate & Quality',
        description: 'Side-by-side bitrate and picture quality analysis — does IPTV match Sky Q in 2026?',
        category: 'Comparisons',
    },
    'iptv-vs-sky-glass-cost-uk': {
        slug: 'iptv-vs-sky-glass-cost-uk',
        title: 'IPTV vs Sky Glass Cost UK',
        description: 'Sky Glass costs £13/month for the box plus subscription. IPTV costs £12 total. Breakdown inside.',
        category: 'Comparisons',
    },
    'free-vs-premium-iptv-risks': {
        slug: 'free-vs-premium-iptv-risks',
        title: 'Free vs Premium IPTV Risks',
        description: 'The hidden dangers of free M3U lists — malware, data theft, and constant downtime explained.',
        category: 'Safety',
    },
    'iptv-uk-payment-methods': {
        slug: 'iptv-uk-payment-methods',
        title: 'IPTV UK Payment Methods',
        description: 'How to pay for IPTV safely in the UK — crypto, PayPal, bank transfer, and card options.',
        category: 'Payments',
    },
    'resell-iptv-uk-plans': {
        slug: 'resell-iptv-uk-plans',
        title: 'Resell IPTV UK — Reseller Plans',
        description: 'Start an IPTV reseller business in the UK — credits, panel access, and pricing structure.',
        category: 'Business',
    },

    // ─── Guides cluster ───────────────────────────────────────────────────────
    'iptv-uk-beginners-guide': {
        slug: 'iptv-uk-beginners-guide',
        title: 'IPTV UK Beginner\'s Guide 2026',
        description: 'Everything you need to know to get started with IPTV in the UK — devices, apps, and setup.',
        category: 'Guides',
    },
    'iptv-free-trial-uk-2026': {
        slug: 'iptv-free-trial-uk-2026',
        title: 'IPTV Free Trial UK 2026',
        description: 'How to claim your free 24-hour IPTV trial — what\'s included and how to activate.',
        category: 'Pricing',
    },
    'how-to-record-iptv-uk': {
        slug: 'how-to-record-iptv-uk',
        title: 'How to Record IPTV UK (PVR Guide)',
        description: 'Record live TV with TiviMate Premium or a dedicated PVR — full setup walkthrough.',
        category: 'Tutorials',
    },
    'multi-room-iptv-guide': {
        slug: 'multi-room-iptv-guide',
        title: 'Multi-Room IPTV Guide UK',
        description: 'Stream IPTV on multiple TVs simultaneously — connections, router settings, and app tips.',
        category: 'Guides',
    },
    'm3u-playlist-guide-beginners': {
        slug: 'm3u-playlist-guide-beginners',
        title: 'M3U Playlist Guide for Beginners',
        description: 'What is an M3U file, how to load it into any IPTV player, and how to fix broken playlists.',
        category: 'Guides',
    },
    'what-is-epg-guide': {
        slug: 'what-is-epg-guide',
        title: 'What Is EPG? TV Guide Explained',
        description: 'Electronic Programme Guide explained — how EPG works in IPTV players and how to set it up.',
        category: 'Guides',
    },
    'iptv-uk-24-7-support': {
        slug: 'iptv-uk-24-7-support',
        title: 'IPTV UK 24/7 Support',
        description: 'How IPTV UK Elite\'s round-the-clock WhatsApp support works — what\'s covered and response times.',
        category: 'Guides',
    },
    'fastest-iptv-activation-uk': {
        slug: 'fastest-iptv-activation-uk',
        title: 'Fastest IPTV Activation UK',
        description: 'From payment to streaming in under 5 minutes — IPTV UK Elite\'s instant activation explained.',
        category: 'Guides',
    },

    // ─── Expat / Mobile cluster ───────────────────────────────────────────────
    'iptv-expats-australia-guide': {
        slug: 'iptv-expats-australia-guide',
        title: 'IPTV for UK Expats in Australia',
        description: 'Watch BBC, ITV, Sky Sports, and Premier League from Australia with IPTV UK Elite.',
        category: 'Guides',
    },
    'iptv-expats-uk-tv-abroad': {
        slug: 'iptv-expats-uk-tv-abroad',
        title: 'IPTV for Expats: UK TV Abroad',
        description: 'Watch live UK TV in Spain, France, Dubai, and anywhere — no satellite dish needed.',
        category: 'Guides',
    },
    'watch-uk-tv-ireland-guide': {
        slug: 'watch-uk-tv-ireland-guide',
        title: 'Watch UK TV in Ireland Guide',
        description: 'Stream BBC, ITV, Channel 4, and Sky Sports from the Republic of Ireland via IPTV.',
        category: 'Guides',
    },
    'iptv-mobile-data-4g-5g': {
        slug: 'iptv-mobile-data-4g-5g',
        title: 'IPTV on Mobile Data (4G/5G)',
        description: 'How much mobile data does IPTV use? SD vs HD vs 4K data usage with EE, O2, and Vodafone.',
        category: 'Technical',
    },

    // ─── Content / 4K cluster ─────────────────────────────────────────────────
    'iptv-uk-movies-series': {
        slug: 'iptv-uk-movies-series',
        title: 'IPTV UK Movies & Series Library',
        description: '100,000+ VOD titles — how to browse movies, TV series, and catch-up content on IPTV.',
        category: 'Content',
    },
    'iptv-channels-uk-2026': {
        slug: 'iptv-channels-uk-2026',
        title: 'IPTV Channels UK 2026 — Full List',
        description: 'Complete breakdown of all 45,000+ channels — sports, entertainment, news, and kids.',
        category: 'Guides',
    },
    '4k-iptv-services-uk': {
        slug: '4k-iptv-services-uk',
        title: '4K IPTV Services UK — What\'s Real?',
        description: 'Which providers actually deliver true 4K UHD vs upscaled HD — tested and verified.',
        category: 'Technical',
    },
    'best-vpn-iptv-uk-2026': {
        slug: 'best-vpn-iptv-uk-2026',
        title: 'Best VPN for IPTV UK 2026',
        description: 'NordVPN, Surfshark, and ExpressVPN tested for speed, ISP throttle bypass, and privacy.',
        category: 'Technical',
    },
    'iptv-parental-controls': {
        slug: 'iptv-parental-controls',
        title: 'IPTV Parental Controls Guide',
        description: 'Set PIN locks, block adult channels, and create child-safe profiles in TiviMate and Smarters.',
        category: 'Safety',
    },
    'iptv-uk-pubs-clubs-2026': {
        slug: 'iptv-uk-pubs-clubs-2026',
        title: 'IPTV for UK Pubs & Clubs 2026',
        description: 'Commercial IPTV licensing for pubs, clubs, and hospitality venues — what\'s legal and how to set up.',
        category: 'Business',
    },
};

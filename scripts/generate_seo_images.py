#!/usr/bin/env python3
"""
Generate SEO-optimised branded WebP images for IPTV UK.
All images use the site's colour palette: slate-900 bg, emerald-500 accent.
"""

from PIL import Image, ImageDraw, ImageFont
import os, textwrap, math

OUT = "/workspaces/IPTV-UK/public/images"
os.makedirs(OUT, exist_ok=True)

# ── Palette (matches Tailwind slate/emerald) ──────────────────────────────────
BG_TOP    = (15, 23, 42)    # slate-900
BG_BOT    = (30, 41, 59)    # slate-800
EMERALD   = (16, 185, 129)  # emerald-500
EMERALD_D = (6,  95,  70)   # emerald-900 (accent bar)
WHITE     = (255, 255, 255)
GREY      = (148, 163, 184) # slate-400

# ── Font loader ───────────────────────────────────────────────────────────────
def get_font(size):
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSansBold.ttf",
        "/usr/share/fonts/TTF/DejaVuSans-Bold.ttf",
    ]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def get_font_reg(size):
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
        "/usr/share/fonts/truetype/freefont/FreeSans.ttf",
    ]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

# ── Core renderer ─────────────────────────────────────────────────────────────
def make_image(filename: str, title: str, subtitle: str = "", w: int = 1200, h: int = 675):
    """Render one branded WebP image and save to OUT/filename."""
    img = Image.new("RGB", (w, h))
    d   = ImageDraw.Draw(img)

    # Vertical gradient bg
    for y in range(h):
        t = y / h
        r = int(BG_TOP[0] + (BG_BOT[0]-BG_TOP[0])*t)
        g = int(BG_TOP[1] + (BG_BOT[1]-BG_TOP[1])*t)
        b = int(BG_TOP[2] + (BG_BOT[2]-BG_TOP[2])*t)
        d.line([(0, y), (w, y)], fill=(r, g, b))

    # Decorative diagonal grid lines
    line_col = (255, 255, 255, 8)
    step = max(60, w // 14)
    for i in range(-h, w + h, step):
        d.line([(i, 0), (i + h, h)], fill=(30, 50, 80), width=1)

    # Emerald accent bar (left edge)
    bar_w = max(6, w // 100)
    d.rectangle([0, 0, bar_w, h], fill=EMERALD)

    # Decorative emerald circle (bottom-right)
    cr = int(min(w, h) * 0.55)
    d.ellipse([w - cr//2, h - cr//2, w + cr//2, h + cr//2],
              outline=EMERALD_D, width=max(2, w//200))

    # Brand badge (top-left)
    brand_font = get_font(max(14, w // 55))
    badge_txt  = "IPTV UK ELITE"
    bx, by = bar_w + max(16, w//50), max(18, h//28)
    d.text((bx, by), badge_txt, font=brand_font, fill=EMERALD)

    # Thin horizontal rule below brand
    rule_y = by + max(22, h//22)
    d.line([(bx, rule_y), (bx + w//4, rule_y)], fill=EMERALD_D, width=max(1, w//600))

    # Main title — wrap to fit
    title_font = get_font(max(28, w // 22))
    max_chars  = max(20, w // (max(28, w//22)//2 + 2))
    wrapped    = textwrap.wrap(title, width=max_chars)

    ty = int(h * 0.30)
    line_h = max(36, w // 18)
    for line in wrapped[:4]:
        d.text((bx, ty), line, font=title_font, fill=WHITE)
        ty += line_h

    # Subtitle
    if subtitle:
        sub_font = get_font_reg(max(16, w // 42))
        ty += max(8, h // 50)
        sub_wrapped = textwrap.wrap(subtitle, width=max_chars + 10)
        for line in sub_wrapped[:2]:
            d.text((bx, ty), line, font=sub_font, fill=GREY)
            ty += max(22, w // 38)

    # Bottom CTA strip
    strip_h = max(36, h // 14)
    d.rectangle([0, h - strip_h, w, h], fill=EMERALD_D)
    cta_font = get_font_reg(max(13, w // 58))
    cta_txt  = "iptvuk-iptv-uk.store  •  45,000+ Channels  •  Free Trial Available"
    d.text((bx, h - strip_h + strip_h//4), cta_txt, font=cta_font, fill=EMERALD)

    path = os.path.join(OUT, filename)
    img.save(path, "WEBP", quality=82, method=6)
    print(f"  ✓ {filename}  ({w}×{h})")

# ── Image manifest ────────────────────────────────────────────────────────────
IMAGES = [
    # ── Homepage ────────────────────────────────────────────────────────────
    ("iptv-uk-hero-streaming.webp",          1200, 675,
     "UK's #1 Premium IPTV Service",
     "45,000+ channels • Sky Sports • Premier League • 4K streaming"),
    ("iptv-uk-channels-sports-entertainment.webp", 800,  500,
     "30,000+ UK IPTV Channels",
     "Sky Sports, BBC, ITV, Channel 4 and every UK channel included"),
    ("iptv-firestick-setup-uk.webp",               600,  400,
     "IPTV on Firestick UK",
     "Amazon Firestick setup guide — all UK channels"),
    ("iptv-smart-tv-uk-living-room.webp",          600,  400,
     "IPTV on Smart TV UK",
     "Samsung & LG Smart TV with 45,000+ channels"),
    ("iptv-android-box-uk-streaming.webp",         600,  400,
     "IPTV Android Box UK",
     "4K streaming on Android TV box"),
    ("iptv-phone-iphone-uk.webp",                  600,  400,
     "IPTV on iPhone UK",
     "Watch UK channels on iOS — anywhere"),
    ("premier-league-iptv-uk-streaming.webp",      800,  450,
     "Watch Premier League via IPTV UK",
     "All 380 matches live — Sky Sports & TNT Sports included"),
    ("iptv-uk-pricing-plans.webp",                 800,  500,
     "IPTV UK Pricing Plans",
     "From £12/mo • No contract • Cancel anytime"),

    # ── Device pages ────────────────────────────────────────────────────────
    ("iptv-firestick-uk-setup-step-by-step.webp",  1200, 675,
     "How to Install IPTV on Firestick UK",
     "Step-by-step setup guide 2026 — IPTV UK"),
    ("firestick-iptv-uk-channels-screen.webp",     800,  500,
     "Firestick IPTV UK Channels",
     "All UK channels on Amazon Firestick"),
    ("best-iptv-app-firestick-uk-2026.webp",       600,  400,
     "Best IPTV App for Firestick UK 2026",
     "Top-rated IPTV app — IPTV UK"),

    ("iptv-smart-tv-uk-installation-guide.webp",   1200, 675,
     "IPTV on Smart TV UK — Installation Guide",
     "Samsung & LG setup guide 2026"),
    ("samsung-lg-iptv-uk-channels.webp",           800,  500,
     "Samsung & LG Smart TV IPTV UK",
     "Full UK channel list on your Smart TV"),
    ("smart-tv-iptv-uk-remote-control.webp",       600,  400,
     "Smart TV IPTV UK Setup",
     "Easy remote-control guided installation"),

    ("iptv-android-box-uk-setup.webp",             1200, 675,
     "Best Android Box for IPTV UK",
     "Setup and installation guide 2026"),
    ("android-box-iptv-uk-channels-4k.webp",       800,  500,
     "Android Box IPTV UK — 4K Channels",
     "Stream 4K UK channels on Android TV box"),
    ("android-box-iptv-uk-remote.webp",            600,  400,
     "Android TV Box IPTV UK",
     "Configured and ready to stream"),

    ("iptv-mag-box-uk-setup-guide.webp",           1200, 675,
     "MAG Box IPTV UK Setup Guide",
     "MAG 524 & MAG 322 configuration 2026"),
    ("mag-box-iptv-uk-portal-screen.webp",         800,  500,
     "MAG Box UK IPTV Portal",
     "Full UK channel list on MAG box"),
    ("mag-524-iptv-uk-unboxed.webp",               600,  400,
     "MAG 524 W3 IPTV UK",
     "Best MAG box for UK IPTV streaming"),

    ("iptv-fire-tv-cube-uk-setup.webp",            1200, 675,
     "Fire TV Cube IPTV UK Setup",
     "Hands-free streaming guide 2026"),
    ("fire-tv-cube-iptv-uk-channels.webp",         800,  500,
     "Fire TV Cube IPTV UK Channels",
     "Alexa voice control + 30,000+ UK channels"),
    ("fire-tv-cube-vs-firestick-iptv-uk.webp",     600,  400,
     "Fire TV Cube vs Firestick — IPTV UK",
     "Which is best for UK IPTV streaming?"),

    ("iptv-iphone-uk-app-setup.webp",              1200, 675,
     "IPTV on iPhone UK — iOS Setup Guide",
     "Best iOS IPTV app for UK channels 2026"),
    ("iphone-iptv-uk-channels-screen.webp",        800,  500,
     "iPhone IPTV UK — Live Channels",
     "Watch Sky Sports live on iPhone"),
    ("ios-iptv-app-uk-settings.webp",              600,  400,
     "iOS IPTV App UK Settings",
     "Configure IPTV UK on iPhone"),

    ("iptv-pc-mac-uk-software-setup.webp",         1200, 675,
     "IPTV on PC & Mac UK — Software Guide",
     "VLC & Kodi setup for UK channels 2026"),
    ("iptv-windows-11-uk-channels.webp",           800,  500,
     "Windows 11 IPTV UK Channels",
     "Watch UK IPTV in VLC on Windows 11"),
    ("iptv-mac-uk-streaming-browser.webp",         600,  400,
     "IPTV on Mac UK",
     "Watch UK channels on MacBook"),

    # ── Channel pages ────────────────────────────────────────────────────────
    ("sky-sports-iptv-uk-premier-league-live.webp",1200, 675,
     "Sky Sports IPTV UK — Premier League Live",
     "Watch Sky Sports without a Sky subscription"),
    ("sky-sports-channels-iptv-uk-guide.webp",     800,  500,
     "All Sky Sports Channels on IPTV UK",
     "Sky Sports Main Event, PL, F1, Cricket & more"),

    ("sky-cinema-iptv-uk-movies.webp",             1200, 675,
     "Sky Cinema IPTV UK — Latest Movies",
     "Watch Sky Cinema without a Sky contract"),
    ("sky-cinema-iptv-channels-list.webp",         800,  500,
     "Sky Cinema IPTV UK Channels",
     "All Sky Cinema channels included"),

    ("sky-atlantic-iptv-uk-hbo-shows.webp",        1200, 675,
     "Sky Atlantic IPTV UK — HBO & Sky Originals",
     "Watch Sky Atlantic without Sky subscription"),
    ("sky-atlantic-iptv-uk-channel-guide.webp",    800,  500,
     "Sky Atlantic IPTV UK Guide",
     "Stream Sky Atlantic & HBO Max content"),

    ("bt-sport-iptv-uk-champions-league.webp",     1200, 675,
     "BT Sport IPTV UK — Champions League Live",
     "Watch BT Sport without a BT subscription"),
    ("bt-sport-iptv-uk-channels.webp",             800,  500,
     "BT Sport IPTV UK Channels",
     "All BT Sport channels on IPTV UK"),

    ("tnt-sports-iptv-uk-live-streaming.webp",     1200, 675,
     "TNT Sports IPTV UK — Live Streaming",
     "Boxing, UFC & Champions League via IPTV"),
    ("tnt-sports-iptv-uk-channels-guide.webp",     800,  500,
     "TNT Sports IPTV UK Channel Guide",
     "Complete TNT Sports lineup on IPTV UK"),

    ("bbc-iptv-uk-channels-streaming.webp",        1200, 675,
     "Watch BBC via IPTV UK",
     "BBC One, Two, Three, Four & News live"),
    ("bbc-iptv-uk-iplayer-alternative.webp",       800,  500,
     "BBC IPTV UK — iPlayer Alternative",
     "All BBC channels live, no iPlayer needed"),

    ("itv-iptv-uk-channels-live.webp",             1200, 675,
     "Watch ITV via IPTV UK — Live Channels",
     "ITV1, ITV2, ITV3, ITV4 & ITVX live"),
    ("itv-iptv-uk-coronation-street-live.webp",    800,  500,
     "ITV IPTV UK — All ITV Channels Live",
     "No ITV Hub subscription required"),

    ("channel-4-iptv-uk-streaming-live.webp",      1200, 675,
     "Channel 4 IPTV UK — Live Streaming",
     "Watch C4, E4, More4 & Film4 live"),
    ("channel-4-iptv-uk-all-channels.webp",        800,  500,
     "Channel 4 IPTV UK — All Channels",
     "C4, E4, More4, Film4 on IPTV UK"),

    # ── Sport pages ─────────────────────────────────────────────────────────
    ("premier-league-iptv-uk-live-matches.webp",   1200, 675,
     "Premier League IPTV UK — All Matches Live",
     "Every 2025/26 Premier League match via IPTV"),
    ("premier-league-iptv-uk-fixtures.webp",       800,  500,
     "Premier League IPTV UK Fixtures",
     "Sky Sports & TNT Sports — all 380 matches"),

    ("champions-league-iptv-uk-live.webp",         1200, 675,
     "Champions League IPTV UK — Live",
     "All UCL matches on TNT Sports via IPTV UK"),
    ("champions-league-iptv-uk-streaming.webp",    800,  500,
     "Champions League IPTV UK Streaming",
     "Group stages to Final — all live"),

    ("f1-iptv-uk-sky-sports-f1-live.webp",         1200, 675,
     "F1 IPTV UK — Every Grand Prix Live",
     "Watch Formula 1 on Sky Sports F1 via IPTV"),
    ("formula-1-iptv-uk-race-calendar.webp",       800,  500,
     "F1 IPTV UK — 2026 Race Calendar",
     "Full 2026 Formula 1 season live on IPTV UK"),

    ("boxing-ufc-iptv-uk-ppv-live.webp",           1200, 675,
     "Boxing & UFC IPTV UK — PPV Events Live",
     "All fight nights included — no extra PPV cost"),
    ("boxing-ppv-iptv-uk-no-extra-cost.webp",      800,  500,
     "Boxing & UFC PPV via IPTV UK",
     "Every PPV event at no extra cost on IPTV"),

    # ── Comparison pages ────────────────────────────────────────────────────
    ("iptv-vs-sky-uk-price-comparison.webp",       1200, 675,
     "IPTV vs Sky UK — Price Comparison 2026",
     "Save £1,200/year switching from Sky to IPTV UK"),
    ("iptv-vs-sky-uk-channels-table.webp",         800,  500,
     "IPTV UK vs Sky TV — Channels & Price",
     "Side-by-side comparison table 2026"),

    ("iptv-vs-virgin-media-uk-comparison.webp",    1200, 675,
     "IPTV vs Virgin Media UK — 2026 Comparison",
     "Cost and channel count comparison"),
    ("iptv-uk-vs-virgin-media-savings.webp",       800,  500,
     "Switch from Virgin Media to IPTV UK",
     "Annual savings breakdown — 2026"),

    ("iptv-vs-now-tv-uk-comparison.webp",          1200, 675,
     "IPTV UK vs NOW TV — Full Comparison",
     "Channels, price and contract comparison 2026"),
    ("iptv-uk-vs-now-tv-value.webp",         800,  500,
     "IPTV UK vs NOW TV — Which is Better?",
     "Value comparison 2026"),

    ("iptv-vs-bt-tv-uk-comparison.webp",           1200, 675,
     "IPTV vs BT TV UK — Feature & Price Guide",
     "Comparison guide 2026"),
    ("iptv-uk-vs-bt-sport-savings.webp",           800,  500,
     "Cancel BT TV & Switch to IPTV UK",
     "Cost comparison and savings guide"),

    ("iptv-vs-freeview-uk-comparison.webp",        1200, 675,
     "IPTV vs Freeview UK — 2026 Comparison",
     "Why IPTV offers 45,000+ channels vs Freeview's 70"),
    ("iptv-uk-vs-freeview-channels.webp",    800,  500,
     "IPTV UK 45,000+ Channels vs Freeview 70",
     "Full channel comparison 2026"),

    # ── Static pages ────────────────────────────────────────────────────────
    ("iptv-uk-team-about.webp",              1200, 675,
     "About IPTV UK",
     "UK's premium IPTV service — our team & story"),
    ("iptv-uk-guide-setup-buying-tips.webp",       1200, 675,
     "Complete IPTV UK Guide 2026",
     "Setup, devices, buying tips & legal info"),
    ("iptv-uk-pricing-plans-2026.webp",      1200, 675,
     "IPTV UK Subscription Plans 2026",
     "Monthly, quarterly & annual pricing — from £12/mo"),
    ("iptv-uk-faq-common-questions.webp",          1200, 675,
     "IPTV UK — Frequently Asked Questions",
     "Complete answers to the most common IPTV questions"),
    ("iptv-uk-whatsapp-support.webp",        1200, 675,
     "Contact IPTV UK — 24/7 Support",
     "WhatsApp & email support — always available"),
]

# ── Blog post hero images (62 slugs) ─────────────────────────────────────────
BLOG_SLUGS = [
    ("iptv-uk-beginners-guide",          "IPTV UK Beginners Guide 2026",              "Everything you need to know to start streaming"),
    ("is-iptv-legal-uk",                 "Is IPTV Legal in the UK?",                  "Your complete guide to UK IPTV law 2026"),
    ("best-iptv-for-firestick-uk",       "Best IPTV for Firestick UK 2026",           "Top-rated IPTV services for Amazon Firestick"),
    ("best-iptv-uk-2026",                "Best IPTV UK Services 2026",                "Independent review & comparison of UK IPTV providers"),
    ("how-to-record-iptv-uk",            "How to Record IPTV in the UK",              "DVR and recording guide for UK IPTV 2026"),
    ("multi-room-iptv-guide",            "Multi-Room IPTV UK Guide",                  "Stream IPTV on multiple TVs simultaneously"),
    ("fix-no-audio-sound-iptv",          "Fix No Audio/Sound on IPTV UK",             "Step-by-step troubleshooting guide"),
    ("best-iptv-player-apps-ranked",     "Best IPTV Player Apps Ranked 2026",         "TiviMate, IPTV Smarters, GSE & more reviewed"),
    ("what-is-epg-guide",                "What is an EPG? IPTV UK Guide",             "Electronic Programme Guide explained for IPTV"),
    ("iptv-parental-controls",           "IPTV Parental Controls UK Guide",           "How to set up parental controls on your IPTV"),
    ("iptv-vs-freeview-play",            "IPTV vs Freeview Play UK",                  "Which is better for UK TV viewing in 2026?"),
    ("iptv-mobile-data-4g-5g",           "IPTV on Mobile Data 4G & 5G UK",            "How much data does IPTV use? Complete guide"),
    ("nvidia-shield-pro-iptv-review",    "Nvidia Shield Pro IPTV UK Review 2026",     "Is the Shield Pro worth it for UK IPTV?"),
    ("common-iptv-error-codes",          "Common IPTV Error Codes — UK Fix Guide",    "Fix error 403, 502, authentication & more"),
    ("iptv-vs-sky-glass-cost-uk",        "IPTV vs Sky Glass UK — Cost Comparison",    "Is Sky Glass worth it vs IPTV UK 2026?"),
    ("best-vpn-iptv-uk-2026",            "Best VPN for IPTV UK 2026",                 "Top VPNs to use with your UK IPTV service"),
    ("watch-iptv-iphone-ipad-uk",        "Watch IPTV on iPhone & iPad UK",            "Best iOS IPTV apps and setup guide 2026"),
    ("best-iptv-apps-smart-tv-2026",     "Best IPTV Apps for Smart TV 2026",          "Samsung, LG and Android TV app guide"),
    ("tivimate-premium-guide-uk",        "TiviMate Premium Guide UK 2026",            "Setup, features and tips for TiviMate Premium"),
    ("fix-iptv-buffering-bt-virgin",     "Fix IPTV Buffering on BT & Virgin Media",   "Stop IPTV buffering — network optimisation guide"),
    ("iptv-expats-uk-tv-abroad",         "Watch UK TV Abroad via IPTV",               "UK expats guide to streaming British TV overseas"),
    ("best-internet-speed-4k-iptv",      "Best Internet Speed for 4K IPTV UK",        "Minimum speeds for HD, FHD and 4K IPTV streaming"),
    ("free-vs-premium-iptv-risks",       "Free vs Premium IPTV UK — The Risks",       "Why free IPTV is dangerous & what to use instead"),
    ("formuler-z11-vs-firestick-4k",     "Formuler Z11 vs Firestick 4K UK",           "Which is better for IPTV UK streaming?"),
    ("iptv-uk-monthly-cost",             "How Much Does IPTV UK Cost Per Month?",     "Full pricing breakdown — 2026 guide"),
    ("iptv-free-trial-uk-2026",          "Free IPTV Trial UK 2026",                   "How to get a free IPTV trial in the UK"),
    ("best-iptv-firestick-uk-2026",      "Best IPTV Service for Firestick UK 2026",   "Top-rated Firestick IPTV — expert review"),
    ("iptv-premier-league-uk",           "Watch Premier League on IPTV UK",           "Every match live — Sky Sports & TNT Sports included"),
    ("install-iptv-smart-tv-uk",         "How to Install IPTV on Smart TV UK",        "Samsung, LG & Sony setup guide 2026"),
    ("iptv-uk-no-buffering",             "IPTV UK — Zero Buffering Guide",            "How to stop buffering on your UK IPTV service"),
    ("iptv-football-streams-uk",         "IPTV Football Streams UK 2026",             "Watch all football leagues via IPTV UK"),
    ("4k-iptv-services-uk",              "Best 4K IPTV Services UK 2026",             "Ultra HD streaming guide — tested and reviewed"),
    ("iptv-android-box-uk",              "IPTV on Android Box UK Guide",              "Best Android TV boxes for UK IPTV 2026"),
    ("iptv-uk-vs-virgin-media",          "IPTV UK vs Virgin Media — 2026",            "Cost, channels and contract comparison"),
    ("iptv-uk-24-7-support",             "IPTV UK 24/7 Customer Support Guide",       "How IPTV UK support works — always on"),
    ("iptv-channels-uk-2026",            "IPTV UK Channel List 2026",                 "45,000+ channels — full breakdown"),
    ("spot-fake-iptv-sellers-uk",        "How to Spot Fake IPTV Sellers UK",          "Warning signs & how to avoid IPTV scams"),
    ("iptv-multiple-devices-uk",         "IPTV on Multiple Devices UK",               "How many screens can you use simultaneously?"),
    ("iptv-uk-movies-series",            "IPTV UK Movies & TV Series Library",        "40,000+ VOD titles — films & box sets"),
    ("iptv-uk-payment-methods",          "IPTV UK Payment Methods 2026",              "How to pay for IPTV UK safely"),
    ("fastest-iptv-activation-uk",       "Fastest IPTV Activation UK 2026",           "Get your IPTV subscription active in minutes"),
    ("resell-iptv-uk-plans",             "Resell IPTV UK — Reseller Plans 2026",      "How to become an IPTV reseller in the UK"),
    ("world-cup-2026-iptv-uk",           "Watch World Cup 2026 via IPTV UK",          "Every match live — FIFA World Cup 2026 guide"),
    ("euro-2026-iptv-uk-guide",          "Watch Euro 2026 via IPTV UK",               "Every Euro 2026 match live on UK IPTV"),
    ("formula-1-f1-iptv-uk",             "Formula 1 IPTV UK — Full Coverage 2026",   "Every 2026 F1 race on Sky Sports F1 via IPTV"),
    ("watch-ufc-ppv-iptv-uk",            "Watch UFC PPV via IPTV UK",                 "All UFC events included — no extra PPV charge"),
    ("boxing-ppv-iptv-uk-guide",         "Boxing PPV IPTV UK Guide",                  "Watch all boxing PPV events via IPTV UK"),
    ("tivimate-401-error-fix",           "Fix TiviMate 401 Error UK",                 "Step-by-step guide to fix TiviMate 401 error"),
    ("tivimate-no-epg-fix",              "Fix TiviMate No EPG Issue UK",              "How to fix missing EPG in TiviMate 2026"),
    ("install-iptv-samsung-tv-2026",     "Install IPTV on Samsung TV UK 2026",        "Step-by-step Samsung Tizen setup guide"),
    ("install-iptv-lg-tv-2026",          "Install IPTV on LG TV UK 2026",             "LG webOS IPTV setup guide 2026"),
    ("xtream-codes-firestick-guide",     "Xtream Codes on Firestick UK Guide",        "How to add Xtream Codes login to IPTV app"),
    ("m3u-playlist-guide-beginners",     "M3U Playlist IPTV UK Guide for Beginners",  "How to use M3U playlists with IPTV apps"),
    ("iptv-uk-pubs-clubs-2026",          "IPTV for UK Pubs & Clubs 2026",             "Commercial IPTV solutions for hospitality"),
    ("watch-uk-tv-ireland-guide",        "Watch UK TV in Ireland via IPTV",           "Stream British channels from Ireland — full guide"),
    ("iptv-vs-sky-bitrate-quality",      "IPTV vs Sky — Picture Quality Comparison",  "Bitrate, 4K and HDR quality tested 2026"),
    ("tivimate-companion-setup-guide",   "TiviMate Companion App Setup Guide UK",     "How to set up TiviMate Companion on your phone"),
    ("install-downloader-firestick-2026","Install Downloader on Firestick UK 2026",   "Step-by-step guide — sideload apps on Firestick"),
    ("iptv-expats-australia-guide",      "Watch UK TV in Australia via IPTV",         "Expat guide to British TV from Australia"),
    ("iptv-smarters-no-video-fix",       "Fix IPTV Smarters No Video Issue UK",       "Troubleshoot IPTV Smarters playback errors"),
    ("best-iptv-zgemma-enigma2",         "Best IPTV for Zgemma & Enigma2 UK",         "Setup guide for Zgemma satellite receivers"),
    ("iptv-on-nintendo-switch-guide",    "IPTV on Nintendo Switch UK Guide",          "Can you watch IPTV on Nintendo Switch?"),
]

def main():
    total = len(IMAGES) + len(BLOG_SLUGS)
    print(f"\nGenerating {total} SEO images into {OUT}/\n")

    # Static images
    for row in IMAGES:
        fname, w, h, title, subtitle = row
        make_image(fname, title, subtitle, w, h)

    # Blog hero images
    print("\n── Blog hero images ─────────────────────────────────────────────────────")
    for slug, title, subtitle in BLOG_SLUGS:
        fname = f"{slug}-hero.webp"
        make_image(fname, title, subtitle, 1200, 675)

    print(f"\n✅ Done — {total} images saved to {OUT}/")

if __name__ == "__main__":
    main()

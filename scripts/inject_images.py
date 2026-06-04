#!/usr/bin/env python3
"""
Inject Next.js <Image> components into every static page.
Adds: import Image from 'next/image';
Inserts: hero + secondary images at the right DOM position.
"""

import re, os, sys

SRC = "/workspaces/IPTV-UK/src/app"

# ── Helper ────────────────────────────────────────────────────────────────────
def read(path):
    with open(path) as f:
        return f.read()

def write(path, content):
    with open(path, "w") as f:
        f.write(content)
    print(f"  ✓ {path.replace('/workspaces/IPTV-UK/', '')}")

def add_image_import(content):
    """Add Image import after the last existing import line, if not already present."""
    if "import Image from 'next/image'" in content:
        return content
    # Insert after first block of imports
    content = re.sub(
        r"(import Button from '@/components/ui/Button';)",
        r"import Image from 'next/image';\n\1",
        content,
        count=1
    )
    # Fallback: after Metadata import
    if "import Image from 'next/image'" not in content:
        content = re.sub(
            r"(import \{ Metadata \} from 'next';)",
            r"\1\nimport Image from 'next/image';",
            content,
            count=1
        )
    return content

def inject_after_h1_block(content, hero_img, hero_alt, secondary_img=None, secondary_alt=None, w1=1200, h1=675, w2=800, h2=500):
    """
    Insert a hero <Image> after the closing tag of the first <section>'s inner div
    (right after the trust-badges/stats row that follows CTAs), and optionally a
    secondary image inside the next <section>.
    """
    # Find the first </section> and inject image right before it
    hero_block = f"""
                    <div className="mt-10 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/images/{hero_img}"
                            alt="{hero_alt}"
                            width={w1}
                            height={h1}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>
"""
    # We want it just before the FIRST closing </section>
    content = content.replace(
        "            </section>\n\n            {/* Overview */}",
        hero_block + "            </section>\n\n            {/* Overview */}",
        1
    )
    # Fallback: before first closing section regardless of comment
    if hero_img not in content:
        # try inserting before the second </section>
        idx = content.find("            </section>")
        if idx != -1:
            content = content[:idx] + hero_block + content[idx:]

    # Secondary image: insert at start of the "Overview" / second section's first <div>
    if secondary_img:
        sec_block = f"""
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/{secondary_img}"
                                alt="{secondary_alt}"
                                width={w2}
                                height={h2}
                                className="w-full h-auto object-cover"
                            />
                        </div>
"""
        # After the h2 in the overview section
        content = re.sub(
            r'(<h2 className="text-3xl[^"]*"[^>]*>.*?</h2>\n)',
            r'\1' + sec_block,
            content,
            count=1,
            flags=re.DOTALL
        )
    return content


# ── Page specs ────────────────────────────────────────────────────────────────
# (page_dir, hero_img, hero_alt, secondary_img, secondary_alt)
DEVICE_PAGES = [
    (
        "iptv-firestick-uk",
        "iptv-firestick-uk-setup-step-by-step.webp",
        "How to install IPTV on Firestick UK — step-by-step setup guide 2026",
        "firestick-iptv-uk-channels-screen.webp",
        "Amazon Firestick showing IPTV UK Elite channels menu",
    ),
    (
        "iptv-smart-tv-uk",
        "iptv-smart-tv-uk-installation-guide.webp",
        "How to get IPTV on Smart TV UK — Samsung LG installation guide 2026",
        "samsung-lg-iptv-uk-channels.webp",
        "Samsung Smart TV with IPTV UK Elite channels loaded",
    ),
    (
        "iptv-android-box-uk",
        "iptv-android-box-uk-setup.webp",
        "Best Android TV box for IPTV UK — setup and installation guide 2026",
        "android-box-iptv-uk-channels-4k.webp",
        "Android TV box streaming 4K IPTV channels UK",
    ),
    (
        "iptv-mag-box-uk",
        "iptv-mag-box-uk-setup-guide.webp",
        "MAG box IPTV UK setup guide — MAG 524 and MAG 322 configuration 2026",
        "mag-box-iptv-uk-portal-screen.webp",
        "MAG box showing UK IPTV portal with channel list",
    ),
    (
        "iptv-fire-tv-cube-uk",
        "iptv-fire-tv-cube-uk-setup.webp",
        "Fire TV Cube IPTV UK setup guide — hands-free streaming 2026",
        "fire-tv-cube-iptv-uk-channels.webp",
        "Fire TV Cube with IPTV UK Elite channels and Alexa voice control",
    ),
    (
        "iptv-iphone-uk",
        "iptv-iphone-uk-app-setup.webp",
        "IPTV on iPhone UK — best iOS IPTV app setup guide 2026",
        "iphone-iptv-uk-channels-screen.webp",
        "iPhone showing UK IPTV app with Sky Sports live stream",
    ),
    (
        "iptv-pc-mac-uk",
        "iptv-pc-mac-uk-software-setup.webp",
        "How to watch IPTV on PC and Mac UK — VLC and Kodi setup guide 2026",
        "iptv-windows-11-uk-channels.webp",
        "Windows 11 PC showing IPTV UK channels in VLC player",
    ),
]

CHANNEL_PAGES = [
    (
        "sky-sports-iptv-uk",
        "sky-sports-iptv-uk-premier-league-live.webp",
        "Sky Sports IPTV UK — watch Premier League live without a Sky subscription",
        "sky-sports-channels-iptv-uk-guide.webp",
        "All Sky Sports channels available via IPTV UK Elite",
    ),
    (
        "sky-sports-iptv",
        "sky-sports-iptv-uk-premier-league-live.webp",
        "Sky Sports IPTV UK — watch Premier League live without a Sky subscription",
        "sky-sports-channels-iptv-uk-guide.webp",
        "All Sky Sports channels on IPTV UK Elite",
    ),
    (
        "sky-cinema-iptv",
        "sky-cinema-iptv-uk-movies.webp",
        "Sky Cinema on IPTV UK — latest movies without a Sky contract",
        "sky-cinema-iptv-channels-list.webp",
        "Sky Cinema IPTV UK channel list — all Sky Cinema channels",
    ),
    (
        "sky-atlantic-iptv",
        "sky-atlantic-iptv-uk-hbo-shows.webp",
        "Sky Atlantic IPTV UK — watch HBO and Sky originals live",
        "sky-atlantic-iptv-uk-channel-guide.webp",
        "Sky Atlantic IPTV UK channel guide",
    ),
    (
        "bt-sport-iptv-uk",
        "bt-sport-iptv-uk-champions-league.webp",
        "BT Sport IPTV UK — watch Champions League without a BT subscription",
        "bt-sport-iptv-uk-channels.webp",
        "BT Sport channels available on IPTV UK Elite",
    ),
    (
        "bt-sport-iptv",
        "bt-sport-iptv-uk-champions-league.webp",
        "BT Sport IPTV UK — Champions League live without BT",
        "bt-sport-iptv-uk-channels.webp",
        "BT Sport IPTV UK all channels",
    ),
    (
        "tnt-sports-iptv-uk",
        "tnt-sports-iptv-uk-live-streaming.webp",
        "TNT Sports IPTV UK — watch boxing, UFC and Champions League live",
        "tnt-sports-iptv-uk-channels-guide.webp",
        "TNT Sports IPTV UK complete channel guide",
    ),
    (
        "bbc-iptv-uk",
        "bbc-iptv-uk-channels-streaming.webp",
        "Watch BBC channels via IPTV UK — BBC One, Two, Three, Four and News",
        "bbc-iptv-uk-iplayer-alternative.webp",
        "BBC IPTV UK alternative to iPlayer — all BBC channels live",
    ),
    (
        "itv-iptv-uk",
        "itv-iptv-uk-channels-live.webp",
        "Watch ITV via IPTV UK — ITV1, ITV2, ITV3, ITV4 and ITVX live",
        "itv-iptv-uk-coronation-street-live.webp",
        "All ITV channels live via IPTV UK Elite",
    ),
    (
        "channel-4-iptv",
        "channel-4-iptv-uk-streaming-live.webp",
        "Channel 4 IPTV UK — watch C4 and E4 live without Channel 4 app",
        "channel-4-iptv-uk-all-channels.webp",
        "Channel 4, E4, More4 and Film4 on IPTV UK Elite",
    ),
]

SPORT_PAGES = [
    (
        "premier-league-iptv-uk",
        "premier-league-iptv-uk-live-matches.webp",
        "Watch Premier League IPTV UK — all 380 matches live 2025/26 season",
        "premier-league-iptv-uk-fixtures.webp",
        "Premier League IPTV UK fixtures — every match live",
    ),
    (
        "champions-league-iptv-uk",
        "champions-league-iptv-uk-live.webp",
        "Watch UEFA Champions League IPTV UK — all matches live on TNT Sports",
        "champions-league-iptv-uk-streaming.webp",
        "Champions League IPTV UK streaming — group stages to final live",
    ),
    (
        "f1-iptv-uk",
        "f1-iptv-uk-sky-sports-f1-live.webp",
        "Watch F1 IPTV UK — every Grand Prix live on Sky Sports F1 2026",
        "formula-1-iptv-uk-race-calendar.webp",
        "F1 IPTV UK — full 2026 Formula 1 race calendar coverage",
    ),
    (
        "boxing-ufc-iptv-uk",
        "boxing-ufc-iptv-uk-ppv-live.webp",
        "Watch boxing and UFC PPV via IPTV UK — all fight nights included",
        "boxing-ppv-iptv-uk-no-extra-cost.webp",
        "Boxing and UFC IPTV UK — PPV events at no extra cost",
    ),
]

COMPARISON_PAGES = [
    (
        "iptv-vs-sky-uk",
        "iptv-vs-sky-uk-price-comparison.webp",
        "IPTV vs Sky UK price comparison 2026 — save £1,200 per year switching to IPTV",
        "iptv-vs-sky-uk-channels-table.webp",
        "IPTV UK Elite vs Sky TV — channel count and price comparison table",
    ),
    (
        "iptv-vs-virgin-media-uk",
        "iptv-vs-virgin-media-uk-comparison.webp",
        "IPTV vs Virgin Media UK — cost and channel comparison 2026",
        "iptv-uk-vs-virgin-media-savings.webp",
        "Switch from Virgin Media to IPTV UK — annual savings breakdown",
    ),
    (
        "iptv-vs-now-tv-uk",
        "iptv-vs-now-tv-uk-comparison.webp",
        "IPTV UK vs NOW TV — channels, price and contract comparison 2026",
        "iptv-uk-elite-vs-now-tv-value.webp",
        "IPTV UK Elite vs NOW TV — which gives better value in 2026",
    ),
    (
        "iptv-vs-bt-tv",
        "iptv-vs-bt-tv-uk-comparison.webp",
        "IPTV vs BT TV UK — feature and price comparison guide 2026",
        "iptv-uk-vs-bt-sport-savings.webp",
        "Cancel BT TV and switch to IPTV UK Elite — cost comparison",
    ),
    (
        "iptv-vs-freeview",
        "iptv-vs-freeview-uk-comparison.webp",
        "IPTV vs Freeview UK — why IPTV offers more channels for less 2026",
        "iptv-uk-elite-vs-freeview-channels.webp",
        "IPTV UK 30,000+ channels vs Freeview 70 channels — comparison",
    ),
]

STATIC_PAGES = [
    (
        "about",
        "iptv-uk-elite-team-about.webp",
        "IPTV UK Elite team — UK's premium IPTV service provider",
    ),
    (
        "iptv-uk-guide",
        "iptv-uk-guide-setup-buying-tips.webp",
        "Complete IPTV UK guide 2026 — setup, devices and buying tips",
    ),
    (
        "pricing",
        "iptv-uk-elite-pricing-plans-2026.webp",
        "IPTV UK Elite subscription plans 2026 — monthly, quarterly and annual pricing",
    ),
    (
        "faq",
        "iptv-uk-faq-common-questions.webp",
        "Frequently asked questions about IPTV UK — complete answers guide",
    ),
    (
        "contact",
        "iptv-uk-elite-whatsapp-support.webp",
        "Contact IPTV UK Elite — 24/7 WhatsApp and email support",
    ),
]

# ── Process pages ─────────────────────────────────────────────────────────────
def process_two_image_page(page_dir, hero_img, hero_alt, sec_img, sec_alt):
    path = f"{SRC}/{page_dir}/page.tsx"
    if not os.path.exists(path):
        print(f"  ⚠ SKIP (not found): {path}")
        return

    content = read(path)
    content = add_image_import(content)
    content = inject_after_h1_block(content, hero_img, hero_alt, sec_img, sec_alt)
    write(path, content)

def process_one_image_page(page_dir, hero_img, hero_alt):
    path = f"{SRC}/{page_dir}/page.tsx"
    if not os.path.exists(path):
        print(f"  ⚠ SKIP (not found): {path}")
        return

    content = read(path)
    content = add_image_import(content)
    content = inject_after_h1_block(content, hero_img, hero_alt)
    write(path, content)

print("\n── Device pages ─────────────────────────────────────────────────────────")
for row in DEVICE_PAGES:
    process_two_image_page(*row)

print("\n── Channel pages ────────────────────────────────────────────────────────")
for row in CHANNEL_PAGES:
    process_two_image_page(*row)

print("\n── Sport pages ──────────────────────────────────────────────────────────")
for row in SPORT_PAGES:
    process_two_image_page(*row)

print("\n── Comparison pages ─────────────────────────────────────────────────────")
for row in COMPARISON_PAGES:
    process_two_image_page(*row)

print("\n── Static info pages ────────────────────────────────────────────────────")
for row in STATIC_PAGES:
    process_one_image_page(*row)

print("\n✅ Done — images injected into all static pages")

#!/usr/bin/env python3
"""Bulk-inject EXIF + IPTC + XMP metadata into images in public/images/."""

from __future__ import annotations

import argparse
from datetime import datetime, timezone
from pathlib import Path
import shutil
import subprocess
import sys
from typing import Iterable

BRAND = "IPTV UK Elite"
WEBSITE = "https://iptv-uk-ten.vercel.app"
COPYRIGHT = "© 2026 IPTV UK Elite. All rights reserved."
SOFTWARE = "IPTV UK Elite Metadata Injector"
CREATOR_TOOL = "ExifTool via scripts/bulk_metadata.py"

SUPPORTED_EXTENSIONS = {".webp", ".png", ".jpg", ".jpeg"}

DEFAULT_KEYWORDS = [
    "iptv uk",
    "best iptv uk 2026",
    "iptv subscription uk",
    "uk iptv service",
    "premium iptv united kingdom",
    "iptv uk channels",
    "sky sports iptv uk",
    "bt sport iptv",
    "bbc iptv uk",
    "4k iptv uk",
    "cheap iptv uk",
    "iptv uk no buffering",
    "reliable iptv uk",
    "iptv uk free trial",
    "iptv uk elite",
]

PATTERN_SETS = [
    {
        "patterns": ("premier-league", "epl", "football-streams"),
        "title": "Premier League IPTV UK",
        "description": "Premier League IPTV streaming in the UK with live football channels and 4K match coverage.",
        "keywords": [
            "premier league iptv uk",
            "watch premier league live iptv",
            "epl iptv streaming uk",
            "premier league 4k iptv",
            "sky sports premier league iptv",
            "live football iptv uk",
            "arsenal iptv live",
            "manchester united iptv",
            "liverpool iptv",
            "chelsea iptv",
            "premier league 2026 iptv",
            "best football iptv uk",
        ],
    },
    {
        "patterns": ("champions-league", "ucl"),
        "title": "Champions League IPTV UK",
        "description": "Champions League IPTV access in the UK with TNT Sports and BT Sport style football coverage.",
        "keywords": [
            "champions league iptv uk",
            "ucl iptv streaming",
            "watch champions league uk",
            "bt sport champions league iptv",
            "tnt sports ucl iptv",
            "champions league 4k iptv",
            "european football iptv uk",
        ],
    },
    {
        "patterns": ("firestick", "fire-tv", "xtream-codes-firestick", "downloader-firestick"),
        "title": "Firestick IPTV UK Setup",
        "description": "Firestick IPTV setup for UK users with easy install steps, streaming apps, and anti-buffering tips.",
        "keywords": [
            "firestick iptv uk",
            "install iptv firestick uk",
            "best iptv app firestick uk",
            "firestick 4k iptv uk setup",
            "tivimate firestick uk",
            "amazon fire tv iptv uk",
            "firestick iptv channels uk",
            "firestick iptv no buffering",
        ],
    },
    {
        "patterns": ("smart-tv",),
        "title": "Smart TV IPTV UK",
        "description": "Smart TV IPTV setup in the UK with Samsung and LG app installation and 4K streaming support.",
        "keywords": [
            "smart tv iptv uk",
            "samsung tv iptv uk",
            "lg tv iptv uk",
            "install iptv smart tv uk",
            "best iptv app smart tv uk",
        ],
    },
    {
        "patterns": ("sky-sports",),
        "title": "Sky Sports IPTV UK",
        "description": "Sky Sports IPTV channels in the UK for football, F1, and live sports streaming without contracts.",
        "keywords": [
            "sky sports iptv uk",
            "watch sky sports iptv",
            "sky sports channels iptv uk",
            "sky sports f1 iptv",
            "sky sports football iptv",
            "sky sports without subscription",
        ],
    },
    {
        "patterns": ("sky-cinema", "movies-series"),
        "title": "Sky Cinema IPTV UK",
        "description": "Sky Cinema IPTV content in the UK with movie channels, VOD, and on-demand film streaming.",
        "keywords": [
            "sky cinema iptv uk",
            "sky movies iptv uk",
            "sky cinema channels iptv uk",
            "sky cinema on demand iptv",
        ],
    },
    {
        "patterns": ("sky-atlantic", "hbo"),
        "title": "Sky Atlantic IPTV UK",
        "description": "Sky Atlantic IPTV streaming for UK viewers with premium drama and HBO style content.",
        "keywords": [
            "sky atlantic iptv uk",
            "hbo iptv uk",
            "sky atlantic shows iptv",
            "premium tv shows iptv uk",
        ],
    },
    {
        "patterns": ("bt-sport", "tnt-sports"),
        "title": "BT Sport and TNT Sports IPTV UK",
        "description": "BT Sport and TNT Sports IPTV channels for UK sports fans with Champions League and live events.",
        "keywords": [
            "bt sport iptv uk",
            "tnt sports iptv uk",
            "bt sport champions league iptv",
            "tnt sports streaming iptv",
        ],
    },
    {
        "patterns": ("bbc",),
        "title": "BBC IPTV UK",
        "description": "BBC IPTV access in the UK with BBC One, BBC News, and top UK channels in HD.",
        "keywords": [
            "bbc iptv uk",
            "bbc channels iptv",
            "bbc one iptv live",
            "bbc iplayer alternative iptv",
            "bbc news iptv live",
        ],
    },
    {
        "patterns": ("itv",),
        "title": "ITV IPTV UK",
        "description": "ITV IPTV channels for UK audiences with ITV live, sports, and entertainment streaming.",
        "keywords": [
            "itv iptv uk",
            "itv channels iptv live",
            "itvx alternative iptv",
            "itv sport iptv uk",
        ],
    },
    {
        "patterns": ("channel-4", "film4", "e4"),
        "title": "Channel 4 IPTV UK",
        "description": "Channel 4 IPTV streaming in the UK with Film4, E4, and popular catch-up alternatives.",
        "keywords": [
            "channel 4 iptv uk",
            "film4 iptv uk",
            "e4 iptv live",
            "channel 4 streaming iptv uk",
        ],
    },
    {
        "patterns": ("f1", "formula-1"),
        "title": "F1 IPTV UK",
        "description": "F1 IPTV coverage in the UK with Formula 1 live streams and Sky Sports F1 channels.",
        "keywords": [
            "f1 iptv uk",
            "formula 1 iptv live",
            "sky sports f1 iptv",
            "watch f1 live iptv uk",
        ],
    },
    {
        "patterns": ("boxing", "ufc", "ppv"),
        "title": "Boxing and UFC IPTV UK",
        "description": "Watch boxing and UFC with IPTV in the UK including PPV fight nights and MMA events.",
        "keywords": [
            "boxing iptv uk",
            "ufc iptv uk",
            "ppv iptv uk",
            "watch boxing live iptv",
            "mma iptv uk",
        ],
    },
    {
        "patterns": ("vpn",),
        "title": "VPN for IPTV UK",
        "description": "VPN setup for IPTV UK streaming with better privacy, speed, and stable video playback.",
        "keywords": [
            "vpn iptv uk",
            "best vpn iptv uk 2026",
            "vpn for iptv streaming",
            "nordvpn iptv uk",
        ],
    },
    {
        "patterns": ("iphone", "ipad", "ios"),
        "title": "iPhone and iPad IPTV UK",
        "description": "IPTV on iPhone and iPad in the UK with iOS apps, setup steps, and streaming guidance.",
        "keywords": [
            "iptv iphone uk",
            "iptv ipad uk",
            "ios iptv app uk",
            "best iptv app iphone uk",
        ],
    },
    {
        "patterns": ("android",),
        "title": "Android IPTV UK",
        "description": "Android IPTV setup in the UK for TV boxes and mobile devices with high-quality live channels.",
        "keywords": [
            "iptv android box uk",
            "android iptv uk",
            "best android box iptv uk",
            "tivimate android uk",
        ],
    },
    {
        "patterns": ("mag-box", "mag-322", "mag-524", "zgemma"),
        "title": "MAG Box IPTV UK",
        "description": "MAG box IPTV setup guide for UK users, including portal configuration and stable streaming tips.",
        "keywords": [
            "mag box iptv uk",
            "mag box setup iptv",
            "mag 322 iptv uk",
            "mag 524 iptv uk",
        ],
    },
    {
        "patterns": ("samsung",),
        "title": "Samsung IPTV UK",
        "description": "Samsung TV IPTV setup in the UK with Tizen app options and fast activation workflows.",
        "keywords": [
            "samsung tv iptv uk",
            "install iptv samsung tv",
            "samsung tizen iptv app",
        ],
    },
    {
        "patterns": ("lg", "webos"),
        "title": "LG IPTV UK",
        "description": "LG TV IPTV setup for UK users with webOS app installation and channel optimization tips.",
        "keywords": [
            "lg tv iptv uk",
            "install iptv lg tv",
            "lg webos iptv app",
        ],
    },
    {
        "patterns": ("world-cup",),
        "title": "World Cup IPTV UK",
        "description": "World Cup IPTV streaming for UK viewers with live matches and 2026 tournament coverage.",
        "keywords": [
            "world cup 2026 iptv uk",
            "fifa world cup iptv",
            "england world cup iptv",
        ],
    },
    {
        "patterns": ("virgin-media",),
        "title": "IPTV vs Virgin Media UK",
        "description": "Compare IPTV and Virgin Media in the UK for channels, pricing, and streaming flexibility.",
        "keywords": [
            "iptv vs virgin media uk",
            "virgin media alternative iptv",
            "cancel virgin media iptv",
        ],
    },
    {
        "patterns": ("freeview",),
        "title": "IPTV vs Freeview UK",
        "description": "IPTV vs Freeview comparison for UK homes looking to upgrade channels and sports content.",
        "keywords": [
            "iptv vs freeview uk",
            "freeview alternative iptv",
            "upgrade freeview to iptv",
        ],
    },
    {
        "patterns": ("now-tv",),
        "title": "IPTV vs NOW TV UK",
        "description": "IPTV vs NOW TV in the UK with pricing comparisons, channels, and value-focused alternatives.",
        "keywords": [
            "iptv vs now tv uk",
            "now tv alternative iptv",
            "iptv cheaper than now tv",
        ],
    },
]

CITY_NAMES = (
    "london",
    "manchester",
    "birmingham",
    "leeds",
    "glasgow",
    "liverpool",
    "bristol",
    "sheffield",
    "newcastle",
    "nottingham",
    "leicester",
    "coventry",
    "cardiff",
    "edinburgh",
    "belfast",
)

FALLBACK_KEYWORDS = [
    "uk tv streaming",
    "live channels uk",
    "iptv service 2026",
    "iptv sports and movies uk",
    "anti freeze iptv uk",
    "stable iptv uk",
    "hd and 4k channels uk",
    "iptv support uk",
    "premium uk entertainment channels",
    "stream uk channels abroad",
]



def dedupe(values: Iterable[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for value in values:
        keyword = value.strip().lower()
        if not keyword or keyword in seen:
            continue
        seen.add(keyword)
        result.append(keyword)
    return result


def to_title_case(slug: str) -> str:
    return " ".join(part.capitalize() for part in slug.replace("_", "-").split("-"))


def build_metadata_for_file(image_path: Path) -> dict[str, str | list[str]]:
    stem = image_path.stem.lower()

    matched_topics: list[dict[str, object]] = []
    for topic in PATTERN_SETS:
        if any(pattern in stem for pattern in topic["patterns"]):
            matched_topics.append(topic)

    city = next((city for city in CITY_NAMES if city in stem), None)

    if matched_topics:
        title = str(matched_topics[0]["title"])
        description = str(matched_topics[0]["description"])
    else:
        pretty_name = to_title_case(stem)
        title = f"{pretty_name} | IPTV UK Elite"
        description = (
            f"{pretty_name} image for IPTV UK users, featuring premium channels, sports, movies, and 4K streaming coverage."
        )

    all_keywords = list(DEFAULT_KEYWORDS)
    for topic in matched_topics:
        all_keywords.extend(topic["keywords"])

    if city:
        city_label = city.replace("-", " ")
        all_keywords.extend(
            [
                f"iptv {city_label}",
                f"iptv service {city_label}",
                f"best iptv {city_label} 2026",
            ]
        )

    all_keywords.extend(FALLBACK_KEYWORDS)
    keywords = dedupe(all_keywords)

    if len(keywords) < 20:
        raise RuntimeError(f"Keyword generation failed for {image_path}: fewer than 20 keywords")
    if len(keywords) > 30:
        keywords = keywords[:30]

    object_name = to_title_case(stem)

    return {
        "title": title,
        "description": description,
        "object_name": object_name,
        "keywords": keywords,
    }


def run_exiftool(image_path: Path, metadata: dict[str, str | list[str]], dry_run: bool) -> tuple[bool, str | None]:
    timestamp = datetime.now(timezone.utc).strftime("%Y:%m:%d %H:%M:%S")
    keywords = metadata["keywords"]

    cmd = [
        "exiftool",
        "-overwrite_original",
        f"-EXIF:ImageDescription={metadata['description']}",
        f"-EXIF:Artist={BRAND}",
        f"-EXIF:Copyright={COPYRIGHT}",
        f"-EXIF:Software={SOFTWARE}",
        f"-EXIF:DateTimeOriginal={timestamp}",
        f"-IPTC:ObjectName={metadata['object_name']}",
        f"-IPTC:Caption-Abstract={metadata['description']}",
        f"-IPTC:Credit={BRAND}",
        f"-IPTC:Source={WEBSITE}",
        f"-IPTC:CopyrightNotice={COPYRIGHT}",
        f"-XMP:Title={metadata['title']}",
        f"-XMP:Description={metadata['description']}",
        f"-XMP:Creator={BRAND}",
        f"-XMP:Rights={COPYRIGHT}",
        f"-XMP:Subject={','.join(keywords)}",
        f"-XMP:WebStatement={WEBSITE}",
        f"-XMP:CreatorTool={CREATOR_TOOL}",
        "-XMP:Marked=True",
    ]

    for keyword in keywords:
        cmd.append(f"-IPTC:Keywords={keyword}")

    cmd.append(str(image_path))

    if dry_run:
        return True, None

    process = subprocess.run(cmd, capture_output=True, text=True)
    if process.returncode == 0:
        return True, None

    error_output = process.stderr.strip() or process.stdout.strip() or "unknown exiftool failure"
    return False, error_output


def find_images(images_dir: Path) -> list[Path]:
    return sorted(
        path
        for path in images_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in SUPPORTED_EXTENSIONS
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Inject EXIF/IPTC/XMP metadata into public/images assets.")
    parser.add_argument(
        "--images-dir",
        type=Path,
        default=Path(__file__).resolve().parents[1] / "public" / "images",
        help="Images directory to scan recursively (default: <repo>/public/images)",
    )
    parser.add_argument("--dry-run", action="store_true", help="Print planned operations without writing metadata")
    args = parser.parse_args()

    if shutil.which("exiftool") is None and not args.dry_run:
        print("ERROR: exiftool not found. Install with: sudo apt install -y libimage-exiftool-perl", file=sys.stderr)
        return 1

    images_dir = args.images_dir.resolve()
    if not images_dir.exists() or not images_dir.is_dir():
        print(f"ERROR: images directory not found: {images_dir}", file=sys.stderr)
        return 1

    images = find_images(images_dir)
    if not images:
        print(f"No supported image files found in {images_dir}")
        return 0

    print(f"Found {len(images)} image(s) in {images_dir}")
    print(f"Mode: {'DRY-RUN' if args.dry_run else 'WRITE'}")

    success_count = 0
    failure_count = 0

    for index, image_path in enumerate(images, start=1):
        relative = image_path.relative_to(images_dir.parent.parent)
        try:
            metadata = build_metadata_for_file(image_path)
            keywords_count = len(metadata["keywords"])
            ok, error = run_exiftool(image_path, metadata, args.dry_run)
            if ok:
                success_count += 1
                print(f"[{index}/{len(images)}] {relative} | keywords={keywords_count} | SUCCESS")
            else:
                failure_count += 1
                print(f"[{index}/{len(images)}] {relative} | keywords={keywords_count} | FAILED: {error}")
        except Exception as exc:  # noqa: BLE001
            failure_count += 1
            print(f"[{index}/{len(images)}] {relative} | FAILED: {exc}")

    print(f"\nCompleted. success={success_count} failure={failure_count} total={len(images)}")
    return 1 if failure_count else 0


if __name__ == "__main__":
    raise SystemExit(main())

#!/usr/bin/env python3
"""Lightweight SEO QA audit for this repo.

Checks:
- Every src/app/**/page.tsx has metadata, canonical, og:image, and JSON-LD.
- Approximate content-word floor for indexable pages.
- Dynamic slugs present in blog data + sitemap source file.
- App Router metadata routes exist (`src/app/sitemap.ts`, `src/app/robots.ts`).
- Reports warnings/fails with actionable output.
"""

from __future__ import annotations

import pathlib
import re
import sys
from dataclasses import dataclass

ROOT = pathlib.Path(__file__).resolve().parents[1]
APP = ROOT / "src" / "app"
BLOG_FILE = APP / "blog" / "[slug]" / "page.tsx"
SLUG_FILE = ROOT / "dynamic_slugs.txt"
SITEMAP_FILE = APP / "sitemap.ts"
ROBOTS_FILE = APP / "robots.ts"
LAYOUT_FILE = APP / "layout.tsx"


@dataclass
class CheckResult:
    kind: str  # PASS / WARN / FAIL
    message: str


def iter_pages() -> list[pathlib.Path]:
    return sorted(APP.rglob("page.tsx"))


def page_word_count(text: str) -> int:
    stripped = re.sub(r"`[^`]*`", "", text, flags=re.S)
    return len(re.findall(r"[A-Za-z]{3,}", stripped))


def is_legal_page(path: pathlib.Path) -> bool:
    p = str(path.as_posix())
    return any(x in p for x in ["/privacy/", "/terms/", "/refund/", "/dmca/"])


def read_blog_slugs_from_data() -> set[str]:
    text = BLOG_FILE.read_text(encoding="utf-8")
    return set(re.findall(r"\n\s*'([a-z0-9-]+)'\s*:\s*{", text))


def read_dynamic_slugs() -> set[str]:
    return {line.strip() for line in SLUG_FILE.read_text(encoding="utf-8").splitlines() if line.strip()}


def read_sitemap_static_routes() -> set[str]:
    text = SITEMAP_FILE.read_text(encoding="utf-8")
    m = re.search(r"const staticRoutes = \[(.*?)\];", text, flags=re.S)
    if not m:
        return set()
    return {x.strip("/") for x in re.findall(r"'([^']*)'", m.group(1))}


def main() -> int:
    results: list[CheckResult] = []

    if not SITEMAP_FILE.exists():
        results.append(CheckResult("FAIL", "Missing required file: src/app/sitemap.ts"))
    else:
        results.append(CheckResult("PASS", "Found required file: src/app/sitemap.ts"))

    if not ROBOTS_FILE.exists():
        results.append(CheckResult("FAIL", "Missing required file: src/app/robots.ts"))
    else:
        results.append(CheckResult("PASS", "Found required file: src/app/robots.ts"))

    layout_text = LAYOUT_FILE.read_text(encoding="utf-8") if LAYOUT_FILE.exists() else ""
    has_global_og_image = ("openGraph:" in layout_text and "images" in layout_text) or ("og:image" in layout_text)

    pages = iter_pages()
    missing_meta = []
    missing_canonical = []
    missing_og_image = []
    page_og_fallback_only = []
    missing_jsonld = []
    thin_pages = []

    for page in pages:
        text = page.read_text(encoding="utf-8")
        has_meta = ("export const metadata" in text) or ("generateMetadata" in text)
        has_canonical = ("canonical:" in text) or ("alternates:" in text)
        has_og_image = ("openGraph:" in text and "images" in text) or ("og:image" in text)
        has_jsonld = "application/ld+json" in text
        words = page_word_count(text)

        if not has_meta:
            missing_meta.append(page)
        if not has_canonical:
            missing_canonical.append(page)
        if not has_og_image and not has_global_og_image:
            missing_og_image.append(page)
        if not has_og_image and has_global_og_image:
            page_og_fallback_only.append(page)
        if not has_jsonld:
            missing_jsonld.append(page)

        if words < 350 and not is_legal_page(page):
            thin_pages.append((page, words))

    if missing_meta:
        results.append(CheckResult("FAIL", f"Pages missing metadata: {len(missing_meta)}"))
        for p in missing_meta:
            results.append(CheckResult("FAIL", f"  - {p.relative_to(ROOT)}"))
    else:
        results.append(CheckResult("PASS", f"All pages have metadata ({len(pages)} pages)."))

    if missing_jsonld:
        results.append(CheckResult("FAIL", f"Pages missing JSON-LD: {len(missing_jsonld)}"))
        for p in missing_jsonld:
            results.append(CheckResult("FAIL", f"  - {p.relative_to(ROOT)}"))
    else:
        results.append(CheckResult("PASS", "All pages include JSON-LD blocks."))

    if missing_canonical:
        results.append(CheckResult("FAIL", f"Pages missing canonical/alternates metadata: {len(missing_canonical)}"))
        for p in missing_canonical:
            results.append(CheckResult("FAIL", f"  - {p.relative_to(ROOT)}"))
    else:
        results.append(CheckResult("PASS", "All pages include canonical/alternates metadata."))

    if missing_og_image:
        results.append(CheckResult("FAIL", f"Pages missing og:image coverage: {len(missing_og_image)}"))
        for p in missing_og_image:
            results.append(CheckResult("FAIL", f"  - {p.relative_to(ROOT)}"))
    else:
        results.append(CheckResult("PASS", "All pages have og:image coverage (page-level or global layout)."))

    if page_og_fallback_only:
        results.append(CheckResult("WARN", f"Pages using only global og:image fallback: {len(page_og_fallback_only)}"))
        for p in page_og_fallback_only[:20]:
            results.append(CheckResult("WARN", f"  - {p.relative_to(ROOT)}"))
    else:
        results.append(CheckResult("PASS", "All pages define page-level og:image metadata."))

    if thin_pages:
        results.append(CheckResult("WARN", f"Low-content pages (<350 words, excluding legal): {len(thin_pages)}"))
        for p, w in sorted(thin_pages, key=lambda x: x[1])[:12]:
            results.append(CheckResult("WARN", f"  - {p.relative_to(ROOT)} ({w} words approx)"))
    else:
        results.append(CheckResult("PASS", "No low-content pages detected by heuristic."))

    blog_slugs = read_blog_slugs_from_data()
    dynamic_slugs = read_dynamic_slugs()
    missing_in_data = sorted(dynamic_slugs - blog_slugs)
    missing_in_dynamic = sorted(blog_slugs - dynamic_slugs)

    if missing_in_data:
        results.append(CheckResult("FAIL", f"dynamic_slugs.txt entries missing in blog data: {len(missing_in_data)}"))
        for s in missing_in_data[:20]:
            results.append(CheckResult("FAIL", f"  - {s}"))
    else:
        results.append(CheckResult("PASS", "All dynamic_slugs entries exist in blog data."))

    if missing_in_dynamic:
        results.append(CheckResult("WARN", f"Blog data entries missing in dynamic_slugs.txt: {len(missing_in_dynamic)}"))
        for s in missing_in_dynamic[:20]:
            results.append(CheckResult("WARN", f"  - {s}"))
    else:
        results.append(CheckResult("PASS", "All blog data entries exist in dynamic_slugs.txt."))

    sitemap_routes = read_sitemap_static_routes()
    fs_routes = set()
    for page in pages:
        if "blog/[slug]/page.tsx" in str(page):
            continue
        rel = page.relative_to(APP)
        route = "/".join(rel.parts[:-1]).strip("/")
        fs_routes.add(route)

    missing_in_sitemap = sorted([r for r in fs_routes if r not in sitemap_routes])
    if missing_in_sitemap:
        results.append(CheckResult("WARN", f"Filesystem routes missing from sitemap staticRoutes: {len(missing_in_sitemap)}"))
        for r in missing_in_sitemap:
            results.append(CheckResult("WARN", f"  - /{r}/" if r else "  - /"))
    else:
        results.append(CheckResult("PASS", "All filesystem static routes appear in sitemap staticRoutes."))

    fail_count = sum(1 for r in results if r.kind == "FAIL")

    for r in results:
        prefix = {"PASS": "✅", "WARN": "⚠️", "FAIL": "❌"}[r.kind]
        print(f"{prefix} {r.message}")

    if fail_count:
        print(f"\n❌ SEO audit failed with {fail_count} blocking issue(s).")
        return 1

    print("\n✅ SEO audit completed with no blocking issues.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

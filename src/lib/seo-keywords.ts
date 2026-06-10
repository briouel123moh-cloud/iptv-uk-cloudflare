export const PRIMARY_KEYWORD = 'iptv uk' as const;

export const CORE_BUYING_KEYWORDS = [
  PRIMARY_KEYWORD,
  'buy iptv uk',
  'best iptv uk',
  'iptv subscription uk',
  'iptv uk price',
  'iptv uk free trial',
] as const;

export const LONG_TAIL_IPTV_UK_KEYWORDS = [
  'iptv uk firestick',
  'iptv uk smart tv',
  'iptv uk sky sports',
  'iptv uk premier league',
  'iptv uk no buffering',
  'iptv uk 4k channels',
  'iptv uk monthly subscription',
  'iptv uk whatsapp support',
] as const;

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  Legal: ['is iptv legal uk', 'iptv uk law', 'iptv legal guide uk'],
  Troubleshooting: ['iptv not working', 'iptv error codes', 'fix iptv buffering uk', 'iptv uk no buffering'],
  Tutorials: ['how to setup iptv uk', 'iptv firestick setup uk', 'smart tv iptv setup', 'iptv uk setup guide'],
  Technical: ['best internet speed for iptv', 'iptv uk no buffering', 'iptv apps uk', '4k iptv uk'],
  Reviews: ['best iptv providers uk', 'iptv reviews uk', 'buy iptv uk', 'best iptv uk 2026'],
  Pricing: ['iptv uk price', 'cheap iptv uk', 'iptv subscription uk monthly', 'iptv uk deals'],
  Sports: ['iptv premier league uk', 'iptv sky sports', 'iptv football streams uk', 'sports iptv uk'],
  Guides: ['iptv uk guide', 'what is iptv uk', 'iptv for beginners uk', 'iptv uk explained'],
};

export function getCategoryKeywords(category: string): string[] {
  return CATEGORY_KEYWORDS[category] ?? [];
}

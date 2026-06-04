export const CORE_BUYING_KEYWORDS = [
  'iptv uk',
  'buy iptv uk',
  'best iptv uk',
  'iptv subscription uk',
  'iptv uk price',
  'iptv free trial uk',
] as const;

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  Legal: ['is iptv legal uk', 'iptv uk law', 'iptv legal guide uk'],
  Troubleshooting: ['iptv not working', 'iptv error codes', 'fix iptv buffering uk'],
  Tutorials: ['how to setup iptv uk', 'iptv firestick setup uk', 'smart tv iptv setup'],
  Technical: ['best internet speed for iptv', 'iptv uk no buffering', 'iptv apps uk'],
  Reviews: ['best iptv providers uk', 'iptv reviews uk', 'buy iptv uk'],
  Pricing: ['iptv uk price', 'cheap iptv uk', 'iptv subscription uk monthly'],
  Sports: ['iptv premier league uk', 'iptv sky sports', 'iptv football streams uk'],
  Guides: ['iptv uk guide', 'what is iptv uk', 'iptv for beginners uk'],
};

export function getCategoryKeywords(category: string): string[] {
  return CATEGORY_KEYWORDS[category] ?? [];
}

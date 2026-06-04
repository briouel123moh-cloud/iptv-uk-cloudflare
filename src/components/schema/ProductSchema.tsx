// Reusable Product + Merchant schema component
// Required for Google Merchant Center listings

import { MERCHANT_RETURN_POLICY, OFFER_SHIPPING_DETAILS, PRICE_VALID_UNTIL } from '@/lib/schema-constants';

interface ProductSchemaProps {
  name: string
  description: string
  image: string // REQUIRED — this is what was missing and breaking merchant listings
  price: string
  priceCurrency?: string
  availability?: string
  url: string
  sku?: string
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency = 'GBP',
  availability = 'https://schema.org/InStock',
  url,
  sku,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image: image.startsWith('http') ? image : `https://www.iptvuk-elite.com${image}`,
    brand: {
      '@type': 'Brand',
      name: 'IPTV UK Elite',
    },
    sku: sku || name.toLowerCase().replace(/\s+/g, '-'),
    offers: {
      '@type': 'Offer',
      url: url.startsWith('http') ? url : `https://www.iptvuk-elite.com${url}`,
      priceCurrency,
      price,
      availability,
      priceValidUntil: PRICE_VALID_UNTIL,
      seller: {
        '@type': 'Organization',
        name: 'IPTV UK Elite',
      },
      hasMerchantReturnPolicy: MERCHANT_RETURN_POLICY,
      shippingDetails: OFFER_SHIPPING_DETAILS,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

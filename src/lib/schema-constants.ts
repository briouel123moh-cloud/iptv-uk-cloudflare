// Shared schema constants for merchant listings
// These are required by Google Merchant Center for valid Product listings

export const MERCHANT_RETURN_POLICY = {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'GB',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 30,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
} as const;

export const OFFER_SHIPPING_DETAILS = {
    '@type': 'OfferShippingDetails',
    shippingRate: {
        '@type': 'MonetaryAmount',
        value: '0',
        currency: 'GBP',
    },
    shippingDestination: {
        '@type': 'DefinedRegion',
        addressCountry: 'GB',
    },
    deliveryTime: {
        '@type': 'ShippingDeliveryTime',
        handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
        },
        transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 0,
            unitCode: 'DAY',
        },
    },
} as const;

export const PRODUCT_IMAGE = 'https://iptv-uk-iptv.co.uk/og-image.webp';
export const PRICE_VALID_UNTIL = '2027-12-31';

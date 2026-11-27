/**
 * Central configuration for Siri Fashion Hub.
 * Update logo, banner, WhatsApp number, email, and social links here.
 */
export const siteConfig = {
  brand: {
    name: 'Siri Fashion Hub',
    tagline: "Women's Special Boutique",
    description:
      "Bespoke women's tailoring, custom blouse designs, saree transformations, and timeless boutique fashion crafted with love.",
    logo: '/assets/siri-fashion-hub-logo.png',
    banner: '/assets/siri-fashion-hub-banner.png',
    copyright: "© 2026 Siri Fashion Hub — Women's Special Boutique. All rights reserved.",
  },
  contact: {
    // Replace with actual WhatsApp number (country code + number, digits only)
    whatsappNumber: '919742020330',
    whatsappDisplay: '+91 97420 20330',
    whatsappMessage: "Hello Siri Fashion Hub! I'd like to enquire about a custom outfit.",
    // Replace with actual boutique email address
    email: 'sirifashion62@gmail.com',
    // Replace with actual boutique address, phone, and hours
    location: 'Devanna nilaya, Kogilu Main Road, Agrahara Layout, Yelahanka, Bengaluru, Karnataka 560064',
    mapsUrl: 'https://maps.app.goo.gl/iXsActefkk39cT2y8',
    phoneDisplay: '+91 97420 20330',
    openingHours: 'Mon – Sat: 10:30 AM – 7:30 PM',
  },
  social: {
    instagramHandle: '@sirifashionhub',
    instagramUrl: 'https://www.instagram.com/siri._.fashionhub/',
  },
};

export function getWhatsAppUrl(customMessage = siteConfig.contact.whatsappMessage) {
  const base = `https://wa.me/${siteConfig.contact.whatsappNumber}`;
  if (!customMessage) return base;
  return `${base}?text=${encodeURIComponent(customMessage)}`;
}

export function getEmailUrl() {
  return `mailto:${siteConfig.contact.email}`;
}


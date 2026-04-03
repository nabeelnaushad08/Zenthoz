import { SITE_URL, EMAIL, PHONE_CALL } from "@/lib/utils";

// ── LocalBusiness schema (injected in root layout) ──────────────────────────
export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "MarketingAgency"],
    "@id": `${SITE_URL}/#organization`,
    name: "Zenthoz UAE",
    alternateName: "Zenthoz Digital UAE",
    description:
      "Zenthoz UAE helps new UAE businesses launch online and get their first clients in 30 days. We provide professional website design, social media management, SEO, Google Ads, and complete digital growth systems for businesses in Dubai, Abu Dhabi and Sharjah.",
    url: SITE_URL,
    telephone: `+${PHONE_CALL}`,
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Abu Dhabi" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "AED 1,999 – AED 9,999+",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer, Credit Card",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services UAE",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Social Media Management UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management UAE" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Growth Engine UAE" } },
      ],
    },
    sameAs: [
      "https://www.instagram.com/zenthoz",
      "https://www.facebook.com/zenthoz",
      "https://www.linkedin.com/company/zenthoz",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── WebSite schema with SearchAction ────────────────────────────────────────
export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Zenthoz UAE",
    description: "Digital marketing and website design for UAE businesses",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── BreadcrumbList schema ────────────────────────────────────────────────────
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── FAQPage schema ───────────────────────────────────────────────────────────
export function FAQSchema({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Service schema ───────────────────────────────────────────────────────────
export function ServiceSchema({
  name,
  description,
  url,
  priceRange,
}: {
  name: string;
  description: string;
  url: string;
  priceRange?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "United Arab Emirates" },
    ...(priceRange && { offers: { "@type": "Offer", priceRange, priceCurrency: "AED" } }),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

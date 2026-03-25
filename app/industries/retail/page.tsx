import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Retail Shops UAE | Zenthoz",
  description: "Grow your retail business in UAE. E-commerce website, social media, and Google presence that brings customers to your shop and online store.",
};

export default function RetailPage() {
  return (
    <IndustryPageTemplate
      emoji="🛍️"
      industry="Retail"
      headline="Get More Customers to Your Retail Shop in UAE"
      subheadline="Online presence, social media, and local marketing that drives foot traffic and online sales for UAE retail businesses."
      challenges={[
        "Large malls and e-commerce giants are taking customers away from local retail",
        "No Instagram presence means missing out on UAE's primary product discovery platform",
        "Customers can't find your shop on Google Maps or Google Search",
        "No online ordering or enquiry system — losing sales outside business hours",
        "Difficulty competing with larger brands on social media",
        "No way to communicate promotions and new arrivals to repeat customers",
      ]}
      solutions={[
        { title: "E-Commerce Ready Website", desc: "Online store or product catalogue so customers can browse and order anytime." },
        { title: "Instagram & TikTok Strategy", desc: "Product showcases, reels, and stories that drive sales through social media." },
        { title: "Google Shopping & Local SEO", desc: "Appear when UAE customers search for products you sell." },
        { title: "WhatsApp Commerce Setup", desc: "WhatsApp Business catalog for easy product browsing and ordering." },
        { title: "Google Maps Optimization", desc: "Be visible when people search for shops near them in your area." },
        { title: "Loyalty & Retention Campaigns", desc: "Social media and email strategies to bring back repeat customers." },
      ]}
      caseStudy={{
        title: "Gulf Style Boutique, Dubai",
        before: "Physical shop only. Relied on mall foot traffic. No online presence or social media.",
        after: "Instagram: 2,800 followers in 90 days. Online orders: 40-50/month. 30% revenue increase.",
        strategy: "Instagram + TikTok content strategy + Google My Business + WhatsApp catalogue setup.",
        result: "30% revenue increase within 3 months",
      }}
      keywords={[
        "retail shop Dubai", "online shopping UAE", "boutique Dubai", "fashion store UAE",
        "buy online Dubai", "retail store Abu Dhabi", "shopping UAE", "store near me Dubai",
        "best shop Dubai", "UAE online store", "Sharjah retail shop",
      ]}
      testimonial={{
        name: "Mariam Al-Zaabi",
        business: "Gulf Style Boutique, Dubai Mall Area",
        quote: "Zenthoz transformed our business. We now have customers finding us on Instagram and Google every day. Our online sales now account for 35% of our revenue.",
      }}
    />
  );
}

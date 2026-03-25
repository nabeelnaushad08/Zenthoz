import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Cleaning Companies UAE | Zenthoz",
  description: "Get more cleaning contracts in UAE. Google Ads, SEO, and local marketing for cleaning services in Dubai, Abu Dhabi, and Sharjah.",
};

export default function CleaningPage() {
  return (
    <IndustryPageTemplate
      emoji="🧹"
      industry="Cleaning"
      headline="Get More Cleaning Contracts in UAE"
      subheadline="Digital marketing that fills your cleaning schedule with regular residential, commercial, and villa cleaning contracts across UAE."
      challenges={[
        "The cleaning market in UAE is competitive — hard to stand out without a strong online presence",
        "Customers hire cleaning companies they find on Google — invisibility means lost contracts",
        "No website means no credibility — clients hesitate to trust new cleaning companies",
        "Difficulty getting recurring monthly contracts without a systematic lead approach",
        "Relying only on flyers and referrals limits your growth potential",
        "Missing out on high-value commercial and villa cleaning contracts",
      ]}
      solutions={[
        { title: "Cleaning Service Website", desc: "Professional website showing your services, pricing, and booking options." },
        { title: "Google Ads for Cleaning Keywords", desc: "Target 'cleaning company Dubai' and 'maid service UAE' searches with paid ads." },
        { title: "Google My Business Optimization", desc: "Appear in local searches for cleaning services in your target areas." },
        { title: "Before/After Content Strategy", desc: "Instagram content showcasing results that builds trust and attracts clients." },
        { title: "Online Booking System", desc: "Let customers book cleaning appointments directly from your website." },
        { title: "Recurring Contract Campaigns", desc: "Marketing strategy specifically targeting monthly contract clients." },
      ]}
      caseStudy={{
        title: "Shine Clean Services, Dubai",
        before: "5 clients from referrals. Inconsistent income. Struggling to fill schedule each week.",
        after: "28 regular monthly clients in 60 days. Fully booked team within 2 months of launch.",
        strategy: "Google Ads + SEO + Instagram before/after content + online booking system.",
        result: "Fully booked in 60 days — from 5 to 28 regular clients",
      }}
      keywords={[
        "cleaning company Dubai", "maid service UAE", "home cleaning Abu Dhabi",
        "villa cleaning Dubai", "office cleaning UAE", "deep cleaning Dubai",
        "cleaning service near me", "residential cleaning Sharjah", "commercial cleaning UAE",
        "move-in cleaning Dubai", "regular maid service Dubai",
      ]}
      testimonial={{
        name: "Fatima Hassan",
        business: "Clean Pro Services, Dubai",
        quote: "I just got my trade license and had zero online presence. Within 2 months of working with Zenthoz, I have a full team that's completely booked. Best investment I made.",
      }}
    />
  );
}

import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Construction Companies UAE | Zenthoz",
  description: "Get more construction projects in UAE. Professional website, Google Ads, and SEO for construction companies in Dubai, Abu Dhabi, and across UAE.",
};

export default function ConstructionPage() {
  return (
    <IndustryPageTemplate
      emoji="🏗️"
      industry="Construction"
      headline="Get More Construction Projects in UAE"
      subheadline="Professional digital presence that builds trust and brings you high-value construction contracts in Dubai, Abu Dhabi, and across UAE."
      challenges={[
        "Most construction companies rely on referrals — when they dry up, so does business",
        "Competitors with websites and Google presence win projects you never even hear about",
        "No online presence means developers and property owners don't consider you",
        "Difficulty showcasing completed projects to attract higher-value clients",
        "Missing from Google Maps searches for 'construction company Dubai'",
        "No lead system — every project search starts from scratch",
      ]}
      solutions={[
        { title: "Project Portfolio Website", desc: "Showcase your completed projects with stunning photo galleries that impress developers and property owners." },
        { title: "Google My Business for Contractors", desc: "Appear in 'construction company near me' searches across UAE cities." },
        { title: "SEO for Construction Keywords", desc: "Rank for high-value terms like 'villa construction Dubai' and 'fit-out company Abu Dhabi'." },
        { title: "Google Ads for Projects", desc: "Target property developers, real estate companies, and individuals searching for contractors." },
        { title: "WhatsApp Lead System", desc: "Direct WhatsApp button for quick quote requests — the preferred contact method in UAE." },
        { title: "Trust & Credibility Building", desc: "Professional brand identity that positions you as a premium contractor in UAE." },
      ]}
      caseStudy={{
        title: "Dubai Contracting LLC",
        before: "Relied on word-of-mouth only. 2-3 small projects per month. No online presence.",
        after: "12-15 project inquiries per month via Google. Secured 3 major villa projects in 60 days.",
        strategy: "Google My Business optimization + targeted Google Ads for 'construction company Dubai' + project portfolio website.",
        result: "6x increase in project inquiries in 60 days",
      }}
      keywords={[
        "construction company Dubai", "villa construction UAE", "building contractor Abu Dhabi",
        "fit-out company Dubai", "renovation contractors UAE", "civil construction Sharjah",
        "construction company near me UAE", "building company Dubai", "interior fit-out Dubai",
        "construction contractor UAE", "commercial construction Dubai",
      ]}
      testimonial={{
        name: "Omar Al-Farsi",
        business: "Al-Farsi Contracting LLC, Dubai",
        quote: "Within 3 weeks of launching, we were getting 5-8 project inquiry calls per day from Google. Zenthoz delivered everything they promised — and faster than expected.",
      }}
    />
  );
}

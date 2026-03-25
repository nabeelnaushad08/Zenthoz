import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for HVAC Companies UAE | Zenthoz",
  description: "Get more AC repair and HVAC installation jobs in UAE. Google Ads, SEO, and local marketing for HVAC businesses in Dubai and Abu Dhabi.",
};

export default function HVACPage() {
  return (
    <IndustryPageTemplate
      emoji="❄️"
      industry="HVAC"
      headline="Get More AC & HVAC Jobs in UAE"
      subheadline="Targeted digital marketing that puts your HVAC business in front of homeowners and businesses when they need you most."
      challenges={[
        "HVAC customers search Google in an emergency — if you're not visible, you lose the job",
        "Seasonal demand peaks are missed without a system to capture urgent leads",
        "Customers can't verify your credibility without reviews and a professional website",
        "Competitors who run Google Ads take all the urgent search leads",
        "No way to get repeat maintenance contracts without an online presence",
        "Missing from Google Maps when customers search 'AC repair near me'",
      ]}
      solutions={[
        { title: "Emergency Response Google Ads", desc: "Run 24/7 ads that capture urgent 'AC repair Dubai' searches when customers need you now." },
        { title: "Google Maps Optimization", desc: "Appear at the top of Google Maps for 'AC service near me' in your service areas." },
        { title: "Service Website with Booking", desc: "Professional website with instant quote requests and online booking." },
        { title: "Review Collection System", desc: "Automated follow-up to collect Google reviews after every job." },
        { title: "Maintenance Contract Marketing", desc: "Campaigns targeting building managers and homeowners for annual contracts." },
        { title: "WhatsApp Emergency Line", desc: "Prominent WhatsApp button for instant emergency contact — UAE's preferred method." },
      ]}
      caseStudy={{
        title: "CoolTech HVAC Services, Dubai",
        before: "3-4 jobs per week from referrals only. No online presence. Missing summer peak demand.",
        after: "15-20 leads per week during summer. Booked solid 6 weeks ahead during peak season.",
        strategy: "Emergency Google Ads + Google My Business + review collection + 24/7 contact options.",
        result: "5x more jobs during peak summer season",
      }}
      keywords={[
        "AC repair Dubai", "HVAC service UAE", "air conditioning repair near me",
        "AC installation Dubai", "HVAC company Abu Dhabi", "AC maintenance UAE",
        "air conditioner service Dubai", "HVAC contractor Sharjah", "AC technician Dubai",
        "central AC service UAE", "split AC repair Dubai",
      ]}
      testimonial={{
        name: "Hamdan Al-Rashidi",
        business: "CoolTech HVAC, Dubai",
        quote: "Last summer we were turning away jobs because we were too busy. Zenthoz's Google Ads system brought us more leads than we could handle — a great problem to have!",
      }}
    />
  );
}

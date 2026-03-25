import type { Metadata } from "next";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

export const metadata: Metadata = {
  title: "Digital Marketing for Service Businesses UAE | Zenthoz",
  description: "Get more clients for your service business in UAE. Professional website, Google Ads, and local SEO for service companies in Dubai and Abu Dhabi.",
};

export default function ServiceBusinessesPage() {
  return (
    <IndustryPageTemplate
      emoji="💼"
      industry="Service"
      headline="Get More Clients for Your Service Business in UAE"
      subheadline="Professional digital presence that generates consistent leads and bookings for UAE service businesses — from consultants to professionals."
      challenges={[
        "Service businesses are invisible online — clients go to whoever they find on Google first",
        "Hard to build trust with new clients without a professional website and reviews",
        "Referrals are unreliable — need a system that generates leads predictably",
        "Competitors ranking on Google for your service keywords are getting your clients",
        "No booking or inquiry system — losing leads who don't want to call",
        "Difficulty differentiating from competitors who offer similar services",
      ]}
      solutions={[
        { title: "Professional Services Website", desc: "Credibility-building website with case studies, testimonials, and clear service offerings." },
        { title: "Google My Business Optimization", desc: "Appear in 'service + near me' searches across UAE with strong reviews." },
        { title: "LinkedIn Professional Presence", desc: "B2B lead generation through a strong LinkedIn company page and content." },
        { title: "Google Ads for Service Keywords", desc: "Capture high-intent searches from clients actively looking for your service." },
        { title: "Booking & Lead Forms", desc: "Easy-to-use inquiry forms and booking systems that work 24/7." },
        { title: "Review Generation System", desc: "Automated system to collect Google reviews and build trust fast." },
      ]}
      caseStudy={{
        title: "Emirates Business Consulting",
        before: "No website. All clients from personal network. Revenue plateau for 12 months.",
        after: "Website live in 7 days. 8-12 qualified leads per month from Google. 3 new retainer clients in 45 days.",
        strategy: "Professional website + Google My Business + Google Ads + LinkedIn optimization.",
        result: "8-12 qualified leads per month from zero",
      }}
      keywords={[
        "business consultant Dubai", "professional services UAE", "consulting firm Abu Dhabi",
        "accounting services Dubai", "legal services UAE", "HR consulting Dubai",
        "business setup UAE", "management consulting Dubai", "service company UAE",
        "professional services near me", "consultant UAE",
      ]}
      testimonial={{
        name: "Rashed Al-Maktoum",
        business: "Emirates HR Consulting, Dubai",
        quote: "We went from zero online presence to 10+ qualified leads per month. Zenthoz understood exactly what professional services clients in UAE are looking for.",
      }}
    />
  );
}

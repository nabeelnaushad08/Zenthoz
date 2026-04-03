import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Growth Engine UAE | Complete Digital Marketing System | Zenthoz UAE",
  description:
    "The complete UAE business growth system. Website + Social Media + SEO + Google Ads + Lead Tracking — everything working together to get your business clients fast in Dubai & Abu Dhabi.",
  keywords: [
    "digital marketing system UAE",
    "full service marketing UAE",
    "business growth UAE",
    "complete marketing package Dubai",
    "growth engine Dubai",
    "digital marketing package UAE",
    "all-in-one marketing UAE",
    "full digital marketing UAE",
    "marketing system Dubai",
    "get more clients UAE",
    "lead generation system UAE",
    "digital growth UAE",
    "marketing agency full service Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/services/growth-engine` },
  openGraph: {
    title: "Growth Engine UAE | Complete Digital Marketing System | Zenthoz UAE",
    description: "Complete UAE business growth system. Website + Social + SEO + Ads + Lead Tracking — get clients fast.",
    url: `${SITE_URL}/services/growth-engine`,
  },
};

export default function GrowthEnginePage() {
  return (
    <ServicePageTemplate
      badge="Complete Growth Engine System"
      headline="The Full System That Takes Your Business from 0 to Clients"
      subheadline="Everything working together — website, social, SEO, ads, and lead tracking — to build an unstoppable client-getting machine for your UAE business."
      emoji="⚡"
      color="text-purple-400"
      bgColor="bg-purple-600/20"
      borderColor="border-purple-500/30"
      serviceName="Growth Engine"
      features={[
        { emoji: "🌐", title: "Full Website + Funnel", desc: "Multi-page website with conversion-optimized landing pages and sales funnels." },
        { emoji: "📲", title: "Social Media Management", desc: "Daily presence on Instagram, Facebook, and LinkedIn with engaging content." },
        { emoji: "🔍", title: "SEO Strategy", desc: "Full local SEO to rank on Google and dominate UAE search results." },
        { emoji: "🎯", title: "Google Ads Management", desc: "Paid campaigns running to capture ready-to-buy customers immediately." },
        { emoji: "📊", title: "Lead Tracking Dashboard", desc: "Real-time dashboard showing all leads, sources, and conversion rates." },
        { emoji: "👥", title: "CRM Integration", desc: "All leads automatically fed into a CRM for your sales team." },
        { emoji: "📞", title: "Weekly Strategy Calls", desc: "Regular calls to review performance and adjust strategy." },
        { emoji: "🛡️", title: "Priority Support", desc: "Dedicated account manager and 24-hour response guarantee." },
      ]}
      whyItMatters={[
        "The Growth Engine is not a single service — it's a complete system where every component amplifies the others.",
        "Businesses using integrated growth systems see 3-5x more leads than those using individual services separately.",
        "In UAE's competitive market, having a full digital presence is no longer optional — it's the minimum requirement.",
        "The lead tracking dashboard gives you full visibility into what's working and your exact ROI.",
        "Weekly strategy calls ensure the system continuously improves and adapts to market changes.",
      ]}
      pricing={[
        {
          name: "Growth Engine",
          price: "AED 9,999",
          period: "setup + AED 5,000/mo",
          popular: true,
          features: [
            "Full Website + Sales Funnel",
            "Social Media Management (3 platforms)",
            "SEO + Google My Business",
            "Google Ads Management",
            "Lead Tracking Dashboard",
            "CRM Setup",
            "Weekly Strategy Calls",
            "Priority Support",
            "Monthly Performance Reports",
          ],
        },
        {
          name: "Growth Engine Pro",
          price: "AED 14,999",
          period: "setup + AED 8,000/mo",
          features: [
            "Everything in Growth Engine",
            "Advanced Sales Funnels",
            "Video Content Production",
            "Influencer Marketing",
            "Advanced Analytics",
            "Dedicated Growth Manager",
            "Daily Reporting",
            "Custom Integrations",
          ],
        },
      ]}
      faqs={[
        { q: "What makes the Growth Engine different from buying services individually?", a: "The Growth Engine is a unified system where all channels work together. Your SEO content supports your social media, your ads drive to optimized funnels, and everything feeds into one lead tracking dashboard." },
        { q: "How long until I see results?", a: "You'll see initial results (website, social presence, ads traffic) within the first 14 days. Significant lead flow typically starts in weeks 4-8 as SEO and retargeting kick in." },
        { q: "What's included in the lead tracking dashboard?", a: "Real-time visibility into all leads from all channels, source attribution (which channel brought which lead), call tracking, form submissions, and revenue attribution." },
        { q: "Can I start with Growth Engine and scale down later?", a: "Yes! You can adjust which services are included each month based on performance and budget." },
        { q: "Do I need to hire a marketing team?", a: "No! The Growth Engine replaces the need for an in-house marketing team. You get a full team of specialists for a fraction of the cost." },
      ]}
    />
  );
}

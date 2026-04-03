import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Google Ads Management UAE | PPC Agency Dubai | Zenthoz UAE",
  description:
    "Expert Google Ads management for UAE businesses. Get qualified leads from Dubai, Abu Dhabi & Sharjah today. Maximize ROI with targeted PPC campaigns. No wasted budget.",
  keywords: [
    "Google Ads UAE",
    "Google Ads Dubai",
    "PPC management UAE",
    "Google Ads agency Dubai",
    "PPC agency UAE",
    "Google Ads management Abu Dhabi",
    "paid advertising UAE",
    "Google Ads campaign Dubai",
    "PPC Dubai",
    "Google advertising UAE",
    "SEM UAE",
    "paid search Dubai",
    "Google Ads specialist UAE",
    "lead generation Google Ads UAE",
  ],
  alternates: { canonical: `${SITE_URL}/services/google-ads` },
  openGraph: {
    title: "Google Ads Management UAE | PPC Agency Dubai | Zenthoz UAE",
    description: "Expert Google Ads for UAE businesses. Get qualified leads today. Maximize ROI.",
    url: `${SITE_URL}/services/google-ads`,
  },
};

export default function GoogleAdsPage() {
  return (
    <ServicePageTemplate
      badge="Google Ads (PPC) Management"
      headline="Put Your Business in Front of Customers Ready to Buy — Today"
      subheadline="UAE-targeted Google Ads campaigns that bring in qualified leads immediately. Maximum ROI, zero wasted budget — for businesses in Dubai, Abu Dhabi & Sharjah."
      emoji="🎯"
      color="text-amber-400"
      bgColor="bg-amber-600/20"
      borderColor="border-amber-500/30"
      serviceName="Google Ads"
      features={[
        { emoji: "⚡", title: "Instant Traffic", desc: "Go live within 48 hours and start getting website visitors immediately." },
        { emoji: "🎯", title: "Precise Targeting", desc: "Target by location (Dubai, Abu Dhabi, etc.), age, interest, and intent." },
        { emoji: "💰", title: "Budget Optimization", desc: "Every dirham spent is tracked and optimized for maximum return." },
        { emoji: "📊", title: "Full Tracking", desc: "Know exactly which ads bring calls, form fills, and customers." },
        { emoji: "🔎", title: "Audience Research", desc: "Deep research into how UAE customers search for your service." },
        { emoji: "🔄", title: "A/B Testing", desc: "Continuous testing of ads, headlines, and landing pages." },
        { emoji: "📞", title: "Call Tracking", desc: "Track phone calls from ads to measure true campaign ROI." },
        { emoji: "🌐", title: "Remarketing", desc: "Re-target website visitors who didn't convert the first time." },
      ]}
      whyItMatters={[
        "Google Ads puts you at the very top of search results — above all organic listings — instantly.",
        "UAE consumers trust Google ads for finding service businesses — especially construction, cleaning, and professional services.",
        "With precise UAE targeting, your ads only show to people in your service areas.",
        "Unlike SEO, Google Ads generates leads from day one — critical for new businesses.",
        "You only pay when someone clicks — no wasted budget on people not interested in your service.",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "AED 800",
          period: "/month + ad spend",
          features: ["Campaign Setup", "1 Campaign / 3 Ad Groups", "Keyword Research", "Monthly Optimization", "Basic Reporting", "Ad Copywriting"],
        },
        {
          name: "Growth",
          price: "AED 1,800",
          period: "/month + ad spend",
          popular: true,
          features: ["3 Campaigns", "Full Keyword Research", "A/B Ad Testing", "Landing Page Optimization", "Bi-Weekly Optimization", "Call Tracking", "Detailed Reports"],
        },
        {
          name: "Pro",
          price: "AED 3,500",
          period: "/month + ad spend",
          features: ["Unlimited Campaigns", "Search + Display + Remarketing", "Advanced Audience Targeting", "Weekly Optimization", "Dedicated Account Manager", "Real-Time Dashboard"],
        },
      ]}
      faqs={[
        { q: "What's the minimum ad budget I need?", a: "We recommend a minimum of AED 1,500/month in ad spend for meaningful results in UAE. Your management fee is separate from ad spend." },
        { q: "How quickly will I see results?", a: "Google Ads can start driving traffic within 24-48 hours of campaign launch. You'll see lead data within the first week." },
        { q: "Is Google Ads better than social media ads?", a: "Google Ads captures intent-based searches (people actively looking for your service) while social media builds awareness. Both together give the best results." },
        { q: "Can I set a daily budget limit?", a: "Yes! Google Ads gives full budget control. You set a daily maximum and we optimize within that budget." },
        { q: "Do you run Arabic ads?", a: "Yes! We create ads in both Arabic and English to capture all UAE search queries." },
      ]}
    />
  );
}

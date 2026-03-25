import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "SEO Services UAE | Zenthoz — Rank on Google & Get More Clients",
  description: "Professional SEO services for UAE businesses. Rank higher on Google, get found by local customers, and grow your business organically.",
};

export default function SEOPage() {
  return (
    <ServicePageTemplate
      badge="Search Engine Optimization"
      headline="Help Your Business Appear on Google — Get Found by Customers"
      subheadline="UAE-focused SEO strategy that gets your business ranking for the keywords your customers search every day."
      emoji="🔍"
      color="text-green-400"
      bgColor="bg-green-600/20"
      borderColor="border-green-500/30"
      serviceName="SEO"
      features={[
        { emoji: "📍", title: "Local UAE SEO", desc: "Dominate local Google searches in Dubai, Abu Dhabi, Sharjah and across UAE." },
        { emoji: "🗺️", title: "Google My Business", desc: "Complete GMB optimization so you appear in Google Maps and local packs." },
        { emoji: "📝", title: "Content Strategy", desc: "SEO-optimized blog posts and pages targeting your ideal customers." },
        { emoji: "🔗", title: "Link Building", desc: "Quality backlinks from UAE-relevant websites to boost your authority." },
        { emoji: "🎯", title: "Keyword Research", desc: "Find the exact keywords your UAE customers are searching for." },
        { emoji: "⚡", title: "Technical SEO", desc: "Site speed, structure, and technical optimization for Google." },
        { emoji: "📊", title: "Monthly Reporting", desc: "Clear rank tracking reports showing your Google progress." },
        { emoji: "🏆", title: "Competitor Analysis", desc: "See what keywords competitors rank for and outrank them." },
      ]}
      whyItMatters={[
        "Over 5 million Google searches happen in UAE every day — your customers are searching for your business right now.",
        "Businesses on page 1 of Google get 95% of all clicks — page 2 is effectively invisible.",
        "Local SEO in UAE is less competitive than in the West — now is the perfect time to establish dominance.",
        "Organic traffic from SEO is free — once you rank, you get clients without paying for every click.",
        "Google My Business optimization puts you on Google Maps where UAE customers are searching for local services.",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "AED 1,800",
          period: "/month",
          features: ["10 Target Keywords", "On-Page Optimization", "Google My Business", "Monthly Report", "Basic Content (2 Posts)", "Technical Audit"],
        },
        {
          name: "Growth",
          price: "AED 3,500",
          period: "/month",
          popular: true,
          features: ["30 Target Keywords", "Full On-Page SEO", "GMB Optimization", "Link Building (5/month)", "Content (4 Posts/month)", "Competitor Tracking", "Bi-Weekly Reports"],
        },
        {
          name: "Pro",
          price: "AED 6,500",
          period: "/month",
          features: ["60+ Keywords", "Advanced Technical SEO", "Aggressive Link Building", "Content Strategy", "8 Posts/Month", "Weekly Reports", "Dedicated SEO Manager"],
        },
      ]}
      faqs={[
        { q: "How long does SEO take to show results?", a: "SEO is a long-term strategy. You'll typically start seeing ranking improvements in 60-90 days, with significant traffic growth by month 4-6. We track and report progress monthly." },
        { q: "Do you guarantee Google rankings?", a: "No ethical SEO company can guarantee specific rankings as Google's algorithm is complex. We guarantee our full effort, transparent reporting, and a strategy proven to improve rankings." },
        { q: "What's the difference between SEO and Google Ads?", a: "SEO builds free, long-term organic traffic. Google Ads gives instant paid traffic. We recommend both together for maximum results — SEO for long-term growth, Ads for immediate leads." },
        { q: "Do you optimize for Arabic keywords?", a: "Yes! We conduct keyword research in both Arabic and English to capture the full UAE market." },
        { q: "Can you help my Google Maps listing?", a: "Absolutely. Google My Business optimization is included in all our SEO packages and dramatically increases local visibility." },
      ]}
    />
  );
}

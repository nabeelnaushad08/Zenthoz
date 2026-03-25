import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Social Media Management UAE | Zenthoz — Grow Your Brand",
  description: "Professional social media management for UAE businesses. Instagram, Facebook & LinkedIn — consistent content, brand growth, and real engagement.",
};

export default function SocialMediaPage() {
  return (
    <ServicePageTemplate
      badge="Social Media Management"
      headline="Build Your Brand on Social Media — Done For You"
      subheadline="Consistent, professional social media presence on Instagram, Facebook & LinkedIn. We create content, post regularly, and grow your following."
      emoji="📲"
      color="text-pink-400"
      bgColor="bg-pink-600/20"
      borderColor="border-pink-500/30"
      serviceName="Social Media"
      features={[
        { emoji: "🖼️", title: "Content Creation", desc: "Professional graphics and captions tailored for UAE audiences." },
        { emoji: "📅", title: "Content Calendar", desc: "Planned, consistent posting schedule — no gaps in your presence." },
        { emoji: "🎬", title: "Reels & Stories", desc: "Engaging short videos and stories that increase reach." },
        { emoji: "👥", title: "Community Management", desc: "We respond to comments and DMs to keep your audience engaged." },
        { emoji: "📈", title: "Hashtag Strategy", desc: "UAE-specific hashtag research to increase organic reach." },
        { emoji: "💬", title: "Brand Voice", desc: "Consistent tone and messaging across all platforms." },
        { emoji: "📊", title: "Monthly Reports", desc: "Clear analytics showing growth, reach, and engagement." },
        { emoji: "🌐", title: "Multi-Platform", desc: "Instagram, Facebook, LinkedIn, TikTok — all covered." },
      ]}
      whyItMatters={[
        "UAE has one of the highest social media penetration rates in the world — your customers are scrolling daily.",
        "Businesses with active social media get 3x more trust from UAE consumers compared to those without.",
        "Instagram and TikTok are the primary discovery platforms for UAE consumers finding new businesses.",
        "Consistent social media presence keeps your brand top-of-mind when customers are ready to buy.",
        "Social proof (followers, engagement) directly impacts how much UAE customers trust your business.",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "AED 1,500",
          period: "/month",
          features: ["2 Platforms (Instagram + Facebook)", "12 Posts/Month", "Basic Graphics", "Caption Writing", "Basic Hashtag Research", "Monthly Report"],
        },
        {
          name: "Growth",
          price: "AED 2,800",
          period: "/month",
          popular: true,
          features: ["3 Platforms", "20 Posts/Month", "Custom Graphics + Reels", "Community Management", "Advanced Hashtag Strategy", "Story Content", "Bi-Weekly Reports"],
        },
        {
          name: "Pro",
          price: "AED 5,000",
          period: "/month",
          features: ["All Platforms", "30+ Posts/Month", "Video Content & Reels", "Influencer Outreach", "Paid Social Management", "Weekly Strategy Calls", "Full Analytics Dashboard"],
        },
      ]}
      faqs={[
        { q: "Which platforms do you manage?", a: "We primarily focus on Instagram, Facebook, and LinkedIn. We also offer TikTok and Twitter/X management. Tell us where your customers are and we'll focus there." },
        { q: "Do you create all the content?", a: "Yes! We handle content creation from scratch — graphics, captions, hashtags, and scheduling. You just need to approve before posting." },
        { q: "How do you understand my brand?", a: "We start with a detailed brand discovery call to understand your business, audience, tone, and goals before creating any content." },
        { q: "How quickly will I see results?", a: "Social media growth takes consistency. Most clients see meaningful engagement improvement within 60 days, with significant follower growth by month 3." },
        { q: "Can you post in Arabic?", a: "Absolutely! We create bilingual content in Arabic and English to reach the full UAE market." },
      ]}
    />
  );
}

import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Professional Website Design UAE | Zenthoz — 7-Day Delivery",
  description: "Get a professional, mobile-first website for your UAE business in just 7 days. SEO-ready, WhatsApp integrated, built to convert visitors into customers.",
};

export default function WebsitePage() {
  return (
    <ServicePageTemplate
      badge="Website Design & Development"
      headline="Professional Business Website in 7 Days"
      subheadline="Mobile-first, SEO-ready, and designed to convert visitors into customers. Built specifically for UAE businesses."
      emoji="🌐"
      color="text-blue-400"
      bgColor="bg-blue-600/20"
      borderColor="border-blue-500/30"
      serviceName="Website"
      features={[
        { emoji: "📱", title: "Mobile Responsive", desc: "Looks perfect on every device — phones, tablets, and desktops." },
        { emoji: "🔍", title: "SEO Ready", desc: "Built with Google in mind. Technical SEO foundation from day one." },
        { emoji: "💬", title: "WhatsApp Integration", desc: "One-click WhatsApp button so customers can reach you instantly." },
        { emoji: "⚡", title: "Lightning Fast", desc: "Optimized for speed. Fast sites rank higher and convert better." },
        { emoji: "🔒", title: "SSL & Security", desc: "Secure by default. Free SSL certificate included." },
        { emoji: "📊", title: "Analytics Built In", desc: "Track visitors, traffic sources, and conversions from day one." },
        { emoji: "🎨", title: "Custom Design", desc: "Unique design that reflects your brand — not a generic template." },
        { emoji: "🌍", title: "Bilingual Support", desc: "Arabic & English websites for maximum UAE market reach." },
      ]}
      whyItMatters={[
        "93% of UAE consumers research businesses online before buying — you need a professional website to capture them.",
        "A website builds instant credibility and trust with UAE clients who expect businesses to have a strong online presence.",
        "Without a website, you're invisible on Google — losing customers to competitors who have one.",
        "Your website works 24/7 — generating leads while you sleep.",
        "UAE businesses with websites get 3x more client inquiries than those without.",
      ]}
      pricing={[
        {
          name: "Starter",
          price: "AED 1,999",
          features: ["1-Page Landing Website", "Mobile Responsive", "Contact Form", "WhatsApp Button", "Google Analytics", "Basic SEO", "1 Revision Round"],
        },
        {
          name: "Business",
          price: "AED 3,999",
          popular: true,
          features: ["5-Page Website", "Mobile Responsive", "Lead Capture Forms", "WhatsApp Integration", "Google Analytics", "SEO Optimized", "3 Revision Rounds", "3 Months Support"],
        },
        {
          name: "Premium",
          price: "AED 6,999",
          features: ["10+ Page Website", "Custom Animations", "Booking System", "CRM Integration", "Advanced SEO", "Speed Optimization", "Unlimited Revisions", "6 Months Support"],
        },
      ]}
      faqs={[
        { q: "How long does it take to build my website?", a: "Standard websites are delivered in 7 days. Complex websites may take up to 14 days. Our guarantee ensures delivery within 14 days or we work for free." },
        { q: "Do I need to provide content?", a: "We can help with copywriting and sourcing images. However, providing your own content (photos, text) speeds up the process significantly." },
        { q: "Will my website work on phones?", a: "Absolutely. All our websites are mobile-first and tested on iOS and Android devices across UAE." },
        { q: "Can I update the website myself?", a: "Yes! We set up an easy-to-use CMS so you can update content, add products, and make changes without technical knowledge." },
        { q: "Do you support Arabic language?", a: "Yes! We build bilingual Arabic/English websites and handle proper RTL (right-to-left) layout for Arabic text." },
      ]}
    />
  );
}

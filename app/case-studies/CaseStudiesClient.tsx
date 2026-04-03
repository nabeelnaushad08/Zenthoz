"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Star, Clock } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const caseStudies = [
  {
    id: 1,
    company: "Al-Farsi Contracting LLC",
    industry: "Construction",
    location: "Dubai",
    emoji: "🏗️",
    timeline: "45 days",
    challenge: "A new construction company with a trade license but zero digital presence. Relied entirely on personal contacts for project leads.",
    strategy: [
      "Built a 5-page portfolio website showcasing past projects",
      "Optimized Google My Business for 'construction company Dubai'",
      "Launched targeted Google Ads for high-intent construction keywords",
      "Set up WhatsApp Business for instant project inquiries",
    ],
    results: [
      { metric: "Project Inquiries", before: "2-3/month", after: "15-20/month" },
      { metric: "Google Visibility", before: "None", after: "#1-3 for key terms" },
      { metric: "Revenue", before: "Baseline", after: "+180% in 90 days" },
    ],
    quote: "Within 3 weeks of launching, we were getting 5-8 project inquiry calls per day from Google. Zenthoz delivered everything they promised.",
    author: "Omar Al-Farsi, Owner",
  },
  {
    id: 2,
    company: "Clean Pro Services",
    industry: "Cleaning",
    location: "Dubai",
    emoji: "🧹",
    timeline: "60 days",
    challenge: "Solo entrepreneur just licensed. 5 clients from referrals. Needed a sustainable lead system to fill a growing team's schedule.",
    strategy: [
      "Professional cleaning service website with online booking",
      "Instagram content strategy with before/after photos",
      "Google Ads targeting 'cleaning company Dubai' and 'maid service UAE'",
      "Google My Business setup and review collection system",
    ],
    results: [
      { metric: "Regular Clients", before: "5 clients", after: "28 clients" },
      { metric: "Team Utilization", before: "60%", after: "100% booked" },
      { metric: "Monthly Revenue", before: "AED 8,000", after: "AED 35,000" },
    ],
    quote: "I just got my trade license and had zero online presence. Within 2 months, I have a full team that's completely booked.",
    author: "Fatima Hassan, Founder",
  },
  {
    id: 3,
    company: "Gulf Style Boutique",
    industry: "Retail",
    location: "Dubai",
    emoji: "🛍️",
    timeline: "90 days",
    challenge: "Physical boutique struggling with mall foot traffic decline. No online presence. Revenue dropping month over month.",
    strategy: [
      "Instagram and TikTok product showcase strategy",
      "WhatsApp Business catalogue setup",
      "Google My Business optimization for local searches",
      "Instagram Ads targeting UAE fashion buyers",
    ],
    results: [
      { metric: "Instagram Followers", before: "340", after: "3,100" },
      { metric: "Online Sales", before: "0", after: "45-50 orders/month" },
      { metric: "Revenue", before: "Declining", after: "+30% growth" },
    ],
    quote: "Zenthoz transformed our business. Online sales now account for 35% of our revenue — a stream we had zero of before.",
    author: "Mariam Al-Zaabi, Owner",
  },
  {
    id: 4,
    company: "CoolTech HVAC Services",
    industry: "HVAC",
    location: "Dubai",
    emoji: "❄️",
    timeline: "30 days",
    challenge: "3-4 jobs per week from referrals only. Missing the massive summer peak demand season due to zero Google visibility.",
    strategy: [
      "24/7 Google Ads for emergency AC repair searches",
      "Google My Business for 'AC repair near me' searches",
      "WhatsApp emergency contact system",
      "Automated review collection after each job",
    ],
    results: [
      { metric: "Weekly Job Leads", before: "3-4", after: "15-20" },
      { metric: "Google Reviews", before: "2 reviews", after: "47 reviews (4.9★)" },
      { metric: "Summer Revenue", before: "Baseline", after: "+400% peak season" },
    ],
    quote: "Last summer we were turning away jobs because we were too busy. A great problem to have after Zenthoz set up our marketing system.",
    author: "Hamdan Al-Rashidi, Director",
  },
  {
    id: 5,
    company: "Emirates HR Consulting",
    industry: "Professional Services",
    location: "Dubai",
    emoji: "💼",
    timeline: "45 days",
    challenge: "B2B consulting firm with strong reputation but no digital lead generation. Revenue plateau for 12+ months.",
    strategy: [
      "Professional services website with case studies section",
      "LinkedIn company page optimization and content",
      "Google Ads for 'HR consulting Dubai' keywords",
      "Lead capture with detailed consultation request forms",
    ],
    results: [
      { metric: "Monthly Leads", before: "0-2", after: "10-12 qualified" },
      { metric: "Retainer Clients", before: "6 clients", after: "9 clients (3 new)" },
      { metric: "MRR", before: "AED 45,000", after: "AED 72,000" },
    ],
    quote: "We went from zero online presence to 10+ qualified leads per month. Zenthoz understood exactly what professional service clients in UAE expect.",
    author: "Rashed Al-Maktoum, Managing Director",
  },
  {
    id: 6,
    company: "Bloom Flower Shop",
    industry: "Retail / E-commerce",
    location: "Abu Dhabi",
    emoji: "🌸",
    timeline: "21 days",
    challenge: "Local florist competing with large flower delivery apps. No way to take online orders. Losing customers to online platforms.",
    strategy: [
      "E-commerce website with same-day delivery ordering",
      "Instagram flower arrangement showcases",
      "Google Ads for 'flower delivery Abu Dhabi' searches",
      "WhatsApp order taking system",
    ],
    results: [
      { metric: "Daily Orders", before: "8-10", after: "25-30" },
      { metric: "Online Orders", before: "0%", after: "60% of revenue" },
      { metric: "Average Order Value", before: "AED 85", after: "AED 145" },
    ],
    quote: "The website paid for itself in the first week. We now get more orders online than we do walk-ins. Zenthoz transformed how we run our business.",
    author: "Aisha Al-Nuaimi, Owner",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-600/10 border border-green-500/30 text-green-300"
        >
          <TrendingUp className="w-4 h-4" />
          Real results from real UAE businesses
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          UAE Business{" "}
          <span className="text-gradient">Success Stories</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          See how UAE businesses went from zero online presence to consistent leads and growing revenue with Zenthoz.
        </motion.p>
      </section>

      {/* Case Studies Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-3xl p-8 md:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{cs.emoji}</span>
                    <div>
                      <h2 className="text-xl font-black text-white">{cs.company}</h2>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-600/20 text-purple-400">{cs.industry}</span>
                        <span className="text-xs text-slate-500">📍 {cs.location}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {cs.timeline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">The Challenge</h3>
                    <p className="text-slate-300 text-sm">{cs.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Strategy Used</h3>
                    <ul className="space-y-2">
                      {cs.strategy.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-300">
                          <span className="text-purple-400 mt-0.5">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Results</h3>
                  <div className="space-y-3 mb-6">
                    {cs.results.map((r, j) => (
                      <div key={j} className="flex items-center justify-between p-4 rounded-xl bg-white/3 border border-white/5">
                        <span className="text-sm text-slate-400">{r.metric}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-red-400 line-through">{r.before}</span>
                          <ArrowRight className="w-3 h-3 text-slate-600" />
                          <span className="text-sm font-bold text-green-400">{r.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl p-5 bg-purple-600/10 border border-purple-500/20">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm italic mb-3">"{cs.quote}"</p>
                    <p className="text-slate-500 text-xs">— {cs.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Want Results Like These?"
        subheadline="Join UAE businesses growing with Zenthoz. Your success story starts with a free consultation."
        primaryLabel="Start My Success Story"
        primaryHref="/start"
      />
    </div>
  );
}

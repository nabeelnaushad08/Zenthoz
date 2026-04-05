"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import {
  GrowthEngineIcon, SEOIcon, DesignIcon, GoogleAdsIcon,
  TargetIcon, SpeedIcon, WhatsAppIcon, SecurityIcon, UsersIcon, GlobeNetIcon,
  WebDesignIcon, UAEFlag,
} from "@/components/ServiceIcons";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const values = [
  { Icon: TargetIcon, title: "Results Over Vanity", desc: "We don't care about followers. We care about clients. Every strategy we implement is measured by revenue impact." },
  { Icon: SpeedIcon, title: "Speed is a Feature", desc: "UAE businesses can't wait. We deliver in 7-14 days because we know how critical momentum is for new businesses." },
  { Icon: WhatsAppIcon, title: "Local First", desc: "We understand UAE culture, consumer behavior, and the regulatory environment. This isn't copy-paste from Western agencies." },
  { Icon: SecurityIcon, title: "Radical Transparency", desc: "You'll always know what we're doing and why. Clear reporting. No jargon. Real numbers." },
  { Icon: UsersIcon, title: "Partnership Mindset", desc: "We're not a vendor — we're a growth partner. Your success is our success, which is why we guarantee results." },
  { Icon: GlobeNetIcon, title: "Built for UAE", desc: "Every strategy, every piece of content, every ad — designed specifically for the UAE market and consumer." },
];

const timeline = [
  { week: "Days 1–3", Icon: WebDesignIcon, label: "Discovery & Strategy", desc: "We analyse your business, competitors, and target customers. You get a tailored digital growth plan." },
  { week: "Days 4–7", Icon: DesignIcon, label: "Build & Design", desc: "Your website, social profiles, and Google My Business listing are built and branded to perfection." },
  { week: "Week 2", Icon: SEOIcon, label: "Go Live & Optimise", desc: "Everything launches. SEO foundation is set. Google Ads go live if included in your package." },
  { week: "Month 2+", Icon: GrowthEngineIcon, label: "Scale & Grow", desc: "Monthly content, ads optimisation, and reporting. Your lead flow compounds every month." },
];

const differentiators = [
  { Icon: SpeedIcon, title: "14-Day Delivery", desc: "We deliver your full digital presence in 14 days — guaranteed. No other UAE agency matches this." },
  { Icon: UAEFlag, title: "UAE-Only Focus", desc: "Every strategy, keyword, and ad is built for the UAE market. We don't reuse Western playbooks." },
  { Icon: TargetIcon, title: "Leads, Not Likes", desc: "We measure success in client enquiries and revenue — not vanity metrics like followers or impressions." },
  { Icon: SecurityIcon, title: "No Lock-in Contracts", desc: "Month-to-month. If we're not delivering results, you can walk away. We earn your trust every month." },
  { Icon: WhatsAppIcon, title: "WhatsApp-First Support", desc: "Reach your dedicated manager on WhatsApp anytime. UAE business moves fast — so do we." },
  { Icon: GlobeNetIcon, title: "Arabic + English", desc: "We create bilingual content that reaches both Arabic and English-speaking customers across UAE." },
];

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
      />

      {/* Hero */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
          >
            <UAEFlag width={24} height={16} /> Based in UAE. Built for UAE.
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            We Exist to Help UAE Businesses{" "}
            <span className="text-gradient">Get Clients</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 mb-10"
          >
            Zenthoz UAE is not a "digital marketing agency." We're a business growth system for new and growing UAE businesses who need clients fast.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-[#030810]/50 relative z-10">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                The Problem We{" "}
                <span className="text-gradient">Solve</span>
              </h2>
              <p className="text-slate-300 mb-4">
                Every year, thousands of entrepreneurs register businesses in UAE with big dreams. They get their trade license, rent an office, and then... silence.
              </p>
              <p className="text-slate-300 mb-4">
                The problem isn't their business. It's that nobody can find them. No website. No Google presence. No social media. No leads.
              </p>
              <p className="text-slate-300 mb-6">
                We built Zenthoz UAE to solve exactly this — to take a brand new UAE business and give it the digital foundation it needs to attract clients in 30 days or less.
              </p>
              <Link href="/start" className="btn-primary">
                Start My Business Online
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "35+", label: "UAE Businesses Launched" },
                { value: "30", label: "Days to First Clients" },
                { value: "AED 5M+", label: "Revenue Generated" },
                { value: "14 Days", label: "Delivery Guarantee" },
              ].map((stat, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 text-center">
                  <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              What We{" "}
              <span className="text-gradient">Believe</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              These aren't just values on a wall. They're how we make decisions and serve our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6"
              >
                <div className="mb-4">
                  <value.Icon size={48} />
                </div>
                <h3 className="font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Timeline */}
      <section className="section-padding bg-[#030810]/50 relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
            >
              From Day 1 to Month 2+
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Your <span className="text-gradient">Growth Timeline</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Here's exactly what happens after you sign up — no vague promises, just a clear roadmap.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 relative"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-600/20 text-purple-400 border border-purple-500/30 mb-4">
                  {item.week}
                </div>
                <div className="mb-4"><item.Icon size={48} /></div>
                <h3 className="font-bold text-white mb-2">{item.label}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Why Businesses <span className="text-gradient">Choose Zenthoz</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Not just another agency. Here's what actually makes us different.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 flex gap-4"
              >
                <div className="shrink-0"><item.Icon size={44} /></div>
                <div>
                  <h3 className="font-bold text-white mb-1.5">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why UAE */}
      <section className="section-padding relative z-10">
        <div className="container-custom max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-10"
          >
            <div className="flex justify-center mb-6"><UAEFlag width={72} height={48} /></div>
            <h2 className="text-3xl font-black text-white mb-4">Why We Focus on UAE</h2>
            <p className="text-slate-300 mb-4">
              UAE is one of the most entrepreneurial markets in the world. Thousands of new businesses register every month, and the opportunity is massive.
            </p>
            <p className="text-slate-300 mb-4">
              But most UAE businesses fail digitally because they use Western marketing agencies that don't understand the UAE consumer, culture, or competitive landscape.
            </p>
            <p className="text-slate-300">
              We built Zenthoz UAE specifically for this market — with Arabic content, local SEO expertise, UAE consumer insights, and a deep understanding of how business works in the Emirates.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection
        headline="Ready to Work With Us?"
        subheadline="Let's build your digital presence and get you clients in 30 days."
        primaryLabel="Start My Business Online"
        primaryHref="/start"
      />
    </div>
  );
}

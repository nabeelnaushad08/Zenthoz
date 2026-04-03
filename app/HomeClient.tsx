"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Globe, Share2, Search, Target, Zap, Shield, Clock, TrendingUp, Users, Star } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import CTASection from "@/components/sections/CTASection";
import { getWhatsAppLink } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const problems = [
  "No website — customers can't find you",
  "No social media — no trust, no credibility",
  "No Google presence — competitors take your clients",
  "No leads system — random walk-ins only",
];

const solutions = [
  { icon: Globe, title: "Professional Website", desc: "Mobile-first, fast, SEO-ready in 7 days" },
  { icon: Share2, title: "Social Media Setup", desc: "Instagram, Facebook & LinkedIn presence" },
  { icon: Search, title: "Google Visibility", desc: "Google My Business + SEO foundation" },
  { icon: Target, title: "Lead Generation", desc: "Ads & funnels that bring real customers" },
];

const process = [
  { step: "01", title: "You Register Business", desc: "Get your trade license in UAE. We handle everything online." },
  { step: "02", title: "We Build Your Presence", desc: "Website, social media, Google listing — all set up for you." },
  { step: "03", title: "We Launch Visibility", desc: "SEO, ads, and content start bringing in traffic." },
  { step: "04", title: "You Get Clients", desc: "Real leads, calls, and customers within 30 days." },
];

const packages = [
  {
    name: "Starter",
    price: "AED 1,999",
    period: "One-Time",
    tag: "New Business",
    color: "from-blue-600/20 to-purple-600/20",
    border: "border-blue-500/30",
    features: ["1-Page Professional Website", "Social Media Profile Setup", "Google My Business Setup", "WhatsApp Business Setup", "Basic SEO Foundation"],
    cta: "Start Starter Plan",
    href: "/packages#starter",
  },
  {
    name: "Growth",
    price: "AED 4,999",
    period: "+ AED 2,500/mo",
    tag: "Most Popular",
    color: "from-purple-600/30 to-pink-600/20",
    border: "border-purple-500/50",
    popular: true,
    features: ["5-Page Business Website", "Social Media Management", "SEO & Content Strategy", "Google Ads Setup", "Monthly Reporting", "WhatsApp Support"],
    cta: "Start Growth Plan",
    href: "/packages#growth",
  },
  {
    name: "Pro",
    price: "AED 9,999",
    period: "+ AED 5,000/mo",
    tag: "Full Growth System",
    color: "from-amber-600/20 to-red-600/20",
    border: "border-amber-500/30",
    features: ["Full Website + Sales Funnel", "Growth Engine System", "Google Ads Management", "Lead Tracking Dashboard", "Weekly Strategy Calls", "Priority Support"],
    cta: "Start Pro Plan",
    href: "/packages#pro",
  },
];

const testimonials = [
  {
    name: "Omar Al-Farsi",
    business: "Al-Farsi Contracting LLC",
    industry: "Construction",
    quote: "Within 3 weeks of launching, we were getting 5-8 calls per day from Google. Zenthoz delivered everything they promised.",
    rating: 5,
  },
  {
    name: "Fatima Hassan",
    business: "Clean Pro Services",
    industry: "Cleaning",
    quote: "I just got my trade license and had zero online presence. Now I have a beautiful website and clients calling every day.",
    rating: 5,
  },
  {
    name: "Khalid Mahmoud",
    business: "Gulf Retail Group",
    industry: "Retail",
    quote: "The Growth Engine package changed everything. Our monthly revenue increased by 40% in the first 2 months.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection
        badge="🇦🇪 #1 Digital Growth Partner for New UAE Businesses"
        headline="Launch Your Business Online & Get Your First Customers in 30 Days"
        subheadline="Websites, Social Media & Lead Generation — Done For You. We take your new UAE business from 0 to clients."
        primaryCTA={{ label: "Start My Business Online", href: "/start" }}
        showWhatsApp
        stats={[
          { value: "30", label: "Days to First Clients" },
          { value: "7–14", label: "Days Delivery" },
          { value: "100+", label: "UAE Businesses" },
          { value: "100%", label: "Satisfaction Rate" },
        ]}
      />

      <TrustStrip />

      {/* Problem Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-red-500/10 border border-red-500/30 text-red-400"
            >
              Sound familiar?
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              Just Registered Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400"
            >
              Most new UAE businesses struggle in the first 90 days because of these exact problems:
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-center gap-3 glass-card rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <span className="text-red-400 font-bold text-sm">✕</span>
                </div>
                <span className="text-slate-300">{problem}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-[#030810]/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-green-500/10 border border-green-500/30 text-green-400"
            >
              The solution
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              We Handle{" "}
              <span className="text-gradient">Everything</span> For You
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Stop worrying about digital marketing. Focus on running your business while we bring you customers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600/30 transition-colors">
                  <sol.icon className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{sol.title}</h3>
                <p className="text-slate-400 text-sm">{sol.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              Choose Your{" "}
              <span className="text-gradient">Growth Plan</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              Simple, transparent pricing. No hidden fees.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`relative rounded-2xl p-6 bg-gradient-to-b ${pkg.color} border ${pkg.border} ${pkg.popular ? "shadow-2xl shadow-purple-500/20 scale-105" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                      🔥 Most Popular
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-300 uppercase tracking-wider">
                    {pkg.tag}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-3">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-black text-gradient">{pkg.price}</span>
                    <span className="text-slate-400 text-sm ml-2">{pkg.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={pkg.href}
                  className={`block text-center py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${pkg.popular ? "btn-primary" : "btn-secondary"}`}
                >
                  {pkg.cta}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/packages" className="btn-secondary inline-flex px-8 py-3">
              View Full Package Details
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-[#030810]/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              How It{" "}
              <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400"
            >
              Simple 4-step process. You focus on business, we handle the rest.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-purple-600/50 to-blue-600/50" />

            {process.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative text-center"
              >
                <div className="w-20 h-20 rounded-2xl mx-auto mb-5 flex items-center justify-center relative z-10"
                  style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(37,99,235,0.3))", border: "1px solid rgba(124,58,237,0.4)" }}>
                  <span className="text-2xl font-black text-gradient">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-border rounded-3xl p-10 text-center"
            style={{
              background: "linear-gradient(rgba(10,22,40,0.9), rgba(10,22,40,0.9)) padding-box, linear-gradient(135deg, #7c3aed, #2563eb) border-box",
              border: "2px solid transparent",
            }}
          >
            <div className="text-5xl mb-4">🛡️</div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Our 14-Day Delivery Guarantee
            </h2>
            <p className="text-lg text-slate-300 mb-6">
              If you don't get a <strong className="text-white">complete digital presence delivered in 14 days</strong> — we work for free until you do.
            </p>
            <p className="text-slate-400 text-sm mb-8">
              We're that confident in our process. Zero risk for you.
            </p>
            <Link href="/start" className="btn-primary px-10 py-4 text-base">
              Claim Your Guarantee
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#030810]/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              What UAE Businesses{" "}
              <span className="text-gradient">Say</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.business}</div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-600/20 text-purple-400 mt-1 inline-block">
                    {t.industry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Quick View */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white mb-4"
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: "Website Design", desc: "Professional, fast, mobile-first websites that convert visitors into customers.", href: "/services/website", color: "text-blue-400", bg: "bg-blue-600/20", border: "border-blue-500/30" },
              { icon: Share2, title: "Social Media", desc: "Engaging content and management for Instagram, Facebook & LinkedIn.", href: "/services/social-media", color: "text-pink-400", bg: "bg-pink-600/20", border: "border-pink-500/30" },
              { icon: Search, title: "SEO", desc: "Rank on Google for keywords your customers search for every day.", href: "/services/seo", color: "text-green-400", bg: "bg-green-600/20", border: "border-green-500/30" },
              { icon: Target, title: "Google Ads", desc: "Paid ads that put your business in front of ready-to-buy customers.", href: "/services/google-ads", color: "text-amber-400", bg: "bg-amber-600/20", border: "border-amber-500/30" },
              { icon: Zap, title: "Growth Engine", desc: "Full-system growth combining ads, SEO, social, and lead tracking.", href: "/services/growth-engine", color: "text-purple-400", bg: "bg-purple-600/20", border: "border-purple-500/30" },
              { icon: TrendingUp, title: "Lead Generation", desc: "Sales funnels and landing pages designed to generate qualified leads.", href: "/start", color: "text-cyan-400", bg: "bg-cyan-600/20", border: "border-cyan-500/30" },
            ].map((service, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link href={service.href} className="glass-card rounded-2xl p-6 block group">
                  <div className={`w-12 h-12 rounded-xl ${service.bg} border ${service.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gradient transition-all">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{service.desc}</p>
                  <span className="text-purple-400 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

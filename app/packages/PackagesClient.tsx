"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, X, ArrowRight, HelpCircle } from "lucide-react";
import CTASection from "@/components/sections/CTASection";
import CustomPackageBuilder from "@/components/CustomPackageBuilder";
import { getWhatsAppLink } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "New Business",
    price: "AED 1,999",
    period: "One-Time Payment",
    description: "Perfect for businesses that just registered and need to get online fast.",
    color: "from-blue-600/20 to-cyan-600/20",
    border: "border-blue-500/30",
    buttonClass: "btn-secondary",
    features: [
      { label: "1-Page Professional Website", included: true },
      { label: "Mobile Responsive Design", included: true },
      { label: "Instagram Profile Setup", included: true },
      { label: "Facebook Business Page", included: true },
      { label: "Google My Business Setup", included: true },
      { label: "WhatsApp Business Setup", included: true },
      { label: "Basic SEO Foundation", included: true },
      { label: "Social Media Management", included: false },
      { label: "Google Ads", included: false },
      { label: "SEO Optimization", included: false },
      { label: "Lead Tracking Dashboard", included: false },
      { label: "Monthly Strategy Calls", included: false },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Wants Customers",
    price: "AED 4,999",
    period: "+ AED 2,500/month",
    description: "For businesses ready to actively market and get a steady flow of customers.",
    color: "from-purple-600/30 to-blue-600/20",
    border: "border-purple-500/50",
    popular: true,
    buttonClass: "btn-primary",
    features: [
      { label: "5-Page Business Website", included: true },
      { label: "Mobile Responsive Design", included: true },
      { label: "Social Media Setup (3 Platforms)", included: true },
      { label: "Social Media Management (20 posts/mo)", included: true },
      { label: "Google My Business Optimization", included: true },
      { label: "SEO Basics + Content (2 posts/mo)", included: true },
      { label: "Google Ads Setup", included: true },
      { label: "WhatsApp Business Integration", included: true },
      { label: "Monthly Performance Report", included: true },
      { label: "Lead Tracking Dashboard", included: false },
      { label: "Weekly Strategy Calls", included: false },
      { label: "CRM Integration", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Serious Business",
    price: "AED 9,999",
    period: "+ AED 5,000/month",
    description: "The complete growth engine for businesses serious about dominating their market.",
    color: "from-amber-600/20 to-orange-600/20",
    border: "border-amber-500/30",
    buttonClass: "btn-secondary",
    features: [
      { label: "Full Website + Sales Funnel", included: true },
      { label: "Mobile Responsive Design", included: true },
      { label: "Social Media Management (All Platforms)", included: true },
      { label: "Advanced Content Strategy", included: true },
      { label: "Full SEO + Content (4 posts/mo)", included: true },
      { label: "Google Ads Management", included: true },
      { label: "Lead Tracking Dashboard", included: true },
      { label: "CRM Integration", included: true },
      { label: "Weekly Strategy Calls", included: true },
      { label: "Priority Support", included: true },
      { label: "Video Content", included: true },
      { label: "Dedicated Account Manager", included: true },
    ],
  },
];

const comparisonFeatures = [
  "Website Pages",
  "Social Media Platforms",
  "Monthly Social Posts",
  "SEO Optimization",
  "Google Ads",
  "Lead Tracking",
  "Strategy Calls",
  "Support",
  "Delivery Time",
];

const comparisonData = [
  ["1 Page", "3 Platforms", "—", "Basic", "—", "—", "—", "Email", "7 Days"],
  ["5 Pages", "3 Platforms", "20 Posts", "Full", "Setup", "—", "Monthly", "Email + WhatsApp", "14 Days"],
  ["10+ Pages", "All Platforms", "30+ Posts", "Advanced", "Managed", "Dashboard", "Weekly", "Priority", "14 Days"],
];

export default function PackagesPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Header */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
        >
          Simple, transparent pricing
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-white mb-6"
        >
          Choose Your{" "}
          <span className="text-gradient">Growth Plan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-4"
        >
          All packages come with our 14-day delivery guarantee. No hidden fees. No surprise charges.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-amber-500/10 border border-amber-500/30 text-amber-400"
        >
          ⚡ Limited slots available — only 5 new clients onboarded per month
        </motion.div>
      </section>

      {/* Packages */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              id={pkg.id}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className={`relative rounded-3xl p-8 bg-gradient-to-b ${pkg.color} border ${pkg.border} ${pkg.popular ? "shadow-2xl shadow-purple-500/20 lg:scale-105" : ""}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full text-sm font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
                    🔥 Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-slate-300 uppercase tracking-widest">
                  {pkg.tagline}
                </span>
                <h2 className="text-3xl font-black text-white mt-3 mb-2">{pkg.name}</h2>
                <p className="text-slate-400 text-sm mb-4">{pkg.description}</p>
                <div>
                  <span className="text-4xl font-black text-gradient">{pkg.price}</span>
                  <div className="text-slate-400 text-sm mt-1">{pkg.period}</div>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className={`flex items-center gap-2.5 text-sm ${f.included ? "text-slate-200" : "text-slate-600"}`}>
                    {f.included ? (
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-slate-700 shrink-0" />
                    )}
                    {f.label}
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Link
                  href="/start"
                  className={`block text-center py-4 rounded-xl font-bold text-sm transition-all ${pkg.buttonClass}`}
                >
                  Get {pkg.name} Plan
                </Link>
                <a
                  href={getWhatsAppLink(`Hi! I'm interested in the ${pkg.name} plan (${pkg.price}). Can you tell me more?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl font-semibold text-sm text-slate-400 hover:text-white transition-colors"
                >
                  Ask via WhatsApp →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Guarantee Banner */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 text-center"
          style={{
            background: "linear-gradient(rgba(10,22,40,0.95), rgba(10,22,40,0.95)) padding-box, linear-gradient(135deg, #7c3aed, #2563eb) border-box",
            border: "2px solid transparent",
          }}
        >
          <div className="text-5xl mb-4">🛡️</div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Our 14-Day Delivery Guarantee</h2>
          <p className="text-slate-300 max-w-xl mx-auto">
            If your complete digital presence isn't delivered within <strong className="text-white">14 days of kickoff</strong> — we work for free until it is. That's our promise to every UAE business we work with.
          </p>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="relative z-10 max-w-3xl mx-auto px-4 md:px-8 pb-20">
        <h2 className="text-3xl font-black text-white text-center mb-10">
          Package FAQs
        </h2>
        <div className="space-y-4">
          {[
            { q: "Can I upgrade my package later?", a: "Absolutely! You can upgrade from Starter to Growth or Pro at any time. We'll credit the original package cost towards your upgrade." },
            { q: "What does 'one-time' mean for the Starter?", a: "The Starter package is a one-time setup fee with no ongoing monthly costs. You get everything listed set up and ready to go. You own everything." },
            { q: "Are there additional ad spend costs?", a: "The package fees cover our work. For Google Ads, the actual ad spend (budget for Google) is separate and goes directly to Google. We recommend AED 1,500-3,000/month in ad spend." },
            { q: "What if I want a custom package?", a: "We build custom packages for businesses with unique needs. Contact us via WhatsApp and we'll put together a tailored proposal." },
            { q: "Do you require a contract?", a: "Monthly retainer services (Growth and Pro) can be cancelled with 30 days notice. No lock-in periods. One-time packages (Starter) have no contracts." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-purple-400 shrink-0" />
                {faq.q}
              </h3>
              <p className="text-slate-400 text-sm pl-6">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CustomPackageBuilder />

      <CTASection
        headline="Not Sure Which Package? Let's Talk."
        subheadline="Book a free 15-minute call and we'll recommend the right package for your business stage and goals."
        primaryLabel="Book Free Consultation"
        primaryHref="/book"
      />
    </div>
  );
}

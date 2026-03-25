"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ArrowRight, TrendingUp, Users, Star } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import CTASection from "@/components/sections/CTASection";
import { getWhatsAppLink } from "@/lib/utils";

interface CaseStudy {
  title: string;
  before: string;
  after: string;
  strategy: string;
  result: string;
}

interface IndustryPageProps {
  emoji: string;
  industry: string;
  headline: string;
  subheadline: string;
  challenges: string[];
  solutions: { title: string; desc: string }[];
  caseStudy: CaseStudy;
  keywords: string[];
  testimonial: { name: string; business: string; quote: string };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function IndustryPageTemplate({
  emoji,
  industry,
  headline,
  subheadline,
  challenges,
  solutions,
  caseStudy,
  keywords,
  testimonial,
}: IndustryPageProps) {
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
            className="text-6xl mb-6"
          >
            {emoji}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
          >
            Specialized for {industry} Businesses in UAE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            {headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 mb-10"
          >
            {subheadline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/start" className="btn-primary text-base px-8 py-4">
              Grow My {industry} Business
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={getWhatsAppLink(`Hi! I have a ${industry} business in UAE and want to get more clients. Can you help?`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Challenges */}
      <section className="section-padding bg-[#030810]/50 relative z-10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            Common Challenges for{" "}
            <span className="text-gradient">{industry} Businesses</span> in UAE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex items-start gap-3 glass-card rounded-xl p-5"
              >
                <span className="text-red-400 font-bold mt-0.5">✕</span>
                <span className="text-slate-300 text-sm">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            How We <span className="text-gradient">Fix</span> This For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mb-3" />
                <h3 className="font-bold text-white mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-[#030810]/50 relative z-10">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            Real Results: {industry} Business in UAE
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 md:p-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-red-500/5 border border-red-500/20">
                <div className="text-2xl mb-2">📉</div>
                <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">Before</div>
                <p className="text-slate-300 text-sm">{caseStudy.before}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Strategy</div>
                <p className="text-slate-300 text-sm">{caseStudy.strategy}</p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-green-500/5 border border-green-500/20">
                <div className="text-2xl mb-2">📈</div>
                <div className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">After</div>
                <p className="text-slate-300 text-sm">{caseStudy.after}</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/30">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">{caseStudy.result}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Keywords Section (SEO) */}
      <section className="section-padding relative z-10">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-black text-white text-center mb-6">
            We Rank You For Keywords Like These
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {keywords.map((kw, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="px-4 py-2 rounded-full text-sm font-medium glass border border-purple-500/30 text-purple-300"
              >
                {kw}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial + Form */}
      <section className="section-padding bg-[#030810]/50 relative z-10">
        <div className="container-custom max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-black text-white mb-8">
                What{" "}
                <span className="text-gradient">{industry} Owners</span>{" "}
                Say About Us
              </h2>
              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.business}</div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "30 Days", label: "To First Clients" },
                  { value: "14 Days", label: "Delivery Guarantee" },
                  { value: "100%", label: "UAE-Focused" },
                  { value: "5★", label: "Client Rating" },
                ].map((stat, i) => (
                  <div key={i} className="glass-card rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-gradient">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <LeadForm
                source={`industry-${industry.toLowerCase()}`}
                title={`Grow Your ${industry} Business`}
                subtitle="Free consultation — we'll build your growth plan"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Ready to Get More ${industry} Clients?`}
        subheadline={`Join UAE ${industry.toLowerCase()} businesses growing with Zenthoz. Get your first clients in 30 days.`}
      />
    </div>
  );
}

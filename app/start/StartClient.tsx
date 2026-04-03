"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Clock, Shield, Users, Star } from "lucide-react";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { getWhatsAppLink } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const includedFeatures = [
  "Professional website live in 7 days",
  "Social media profiles set up",
  "Google My Business optimized",
  "WhatsApp Business configured",
  "Lead capture forms installed",
  "Mobile-first responsive design",
  "SEO foundation built in",
  "Free strategy consultation",
];

const trustPoints = [
  { icon: Clock, text: "7–14 Day Delivery", desc: "From signup to live" },
  { icon: Shield, text: "14-Day Guarantee", desc: "Or we work for free" },
  { icon: Users, text: "35+ UAE Businesses", desc: "Already launched" },
  { icon: Star, text: "5-Star Support", desc: "WhatsApp & email" },
];

export default function StartClient() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Your journey starts here — 🇦🇪 UAE businesses only
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
          >
            Launch Your Business Online{" "}
            <span className="text-gradient">&amp; Get Clients</span>
            <br />in 30 Days
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Fill in the form below and our team will contact you within 2 hours to plan your digital launch strategy — completely free.
          </motion.p>
        </div>

        {/* Trust Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {trustPoints.map((tp, i) => (
            <div key={i} className="glass-card rounded-xl p-4 text-center">
              <tp.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <div className="text-sm font-semibold text-white">{tp.text}</div>
              <div className="text-xs text-slate-500 mt-0.5">{tp.desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — What's Included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-black text-white mb-6">
              What's Included in Your
              <span className="text-gradient"> Free Consultation</span>
            </h2>

            <ul className="space-y-3 mb-8">
              {includedFeatures.map((f, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-white mb-2">14-Day Delivery Guarantee</h3>
              <p className="text-slate-400 text-sm">
                If your complete digital presence isn't delivered within 14 days of kickoff — we work for free until it is. Zero risk for you.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Prefer WhatsApp?</div>
                  <div className="text-xs text-slate-400">Reply in under 30 minutes</div>
                </div>
              </div>
              <a
                href={getWhatsAppLink("Hi! I want to launch my business online in UAE. Can you help me?")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                WhatsApp Us Now
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <LeadForm
              source="start-page"
              title="Start My Business Online"
              subtitle="Free consultation • Reply within 2 hours • No commitment"
            />
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-2xl font-black text-white text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: "Do I need to have a trade license already?", a: "No! We can help you plan your digital strategy even before you have a trade license. We'll be ready to launch the moment you're registered." },
              { q: "How soon will my website be live?", a: "Most websites go live within 7–14 days of project kickoff. Our 14-day delivery guarantee backs this up." },
              { q: "What if I'm not happy with the result?", a: "We offer unlimited revisions until you're 100% satisfied. Your success is our priority." },
              { q: "Do you support Arabic language?", a: "Yes! We build bilingual (Arabic & English) websites for UAE businesses that want to reach all customer segments." },
              { q: "Is there a long-term contract?", a: "Monthly retainers can be cancelled with 30 days notice. No lock-in contracts. One-time packages have no recurring fees." },
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
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-slate-400 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

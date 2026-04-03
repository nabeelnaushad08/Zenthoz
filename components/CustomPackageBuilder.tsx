"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, MessageCircle, Loader2 } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  price: number;
  popular?: boolean;
  emoji: string;
}

const serviceOptions: ServiceOption[] = [
  { id: "website", emoji: "🌐", title: "Professional Website", desc: "Mobile-first, SEO-ready website (up to 5 pages)", price: 1999, popular: true },
  { id: "social", emoji: "📱", title: "Social Media Setup", desc: "Instagram, Facebook & LinkedIn profile setup + branding", price: 799 },
  { id: "gmb", emoji: "📍", title: "Google My Business", desc: "Fully optimised GMB listing so customers find you locally", price: 499 },
  { id: "seo", emoji: "🔍", title: "SEO Foundation", desc: "On-page SEO, keyword strategy & Google ranking plan", price: 1499, popular: true },
  { id: "google-ads", emoji: "🎯", title: "Google Ads Campaign", desc: "Targeted paid ads that bring ready-to-buy customers", price: 1999 },
  { id: "social-mgmt", emoji: "✍️", title: "Social Media Management", desc: "Monthly content creation & posting (4×/week)", price: 1500 },
  { id: "whatsapp", emoji: "💬", title: "WhatsApp Business Setup", desc: "Business profile, catalogue & auto-reply configured", price: 299 },
  { id: "leads", emoji: "⚡", title: "Lead Generation Funnel", desc: "Landing page + lead capture form + follow-up automation", price: 2499 },
  { id: "bilingual", emoji: "🌍", title: "Arabic + English Content", desc: "Bilingual website copy & social content for both audiences", price: 899 },
  { id: "analytics", emoji: "📊", title: "Analytics & Reporting", desc: "Google Analytics + monthly performance report", price: 399 },
];

const DISCOUNT_THRESHOLD = 3;
const BUNDLE_DISCOUNT = 0.15; // 15% off for 3+ services

export default function CustomPackageBuilder() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedServices = serviceOptions.filter((s) => selected.has(s.id));
  const subtotal = selectedServices.reduce((sum, s) => sum + s.price, 0);
  const hasDiscount = selected.size >= DISCOUNT_THRESHOLD;
  const discount = hasDiscount ? Math.round(subtotal * BUNDLE_DISCOUNT) : 0;
  const total = subtotal - discount;

  const buildWhatsAppMessage = () => {
    const serviceList = selectedServices.map((s) => `• ${s.title} (AED ${s.price.toLocaleString()})`).join("\n");
    return `Hi! I'd like a custom package quote.\n\nName: ${name || "N/A"}\nPhone: ${phone || "N/A"}\n\nSelected Services:\n${serviceList}\n\nEstimated Total: AED ${total.toLocaleString()}${hasDiscount ? ` (15% bundle discount applied)` : ""}\n\nPlease get back to me with a confirmed quote.`;
  };

  const handleWhatsApp = () => {
    if (selectedServices.length === 0) return;
    window.open(getWhatsAppLink(buildWhatsAppMessage()), "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedServices.length === 0) return;
    setLoading(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ff1b416c-54ca-4a11-b0ff-cb74ceb865c7";
    const serviceList = selectedServices.map((s) => `${s.title} — AED ${s.price.toLocaleString()}`).join(", ");

    const payload = {
      access_key: accessKey,
      subject: `Custom Package Request | ${name || "Unknown"} | AED ${total.toLocaleString()} | Zenthoz UAE`,
      from_name: "Zenthoz UAE Website",
      replyto: "",
      message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOM PACKAGE REQUEST — ZENTHOZ UAE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name:    ${name || "Not provided"}
📱 Phone:   ${phone || "Not provided"}
📦 Services: ${serviceList}
💰 Subtotal: AED ${subtotal.toLocaleString()}
${hasDiscount ? `🎁 Discount: -AED ${discount.toLocaleString()} (15% bundle)` : ""}
✅ Total:    AED ${total.toLocaleString()}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (UAE Time)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
      "Name": name,
      "Phone": phone,
      "Selected Services": serviceList,
      "Estimated Total": `AED ${total.toLocaleString()}`,
    };

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      // Fallback to WhatsApp if form fails
      handleWhatsApp();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
          >
            ✨ Build Your Own Package
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white mb-4"
          >
            Customise Exactly What{" "}
            <span className="text-gradient">You Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Pick the services your business needs. Get a 15% bundle discount when you select 3 or more.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Picker */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceOptions.map((service, i) => {
                const isSelected = selected.has(service.id);
                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => toggle(service.id)}
                    className={`relative text-left p-5 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? "border-purple-500/60 bg-purple-600/10 shadow-lg shadow-purple-500/10"
                        : "border-white/10 bg-white/3 hover:border-purple-500/30 hover:bg-white/5"
                    }`}
                  >
                    {service.popular && (
                      <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        Popular
                      </span>
                    )}
                    <div className="flex items-start gap-3">
                      <span className="text-2xl shrink-0 mt-0.5">{service.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm mb-1 pr-14">{service.title}</div>
                        <div className="text-xs text-slate-500 mb-2 leading-relaxed">{service.desc}</div>
                        <div className="text-sm font-bold text-gradient">AED {service.price.toLocaleString()}</div>
                      </div>
                      <div className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? "border-purple-500 bg-purple-500" : "border-slate-600"
                      }`}>
                        {isSelected && <CheckCircle className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Summary + Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 glass-card rounded-2xl p-6">
              <h3 className="font-black text-white text-lg mb-4">Your Package</h3>

              {/* Selected services list */}
              <div className="min-h-[80px] mb-4">
                {selectedServices.length === 0 ? (
                  <p className="text-slate-500 text-sm italic">Select services from the left to build your package.</p>
                ) : (
                  <ul className="space-y-2">
                    <AnimatePresence>
                      {selectedServices.map((s) => (
                        <motion.li
                          key={s.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-slate-300 flex items-center gap-1.5">
                            <span>{s.emoji}</span> {s.title}
                          </span>
                          <span className="text-slate-400 shrink-0 ml-2">AED {s.price.toLocaleString()}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {selectedServices.length > 0 && (
                <>
                  <div className="border-t border-white/10 pt-4 mb-4 space-y-1">
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Subtotal</span>
                      <span>AED {subtotal.toLocaleString()}</span>
                    </div>
                    {hasDiscount && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-between text-sm text-green-400"
                      >
                        <span>Bundle discount (15%)</span>
                        <span>-AED {discount.toLocaleString()}</span>
                      </motion.div>
                    )}
                    <div className="flex justify-between font-black text-white text-lg pt-1">
                      <span>Estimated Total</span>
                      <span className="text-gradient">AED {total.toLocaleString()}</span>
                    </div>
                    {!hasDiscount && (
                      <p className="text-xs text-slate-500 mt-1">
                        Add {DISCOUNT_THRESHOLD - selected.size} more service{DISCOUNT_THRESHOLD - selected.size !== 1 ? "s" : ""} for 15% off
                      </p>
                    )}
                  </div>

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                      />
                      <input
                        type="tel"
                        placeholder="+971 54 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                      />
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full justify-center text-sm py-3"
                      >
                        {loading ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        ) : (
                          <>Get My Quote <ArrowRight className="w-4 h-4" /></>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="btn-whatsapp w-full justify-center text-sm py-3"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Discuss on WhatsApp
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                      </div>
                      <p className="text-white font-semibold mb-1">Quote Request Sent!</p>
                      <p className="text-slate-400 text-sm mb-4">We'll contact you within 2 hours with a confirmed quote.</p>
                      <button
                        onClick={handleWhatsApp}
                        className="btn-whatsapp w-full justify-center text-sm py-3"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Us Now
                      </button>
                    </motion.div>
                  )}
                </>
              )}

              {selectedServices.length === 0 && (
                <div className="pt-2">
                  <div className="text-xs text-slate-500 text-center">
                    Or contact us directly for a fully custom solution
                  </div>
                  <a
                    href={getWhatsAppLink("Hi! I'd like to discuss a custom digital marketing package for my UAE business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm py-3 mt-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Chat with Us
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

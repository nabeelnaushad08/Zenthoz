"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, MessageCircle, Loader2 } from "lucide-react";
import {
  WebDesignIcon, SocialMediaIcon, MapPinIcon, SEOIcon, GoogleAdsIcon,
  ContentIcon, WhatsAppIcon, LeadGenIcon, BilingualIcon, AnalyticsIcon,
} from "@/components/ServiceIcons";
import { getWhatsAppLink } from "@/lib/utils";

interface ServiceOption {
  id: string;
  title: string;
  desc: string;
  popular?: boolean;
  Icon: (props: { size?: number }) => JSX.Element;
}

const serviceOptions: ServiceOption[] = [
  { id: "website",      Icon: WebDesignIcon,   title: "Professional Website",       desc: "Mobile-first, SEO-ready website (up to 5 pages)",              popular: true },
  { id: "social",       Icon: SocialMediaIcon,  title: "Social Media Setup",          desc: "Instagram, Facebook & LinkedIn profile setup + branding"                    },
  { id: "gmb",          Icon: MapPinIcon,       title: "Google My Business",          desc: "Fully optimised GMB listing so customers find you locally"                  },
  { id: "seo",          Icon: SEOIcon,          title: "SEO Foundation",              desc: "On-page SEO, keyword strategy & Google ranking plan",          popular: true },
  { id: "google-ads",   Icon: GoogleAdsIcon,    title: "Google Ads Campaign",         desc: "Targeted paid ads that bring ready-to-buy customers"                        },
  { id: "social-mgmt",  Icon: ContentIcon,      title: "Social Media Management",     desc: "Monthly content creation & posting (4×/week)"                              },
  { id: "whatsapp",     Icon: WhatsAppIcon,     title: "WhatsApp Business Setup",     desc: "Business profile, catalogue & auto-reply configured"                        },
  { id: "leads",        Icon: LeadGenIcon,      title: "Lead Generation Funnel",      desc: "Landing page + lead capture form + follow-up automation"                   },
  { id: "bilingual",    Icon: BilingualIcon,    title: "Arabic + English Content",    desc: "Bilingual website copy & social content for both audiences"                },
  { id: "analytics",    Icon: AnalyticsIcon,    title: "Analytics & Reporting",       desc: "Google Analytics + monthly performance report"                             },
];

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

  const buildWhatsAppMessage = () => {
    const serviceList = selectedServices.map((s) => `• ${s.title}`).join("\n");
    return `Hi! I'd like a custom package quote.\n\nName: ${name || "N/A"}\nPhone: ${phone || "N/A"}\n\nServices I'm interested in:\n${serviceList}\n\nPlease get back to me with a quote.`;
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
    const serviceList = selectedServices.map((s) => s.title).join(", ");

    const payload = {
      access_key: accessKey,
      subject: `Custom Package Request | ${name || "Unknown"} | Zenthoz UAE`,
      from_name: "Zenthoz UAE Website",
      replyto: "",
      message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOM PACKAGE REQUEST — ZENTHOZ UAE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name:     ${name || "Not provided"}
📱 Phone:    ${phone || "Not provided"}
📦 Services: ${serviceList}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (UAE Time)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
      "Name": name,
      "Phone": phone,
      "Selected Services": serviceList,
    };

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      setSubmitted(true);
    } catch {
      handleWhatsApp();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-[#030810]/50">
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
            Select the services you need, add your contact details, and we'll send you a personalised quote within 2 hours.
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
                      <div className="shrink-0 mt-0.5">
                        <service.Icon size={40} />
                      </div>
                      <div className="flex-1 min-w-0 pr-10">
                        <div className="font-semibold text-white text-sm mb-1">{service.title}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{service.desc}</div>
                      </div>
                      <div className={`absolute top-5 right-5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
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
              <h3 className="font-black text-white text-lg mb-1">Your Selection</h3>
              <p className="text-slate-500 text-xs mb-4">
                We'll send you a custom quote based on your needs.
              </p>

              {/* Selected services list */}
              <div className="min-h-[80px] mb-5">
                {selectedServices.length === 0 ? (
                  <p className="text-slate-600 text-sm italic">No services selected yet — pick from the left.</p>
                ) : (
                  <ul className="space-y-2">
                    <AnimatePresence>
                      {selectedServices.map((s) => (
                        <motion.li
                          key={s.id}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          className="flex items-center gap-2 text-sm text-slate-300"
                        >
                          <s.Icon size={22} />
                          <span>{s.title}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}
              </div>

              {selectedServices.length > 0 && (
                <>
                  <div className="border-t border-white/10 pt-4 mb-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {selectedServices.length} service{selectedServices.length !== 1 ? "s" : ""} selected — fill in your details and we'll prepare a tailored quote for you.
                    </p>
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
                      <p className="text-slate-400 text-sm mb-4">We received your details and will contact you within 2 hours.</p>
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
                <div className="pt-2 border-t border-white/10">
                  <p className="text-xs text-slate-500 text-center mb-3">
                    Or reach us directly for a fully custom solution
                  </p>
                  <a
                    href={getWhatsAppLink("Hi! I'd like to discuss a custom digital marketing package for my UAE business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center text-sm py-3 flex items-center gap-2"
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

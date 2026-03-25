"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star } from "lucide-react";
import { getWhatsAppLink, CALENDLY_URL } from "@/lib/utils";

export default function BookPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-600/10 border border-purple-500/30 text-purple-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Free consultation — no commitment
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight"
            >
              Book Your Free{" "}
              <span className="text-gradient">Strategy Call</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-8"
            >
              In 30 minutes, we'll map out exactly how to launch your business online and get your first clients in UAE — for free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-10"
            >
              <h3 className="font-semibold text-white">What we cover in the call:</h3>
              {[
                "Your business goals and target clients",
                "Which digital channels will bring you clients fastest",
                "Exact package recommendation for your budget",
                "Timeline to your first 10 clients",
                "Questions you have about digital marketing in UAE",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 mb-10"
            >
              {[
                { icon: Clock, label: "30 min call" },
                { icon: Users, label: "100% free" },
                { icon: Star, label: "No hard sell" },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4 text-center">
                  <item.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                  <div className="text-xs font-medium text-slate-300">{item.label}</div>
                </div>
              ))}
            </motion.div>

            {/* WhatsApp Alternative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <p className="text-sm text-slate-400 mb-4">
                Prefer not to schedule a call? WhatsApp us and we'll have a quick text chat instead.
              </p>
              <a
                href={getWhatsAppLink("Hi! I'd like to discuss how Zenthoz can help my UAE business. I'm interested in a free consultation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp Instead
              </a>
            </motion.div>
          </div>

          {/* Right - Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h2 className="font-bold text-white">Schedule Your Call</h2>
                <p className="text-slate-400 text-sm">Pick a time that works for you</p>
              </div>
              {/* Calendly embed placeholder */}
              <div className="p-6">
                <div className="rounded-2xl bg-white/3 border border-white/5 p-8 text-center min-h-[400px] flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">📅</div>
                  <h3 className="text-xl font-bold text-white mb-2">Book via Calendly</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Click the button below to pick your preferred time slot.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-4"
                  >
                    Open Calendly Scheduler
                  </a>
                  <p className="text-slate-600 text-xs mt-4">
                    Available Sunday–Thursday, 9am–6pm UAE time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

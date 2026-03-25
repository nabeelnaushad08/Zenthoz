"use client";

import { motion } from "framer-motion";

const trustItems = [
  { icon: "🇦🇪", text: "Built for UAE Businesses" },
  { icon: "⚡", text: "Fast Delivery (7–14 Days)" },
  { icon: "💼", text: "Trusted by Service Businesses" },
  { icon: "📈", text: "Focused on Getting You Clients" },
  { icon: "🔒", text: "14-Day Delivery Guarantee" },
  { icon: "💬", text: "WhatsApp Support" },
];

export default function TrustStrip() {
  return (
    <section className="py-8 border-y border-purple-900/20 bg-[#030810]/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-0">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-0 shrink-0"
        >
          {[...trustItems, ...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-2 shrink-0"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{item.text}</span>
              <span className="text-purple-600/50 mx-4">|</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

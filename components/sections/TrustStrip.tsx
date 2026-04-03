"use client";

import { motion } from "framer-motion";
import { SpeedIcon, ServiceBizIcon, GrowthEngineIcon, SecurityIcon, WhatsAppIcon } from "@/components/ServiceIcons";

const trustItems = [
  {
    Icon: () => <span className="text-xl">🇦🇪</span>,
    text: "Built for UAE Businesses",
  },
  { Icon: () => <SpeedIcon size={28} />, text: "Fast Delivery (7–14 Days)" },
  { Icon: () => <ServiceBizIcon size={28} />, text: "Trusted by Service Businesses" },
  { Icon: () => <GrowthEngineIcon size={28} />, text: "Focused on Getting You Clients" },
  { Icon: () => <SecurityIcon size={28} />, text: "14-Day Delivery Guarantee" },
  { Icon: () => <WhatsAppIcon size={28} />, text: "WhatsApp Support" },
];

export default function TrustStrip() {
  return (
    <section className="py-6 border-y border-purple-900/20 bg-[#030810]/80 backdrop-blur-sm overflow-hidden">
      <div className="flex items-center gap-0">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-0 shrink-0"
        >
          {[...trustItems, ...trustItems, ...trustItems].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-8 py-1 shrink-0"
            >
              <item.Icon />
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">{item.text}</span>
              <span className="text-purple-600/50 mx-4">|</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, MessageCircle, Mail, Phone } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { getWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-xl mx-auto"
          >
            Ready to launch your business online? Fill in the form or reach out directly via WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-black text-white mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group hover:border-green-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center shrink-0 group-hover:bg-green-600/30 transition-colors">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-slate-400 text-sm">+971 50 000 0000</div>
                  <div className="text-green-400 text-xs mt-0.5">Fastest response — under 30 min</div>
                </div>
              </a>

              <a
                href="mailto:hello@zenthoz.com"
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group hover:border-blue-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-slate-400 text-sm">hello@zenthoz.com</div>
                  <div className="text-slate-500 text-xs mt-0.5">Reply within 4 hours</div>
                </div>
              </a>

              <div className="flex items-center gap-4 glass-card rounded-2xl p-5">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-slate-400 text-sm">Dubai, United Arab Emirates</div>
                  <div className="text-slate-500 text-xs mt-0.5">Serving all UAE cities</div>
                </div>
              </div>

              <div className="flex items-center gap-4 glass-card rounded-2xl p-5">
                <div className="w-12 h-12 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="font-semibold text-white">Business Hours</div>
                  <div className="text-slate-400 text-sm">Sunday – Thursday: 9am – 6pm</div>
                  <div className="text-slate-400 text-sm">Saturday: 10am – 2pm</div>
                  <div className="text-slate-500 text-xs mt-0.5">WhatsApp available 7 days</div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <div className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(rgba(10,22,40,0.9), rgba(10,22,40,0.9)) padding-box, linear-gradient(135deg, #25d366, #128c7e) border-box",
                border: "1px solid transparent",
              }}
            >
              <h3 className="font-bold text-white mb-2">Prefer to Chat?</h3>
              <p className="text-slate-400 text-sm mb-4">
                Message us on WhatsApp and get a response in under 30 minutes. Tell us about your business and we'll tell you exactly how we can help.
              </p>
              <a
                href={getWhatsAppLink("Hi! I want to learn more about how Zenthoz can help my UAE business get online and get clients.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full justify-center"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm
              source="contact-page"
              title="Send Us a Message"
              subtitle="We'll get back to you within 2 hours during business hours"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

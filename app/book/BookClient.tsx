"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Star, ArrowRight, Loader2 } from "lucide-react";
import { getWhatsAppLink, EMAIL } from "@/lib/utils";
import { CalendarIcon } from "@/components/ServiceIcons";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "2:00 PM", "2:30 PM", "3:00 PM",
  "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
];

// Generate next 14 weekdays (Sun–Thu, UAE working days)
function getAvailableDates(): { label: string; value: string }[] {
  const days: { label: string; value: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1); // start from tomorrow
  while (days.length < 14) {
    const dow = d.getDay(); // 0=Sun, 4=Thu
    if (dow >= 0 && dow <= 4) {
      days.push({
        label: d.toLocaleDateString("en-AE", { weekday: "short", day: "numeric", month: "short" }),
        value: d.toLocaleDateString("en-AE", { weekday: "long", day: "numeric", month: "long", year: "numeric" }),
      });
    }
    d.setDate(d.getDate() + 1);
  }
  return days;
}

export default function BookPage() {
  const availableDates = getAvailableDates();

  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", interest: "", date: "", time: "", notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.date || !form.time) { setError("Please select a preferred date and time."); return; }
    setLoading(true);
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "ff1b416c-54ca-4a11-b0ff-cb74ceb865c7";

    const payload = {
      access_key: accessKey,
      subject: `📅 Strategy Call Request | ${form.name} | ${form.date} at ${form.time} | Zenthoz UAE`,
      from_name: "Zenthoz UAE — Book Page",
      replyto: form.email,
      message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STRATEGY CALL BOOKING — ZENTHOZ UAE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 Preferred Date:  ${form.date}
⏰ Preferred Time:  ${form.time} (UAE time)

👤 Name:            ${form.name}
📧 Email:           ${form.email}
📱 Phone/WhatsApp:  ${form.phone}
🏢 Business Name:   ${form.business || "Not provided"}
🎯 Interested In:   ${form.interest || "General consultation"}

💬 Notes:
${form.notes || "None"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACTION REQUIRED: Confirm the call and send a calendar invite to ${form.email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (UAE Time)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
      "Full Name": form.name,
      "Email": form.email,
      "Phone / WhatsApp": form.phone,
      "Business": form.business || "—",
      "Interest": form.interest || "—",
      "Preferred Date": form.date,
      "Preferred Time": form.time,
      "Notes": form.notes || "—",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">

          {/* Left — Info */}
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
              className="space-y-3 mb-10"
            >
              <h3 className="font-semibold text-white mb-4">What we cover in the call:</h3>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-5"
            >
              <p className="text-sm text-slate-400 mb-4">
                Prefer a quick text chat? WhatsApp us directly — we usually reply within minutes.
              </p>
              <a
                href={getWhatsAppLink("Hi! I'd like to book a free strategy call to discuss growing my UAE business with Zenthoz.")}
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

          {/* Right — Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="glass-card rounded-3xl overflow-hidden">
              <div className="p-6 border-b border-white/5 flex items-center gap-3">
                <CalendarIcon size={36} />
                <div>
                  <h2 className="font-bold text-white">Schedule Your Call</h2>
                  <p className="text-slate-400 text-sm">Pick a date & time that works for you</p>
                </div>
              </div>

              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Request Sent!</h3>
                  <p className="text-slate-400 mb-1">
                    We received your booking request for <span className="text-white font-medium">{form.date}</span> at <span className="text-white font-medium">{form.time}</span>.
                  </p>
                  <p className="text-slate-400 text-sm mb-6">
                    We'll confirm and send you a calendar invite within 2 hours.
                  </p>
                  <a
                    href={getWhatsAppLink(`Hi! I just booked a strategy call for ${form.date} at ${form.time}. Looking forward to speaking!`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Confirm on WhatsApp
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {/* Date selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Preferred Date *
                    </label>
                    <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                      {availableDates.map((d) => (
                        <button
                          key={d.value}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, date: d.value }))}
                          className={`text-left text-xs px-3 py-2.5 rounded-xl border transition-all ${
                            form.date === d.value
                              ? "border-purple-500 bg-purple-600/15 text-white font-semibold"
                              : "border-white/10 text-slate-400 hover:border-purple-500/40 hover:bg-white/3"
                          }`}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Preferred Time (UAE) *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setForm((p) => ({ ...p, time: t }))}
                          className={`text-xs px-2 py-2 rounded-xl border transition-all ${
                            form.time === t
                              ? "border-purple-500 bg-purple-600/15 text-white font-semibold"
                              : "border-white/10 text-slate-400 hover:border-purple-500/40 hover:bg-white/3"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <p className="text-slate-600 text-xs mt-2">Available Sun–Thu, 9am–6pm UAE time</p>
                  </div>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 gap-3">
                    <input
                      name="name" required value={form.name} onChange={handleChange}
                      placeholder="Full name *"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                    />
                    <input
                      name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="Phone / WhatsApp * (+971 54 …)"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                    />
                    <input
                      name="email" required type="email" value={form.email} onChange={handleChange}
                      placeholder="Email address *"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                    />
                    <input
                      name="business" value={form.business} onChange={handleChange}
                      placeholder="Business name (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50"
                    />
                    <select
                      name="interest" value={form.interest} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-purple-500/50"
                    >
                      <option value="">What are you interested in?</option>
                      <option>Website Design</option>
                      <option>Social Media Management</option>
                      <option>SEO</option>
                      <option>Google Ads</option>
                      <option>Growth Engine (Full System)</option>
                      <option>Not sure — need advice</option>
                    </select>
                    <textarea
                      name="notes" value={form.notes} onChange={handleChange} rows={2}
                      placeholder="Anything you'd like us to know before the call? (optional)"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500/50 resize-none"
                    />
                  </div>

                  {error && <p className="text-red-400 text-sm">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center text-base py-4"
                  >
                    {loading ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Booking...</>
                    ) : (
                      <>Confirm My Call Booking <ArrowRight className="w-5 h-5" /></>
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-500">
                    We'll confirm your slot and send you a calendar invite within 2 hours
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { getWhatsAppLink, EMAIL } from "@/lib/utils";

interface LeadFormProps {
  source?: string;
  packageName?: string;
  title?: string;
  subtitle?: string;
}

export default function LeadForm({
  source = "website",
  packageName,
  title = "Get Your Free Consultation",
  subtitle = "Fill in the form and we'll contact you within 2 hours",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business_name: "",
    industry: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

    const payload = {
      access_key: accessKey || "YOUR_WEB3FORMS_KEY",
      subject: `New Lead — ${packageName || "General Enquiry"} | ${formData.name} | Zenthoz UAE`,
      from_name: "Zenthoz UAE Website",
      replyto: formData.email,
      // Format a clean email body
      message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW LEAD — ZENTHOZ UAE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Name:          ${formData.name}
📧 Email:         ${formData.email}
📱 Phone/WhatsApp:${formData.phone}
🏢 Business Name: ${formData.business_name || "Not provided"}
🏭 Industry:      ${formData.industry || "Not specified"}
📦 Package Interest: ${packageName || "General Enquiry"}
🌐 Source:        ${source}

💬 Message:
${formData.message || "No message provided"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: ${new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" })} (UAE Time)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `.trim(),
      // Also send structured fields so Web3Forms formats them nicely
      "Full Name": formData.name,
      "Email Address": formData.email,
      "Phone / WhatsApp": formData.phone,
      "Business Name": formData.business_name || "—",
      Industry: formData.industry || "—",
      "Package Interest": packageName || "General Enquiry",
      Source: source,
      "Their Message": formData.message || "—",
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
    } catch (err: any) {
      console.error(err);
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-slate-400 mb-2">
          We received your details and will contact you within 2 hours.
        </p>
        <p className="text-slate-500 text-sm mb-6">
          A confirmation has been sent to <span className="text-purple-400">{formData.email}</span>
        </p>
        <a
          href={getWhatsAppLink(
            `Hi! I just submitted a form on your website. My name is ${formData.name} and I'm interested in ${packageName || "your services"}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp justify-center w-full"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Us Now
        </a>
      </motion.div>
    );
  }

  return (
    <div className="glass-card rounded-2xl p-8">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-6">{subtitle}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ahmed Al-Rashid"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-400 mb-1.5">
              Phone / WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+971 54 000 0000"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="ahmed@business.ae"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Business Name
          </label>
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            placeholder="My Business LLC"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Industry
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-[#0a1628] border border-white/10 text-slate-300 focus:outline-none focus:border-purple-500/50 transition-all text-sm"
          >
            <option value="">Select your industry</option>
            <option value="Construction">Construction</option>
            <option value="Retail">Retail</option>
            <option value="HVAC">HVAC</option>
            <option value="Cleaning Services">Cleaning Services</option>
            <option value="Restaurant / F&B">Restaurant / F&B</option>
            <option value="Professional Services">Professional Services</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">
            Tell us about your business
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="I just registered my business and need help getting online..."
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all text-sm resize-none"
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center text-base py-4"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Get My Free Consultation
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-xs text-center text-slate-500">
          We'll reply within 2 hours •{" "}
          <a href={`mailto:${EMAIL}`} className="text-purple-400 hover:underline">
            {EMAIL}
          </a>
        </p>
      </form>
    </div>
  );
}

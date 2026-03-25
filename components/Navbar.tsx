"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Website Design", href: "/services/website" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "SEO", href: "/services/seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Growth Engine", href: "/services/growth-engine" },
];

const industries = [
  { label: "Construction", href: "/industries/construction" },
  { label: "Retail", href: "/industries/retail" },
  { label: "Service Businesses", href: "/industries/services" },
  { label: "HVAC", href: "/industries/hvac" },
  { label: "Cleaning Services", href: "/industries/cleaning" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050b18]/95 backdrop-blur-xl border-b border-purple-900/30 shadow-lg shadow-purple-900/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black text-gradient">ZENTHOZ</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-600/20 text-purple-400 border border-purple-600/30">
              UAE
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 glass rounded-xl py-2 border border-purple-900/30"
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-purple-600/10 transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/packages"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Packages
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                Industries <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {industriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-52 glass rounded-xl py-2 border border-purple-900/30"
                  >
                    {industries.map((i) => (
                      <Link
                        key={i.href}
                        href={i.href}
                        className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-purple-600/10 transition-colors"
                      >
                        {i.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/case-studies"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              Case Studies
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              About
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-4 py-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <Link href="/start" className="btn-primary text-sm px-4 py-2">
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-purple-900/30 bg-[#050b18]/98 backdrop-blur-xl"
          >
            <div className="px-4 py-6 space-y-1">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Home</Link>
              <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">Services</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMobileOpen(false)} className="block px-6 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">{s.label}</Link>
              ))}
              <Link href="/packages" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Packages</Link>
              <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">Industries</div>
              {industries.map((i) => (
                <Link key={i.href} href={i.href} onClick={() => setMobileOpen(false)} className="block px-6 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">{i.label}</Link>
              ))}
              <Link href="/case-studies" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">Case Studies</Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">About</Link>
              <div className="pt-4 flex flex-col gap-3">
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  WhatsApp Us Now
                </a>
                <Link href="/start" onClick={() => setMobileOpen(false)} className="btn-primary justify-center">
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

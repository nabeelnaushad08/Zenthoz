import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Zenthoz UAE | WhatsApp, Call or Email Us",
  description:
    "Contact Zenthoz UAE today. WhatsApp +971 54 198 9921 or email info@zenthoz.lk. Based in Dubai — serving all UAE. Free consultation available. Reply within 2 hours.",
  keywords: [
    "contact Zenthoz UAE",
    "digital marketing contact Dubai",
    "marketing agency contact UAE",
    "whatsapp digital agency UAE",
    "contact digital marketing Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Zenthoz UAE | WhatsApp +971 54 198 9921",
    description: "Contact us via WhatsApp, call or email. Based in Dubai, serving all UAE. Reply within 2 hours.",
    url: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

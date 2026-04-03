import type { Metadata } from "next";
import AboutClient from "./AboutClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Zenthoz UAE — Digital Growth Partner for UAE Businesses",
  description:
    "Zenthoz UAE is a Dubai-based digital growth partner helping new and growing UAE businesses get clients online in 30 days. Websites, SEO, social media & Google Ads — done for you.",
  keywords: [
    "about Zenthoz UAE",
    "digital marketing agency Dubai",
    "marketing company UAE",
    "digital agency about",
    "UAE digital marketing team",
    "marketing experts Dubai",
    "best digital agency UAE",
    "business growth partner UAE",
  ],
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: "About Zenthoz UAE — Digital Growth Partner for UAE Businesses",
    description: "Dubai-based digital growth partner helping UAE businesses get clients online in 30 days.",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

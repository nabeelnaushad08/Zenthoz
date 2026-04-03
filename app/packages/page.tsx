import type { Metadata } from "next";
import PackagesClient from "./PackagesClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing & Packages UAE | Website, Social Media & Marketing Plans | Zenthoz UAE",
  description:
    "Simple, transparent pricing for UAE businesses. Starter AED 1,999 one-time • Growth AED 4,999 + AED 2,500/mo • Pro AED 9,999 + AED 5,000/mo. 14-day delivery guarantee.",
  keywords: [
    "digital marketing packages UAE",
    "website design price Dubai",
    "digital marketing pricing UAE",
    "affordable digital marketing UAE",
    "marketing package Dubai",
    "website package UAE",
    "SEO pricing UAE",
    "Google Ads management price Dubai",
    "social media management price UAE",
    "cheap digital marketing UAE",
    "digital marketing cost Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/packages` },
  openGraph: {
    title: "Pricing & Packages | Digital Marketing UAE | Zenthoz UAE",
    description: "Starter AED 1,999 • Growth AED 4,999/mo • Pro AED 9,999/mo. 14-day delivery guarantee.",
    url: `${SITE_URL}/packages`,
  },
};

export default function PackagesPage() {
  return <PackagesClient />;
}

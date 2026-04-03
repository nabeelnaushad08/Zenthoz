import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
  description:
    "We take your new UAE business from 0 to clients in 30 days. Professional websites in 7 days, social media, Google Ads & full digital growth systems built exclusively for Dubai, Abu Dhabi & Sharjah businesses.",
  keywords: [
    "digital marketing agency Dubai",
    "website design UAE",
    "get clients UAE fast",
    "launch business online UAE",
    "digital marketing for new businesses UAE",
    "website design Dubai 7 days",
    "Google Ads UAE",
    "SEO Dubai",
    "social media marketing Dubai",
    "business online presence UAE",
    "digital agency Dubai affordable",
    "new business marketing UAE",
    "online marketing Dubai",
    "lead generation UAE",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
    description:
      "Websites, Social Media & Lead Generation — Done For You. Take your UAE business from 0 to clients in 30 days.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function HomePage() {
  return <HomeClient />;
}

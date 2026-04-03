import type { Metadata } from "next";
import StartClient from "./StartClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Start My Business Online in UAE — Free Consultation | Zenthoz UAE",
  description:
    "Launch your UAE business online in 30 days. Get a free consultation with Zenthoz UAE — professional website, social media setup, Google presence & lead generation done for you.",
  keywords: [
    "start business online UAE",
    "launch business digital UAE",
    "free digital consultation UAE",
    "new business website Dubai",
    "business setup digital Dubai",
    "get first clients UAE",
    "digital marketing new business UAE",
    "website for new business Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/start` },
  openGraph: {
    title: "Start My Business Online in UAE — Free Consultation | Zenthoz UAE",
    description: "Get your UAE business online in 30 days. Free consultation included.",
    url: `${SITE_URL}/start`,
  },
};

export default function StartPage() {
  return <StartClient />;
}

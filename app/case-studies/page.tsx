import type { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "UAE Business Success Stories & Case Studies | Zenthoz UAE",
  description:
    "Real results from real UAE businesses. See how construction companies, cleaning services, retail shops & more went from 0 to consistent leads with Zenthoz UAE digital marketing.",
  keywords: [
    "digital marketing results UAE",
    "case studies UAE business",
    "marketing success stories Dubai",
    "business growth UAE results",
    "digital marketing ROI UAE",
    "website results UAE",
    "Google Ads results Dubai",
    "SEO results UAE",
    "before after marketing UAE",
    "business transformation Dubai",
  ],
  alternates: { canonical: `${SITE_URL}/case-studies` },
  openGraph: {
    title: "UAE Business Success Stories & Case Studies | Zenthoz UAE",
    description: "Real results from UAE businesses. See how Zenthoz helped them go from 0 to consistent leads.",
    url: `${SITE_URL}/case-studies`,
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}

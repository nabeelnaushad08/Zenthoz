import type { Metadata } from "next";
import BookClient from "./BookClient";
import { SITE_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Book a Free Strategy Consultation | Zenthoz UAE",
  description:
    "Book a free 30-minute digital strategy call with Zenthoz UAE. We'll map out exactly how to launch your UAE business online and get your first clients in 30 days.",
  keywords: [
    "free consultation UAE",
    "digital marketing consultation Dubai",
    "book strategy call UAE",
    "free business consultation Dubai",
    "digital marketing advice UAE",
    "marketing consultation Abu Dhabi",
  ],
  alternates: { canonical: `${SITE_URL}/book` },
  openGraph: {
    title: "Book a Free Strategy Consultation | Zenthoz UAE",
    description: "Free 30-min strategy call. We'll map out how to get your UAE business clients in 30 days.",
    url: `${SITE_URL}/book`,
  },
};

export default function BookPage() {
  return <BookClient />;
}

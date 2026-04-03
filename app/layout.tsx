import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LocalBusinessSchema, WebsiteSchema } from "@/components/JsonLd";
import { SITE_URL, PHONE_DISPLAY, EMAIL } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
    template: "%s | Zenthoz UAE",
  },
  description:
    "Zenthoz UAE helps new businesses go from 0 to clients in 30 days. Professional websites, social media management, Google Ads, SEO & full growth systems — built exclusively for UAE businesses in Dubai, Abu Dhabi, Sharjah.",
  keywords: [
    "digital marketing agency UAE",
    "website design Dubai",
    "SEO services UAE",
    "Google Ads management Dubai",
    "social media marketing UAE",
    "business setup online UAE",
    "web design Abu Dhabi",
    "digital marketing Dubai",
    "online marketing UAE",
    "get clients UAE",
    "business growth UAE",
    "website development Dubai",
    "lead generation UAE",
    "digital agency Dubai",
    "marketing agency Abu Dhabi",
  ],
  authors: [{ name: "Zenthoz UAE", url: SITE_URL }],
  creator: "Zenthoz UAE",
  publisher: "Zenthoz UAE",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_URL,
    siteName: "Zenthoz UAE",
    title: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
    description:
      "Websites, Social Media & Lead Generation — Done For You. Take your UAE business from 0 to clients in 30 days.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Zenthoz UAE — Digital Growth for UAE Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenthoz UAE — Launch Your Business Online",
    description: "Get your first clients in 30 days. Done for you. Built for UAE.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#050b18" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="Dubai, United Arab Emirates" />
        <meta name="geo.position" content="25.2048;55.2708" />
        <meta name="ICBM" content="25.2048, 55.2708" />
        <meta name="contact" content={EMAIL} />
        <meta name="reply-to" content={EMAIL} />
      </head>
      <body className="bg-[#050b18] text-slate-100 font-sans antialiased overflow-x-hidden">
        <LocalBusinessSchema />
        <WebsiteSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

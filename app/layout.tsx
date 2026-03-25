import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
  description:
    "Zenthoz UAE helps new businesses go from 0 to clients in 30 days. Professional websites, social media, Google Ads, SEO & full growth systems — built for UAE businesses.",
  keywords:
    "digital marketing UAE, website design Dubai, SEO UAE, Google Ads Dubai, business setup UAE, online marketing Abu Dhabi",
  openGraph: {
    title: "Zenthoz UAE — Launch Your Business Online & Get Clients in 30 Days",
    description:
      "Websites, Social Media & Lead Generation — Done For You in the UAE.",
    url: "https://uae.zenthoz.com",
    siteName: "Zenthoz UAE",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenthoz UAE — Launch Your Business Online",
    description: "Get your first customers in 30 days. Done for you.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#050b18] text-slate-100 font-sans antialiased overflow-x-hidden">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

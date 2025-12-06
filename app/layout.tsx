import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcronIQ Research | Transforming Ideas into Intelligent Solutions",
  description: "We provide AI-driven insight and research to empower businesses and drive innovation. Discover Veritus, AcronIQ Signals, and BusinessHub.",
  keywords: ["AI research", "business intelligence", "market insights", "AI strategy", "AcronIQ"],
  authors: [{ name: "AcronIQ Research" }],
  icons: {
    icon: "/images/original/Acron first logo transparent.png",
    shortcut: "/images/original/Acron first logo transparent.png",
    apple: "/images/original/Acron first logo transparent.png",
  },
  openGraph: {
    title: "AcronIQ Research | AI-Powered Intelligence & Research",
    description: "Transforming Ideas into Intelligent Solutions with AI-driven research and market intelligence.",
    type: "website",
    locale: "en_GB",
    siteName: "AcronIQ Research",
    images: ["/images/original/Acron first logo transparent.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AcronIQ Research | AI-Powered Intelligence",
    description: "AI-driven insight and research to empower businesses.",
    images: ["/images/original/Acron first logo transparent.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

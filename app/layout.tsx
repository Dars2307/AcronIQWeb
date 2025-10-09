import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AcronIQ Research | Transforming Ideas into Intelligent Solutions",
  description: "We provide AI-driven insight and research to empower businesses and drive innovation. Discover TrueNorth, AcronIQ Signals, and NexusOne Portal.",
  keywords: ["AI research", "business intelligence", "market insights", "AI strategy", "AcronIQ"],
  authors: [{ name: "AcronIQ Research" }],
  openGraph: {
    title: "AcronIQ Research | AI-Powered Intelligence & Research",
    description: "Transforming Ideas into Intelligent Solutions with AI-driven research and market intelligence.",
    type: "website",
    locale: "en_GB",
    siteName: "AcronIQ Research",
  },
  twitter: {
    card: "summary_large_image",
    title: "AcronIQ Research | AI-Powered Intelligence",
    description: "AI-driven insight and research to empower businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

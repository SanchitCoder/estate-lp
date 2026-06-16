import LandingPage from "@/components/LandingPage";
import { megaWebinarConfig } from "@/lib/config-mega-webinar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(megaWebinarConfig.siteUrl),
  title: "2-Day AI Mega Webinar for Real Estate Agents | Estate Labs",
  description:
    "Free 2-day live mega webinar for real estate agents. Day 1: diagnose where deals leak. Day 2: build an AI-led follow-up system — without hiring extra staff.",
  openGraph: {
    title: "2-Day AI Mega Webinar | Estate Labs",
    description:
      "Two live evenings to fix follow-ups and build an AI-led system for your real estate business.",
    url: "https://www.estatelabs.io/mega-webinar",
    images: [
      {
        url: "https://www.estatelabs.io/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "Estate Labs 2-Day AI Mega Webinar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2-Day AI Mega Webinar | Estate Labs",
    description:
      "Two live evenings to fix follow-ups and build an AI-led system for your real estate business.",
    images: ["https://www.estatelabs.io/images/og-share.png"],
  },
};

export default function MegaWebinarPage() {
  return <LandingPage config={megaWebinarConfig} />;
}

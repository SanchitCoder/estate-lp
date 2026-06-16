import LandingPage from "@/components/LandingPage";
import { consultationConfig } from "@/lib/config-consultation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(consultationConfig.siteUrl),
  title: "Free 1:1 Consultation for Real Estate Agents | Estate Labs",
  description:
    "Book a free 30-minute private strategy call with Paras Arora. Get a personalised AI follow-up roadmap for your real estate agency.",
  openGraph: {
    title: "Free 1:1 Consultation | Estate Labs",
    description:
      "30-minute private call to diagnose follow-up gaps and build your custom AI implementation plan.",
    url: "https://www.estatelabs.io/consultation",
    images: [
      {
        url: "https://www.estatelabs.io/images/og-share.png",
        width: 1200,
        height: 630,
        alt: "Estate Labs Free 1:1 Consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free 1:1 Consultation | Estate Labs",
    description:
      "30-minute private call to diagnose follow-up gaps and build your custom AI implementation plan.",
    images: ["https://www.estatelabs.io/images/og-share.png"],
  },
};

export default function ConsultationPage() {
  return <LandingPage config={consultationConfig} />;
}

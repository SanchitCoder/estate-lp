import BrandBar from "@/components/BrandBar";
import ThankYouContent from "@/components/ThankYouContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Private WhatsApp Community | Estate Labs",
  description:
    "Registration confirmed. Join the AI Realtor Launchpad WhatsApp community for masterclass updates and resources.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <BrandBar />
      <div className="flex-1 flex items-center justify-center px-6 py-10 sm:py-14">
        <ThankYouContent />
      </div>
    </main>
  );
}

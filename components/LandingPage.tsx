"use client";

import BrandBar from "@/components/BrandBar";
import HeroSection from "@/components/sections/HeroSection";
import VideoSection from "@/components/sections/VideoSection";
import LearningsSection from "@/components/sections/LearningsSection";
import RealProblemSection from "@/components/sections/RealProblemSection";
import MasterclassDaysSection from "@/components/sections/MasterclassDaysSection";
import WhoItsFor from "@/components/sections/WhoItsFor";
import MentorStory from "@/components/sections/MentorStory";
import BonusSection from "@/components/sections/BonusSection";
import NotForSection from "@/components/sections/NotForSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ScrollUI from "@/components/ScrollUI";
import SmoothMotion from "@/components/SmoothMotion";
import SiteFooter from "@/components/SiteFooter";
import RegisterPopup from "@/components/RegisterPopup";
import { SiteConfigProvider } from "@/lib/site-config-context";
import type { SiteConfig } from "@/lib/site-config-types";

export default function LandingPage({ config }: { config: SiteConfig }) {
  return (
    <SiteConfigProvider config={config}>
      <SmoothMotion>
        <main className="min-h-screen overflow-x-hidden pb-[calc(6rem+env(safe-area-inset-bottom))]">
          <ScrollUI />

          <BrandBar />
          <HeroSection />
          <VideoSection />
          <LearningsSection />
          <RealProblemSection />
          <MasterclassDaysSection />
          <WhoItsFor />
          <MentorStory />
          <BonusSection />
          <NotForSection />
          <TestimonialsSection />
          <FaqSection />

          <SiteFooter />
        </main>
      </SmoothMotion>
      <RegisterPopup />
    </SiteConfigProvider>
  );
}

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
import RegisterPopup from "@/components/RegisterPopup";
import ScrollUI from "@/components/ScrollUI";
import SmoothMotion from "@/components/SmoothMotion";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <SmoothMotion>
      <main className="min-h-screen overflow-x-hidden pb-[calc(6rem+env(safe-area-inset-bottom))]">
        <RegisterPopup />
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
  );
}

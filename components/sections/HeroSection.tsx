"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { smoothEase, StaggerContainer, StaggerItem } from "@/components/motion";
import Image from "next/image";
import {
  CalendarIcon3D,
  ClockIcon3D,
  DurationIcon3D,
  GlobeIcon3D,
} from "@/components/MasterclassIcons";

const RegisterButton3D = dynamic(() => import("@/components/RegisterButton3D"), {
  ssr: false,
  loading: () => (
    <button className="btn-red w-full min-h-[52px] py-3 sm:py-4 px-2 text-[11px] sm:text-sm font-extrabold tracking-wide sm:tracking-widest uppercase rounded-xl animate-pulse-red leading-tight">
      {siteConfig.hero.cta}
    </button>
  ),
});

function AnnouncementMarquee({ text }: { text: string }) {
  const segment = (
  <>
    <Star size={13} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
    <span>{text}</span>
    <Star size={13} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
  </>
  );

  return (
    <div className="overflow-hidden w-full">
      <div className="flex w-max animate-marquee-announcement">
        {[0, 1].map((i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-8 sm:px-12 shrink-0 whitespace-nowrap"
            aria-hidden={i === 1 ? true : undefined}
          >
            {segment}
          </span>
        ))}
      </div>
    </div>
  );
}

const masterclassDetails = [
  { icon: CalendarIcon3D, label: "Date", key: "date" as const },
  { icon: ClockIcon3D, label: "Time", key: "time" as const },
  { icon: DurationIcon3D, label: "Duration", key: "duration" as const },
  { icon: GlobeIcon3D, label: "Language", key: "language" as const },
];

export default function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden" style={{ background: "rgb(251, 239, 231)" }}>
      {/* Top announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="bg-[#FF2E2E] text-white py-2.5 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide"
      >
        <AnnouncementMarquee text={siteConfig.announcement} />
      </motion.div>

      {/* Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-20">
        {/* Headline — centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="text-center mb-4"
        >
          <h1 className="text-[clamp(1.25rem,5vw,3rem)] font-extrabold text-[#0B1F3A] leading-tight tracking-tight max-w-4xl mx-auto px-1">
            {hero.headline}{" "}
            <span className="text-[#2F80ED]">{hero.headlineHighlight1}</span>
            {hero.headlineMiddle}
            <span className="text-[#FF2E2E]">{hero.headlineHighlight2}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: smoothEase }}
          className="text-center text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-1"
        >
          {hero.subheadline}
        </motion.p>

        {/* Two-column: Mentor + Masterclass Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* LEFT — Mentor Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: smoothEase }}
            className="relative w-full rounded-2xl overflow-hidden"
          >
            <Image
              src={hero.mentor.image}
              alt={hero.mentor.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </motion.div>

          {/* RIGHT — Masterclass Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: smoothEase }}
            className="lg:translate-y-[20%]"
          >
            <div className="relative bg-[#D6EBFF] rounded-2xl border border-[#B8D9FF] shadow-[0_4px_24px_rgba(47,128,237,0.12)] px-4 sm:px-5 pb-4 sm:pb-5 pt-9 sm:pt-10">
              {/* Tab header */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px bg-[#D6EBFF] px-4 sm:px-6 md:px-10 py-2 sm:py-2.5 rounded-b-xl border border-t-0 border-[#B8D9FF]">
                <span className="text-[#2F80ED] text-[10px] sm:text-xs md:text-sm font-extrabold tracking-widest uppercase whitespace-nowrap">
                  Masterclass Details
                </span>
              </div>

              {/* Details grid */}
              <StaggerContainer
                className="grid grid-cols-1 min-[360px]:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-5"
                staggerDelay={0.07}
                cycle={false}
              >
                {masterclassDetails.map(({ icon: Icon, label, key }) => (
                  <StaggerItem key={label}>
                    <div className="bg-white rounded-xl p-3 sm:p-3.5 md:p-4 flex items-center gap-2.5 sm:gap-3 border border-[#E8F2FF] shadow-sm">
                      <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center [&_svg]:w-full [&_svg]:h-full">
                        <Icon />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#0B1F3A] font-extrabold text-xs sm:text-sm leading-tight">{label}</p>
                        <p className="text-[#0B1F3A] text-xs sm:text-sm mt-0.5 leading-tight break-words">{hero.masterclass[key]}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA with Three.js */}
              <RegisterButton3D label={hero.cta} onClick={openRegisterForm} />

              <p className="text-center text-gray-500 text-xs mt-3">
                Free Registration · No Credit Card Required
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

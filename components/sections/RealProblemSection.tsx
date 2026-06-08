"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { FadeUp, StaggerContainer, StaggerItem, smoothEase } from "@/components/motion";

export default function RealProblemSection() {
  const { realProblem } = siteConfig;

  return (
    <section className="perf-section section-light section-padding">
      <div className="container-max max-w-4xl mx-auto text-center">
        <FadeUp>
          <h2 className="heading-dark text-xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-5 px-1">
            {realProblem.headline}{" "}
            <span className="text-[#FF6B5B]">{realProblem.headlineHighlight}</span>
            <br />
            {realProblem.headlineSuffix}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
            {realProblem.subheadline}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="rounded-2xl border border-[#D8E7FF] bg-[rgb(251,239,231)] p-5 sm:p-7 md:p-8 text-left mb-8 sm:mb-10">
            <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-6 md:gap-10 items-start">
              <p className="text-[#0B1F3A] text-xl sm:text-2xl md:text-3xl font-extrabold leading-snug">
                {realProblem.boxTitle}
              </p>

              <StaggerContainer className="space-y-3 sm:space-y-4" staggerDelay={0.06}>
                {realProblem.reasons.map((reason, i) => (
                  <StaggerItem key={i}>
                    <div className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-[#2F80ED] flex-shrink-0" />
                      <p className="text-gray-600 text-sm sm:text-base italic leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto">
            <span className="text-[#0B1F3A] font-bold">End result:</span>{" "}
            <span className="text-[#0B1F3A] font-bold">60–80% of deals are lost silently</span>
            {" — not because the lead was bad, but because the "}
            <span className="underline decoration-[#2F80ED] decoration-2 underline-offset-4 text-[#0B1F3A] font-semibold">
              follow-up system is broken
            </span>
            , causing a loss of visibility and control.
          </p>
        </FadeUp>

        <FadeUp delay={0.24}>
          <motion.button
            onClick={openRegisterForm}
            className="btn-red w-full sm:w-auto max-w-sm mx-auto px-10 sm:px-14 py-4 sm:py-5 rounded-xl text-white font-extrabold animate-pulse-red"
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: smoothEase } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
          >
            <span className="block text-base sm:text-lg">{realProblem.cta}</span>
            <span className="block text-xs sm:text-sm font-semibold mt-1 opacity-90">
              {realProblem.ctaSubtext}
            </span>
          </motion.button>
        </FadeUp>
      </div>
    </section>
  );
}

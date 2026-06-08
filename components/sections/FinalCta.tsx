"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { FadeUp, smoothEase } from "@/components/motion";

export default function FinalCta() {
  const { finalCta } = siteConfig;

  return (
    <section className="section-light section-padding">
      <div className="container-max text-center">
        <FadeUp>
          <span className="section-label">Limited Seats</span>
          <h2 className="heading-dark mt-2 mb-4">{finalCta.headline}</h2>
          <p className="text-gray-500 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {finalCta.subheadline}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <motion.button
            onClick={openRegisterForm}
            className="btn-red w-full sm:w-auto max-w-md sm:max-w-none mx-auto px-6 sm:px-12 py-4 sm:py-5 rounded-xl text-sm sm:text-base font-extrabold tracking-wide sm:tracking-widest uppercase animate-pulse-red inline-block"
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: smoothEase } }}
            whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
          >
            {finalCta.button}
          </motion.button>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="text-gray-400 text-sm mt-5">
            Free · No credit card · Limited seats available
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

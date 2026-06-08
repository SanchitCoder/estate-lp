"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { FadeUp, smoothEase } from "@/components/motion";

export default function CtaStrip() {
  return (
    <section className="py-10 sm:py-14 px-4" style={{ background: "rgb(18, 51, 50)" }}>
      <div className="container-max text-center">
        <FadeUp>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-6 sm:mb-8 leading-tight max-w-3xl mx-auto px-1">
            {siteConfig.ctaStrip.headline}
          </h2>
        </FadeUp>
        <FadeUp delay={0.12}>
          <motion.button
            onClick={openRegisterForm}
            className="btn-red w-full sm:w-auto max-w-md sm:max-w-none mx-auto px-6 sm:px-10 py-4 text-xs sm:text-sm font-extrabold tracking-wide sm:tracking-widest uppercase rounded-xl animate-pulse-red inline-block"
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: smoothEase } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
          >
            {siteConfig.ctaStrip.button}
          </motion.button>
        </FadeUp>
      </div>
    </section>
  );
}

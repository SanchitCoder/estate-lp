"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { FadeUp, smoothEase } from "@/components/motion";

export default function VideoSection() {
  const { video } = siteConfig;
  const embedSrc = `https://www.youtube.com/embed/${video.youtubeId}?start=${video.startSeconds}&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

  return (
    <section className="perf-section section-light py-10 sm:py-14 px-4 border-y border-[#D8E7FF]">
      <div className="container-max">
        <FadeUp>
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-[#D8E7FF] shadow-[0_8px_32px_rgba(47,128,237,0.12)] bg-[rgb(18,51,50)]">
            <iframe
              src={embedSrc}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="mt-6 sm:mt-8 text-center">
          <motion.button
            onClick={openRegisterForm}
            className="btn-red w-full sm:w-auto max-w-md sm:max-w-none mx-auto px-8 sm:px-12 py-4 rounded-xl text-sm font-extrabold tracking-wide sm:tracking-widest uppercase animate-pulse-red inline-block"
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: smoothEase } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
          >
            Register Now
          </motion.button>
        </FadeUp>
      </div>
    </section>
  );
}

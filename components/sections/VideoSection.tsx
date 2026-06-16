"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageContext, useSiteConfig } from "@/lib/site-config-context";
import { handleOpenRegisterForm } from "@/lib/openRegisterForm";
import { FadeUp, smoothEase } from "@/components/motion";

const HOOK_DURATION_MS = 10_000;

export default function VideoSection() {
  const config = useSiteConfig();
  const { getCtaLine } = usePageContext();
  const { video, cta } = config;
  const [showHook, setShowHook] = useState(true);
  const embedSrc = `https://www.youtube.com/embed/${video.youtubeId}?start=${video.startSeconds}&autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1`;

  useEffect(() => {
    const timer = window.setTimeout(() => setShowHook(false), HOOK_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, []);

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

            <AnimatePresence>
              {showHook && (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: smoothEase }}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[rgba(11,31,58,0.88)] px-6 text-center pointer-events-none"
                  aria-hidden
                >
                  {video.hookLines.map((line, i) => (
                    <p
                      key={line}
                      className={`font-extrabold leading-snug ${
                        i === video.hookLines.length - 1
                          ? "text-[#F1C233] text-sm sm:text-base mt-4"
                          : i === 0
                            ? "text-white text-xl sm:text-3xl"
                            : "text-[#D6EBFF] text-base sm:text-xl mt-2"
                      }`}
                    >
                      {line}
                    </p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeUp>

        <FadeUp delay={0.12} className="mt-6 sm:mt-8 text-center">
          <motion.button
            onClick={handleOpenRegisterForm}
            className="btn-red w-full sm:w-auto max-w-md sm:max-w-none mx-auto px-8 sm:px-12 py-4 rounded-xl text-sm font-extrabold tracking-wide sm:tracking-widest uppercase animate-pulse-red inline-block"
            whileHover={{ scale: 1.03, transition: { duration: 0.3, ease: smoothEase } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.15 } }}
          >
            {cta}
          </motion.button>
          <p className="text-gray-500 text-xs sm:text-sm mt-3">
            {getCtaLine()}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { openRegisterForm } from "@/lib/openRegisterForm";
import { useRafScroll } from "@/lib/useRafScroll";
import { smoothEase } from "@/components/motion";

export default function ScrollUI() {
  const [showTop, setShowTop] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useRafScroll(() => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = total > 0 ? scrolled / total : 0;

    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${ratio})`;
    }

    setShowTop((prev) => {
      const next = scrolled > 400;
      return prev === next ? prev : next;
    });
  });

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transform = "scaleX(0)";
    }
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <div
        id="scroll-progress-track"
        className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent"
        aria-hidden
      >
        <div ref={progressRef} id="scroll-progress" className="gpu-layer h-full origin-left" />
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.35, ease: smoothEase }}
            onClick={scrollToTop}
            className="gpu-layer fixed bottom-[calc(5.5rem+env(safe-area-inset-bottom))] right-4 z-50 w-10 h-10 rounded-full btn-red flex items-center justify-center shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: smoothEase }}
        className="gpu-layer fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] bg-white border-t border-[#D8E7FF] shadow-[0_-4px_24px_rgba(0,0,0,0.1)]"
      >
        <div className="max-w-xl mx-auto">
          <motion.button
            onClick={openRegisterForm}
            className="btn-red gpu-layer w-full py-3 sm:py-4 px-2 rounded-xl text-[11px] sm:text-sm font-extrabold tracking-wide sm:tracking-widest uppercase leading-tight animate-pulse-red"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {siteConfig.hero.cta}
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useSiteConfig } from "@/lib/site-config-context";
import { FadeUp, StaggerContainer, StaggerItem, smoothEase } from "@/components/motion";

export default function FaqSection() {
  const { faq } = useSiteConfig();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-light section-padding">
      <div className="max-w-3xl mx-auto">
        <FadeUp className="text-center mb-8 sm:mb-14">
          <h2 className="heading-dark">{faq.title}</h2>
          <div className="divider-blue" />
        </FadeUp>

        <StaggerContainer className="space-y-2" staggerDelay={0.07}>
          {faq.items.map((item, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl overflow-hidden border border-[rgba(216,231,255,0.1)]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="card-gradient w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 hover:brightness-110 transition-all duration-200 group"
                >
                  <span className="text-white text-sm sm:text-base font-semibold leading-snug group-hover:text-[#2F80ED] transition-colors duration-200">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown size={18} className="text-[#2F80ED]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: smoothEase }}
                      className="overflow-hidden"
                    >
                      <div className="card-gradient px-4 sm:px-6 py-4 sm:py-5 border-t border-[rgba(216,231,255,0.06)]">
                        <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

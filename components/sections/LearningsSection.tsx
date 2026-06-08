"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MessageCircle, Bell, Smartphone, UserX } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem, smoothEase } from "@/components/motion";

const iconMap: Record<string, React.ElementType> = {
  MessageCircle,
  Bell,
  Smartphone,
  UserX,
};

function MasterclassQuote({
  quote,
  quoteAuthor,
}: {
  quote: string;
  quoteAuthor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.35,
    margin: "-40px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
      transition={{ duration: 0.65, ease: smoothEase }}
      className="mt-12 sm:mt-14 gpu-layer"
    >
      <div className="card-gradient relative max-w-3xl overflow-hidden rounded-2xl border border-[rgba(255,46,46,0.22)] px-4 sm:px-10 py-8 sm:py-12 text-left shadow-[0_12px_40px_rgba(255,46,46,0.14)]">
        <div className="pointer-events-none absolute -top-2 left-2 sm:left-6 text-[#FF2E2E]/15 text-[4rem] sm:text-[8rem] font-serif leading-none select-none">
          &ldquo;
        </div>
        <div className="pointer-events-none absolute -bottom-6 right-2 sm:right-6 text-[#FF2E2E]/10 text-[3.5rem] sm:text-[7rem] font-serif leading-none select-none">
          &rdquo;
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF2E2E] via-[#ff5555] to-[#FF2E2E]/40 rounded-l-2xl" />

        <blockquote className="relative z-10 pl-1 sm:pl-2">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: inView ? 0.12 : 0, ease: smoothEase }}
            className="text-[#FF2E2E] text-base sm:text-2xl md:text-[1.75rem] font-extrabold leading-snug tracking-tight drop-shadow-[0_2px_12px_rgba(255,46,46,0.25)]"
          >
            &ldquo;{quote}&rdquo;
          </motion.p>
          {quoteAuthor && (
            <motion.footer
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.55, delay: inView ? 0.28 : 0, ease: smoothEase }}
              className="mt-5 sm:mt-6 text-white/50 text-sm sm:text-base font-medium tracking-wide"
            >
              — {quoteAuthor}
            </motion.footer>
          )}
        </blockquote>
      </div>
    </motion.div>
  );
}

export default function LearningsSection() {
  const { learnings } = siteConfig;

  return (
    <section className="perf-section section-dark section-padding">
      <div className="container-max">
        <FadeUp className="text-center mb-8 sm:mb-14">
          <span className="section-label">Masterclass</span>
          <h2 className="heading-light max-w-4xl mx-auto">
            This{" "}
            <span className="text-[#FF6B5B]">Masterclass</span> Is Built For{" "}
            <span className="text-[#FF6B5B]">Real Estate Agents</span>, Brokers, and Agencies Who:
          </h2>
          {learnings.subtitle ? (
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              {learnings.subtitle}
            </p>
          ) : null}
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" staggerDelay={0.1}>
          {learnings.cards.map((card, i) => {
            const Icon = iconMap[card.icon] || MessageCircle;
            return (
              <StaggerItem key={i}>
                <motion.div
                  className="card-white gpu-layer p-5 sm:p-7 h-full flex flex-col gap-4 cursor-default transition-shadow duration-300"
                  whileHover={{ y: -4, transition: { duration: 0.35, ease: smoothEase } }}
                  transition={{ type: "spring", stiffness: 320, damping: 28 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#F3F4F6] border border-[#E5E7EB]">
                      <Icon size={20} className="text-[#374151]" />
                    </div>
                    <div>
                      <h3 className="text-[#166534] font-bold text-base sm:text-lg leading-snug mb-2">{card.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{card.content}</p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {learnings.quote && (
          <MasterclassQuote
            quote={learnings.quote}
            quoteAuthor={learnings.quoteAuthor}
          />
        )}
      </div>
    </section>
  );
}

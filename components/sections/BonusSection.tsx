"use client";

import { useSiteConfig } from "@/lib/site-config-context";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import OrbitCard from "@/components/lightswind/orbit-card";

export default function BonusSection() {
  const { bonuses } = useSiteConfig();

  return (
    <section className="section-light section-padding">
      <div className="container-max">
        <FadeUp className="text-center mb-10 sm:mb-14 max-w-5xl mx-auto">
          <h2 className="heading-dark text-xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug px-1">
            By the end of this{" "}
            <span className="text-[#2F80ED]">masterclass</span>, you&apos;ll have{" "}
            <span className="text-[#FF2E2E]">absolute clarity</span> on:
          </h2>
          <div className="divider-blue" />
        </FadeUp>

        <StaggerContainer
          className="flex flex-col gap-4 sm:gap-5 max-w-3xl mx-auto"
          staggerDelay={0.08}
        >
          {bonuses.cards.map((card, i) => (
            <StaggerItem key={i}>
              <OrbitCard
                className="h-full"
                contentClassName="h-full p-4 sm:p-7 border-[2px] sm:border-[3px] border-[rgba(27,65,64,0.22)] min-h-0 sm:min-h-[140px]"
              >
                <div className="flex items-start gap-4 h-full">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-[rgba(27,65,64,0.3)] bg-[rgba(27,65,64,0.1)]">
                    <span className="text-[rgb(27,65,64)] text-sm font-extrabold">{card.number}</span>
                  </div>

                  <p className="text-[#0B1F3A] font-semibold text-sm sm:text-base leading-relaxed pt-2">
                    {card.title}
                  </p>
                </div>
              </OrbitCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

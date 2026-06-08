"use client";

import { X } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ElectroBorder } from "@/components/lightswind/electro-border";


export default function NotForSection() {
  const { notFor } = siteConfig;

  return (
    <section className="perf-section section-light section-padding">
      <div className="container-max">
        <FadeUp className="text-center mb-8 sm:mb-12">
          <h2 className="heading-dark">
            This{" "}
            <span className="text-[#2F80ED]">Masterclass</span> Is{" "}
            <span className="text-[#FF6B5B]">NOT</span> For:
          </h2>
          <div className="divider-blue" />
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
          staggerDelay={0.07}
        >
          {notFor.items.map((item, i) => (
            <StaggerItem key={i} className="h-full">
              <ElectroBorder
                borderColor="#D8E7FF"
                borderWidth={2}
                radius="0.875rem"
                animationSpeed={0.85}
                distortion={0.75}
                glowBlur={14}
                className="h-full"
              >
                <div className="card-gradient h-full rounded-[0.875rem] p-5 sm:p-6 flex items-start gap-3">
                  <X
                    size={18}
                    className="text-[#FF6B5B] flex-shrink-0 mt-0.5"
                    strokeWidth={2.5}
                  />
                  <p className="text-white text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </ElectroBorder>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.25} className="mt-8 sm:mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[#0B1F3A] text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            {notFor.footer}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

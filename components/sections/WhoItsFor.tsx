"use client";

import { Check, X } from "lucide-react";
import { useSiteConfig } from "@/lib/site-config-context";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { ElectroBorder } from "@/components/lightswind/electro-border";

function ListItem({
  item,
  variant,
}: {
  item: string;
  variant: "not" | "is";
}) {
  const isNot = variant === "not";

  return (
    <div className="flex items-start gap-3">
      {isNot ? (
        <X size={18} className="text-[#FF6B5B] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
      ) : (
        <span className="flex-shrink-0 mt-0.5 w-[18px] h-[18px] rounded-full border border-[#D4A574] flex items-center justify-center">
          <Check size={11} className="text-[#D4A574]" strokeWidth={3} />
        </span>
      )}
      <span className="text-gray-600 text-sm sm:text-base leading-relaxed">{item}</span>
    </div>
  );
}

function WhoPanel({
  title,
  items,
  variant,
  delay,
  borderColor,
}: {
  title: string;
  items: string[];
  variant: "not" | "is";
  delay: number;
  borderColor: string;
}) {
  const isNot = variant === "not";

  return (
    <FadeUp delay={delay}>
      <ElectroBorder
        borderColor={borderColor}
        borderWidth={2}
        radius="1rem"
        animationSpeed={0.9}
        distortion={0.9}
        glowBlur={16}
        className="h-full"
      >
        <div className="h-full rounded-2xl p-5 sm:p-6 md:p-7 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)]">
          <h3
            className="font-extrabold text-lg sm:text-xl mb-5 sm:mb-6"
            style={{ color: isNot ? "#FF6B5B" : "#D4A574" }}
          >
            {title}
          </h3>

          <StaggerContainer className="space-y-4" staggerDelay={0.06}>
            {items.map((item, i) => (
              <StaggerItem key={i}>
                <ListItem item={item} variant={variant} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </ElectroBorder>
    </FadeUp>
  );
}

export default function WhoItsFor() {
  const { whoItsFor } = useSiteConfig();

  return (
    <section className="perf-section section-light section-padding overflow-x-clip">
      <div className="container-max">
        <FadeUp className="text-center mb-8 sm:mb-14">
          <h2 className="heading-dark">
            Why This <span className="text-[#2F80ED]">Masterclass</span> Is Different
          </h2>
          <div className="divider-blue" />
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          <WhoPanel
            title={whoItsFor.notThis.title}
            items={whoItsFor.notThis.items}
            variant="not"
            borderColor="#FF6B5B"
            delay={0.1}
          />
          <WhoPanel
            title={whoItsFor.thisIs.title}
            items={whoItsFor.thisIs.items}
            variant="is"
            borderColor="#D4A574"
            delay={0.15}
          />
        </div>
      </div>
    </section>
  );
}

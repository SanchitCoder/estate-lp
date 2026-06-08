"use client";

import { Star } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/motion";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";

function TestimonialCard({
  quote,
  name,
  location,
  role,
  initials,
}: {
  quote: string;
  name: string;
  location: string;
  role: string;
  initials: string;
}) {
  return (
    <div className="card-gradient relative h-full rounded-2xl border border-[rgba(216,231,255,0.12)] p-5 sm:p-6 pt-7 sm:pt-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)] whitespace-normal">
      <div className="flex gap-4 sm:gap-5">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-[#2F80ED] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm sm:text-base">{initials}</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-2px)] w-[2px] h-8 sm:h-10 bg-white/50" />
          <div className="absolute left-1/2 top-[calc(100%+1.5rem)] sm:top-[calc(100%+1.75rem)] w-8 sm:w-12 h-[2px] bg-white/50" />
        </div>

        <p className="text-white/90 text-sm sm:text-[0.9375rem] leading-relaxed flex-1 pt-1">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-end gap-3 mt-6 sm:mt-8 pl-2 sm:pl-16">
        <div className="flex gap-0.5 sm:mr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className="text-[#F5C542] fill-[#F5C542]"
              strokeWidth={0}
            />
          ))}
        </div>

        <div className="bg-white rounded-lg px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-sm">
          <p className="text-[#0B1F3A] font-bold text-sm leading-tight">
            {name} {location}
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-0.5">{role}</p>
        </div>
      </div>
    </div>
  );
}

function ScrollCard({
  item,
}: {
  item: (typeof siteConfig.testimonials.items)[number];
}) {
  return (
    <div className="inline-block w-[min(92vw,340px)] sm:w-[min(88vw,420px)] mx-2 sm:mx-3 align-top">
      <TestimonialCard {...item} />
    </div>
  );
}

export default function TestimonialsSection() {
  const { testimonials } = siteConfig;
  const firstRow = testimonials.items.slice(0, 3);
  const secondRow = testimonials.items.slice(3);

  return (
    <section className="perf-section section-dark section-padding overflow-x-clip">
      <div className="container-max">
        <FadeUp className="text-center mb-8 sm:mb-12">
          <h2 className="heading-light">
            Reviews & <span className="text-[#2F80ED]">Testimonials</span>
          </h2>
          <div className="divider-blue" />
        </FadeUp>
      </div>

      <FadeUp delay={0.1}>
        <ThreeDScrollTriggerContainer className="space-y-5 sm:space-y-6">
          <ThreeDScrollTriggerRow baseVelocity={3.5} direction={1}>
            {firstRow.map((item) => (
              <ScrollCard key={item.name} item={item} />
            ))}
          </ThreeDScrollTriggerRow>

          <ThreeDScrollTriggerRow baseVelocity={3.5} direction={-1}>
            {secondRow.map((item) => (
              <ScrollCard key={item.name} item={item} />
            ))}
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
      </FadeUp>
    </section>
  );
}

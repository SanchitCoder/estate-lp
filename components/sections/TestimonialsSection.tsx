"use client";

import { Star } from "lucide-react";
import { useSiteConfig } from "@/lib/site-config-context";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";

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
    <div className="card-gradient relative h-full rounded-2xl border border-[rgba(216,231,255,0.12)] p-5 sm:p-6 pt-7 sm:pt-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
      <div className="flex gap-4 sm:gap-5">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-[3px] border-white bg-[#2F80ED] flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm sm:text-base">{initials}</span>
          </div>
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

export default function TestimonialsSection() {
  const { testimonials } = useSiteConfig();

  return (
    <section className="perf-section section-dark section-padding">
      <div className="container-max">
        <FadeUp className="text-center mb-8 sm:mb-12">
          <h2 className="heading-light">
            Reviews & <span className="text-[#2F80ED]">Testimonials</span>
          </h2>
          <div className="divider-blue" />
        </FadeUp>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 max-w-5xl mx-auto"
          staggerDelay={0.08}
        >
          {testimonials.items.map((item) => (
            <StaggerItem key={item.name}>
              <TestimonialCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion";
import { TypewriterSequence } from "@/components/Typewriter";
import Image from "next/image";

export default function MentorStory() {
  const { mentorStory } = siteConfig;

  return (
    <section className="perf-section section-dark section-padding overflow-x-clip">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">

          {/* Image — sticky so it stays put while text reveals */}
          <div className="lg:sticky lg:top-24 xl:top-28 self-start w-full">
            <FadeUp delay={0.1} cycle={false}>
              <div className="relative max-w-[340px] sm:max-w-[400px] mx-auto md:mx-0 bg-transparent">
                <Image
                  src={mentorStory.image}
                  alt="Paras Arora — AI Implementation Specialist, Founder Estate Labs & Exponential World AI"
                  width={480}
                  height={640}
                  className="w-full h-auto object-contain mix-blend-lighten"
                  sizes="(max-width: 768px) 80vw, 400px"
                />
              </div>
            </FadeUp>
          </div>

          {/* Story — grows independently without moving the image */}
          <div className="min-w-0">
            <FadeUp delay={0.1}>
              <span className="section-label">About The Mentor</span>
            </FadeUp>

            <TypewriterSequence
              className="mt-2 [&_h2]:mb-4"
              items={[
                {
                  text: mentorStory.heading,
                  as: "h2",
                  className: "heading-light mb-4",
                  speed: 9,
                },
                {
                  text: mentorStory.intro,
                  as: "p",
                  className: "text-gray-400 text-sm sm:text-base leading-relaxed mb-6",
                  speed: 8,
                },
              ]}
            />

            <StaggerContainer className="space-y-3" staggerDelay={0.07}>
              {(mentorStory.highlights ?? []).map((item, i) => (
                <StaggerItem key={i}>
                  <div className="card-gradient flex items-start gap-3 rounded-xl border border-[rgba(216,231,255,0.12)] px-4 py-3.5">
                    <CheckCircle2 size={17} className="text-[#2F80ED] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

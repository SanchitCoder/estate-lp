"use client";

import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/motion";

export default function TrustBar() {
  return (
    <section className="perf-section section-light section-padding border-b border-[#D8E7FF]">
      <div className="container-max">
        <FadeUp className="text-center mb-10">
          <h2 className="text-[#0B1F3A] text-2xl sm:text-3xl font-extrabold">
            Learners From Brands Like
          </h2>
          <div className="divider-blue" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative overflow-hidden w-full">
            <div className="flex w-max animate-marquee-ltr gpu-layer">
              {[0, 1].map((i) => (
                <Image
                  key={i}
                  src={siteConfig.brandsStrip}
                  alt={i === 0 ? "Learners from Uber, Airbnb, Citibank, Google, Amazon, OYO, PayPal, TEDx" : ""}
                  width={1800}
                  height={120}
                  aria-hidden={i === 1}
                  className="h-[60px] sm:h-24 md:h-[108px] w-auto flex-shrink-0"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

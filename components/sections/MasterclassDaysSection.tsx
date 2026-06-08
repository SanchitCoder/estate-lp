"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/motion";

type Day = (typeof siteConfig.masterclassDays.days)[number];
type Bonus = (typeof siteConfig.masterclassDays.bonuses)[number];

function DayCard({ day }: { day: Day }) {
  return (
    <div className="card-gradient w-full rounded-2xl border-2 border-[#2F80ED] p-4 sm:p-6 md:p-8 shadow-[0_8px_40px_rgba(47,128,237,0.08)]">
      <p className="text-[#7ec8ff] text-sm sm:text-base font-extrabold uppercase tracking-widest mb-2">
        {day.label}
      </p>
      <h3 className="text-white text-lg sm:text-2xl md:text-3xl font-extrabold leading-snug mb-4 sm:mb-6">
        {day.title}
      </h3>
      <ul className="space-y-3 sm:space-y-4">
        {day.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-[#2F80ED] flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm sm:text-base leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BonusCard({ bonus }: { bonus: Bonus }) {
  return (
    <div className="relative w-full rounded-[19px] bg-transparent overflow-hidden flex flex-col p-3 sm:p-3.5 pt-9 sm:pt-10">
      <span className="absolute top-0 left-0 z-10 bg-[#FF2E2E] text-white text-[10px] sm:text-xs font-extrabold pl-3 sm:pl-4 pr-5 sm:pr-6 py-1.5 sm:py-2 rounded-r-full">
        {bonus.label}
      </span>

      <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] rounded-[14px] overflow-hidden mb-3">
        <Image
          src={bonus.image}
          alt={bonus.title}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 63vw, 280px"
        />
      </div>

      <p className="text-gray-300 text-xs sm:text-sm font-semibold leading-relaxed italic text-center mt-auto">
        {bonus.title}
      </p>
    </div>
  );
}

export default function MasterclassDaysSection() {
  const { masterclassDays } = siteConfig;

  return (
    <section className="perf-section section-dark section-padding">
      <div className="container-max max-w-4xl mx-auto">
        <FadeUp className="text-center mb-8 sm:mb-10">
          <h2 className="heading-light">{masterclassDays.title}</h2>
          <div className="divider-blue" />
        </FadeUp>

        <div className="flex flex-col gap-5 sm:gap-6 max-w-2xl mx-auto">
          {masterclassDays.days.map((day) => (
            <DayCard key={day.label} day={day} />
          ))}
        </div>

        <div className="mt-10 sm:mt-14">
          <h3 className="heading-light text-center text-xl sm:text-2xl mb-6 sm:mb-8">
            {masterclassDays.bonusesTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-sm sm:max-w-none sm:w-[85%] md:w-[70%] mx-auto">
            {masterclassDays.bonuses.map((bonus) => (
              <BonusCard key={bonus.label} bonus={bonus} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

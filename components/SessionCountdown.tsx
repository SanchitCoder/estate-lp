"use client";

import { useEffect, useState } from "react";
import { usePageContext } from "@/lib/site-config-context";
import { getCountdownDate } from "@/lib/event-schedule";

type CountdownParts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

function getCountdown(target: Date, now: Date): CountdownParts {
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
  }

  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
    isPast: false,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function SessionCountdown() {
  const { eventFormat } = usePageContext();
  const countdownTarget = getCountdownDate(eventFormat);
  const [parts, setParts] = useState<CountdownParts | null>(null);

  useEffect(() => {
    if (!countdownTarget) {
      setParts(null);
      return;
    }

    const tick = () => setParts(getCountdown(countdownTarget, new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [countdownTarget]);

  if (!countdownTarget || !parts || parts.isPast) return null;

  const units = [
    { label: "Days", value: parts.days },
    { label: "Hrs", value: parts.hours },
    { label: "Min", value: parts.minutes },
    { label: "Sec", value: parts.seconds },
  ];

  return (
    <div className="mb-4 sm:mb-5">
      <p className="text-center text-[#0B1F3A] text-xs font-semibold uppercase tracking-widest mb-2">
        {eventFormat === "two-day" ? "Day 1 starts in" : "Session starts in"}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="bg-white rounded-xl py-2 sm:py-2.5 text-center border border-[#E8F2FF] shadow-sm"
          >
            <p className="text-[#2F80ED] font-extrabold text-lg sm:text-xl leading-none">
              {pad(value)}
            </p>
            <p className="text-gray-500 text-[10px] sm:text-xs mt-1 font-semibold uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

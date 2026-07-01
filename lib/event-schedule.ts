export type SessionSlot = {
  id: string;
  startsAt: string;
  dateLabel: string;
  timeLabel: string;
};

export type TwoDayEvent = {
  id: string;
  day1: SessionSlot;
  day2: SessionSlot;
};

export const singleEventSessions: SessionSlot[] = [
  {
    id: "2026-06-25",
    startsAt: "2026-06-25T20:30:00+05:30",
    dateLabel: "25th June '26, Thursday",
    timeLabel: "8:30 PM IST",
  },
  {
    id: "2026-07-03",
    startsAt: "2026-07-03T20:30:00+05:30",
    dateLabel: "3rd July '26, Friday",
    timeLabel: "8:30 PM IST",
  },
];

export const twoDayMegaEvents: TwoDayEvent[] = [
  {
    id: "2026-06-25",
    day1: {
      id: "2026-06-25-d1",
      startsAt: "2026-06-25T20:30:00+05:30",
      dateLabel: "25th June '26, Thursday",
      timeLabel: "8:30 PM IST",
    },
    day2: {
      id: "2026-06-26-d2",
      startsAt: "2026-06-26T20:30:00+05:30",
      dateLabel: "26th June '26, Friday",
      timeLabel: "8:30 PM IST",
    },
  },
  {
    id: "2026-07-09",
    day1: {
      id: "2026-07-09-d1",
      startsAt: "2026-07-09T20:30:00+05:30",
      dateLabel: "9th July '26, Thursday",
      timeLabel: "8:30 PM IST",
    },
    day2: {
      id: "2026-07-10-d2",
      startsAt: "2026-07-10T20:30:00+05:30",
      dateLabel: "10th July '26, Friday",
      timeLabel: "8:30 PM IST",
    },
  },
];

export function getActiveSingleSession(now = new Date()): SessionSlot {
  const upcoming = singleEventSessions.find(
    (session) => new Date(session.startsAt).getTime() > now.getTime()
  );
  return upcoming ?? singleEventSessions[singleEventSessions.length - 1];
}

export function getActiveTwoDayEvent(now = new Date()): TwoDayEvent {
  const upcoming = twoDayMegaEvents.find(
    (event) => new Date(event.day1.startsAt).getTime() > now.getTime()
  );
  return upcoming ?? twoDayMegaEvents[twoDayMegaEvents.length - 1];
}

export function formatSingleCtaLine(session: SessionSlot): string {
  return `${session.dateLabel} · ${session.timeLabel}`;
}

export function formatTwoDayCtaLine(event: TwoDayEvent): string {
  return `Day 1: ${event.day1.dateLabel}, ${event.day1.timeLabel} · Day 2: ${event.day2.dateLabel}, ${event.day2.timeLabel}`;
}

import type { EventFormat, SiteConfig } from "@/lib/site-config-types";

export function getCountdownDate(
  format: EventFormat,
  now = new Date()
): Date | null {
  if (format === "consultation") return null;
  if (format === "two-day") {
    return new Date(getActiveTwoDayEvent(now).day1.startsAt);
  }
  return new Date(getActiveSingleSession(now).startsAt);
}

export type HeroDetailItem = {
  label: string;
  value: string;
};

export function buildHeroDetails(
  format: EventFormat,
  masterclass: { duration: string; language: string; availability?: string },
  now = new Date()
): HeroDetailItem[] {
  if (format === "consultation") {
    return [
      { label: "Format", value: "Private 1:1 Video Call" },
      { label: "Duration", value: masterclass.duration },
      { label: "Availability", value: masterclass.availability ?? "Limited slots weekly" },
      { label: "Language", value: masterclass.language },
    ];
  }

  if (format === "two-day") {
    const event = getActiveTwoDayEvent(now);
    return [
      { label: "Day 1", value: `${event.day1.dateLabel} · ${event.day1.timeLabel}` },
      { label: "Day 2", value: `${event.day2.dateLabel} · ${event.day2.timeLabel}` },
      { label: "Duration", value: masterclass.duration },
      { label: "Language", value: masterclass.language },
    ];
  }

  const session = getActiveSingleSession(now);
  return [
    { label: "Date", value: session.dateLabel },
    { label: "Time", value: session.timeLabel },
    { label: "Duration", value: masterclass.duration },
    { label: "Language", value: masterclass.language },
  ];
}

export function getCtaLine(
  format: EventFormat,
  config?: Pick<SiteConfig, "hero">,
  now = new Date()
): string {
  if (format === "consultation") {
    const { duration, availability } = config?.hero.masterclass ?? {
      duration: "30 Minutes",
      availability: "Limited slots weekly",
    };
    return `${duration} · ${availability} · Free consultation`;
  }
  if (format === "two-day") {
    return formatTwoDayCtaLine(getActiveTwoDayEvent(now));
  }
  return formatSingleCtaLine(getActiveSingleSession(now));
}

// Backward-compatible helpers used during migration
export function getActiveSession(now = new Date()): SessionSlot {
  return getActiveSingleSession(now);
}

export function getSessionStartDate(session: SessionSlot): Date {
  return new Date(session.startsAt);
}

export function formatSessionCtaLine(session: SessionSlot): string {
  return formatSingleCtaLine(session);
}

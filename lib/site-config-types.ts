export type EventFormat = "single" | "two-day" | "consultation";

export type SiteConfig = {
  siteUrl: string;
  eventFormat: EventFormat;
  registrationSource: string;
  cta: string;
  announcement: string;
  hero: {
    headline: string;
    headlineHighlight1: string;
    headlineMiddle: string;
    headlineHighlight2: string;
    subheadline: string;
    mentor: {
      name: string;
      title: string;
      badge1: string;
      badge2: string;
      program: string;
      image: string;
    };
    masterclass: {
      duration: string;
      language: string;
      availability?: string;
    };
    detailsTabLabel: string;
    cta: string;
  };
  video: {
    youtubeId: string;
    startSeconds: number;
    title: string;
    hookLines: string[];
  };
  brandsStrip: string;
  ctaStrip: {
    headline: string;
    button: string;
  };
  learnings: {
    title: string;
    subtitle: string;
    cards: Array<{
      title: string;
      content: string;
      icon: string;
    }>;
    quote: string;
    quoteAuthor: string;
  };
  realProblem: {
    headline: string;
    headlineHighlight: string;
    headlineSuffix: string;
    subheadline: string;
    boxTitle: string;
    reasons: string[];
    endResult: string;
    cta: string;
    ctaSubtext: string;
  };
  masterclassAgenda: {
    title: string;
    subtitle: string;
    parts: Array<{
      label: string;
      title: string;
      items: string[];
    }>;
    bonusesTitle: string;
    bonuses: Array<{
      label: string;
      title: string;
      image: string;
    }>;
  };
  whoItsFor: {
    notThis: { title: string; items: string[] };
    thisIs: { title: string; items: string[] };
  };
  mentorStory: {
    heading: string;
    intro: string;
    highlights: string[];
    image: string;
  };
  testimonials: {
    title: string;
    items: Array<{
      quote: string;
      name: string;
      location: string;
      role: string;
      initials: string;
    }>;
  };
  notFor: {
    title: string;
    items: string[];
    footer: string;
  };
  bonuses: {
    title: string;
    cards: Array<{ number: string; title: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  finalCta: {
    headline: string;
    subheadline: string;
    button: string;
  };
  footer: {
    companyName: string;
    links: Array<{ label: string; href: string }>;
    socialLinks: Array<{
      label: string;
      href: string;
      icon: "linkedin" | "twitter" | "instagram" | "youtube";
    }>;
  };
  whatsappCommunity: {
    url: string;
    label: string;
    groupName: string;
  };
  thankYou: {
    title: string;
    message: string;
    fbWebViewMessage: string;
    joinButtonLabel: string;
    externalBrowserButtonLabel: string;
    copyButtonLabel: string;
    copySuccessLabel: string;
    hintText: string;
    manualJoinTitle: string;
    manualJoinSteps: string[];
    statusOpening: string;
    statusLaunching: string;
    statusCopied: string;
  };
  form: {
    title: string;
    subtitle: string;
    tracks: string[];
    countryCodes: Array<{ code: string; country: string }>;
  };
};

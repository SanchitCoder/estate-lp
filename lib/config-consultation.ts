import type { SiteConfig } from "@/lib/site-config-types";

export const consultationConfig = {
  siteUrl: "https://www.estatelabs.io",
  eventFormat: "consultation" as const,
  registrationSource: "1-1-consultation",
  cta: "Book Free Consultation",

  announcement:
    "FREE 1:1 STRATEGY CALL FOR REAL ESTATE AGENTS WHO WANT A CUSTOM AI FOLLOW-UP PLAN…",

  hero: {
    headline: "Get a ",
    headlineHighlight1: "Free 1:1 Consultation",
    headlineMiddle: " To Fix ",
    headlineHighlight2: "Your Follow-Up System",
    subheadline:
      "Sit down privately with Paras for 30 minutes — get a personalised diagnosis of where your deals leak and a clear roadmap to implement AI in your agency",
    mentor: {
      name: "Paras Arora",
      title: "AI Implementation Specialist · Founder, Estate Labs",
      badge1: "10+ Years Of Industry Experience",
      badge2: "Founder, Exponential World AI",
      program: "Exponential World AI",
      image: "/images/mentor-hero.png",
    },
    masterclass: {
      duration: "30 Minutes",
      language: "Hinglish",
      availability: "Limited slots weekly",
    },
    detailsTabLabel: "1:1 Consultation",
    cta: "Book Free Consultation",
  },

  video: {
    youtubeId: "tPwmXfoaDkI",
    startSeconds: 1,
    title: "Estate Labs 1:1 Consultation Preview",
    hookLines: [
      "Free 1:1 call for real estate agents",
      "who want a custom plan to fix follow-ups with AI",
      "30 min · Private · Estate Labs",
    ],
  },

  brandsStrip: "/images/brands-strip.png",

  ctaStrip: {
    headline: "Ready For a Personalised Follow-Up Roadmap?",
    button: "Book Free Consultation",
  },

  learnings: {
    title: "This 1:1 Consultation Is For Real Estate Agents, Brokers, and Agencies Who:",
    subtitle: "",
    cards: [
      {
        title: "Want personalised advice",
        content:
          "You've watched webinars or read about AI — but need someone to look at your specific enquiry flow and tell you what to fix first.",
        icon: "MessageCircle",
      },
      {
        title: "Are losing deals quietly",
        content:
          "Leads come in, but follow-ups slip on busy days and you're not sure whether the problem is process, people, or tools.",
        icon: "Bell",
      },
      {
        title: "Run a growing agency",
        content:
          "Your team is busy and WhatsApp is chaotic — you need a system that works without you being online 24/7.",
        icon: "Smartphone",
      },
      {
        title: "Want implementation clarity",
        content:
          "You don't want another generic demo — you want a practical next-step plan tailored to your current business stage.",
        icon: "UserX",
      },
    ],
    quote: "I know something is broken — I just don't know where to start.",
    quoteAuthor: "Every agent before their first 1:1 with us",
  },

  realProblem: {
    headline: "The Real Problem",
    headlineHighlight: "Isn't Leads.",
    headlineSuffix: "It's What Happens After the Enquiry.",
    subheadline: "Most agents don't need more information — they need someone to map the fix to their business",
    boxTitle: "On the call, we'll pinpoint:",
    reasons: [
      "Where replies and follow-ups are breaking down today",
      "Which leads you're losing silently — and why",
      "What your agency should automate first vs. keep human",
      "The fastest path to a predictable follow-up system",
    ],
    endResult:
      "You'll leave with a clear, personalised action plan — not a generic slide deck — so you know exactly what to implement next.",
    cta: "Book Free Consultation",
    ctaSubtext: "Limited Slots Each Week.",
  },

  masterclassAgenda: {
    title: "What We'll Cover on Your 1:1 Call",
    subtitle: "30 minutes · Private video call · Tailored to your agency",
    parts: [
      {
        label: "First 15 minutes",
        title: "Diagnose Your Current Setup",
        items: [
          "Walk through how enquiries enter your business today",
          "Identify where follow-ups break — response, qualification, or consistency",
          "Quantify what's costing you deals in your specific workflow",
          "Clarify your volume, team size, and current tools (CRM, WhatsApp, portals)",
        ],
      },
      {
        label: "Next 15 minutes",
        title: "Your Custom Implementation Roadmap",
        items: [
          "Recommend what to automate first at your stage",
          "Outline a realistic AI-led follow-up architecture for your agency",
          "Answer your specific questions — no generic pitch",
          "Define clear next steps, whether you work with us or not",
        ],
      },
    ],
    bonusesTitle: "After the Call",
    bonuses: [
      {
        label: "Bonus 1",
        title: "The 8-Step AI Funnel Blueprint",
        image: "/images/bonus-funnel-blueprint.png",
      },
      {
        label: "Bonus 2",
        title: "AI Prompts, High Converting Content Scripts & Templates Pack",
        image: "/images/bonus-prompts-pack.png",
      },
    ],
  },

  whoItsFor: {
    notThis: {
      title: "This Is NOT:",
      items: [
        "A group webinar or masterclass",
        "A generic AI tools demo",
        "A high-pressure sales call",
        "A session for beginners with zero enquiries",
      ],
    },
    thisIs: {
      title: "This IS:",
      items: [
        "A private 1:1 strategy call with Paras Arora",
        "A personalised audit of your follow-up and lead-handling gaps",
        "Honest advice on what AI can — and can't — fix in your agency",
        "A practical roadmap you can act on immediately",
      ],
    },
  },

  mentorStory: {
    heading: "Hi, I'm Paras Arora",
    intro:
      "On these 1:1 calls, I don't run a script. I listen to how your agency actually handles enquiries today, then help you see exactly where deals leak and what a working AI system would look like for your setup. No fluff — just clarity.",
    highlights: [
      "Founder of Exponential World",
      "AI Business Transformation Specialist",
      "Worked with 50+ real estate companies",
      "Expertise in AI Funnels, Voice Agents & CRM Automation",
      "Operating across India & Dubai",
      "Billion Creator Summit, Dubai — Attendee (January 2026)",
    ],
    image: "/images/mentor-about.png",
  },

  testimonials: {
    title: "Reviews & Testimonials",
    items: [
      {
        quote:
          "Before: I had no idea where to start with AI for my agency. After: The 1:1 call mapped my exact follow-up gaps and gave me a step-by-step plan I could hand to my team the same week.",
        name: "Pooja Mehta",
        location: "Mumbai",
        role: "Luxury Property Consultant",
        initials: "PM",
      },
      {
        quote:
          "Before: Every webinar felt generic. After: Paras looked at my actual enquiry volume and team structure — the advice was specific to my business, not theory.",
        name: "Sanjay Rao",
        location: "Bangalore",
        role: "Small Real Estate Agency Owner",
        initials: "SR",
      },
      {
        quote:
          "Before: I blamed lead quality. After: The call showed me my follow-up was the real bottleneck. I left with three concrete fixes to test before spending more on ads.",
        name: "Rahul Mehta",
        location: "Dubai",
        role: "Residential Real Estate Agent",
        initials: "RM",
      },
      {
        quote:
          "Before: I was overwhelmed by AI options. After: Paras cut through the noise and told me exactly what to implement first — no tools lecture, just a clear path.",
        name: "Aman Bansal",
        location: "Gurgaon",
        role: "Real Estate Consultant",
        initials: "AB",
      },
      {
        quote:
          "Before: My pipeline depended on my personal availability. After: The consultation helped me design a system that doesn't collapse when I'm on site visits.",
        name: "Vinod Patel",
        location: "Ahmedabad",
        role: "Residential & Commercial Property Broker",
        initials: "VP",
      },
      {
        quote:
          "Before: Five agents, no visibility on follow-ups. After: We left the call with a shared workflow and escalation rules that actually fit how our team works.",
        name: "Arjun Malhotra",
        location: "Singapore",
        role: "Sales Head, Real Estate Firm",
        initials: "AM",
      },
    ],
  },

  notFor: {
    title: "This Consultation Is NOT For:",
    items: [
      "Beginners or students with no active enquiries",
      "Anyone looking for a free implementation done for them",
      "Agents who only want \"more leads\" without fixing backend systems",
      "People unwilling to discuss their current process honestly",
      "Anyone expecting a motivational pep talk instead of practical advice",
      "People who aren't ready to make changes after the call",
    ],
    footer:
      "Book this call only if you're serious about fixing follow-ups and want personalised guidance for your agency.",
  },

  bonuses: {
    title: "By the end of your 1:1 consultation, you'll have clarity on:",
    cards: [
      { number: "01", title: "Where your enquiries go cold in your specific workflow" },
      { number: "02", title: "What to automate first at your current business stage" },
      { number: "03", title: "How AI fits as support — not a tech project" },
      { number: "04", title: "What a scalable follow-up system looks like for your agency" },
      { number: "05", title: "Your recommended next steps, with or without Estate Labs" },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is the consultation really free?",
        answer:
          "Yes. The 1:1 strategy call is completely free with no credit card required. Paras may mention Estate Labs implementation programs if they're a fit, but there's no obligation to buy anything.",
      },
      {
        question: "How long is the call?",
        answer:
          "Each consultation is 30 minutes via private video call. We'll use every minute on your business — not a generic presentation.",
      },
      {
        question: "Who should book this call?",
        answer:
          "Active agents, brokers, and agency owners who already receive enquiries but need personalised help diagnosing follow-up gaps and planning AI implementation.",
      },
      {
        question: "Do I need technical knowledge?",
        answer:
          "No. The call is in plain language. You don't need to know AI, coding, or specific tools — just be ready to describe how your agency handles enquiries today.",
      },
      {
        question: "What should I prepare before the call?",
        answer:
          "Think about your enquiry sources (portals, ads, WhatsApp), team size, current follow-up process, and where you feel deals slip. No documents required — but the more honest you are about your workflow, the more useful the call.",
      },
      {
        question: "Will this work for my city or market?",
        answer:
          "Yes. Paras works with agents across India, Dubai, and other markets. Follow-up principles are the same — the call is tailored to your local context and business model.",
      },
      {
        question: "What happens after I book?",
        answer:
          "You'll join our WhatsApp community for reminders and resources, and our team will reach out to confirm your consultation slot. Pick a time that works for you during registration.",
      },
    ],
  },

  finalCta: {
    headline: "Ready For Your Personalised Follow-Up Plan?",
    subheadline:
      "Book a free 30-minute 1:1 call — limited slots available each week.",
    button: "Book Free Consultation",
  },

  footer: {
    companyName: "EstateLabs",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/parasarora3008/", icon: "linkedin" as const },
      { label: "Twitter", href: "https://x.com/aroraparas3008", icon: "twitter" as const },
      { label: "Instagram", href: "https://www.instagram.com/parasarora_ai", icon: "instagram" as const },
      { label: "YouTube", href: "https://www.youtube.com/@parasarora_ai", icon: "youtube" as const },
    ],
  },

  whatsappCommunity: {
    url: "https://chat.whatsapp.com/I4sKuPKlnto30qcwQ7AfIk",
    label: "Join WhatsApp Community",
    groupName: "AI Realtor Launchpad - Estate Labs",
  },

  thankYou: {
    title: "You're Just One Step Away from Joining Our Private Community",
    message:
      "Tap below and join our exclusive WhatsApp community to get consultation reminders, scheduling updates, and resources from Estate Labs.",
    fbWebViewMessage:
      "Your browser may block WhatsApp. Tap below to open this page in Chrome or Safari.",
    joinButtonLabel: "Join the Community Now",
    externalBrowserButtonLabel: "Open in Chrome / Safari",
    copyButtonLabel: "Copy Join Link",
    copySuccessLabel: "Copied ✓",
    hintText:
      "If the button doesn't open Chrome: tap the three dots (⋮) → choose Open in browser or Open in Chrome, then press again.",
    manualJoinTitle: "How to Join Manually (only if the button doesn't work):",
    manualJoinSteps: [
      "Open WhatsApp and any chat (you can message yourself).",
      "Long-press → Paste the link → Send it.",
      "Tap that link — it'll take you straight to the join screen.",
    ],
    statusOpening: "Opening WhatsApp...",
    statusLaunching: "Launching WhatsApp...",
    statusCopied:
      "Link copied. Paste it into any WhatsApp chat to join.",
  },

  form: {
    title: "Book Free Consultation",
    subtitle: "1:1 Strategy Call · Real Estate Agents",
    tracks: [
      "Residential Sales",
      "Commercial Real Estate",
      "Luxury Properties",
      "Property Management",
      "Real Estate Brokerage",
      "Real Estate Developer",
    ],
    countryCodes: [
      { code: "+91", country: "India" },
      { code: "+1", country: "USA" },
      { code: "+44", country: "UK" },
      { code: "+61", country: "Australia" },
      { code: "+971", country: "UAE" },
      { code: "+65", country: "Singapore" },
      { code: "+49", country: "Germany" },
      { code: "+33", country: "France" },
    ],
  },
} satisfies SiteConfig;

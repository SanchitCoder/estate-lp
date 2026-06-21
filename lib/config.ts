import type { SiteConfig } from "@/lib/site-config-types";

export const siteConfig = {
  siteUrl: "https://www.estatelabs.io",
  eventFormat: "single" as const,
  registrationSource: "90-min-masterclass",
  cta: "Register Free",

  announcement:
    "FOR REAL ESTATE AGENTS WHO GET REGULAR ENQUIRIES BUT LOSE TRACK OF FOLLOW-UPS…",

  hero: {
    headline: "Why ",
    headlineHighlight1: "Top Agents",
    headlineMiddle: " Never ",
    headlineHighlight2: "\"Chase Leads\"",
    subheadline:
      "They fix follow-ups first — using AI to stay on top of every enquiry without hiring staff or running their business on chaotic WhatsApp threads",
    mentor: {
      name: "Paras Arora",
      title: "AI Implementation Specialist · Founder, Estate Labs",
      badge1: "10+ Years Of Industry Experience",
      badge2: "Founder, Exponential World AI",
      program: "Exponential World AI",
      image: "/images/mentor-hero.png",
    },
    masterclass: {
      duration: "90 Minutes · 1 Live Session",
      language: "Hinglish",
    },
    detailsTabLabel: "90-Min Live Session",
    cta: "Register Free",
  },

  video: {
    youtubeId: "tPwmXfoaDkI",
    startSeconds: 1,
    title: "Real Estate AI Masterclass Preview",
    hookLines: [
      "For real estate agents who already get enquiries",
      "but lose deals to slow follow-ups",
      "Free 90-min live session · Estate Labs",
    ],
  },

  brandsStrip: "/images/brands-strip.png",

  ctaStrip: {
    headline: "Ready To Fix Follow-Ups Before Your Next Enquiry Goes Cold?",
    button: "Register Free",
  },

  learnings: {
    title: "This Masterclass Is Built For Real Estate Agents, Brokers, and Agencies Who:",
    subtitle: "",
    cards: [
      {
        title: "Already getting enquiries",
        content:
          "Already get enquiries from ads, property portals, or WhatsApp but struggle to keep up with every lead.",
        icon: "MessageCircle",
      },
      {
        title: "Miss follow-ups on busy days",
        content:
          "Miss follow-ups on busy days because there's no proper system in place to manage incoming leads.",
        icon: "Bell",
      },
      {
        title: "WhatsApp has become chaotic",
        content:
          "Feel WhatsApp has become chaotic rather than professional — it's now a mess of unread chats.",
        icon: "Smartphone",
      },
      {
        title: "Lose serious buyers silently",
        content:
          "Lose serious buyers silently due to delayed or inconsistent responses that erode trust.",
        icon: "UserX",
      },
    ],
    quote: "I had the leads… but still lost the deal.",
    quoteAuthor: "Every agent who hasn't fixed follow-ups yet",
  },

  realProblem: {
    headline: "The Real Problem",
    headlineHighlight: "Isn't Leads.",
    headlineSuffix: "It's What Happens After the Enquiry.",
    subheadline: "Most real estate agents think the solution is more leads. It isn't",
    boxTitle: "Deals are lost because:",
    reasons: [
      "Replies go out late — or not at all",
      "Follow-ups stop after the first day",
      "Serious buyers get treated like casual browsers",
      "Consistency breaks on busy days",
    ],
    endResult:
      "60–80% of deals are lost silently — not because the lead was bad, but because the follow-up system is broken, causing a loss of visibility and control.",
    cta: "Register Free",
    ctaSubtext: "Stop Losing Serious Buyers.",
  },

  masterclassAgenda: {
    title: "What Happens in This 90-Minute Live Session",
    subtitle: "One live session · 90 minutes · No multi-day commitment",
    parts: [
      {
        label: "First 45 minutes",
        title: "Diagnose Where Deals Are Leaking",
        items: [
          "Where and why your enquiries actually go cold",
          "The real cost of delayed replies and missed follow-ups",
          "Why manual WhatsApp and CRM workflows break under volume",
          "A live breakdown of the follow-up gaps killing your conversions",
        ],
      },
      {
        label: "Next 45 minutes",
        title: "Build a Predictable Follow-Up System",
        items: [
          "What a scalable AI-led lead-handling system looks like",
          "How response, qualification, and follow-up should work together",
          "What to automate first at your current business stage",
          "A clear implementation path — without tools training or coding",
        ],
      },
    ],
    bonusesTitle: "Bonuses",
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
        "An AI tools demo",
        'A "learn ChatGPT" class',
        "A motivational or mindset webinar",
        'Another session telling you to "get more leads"',
      ],
    },
    thisIs: {
      title: "This IS:",
      items: [
        "A proven AI real estate lead-handling system walkthrough",
        "Clear visibility into where and why deals leak after enquiries",
        "A breakdown of how response, follow-up, and qualification actually work",
        "A focused 90-minute live session built for real estate agents",
      ],
    },
  },

  mentorStory: {
    heading: "Hi, I'm Paras Arora",
    intro:
      "I've spent the last several years helping real estate businesses across India and Dubai replace chaos with systems. I don't teach generic AI — I build specific, operational AI frameworks that real estate agents can deploy immediately to stop losing deals to slow follow-ups and inconsistent responses.",
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
          "Before: I assumed AI would be too technical for my day-to-day work. After: The session showed me how a smart assistant can handle repetitive follow-ups — so I can focus on actual conversations and site visits instead of chasing replies.",
        name: "Pooja Mehta",
        location: "Mumbai",
        role: "Luxury Property Consultant",
        initials: "PM",
      },
      {
        quote:
          "Before: My small team kept missing follow-ups as enquiry volume grew. After: I understood exactly why our manual process broke under pressure — and what kind of system would actually bring predictability to the business.",
        name: "Sanjay Rao",
        location: "Bangalore",
        role: "Small Real Estate Agency Owner",
        initials: "SR",
      },
      {
        quote:
          "Before: I blamed my ads when conversions were flat. After: I saw leads were coming in fine — my inconsistent follow-up was the real leak. The live breakdown showed me precisely where buyers were going silent.",
        name: "Rahul Mehta",
        location: "Dubai",
        role: "Residential Real Estate Agent",
        initials: "RM",
      },
      {
        quote:
          "Before: I thought lead quality was my main problem despite spending on portals and ads. After: I could see how delays, missed follow-ups, and manual handling were costing me serious buyers — and how AI fits as a support system, not a tech project.",
        name: "Aman Bansal",
        location: "Gurgaon",
        role: "Real Estate Consultant",
        initials: "AB",
      },
      {
        quote:
          "Before: My entire pipeline depended on whether I was personally available that day. After: I understood why enquiries go silent even when interest is high — and why consistency can't depend on one person's availability.",
        name: "Vinod Patel",
        location: "Ahmedabad",
        role: "Residential & Commercial Property Broker",
        initials: "VP",
      },
      {
        quote:
          "Before: Multiple agents, no shared follow-up system, and deals slipping with no visibility. After: The workflow walkthrough showed me what a structured backend actually looks like — and why it becomes necessary as enquiry volume grows.",
        name: "Arjun Malhotra",
        location: "Singapore",
        role: "Sales Head, Real Estate Firm",
        initials: "AM",
      },
    ],
  },

  notFor: {
    title: "This Masterclass Is NOT For:",
    items: [
      "Beginners or students",
      "Anyone looking for shortcuts, guarantees, or quick wins",
      "People unwilling to change how follow-ups are handled",
      "Agents who only want \"more leads\" without fixing backend systems",
      "Anyone expecting a motivational talk instead of a real system walkthrough",
      "People who aren't serious about building predictable, scalable operations",
    ],
    footer:
      "Join this session only if you're looking for clarity, control, and a real AI-powered system for your real estate business.",
  },

  bonuses: {
    title: "By the end of this 90-minute session, you'll have absolute clarity on:",
    cards: [
      { number: "01", title: "Where and why your enquiries actually go cold" },
      { number: "02", title: "The exact lead-handling system your business is missing" },
      { number: "03", title: "Why manual follow-ups break under high volume and busy days" },
      { number: "04", title: "What a scalable, predictable follow-up process looks like" },
      { number: "05", title: "What implementation should look like at your current business stage" },
    ],
  },

  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Do I need technical knowledge or AI experience to attend?",
        answer:
          "No. This session is built for working real estate agents, not developers. Everything is explained in plain language with real examples from agency workflows — no coding, no jargon, and no prior AI experience required.",
      },
      {
        question: "Is this about learning tools like ChatGPT or software setup?",
        answer:
          "No. This is not a tools tutorial. You'll see how AI-led follow-up systems work at a high level — what to automate, what to keep human, and where most agents go wrong — without any live software setup during the session.",
      },
      {
        question: "Who should attend this session?",
        answer:
          "Active agents, brokers, and agency owners who already receive enquiries from ads, portals, or WhatsApp but lose deals because follow-ups are slow, inconsistent, or impossible to track on busy days.",
      },
      {
        question: "I already use a CRM. Will this still be useful?",
        answer:
          "Yes. Most CRMs still depend on agents manually updating stages and remembering to follow up. This session shows what your system should do automatically — response, qualification, reminders, and escalation — regardless of which CRM or portal you use.",
      },
      {
        question: "Will this work for my city or local market?",
        answer:
          "Yes. The follow-up principles apply across residential and commercial real estate in any city — India, Dubai, or elsewhere. Agents in Mumbai, Bangalore, Gurgaon, Ahmedabad, and Dubai have used the same framework; the market changes, but enquiry behaviour does not.",
      },
      {
        question: "Is anything sold at the end of the session?",
        answer:
          "The masterclass itself is free. Paras may briefly mention Estate Labs programs for agents who want hands-on implementation help, but there is no pressure to buy anything. You'll walk away with a complete system breakdown either way.",
      },
      {
        question: "How long is the session and do I need to attend multiple days?",
        answer:
          "It's a single 90-minute live session — not a multi-day program. Show up once, get the full system walkthrough, and receive the bonus resources after registering.",
      },
    ],
  },

  finalCta: {
    headline: "Ready To Stop Losing Deals After the Enquiry?",
    subheadline:
      "Join agents who are fixing follow-ups first — before spending another rupee on leads.",
    button: "Register Free",
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
      "Tap below and join our exclusive WhatsApp community to get masterclass updates, reminders, and resources from Estate Labs.",
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
    title: "Register Free",
    subtitle: "For Real Estate Agents",
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

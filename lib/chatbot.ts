export type ChatRole = "bot" | "user";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

export type QuickReply = {
  id: string;
  label: string;
  message: string;
};

export type ChatAction = {
  id: string;
  label: string;
  type: "register" | "link";
  href?: string;
};

const PAGE_GREETINGS: Record<string, string> = {
  "/":
    "Hi! I can help you with the free 90-minute masterclass — dates, what you'll learn, or how to register.",
  "/mega-webinar":
    "Hi! Ask me anything about the 2-day mega webinar — both dates, the agenda, or how to save your seat.",
  "/consultation":
    "Hi! I can help you book your free 1:1 consultation or answer questions about the call.",
  "/thank-you":
    "You're almost done! Need help joining the WhatsApp community or what happens next?",
};

const DEFAULT_GREETING =
  "Hi! I'm the Estate Labs assistant. Ask about our masterclass, 2-day webinar, or free 1:1 consultation.";

export function getGreeting(pathname: string): string {
  return PAGE_GREETINGS[pathname] ?? DEFAULT_GREETING;
}

export function getQuickReplies(pathname: string): QuickReply[] {
  const common: QuickReply[] = [
    { id: "what-learn", label: "What will I learn?", message: "What will I learn?" },
    { id: "technical", label: "Do I need tech skills?", message: "Do I need technical knowledge?" },
    { id: "cost", label: "Is it free?", message: "Is this free?" },
  ];

  if (pathname === "/consultation") {
    return [
      { id: "book", label: "Book consultation", message: "How do I book the consultation?" },
      { id: "duration", label: "How long is the call?", message: "How long is the consultation?" },
      ...common,
    ];
  }

  if (pathname === "/mega-webinar") {
    return [
      { id: "both-days", label: "Both days required?", message: "Do I need to attend both days?" },
      { id: "dates", label: "When is it?", message: "What are the dates and times?" },
      ...common,
    ];
  }

  if (pathname === "/thank-you") {
    return [
      { id: "whatsapp", label: "Join WhatsApp", message: "How do I join the WhatsApp group?" },
      { id: "next", label: "What happens next?", message: "What happens after I register?" },
    ];
  }

  return [
    { id: "register", label: "How to register?", message: "How do I register?" },
    { id: "dates", label: "Date & time?", message: "When is the masterclass?" },
    ...common,
  ];
}

export function getChatActions(pathname: string): ChatAction[] {
  if (pathname === "/consultation") {
    return [
      { id: "register", label: "Book Free Consultation", type: "register" },
      { id: "webinar", label: "2-Day Webinar", type: "link", href: "/mega-webinar" },
    ];
  }

  if (pathname === "/mega-webinar") {
    return [
      { id: "register", label: "Register Free", type: "register" },
      { id: "consult", label: "1:1 Consultation", type: "link", href: "/consultation" },
    ];
  }

  if (pathname === "/thank-you") {
    return [
      { id: "home", label: "Back to Home", type: "link", href: "/" },
      { id: "consult", label: "Book Consultation", type: "link", href: "/consultation" },
    ];
  }

  return [
    { id: "register", label: "Register Free", type: "register" },
    { id: "webinar", label: "2-Day Webinar", type: "link", href: "/mega-webinar" },
    { id: "consult", label: "1:1 Consultation", type: "link", href: "/consultation" },
  ];
}

function matches(input: string, keywords: string[]): boolean {
  const normalized = input.toLowerCase();
  return keywords.some((kw) => normalized.includes(kw));
}

export function getBotResponse(input: string, pathname: string): string {
  const text = input.trim().toLowerCase();

  if (matches(text, ["hello", "hi", "hey", "start"])) {
    return getGreeting(pathname);
  }

  if (matches(text, ["whatsapp", "community", "group", "join"])) {
    return "After registering, you'll be directed to join our private WhatsApp community for reminders, updates, and resources. On the thank-you page, tap \"Join the Community Now\" — or copy the link if the button doesn't open WhatsApp.";
  }

  if (matches(text, ["register", "sign up", "signup", "book", "enrol", "enroll"])) {
    if (pathname === "/consultation") {
      return "Tap \"Book Free Consultation\" on this page to fill in your details. Our team will confirm your 1:1 slot and send reminders via WhatsApp.";
    }
    return "Tap the red Register button on this page, answer a few quick questions, and submit your details. It's free — no credit card needed.";
  }

  if (matches(text, ["free", "cost", "price", "charge", "paid"])) {
    return "Yes — the masterclass, mega webinar, and 1:1 consultation are all completely free. Paras may mention Estate Labs programs if they're a fit, but there's no obligation to buy anything.";
  }

  if (matches(text, ["technical", "tech", "coding", "ai experience", "developer"])) {
    return "No technical knowledge needed. Everything is explained in plain language for working real estate agents — no coding, no jargon, and no prior AI experience required.";
  }

  if (matches(text, ["learn", "cover", "agenda", "session", "webinar", "masterclass"])) {
    if (pathname === "/consultation") {
      return "On your 30-minute call, Paras will diagnose where follow-ups break in your agency and give you a personalised implementation roadmap — what to automate first, and how AI fits your workflow.";
    }
    if (pathname === "/mega-webinar") {
      return "Day 1 diagnoses where deals leak after enquiries. Day 2 walks through building a scalable AI-led follow-up system. Each evening is 90 minutes live with Paras.";
    }
    return "You'll see where enquiries go cold, why manual follow-ups break under volume, and what a scalable AI-led lead-handling system looks like — all in one focused 90-minute live session.";
  }

  if (matches(text, ["both day", "two day", "2 day", "attend both", "multiple day"])) {
    return "For the 2-day mega webinar, yes — Day 1 and Day 2 work together. Day 1 diagnoses the leaks; Day 2 builds the system. Both are 90 minutes each, same time on consecutive evenings (IST).";
  }

  if (matches(text, ["date", "time", "when", "schedule", "ist"])) {
    if (pathname === "/consultation") {
      return "Consultations are 30-minute private video calls. Slots are limited each week — register on this page and our team will confirm a time that works for you.";
    }
    if (pathname === "/mega-webinar") {
      return "The page shows the next upcoming 2-day cohort with both dates and times in IST. Register to get WhatsApp reminders for Day 1 and Day 2.";
    }
    return "The hero section on this page shows the next upcoming session date and time in IST. It updates automatically so you're always seeing the next live cohort.";
  }

  if (matches(text, ["long", "duration", "how many minute", "90", "30 minute"])) {
    if (pathname === "/consultation") {
      return "The 1:1 consultation is 30 minutes — a private video call tailored to your agency's enquiry flow and follow-up gaps.";
    }
    if (pathname === "/mega-webinar") {
      return "The mega webinar runs across two evenings — 90 minutes each day, same time both days (IST).";
    }
    return "The masterclass is a single 90-minute live session — not a multi-day program.";
  }

  if (matches(text, ["crm", "portal", "99acres", "magicbricks"])) {
    return "Yes, it's still useful if you use a CRM. Most CRMs depend on manual updates and human discipline. The session shows what your system should do automatically — response, qualification, reminders, and escalation.";
  }

  if (matches(text, ["city", "market", "mumbai", "dubai", "bangalore", "local"])) {
    return "Yes — the follow-up principles apply across residential and commercial real estate in any city. Agents in India, Dubai, and elsewhere use the same framework.";
  }

  if (matches(text, ["sold", "sell", "pitch", "buy", "program", "obligation"])) {
    return "The sessions themselves are free. Paras may briefly mention Estate Labs implementation programs for agents who want hands-on help, but there's no pressure to buy. You'll get a complete system breakdown either way.";
  }

  if (matches(text, ["next", "after register", "what happens", "then"])) {
    return "After registering, you'll join our WhatsApp community for reminders and resources. For the masterclass/webinar, show up live at the scheduled time. For consultations, our team will confirm your 1:1 slot.";
  }

  if (matches(text, ["consultation", "1:1", "one on one", "private call", "strategy call"])) {
    return "Our free 1:1 consultation is a 30-minute private call with Paras to diagnose your follow-up gaps and map a custom AI roadmap. Book at estatelabs.io/consultation";
  }

  if (matches(text, ["mega webinar", "2-day", "two day"])) {
    return "The 2-day mega webinar is a deeper live program — Day 1 diagnoses deal leaks, Day 2 builds the follow-up system. See estatelabs.io/mega-webinar";
  }

  if (matches(text, ["contact", "human", "speak", "email", "support"])) {
    return "You can reach Paras on LinkedIn (parasarora3008) or register for a free session and our team will follow up via WhatsApp. For urgent help, use the registration form on this page.";
  }

  return "I'm not sure about that one. Try asking about registration, dates, what you'll learn, or whether you need technical skills. You can also tap a quick reply below or use the action buttons.";
}

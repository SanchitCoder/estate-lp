export type LeadQuality = "hot" | "warm" | "cold";

export type QualificationQuestionId =
  | "role"
  | "enquiries"
  | "followUp"
  | "readiness"
  | "timeline";

export type QualificationStep = QualificationQuestionId;

export type QualificationData = {
  role: string | null;
  enquiriesPerMonth: string | null;
  followUpMethod: string | null;
  readiness: string | null;
  timeline: string | null;
};

export type QualificationOption = {
  value: string;
  label: string;
  score: number;
};

export type QualificationQuestion = {
  id: QualificationQuestionId;
  question: string;
  options: QualificationOption[];
};

export const QUALIFICATION_QUESTION_ORDER: QualificationQuestionId[] = [
  "role",
  "enquiries",
  "followUp",
  "readiness",
  "timeline",
];

export const QUALIFICATION_QUESTIONS: QualificationQuestion[] = [
  {
    id: "role",
    question: "What best describes you?",
    options: [
      { value: "agency_owner", label: "Agency owner/builder with a team", score: 3 },
      { value: "team_lead", label: "Team lead managing a few agents", score: 2 },
      { value: "solo_agent", label: "Solo agent/broker", score: 2 },
      { value: "just_exploring", label: "Just exploring", score: 0 },
    ],
  },
  {
    id: "enquiries",
    question: "How many property enquiries do you get per month?",
    options: [
      { value: "200_plus", label: "200+", score: 3 },
      { value: "50_200", label: "50–200", score: 2 },
      { value: "under_50", label: "Under 50", score: 1 },
      { value: "just_starting", label: "Just starting", score: 0 },
    ],
  },
  {
    id: "followUp",
    question: "How do you handle follow-ups today?",
    options: [
      { value: "manually_whatsapp", label: "Manually on WhatsApp", score: 2 },
      { value: "spreadsheet", label: "Spreadsheet", score: 2 },
      { value: "crm", label: "A CRM already", score: 2 },
      { value: "nothing_structured", label: "Nothing structured", score: 1 },
    ],
  },
  {
    id: "readiness",
    question: "How ready are you to put a system in place?",
    options: [
      { value: "ready_now", label: "Ready to invest now", score: 3 },
      { value: "comparing", label: "Comparing options", score: 2 },
      { value: "just_learning", label: "Just learning", score: 0 },
    ],
  },
  {
    id: "timeline",
    question: "When do you want this fixed?",
    options: [
      { value: "this_month", label: "This month", score: 3 },
      { value: "this_quarter", label: "This quarter", score: 2 },
      { value: "no_timeline", label: "No set timeline", score: 0 },
    ],
  },
];

export const initialQualification: QualificationData = {
  role: null,
  enquiriesPerMonth: null,
  followUpMethod: null,
  readiness: null,
  timeline: null,
};

const QUESTION_FIELD: Record<QualificationQuestionId, keyof QualificationData> = {
  role: "role",
  enquiries: "enquiriesPerMonth",
  followUp: "followUpMethod",
  readiness: "readiness",
  timeline: "timeline",
};

export function getQuestionById(id: QualificationQuestionId): QualificationQuestion {
  const question = QUALIFICATION_QUESTIONS.find((q) => q.id === id);
  if (!question) throw new Error(`Unknown qualification question: ${id}`);
  return question;
}

export function getOptionLabel(questionId: QualificationQuestionId, value: string): string {
  const question = getQuestionById(questionId);
  return question.options.find((o) => o.value === value)?.label ?? value;
}

export function getOptionScore(questionId: QualificationQuestionId, value: string): number {
  const question = getQuestionById(questionId);
  return question.options.find((o) => o.value === value)?.score ?? 0;
}

export function isQualificationComplete(data: QualificationData): boolean {
  return QUALIFICATION_QUESTION_ORDER.every((id) => data[QUESTION_FIELD[id]] !== null);
}

export function getFirstIncompleteStep(data: QualificationData): QualificationStep {
  for (const id of QUALIFICATION_QUESTION_ORDER) {
    if (data[QUESTION_FIELD[id]] === null) return id;
  }
  return "timeline";
}

export function getNextStep(current: QualificationStep): QualificationStep | "form" {
  const index = QUALIFICATION_QUESTION_ORDER.indexOf(current);
  if (index === -1 || index === QUALIFICATION_QUESTION_ORDER.length - 1) return "form";
  return QUALIFICATION_QUESTION_ORDER[index + 1];
}

export function setQualificationAnswer(
  data: QualificationData,
  questionId: QualificationQuestionId,
  value: string
): QualificationData {
  const field = QUESTION_FIELD[questionId];
  return { ...data, [field]: value };
}

export function calculateLeadQuality(data: QualificationData): LeadQuality {
  if (!isQualificationComplete(data)) return "cold";

  let score = 0;
  for (const id of QUALIFICATION_QUESTION_ORDER) {
    const value = data[QUESTION_FIELD[id]];
    if (value) score += getOptionScore(id, value);
  }

  if (data.role === "just_exploring" && data.readiness === "just_learning") {
    return "cold";
  }

  if (score >= 10) return "hot";
  if (score >= 6) return "warm";
  return "cold";
}

export function getLeadQualityLabel(quality: LeadQuality): string {
  if (quality === "hot") return "Hot Lead";
  if (quality === "warm") return "Warm Lead";
  return "Cold Lead";
}

export function getLeadQualityMessage(quality: LeadQuality): string {
  if (quality === "hot") {
    return "You're a great fit — high enquiry volume, clear urgency, and ready to act. Complete your details and we'll prioritise your spot.";
  }
  if (quality === "warm") {
    return "You look like a solid fit. Complete your registration and our team will follow up with the right next steps for your stage.";
  }
  return "Thanks for sharing. Complete your details and we'll send resources matched to where you are right now.";
}

export const QUALIFICATION_PREFILL_KEY = "estate-labs-qualification-prefill";

export function saveQualificationPrefill(data: QualificationData) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(QUALIFICATION_PREFILL_KEY, JSON.stringify(data));
}

export function loadQualificationPrefill(): QualificationData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(QUALIFICATION_PREFILL_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as QualificationData;
    return isQualificationComplete(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearQualificationPrefill() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(QUALIFICATION_PREFILL_KEY);
}

import type { QualificationData } from "@/lib/leadQualification";
import {
  calculateLeadQuality,
  getOptionLabel,
  getOptionScore,
  isQualificationComplete,
  type QualificationQuestionId,
} from "@/lib/leadQualification";
import type { RegisterFormData } from "@/lib/registerFormSchema";

function buildQualificationPayload(qualification?: QualificationData) {
  if (!qualification || !isQualificationComplete(qualification)) {
    return {
      role: null,
      roleLabel: null,
      enquiriesPerMonth: null,
      enquiriesLabel: null,
      followUpMethod: null,
      followUpLabel: null,
      readiness: null,
      readinessLabel: null,
      timeline: null,
      timelineLabel: null,
      leadQuality: null,
      leadScore: null,
    };
  }

  const fields: { id: QualificationQuestionId; key: keyof QualificationData; labelKey: string }[] =
    [
      { id: "role", key: "role", labelKey: "roleLabel" },
      { id: "enquiries", key: "enquiriesPerMonth", labelKey: "enquiriesLabel" },
      { id: "followUp", key: "followUpMethod", labelKey: "followUpLabel" },
      { id: "readiness", key: "readiness", labelKey: "readinessLabel" },
      { id: "timeline", key: "timeline", labelKey: "timelineLabel" },
    ];

  const labels: Record<string, string | null> = {};
  let leadScore = 0;

  for (const { id, key, labelKey } of fields) {
    const value = qualification[key] as string;
    labels[labelKey] = getOptionLabel(id, value);
    leadScore += getOptionScore(id, value);
  }

  const leadQuality = calculateLeadQuality(qualification);

  return {
    role: qualification.role,
    roleLabel: labels.roleLabel,
    enquiriesPerMonth: qualification.enquiriesPerMonth,
    enquiriesLabel: labels.enquiriesLabel,
    followUpMethod: qualification.followUpMethod,
    followUpLabel: labels.followUpLabel,
    readiness: qualification.readiness,
    readinessLabel: labels.readinessLabel,
    timeline: qualification.timeline,
    timelineLabel: labels.timelineLabel,
    leadQuality,
    leadScore,
  };
}

export async function submitRegistration(
  data: RegisterFormData,
  qualification?: QualificationData,
  source = "landing-page"
) {
  const qualificationPayload = buildQualificationPayload(qualification);

  const payload = {
    firstName: data.firstName,
    email: data.email,
    countryCode: data.countryCode,
    phone: data.phone,
    fullPhone: `${data.countryCode}${data.phone}`,
    submittedAt: new Date().toISOString(),
    source,
    ...qualificationPayload,
  };

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      typeof body.message === "string"
        ? body.message
        : "Submission failed. Please try again."
    );
  }

  return res.json();
}

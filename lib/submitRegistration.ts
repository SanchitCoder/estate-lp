import type { QualificationData } from "@/components/RegisterQualification";
import type { RegisterFormData } from "@/lib/registerFormSchema";

export async function submitRegistration(
  data: RegisterFormData,
  qualification?: QualificationData
) {
  const payload = {
    firstName: data.firstName,
    email: data.email,
    countryCode: data.countryCode,
    phone: data.phone,
    fullPhone: `${data.countryCode}${data.phone}`,
    isRealEstateAgent: qualification?.isAgent ?? null,
    yearsOfExperience: qualification?.experience || null,
    hasClosedDeals: qualification?.closedDeals ?? null,
    submittedAt: new Date().toISOString(),
    source: "landing-page",
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

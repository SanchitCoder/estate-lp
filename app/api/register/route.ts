import { NextResponse } from "next/server";
import { registerFormSchema } from "@/lib/registerFormSchema";

const WEBHOOK_URL =
  process.env.N8N_WEBHOOK_URL ??
  "https://n8n.srv981435.hstgr.cloud/webhook/7b194e34-a4de-4a2a-8f54-0669e0427d9f";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = registerFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid form data", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const payload = {
      firstName: data.firstName,
      email: data.email,
      countryCode: data.countryCode,
      phone: data.phone,
      fullPhone: `${data.countryCode}${data.phone}`,
      isRealEstateAgent: body.isRealEstateAgent ?? null,
      yearsOfExperience: body.yearsOfExperience ?? null,
      hasClosedDeals: body.hasClosedDeals ?? null,
      submittedAt: body.submittedAt ?? new Date().toISOString(),
      source: body.source ?? "landing-page",
    };

    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      return NextResponse.json(
        { message: "Unable to complete registration. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

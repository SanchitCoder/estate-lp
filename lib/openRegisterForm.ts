import type { QualificationData } from "@/lib/leadQualification";

export function openRegisterForm(prefill?: QualificationData) {
  if (prefill) {
    window.dispatchEvent(
      new CustomEvent("open-register-form", { detail: { qualification: prefill } })
    );
    return;
  }
  window.dispatchEvent(new CustomEvent("open-register-form"));
}

export function handleOpenRegisterForm() {
  openRegisterForm();
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X, Loader2 } from "lucide-react";
import { usePageContext, useSiteConfig } from "@/lib/site-config-context";
import {
  registerFormSchema,
  countryFlags,
  type RegisterFormData,
} from "@/lib/registerFormSchema";
import { submitRegistration } from "@/lib/submitRegistration";
import QualificationOptions from "@/components/QualificationOptions";
import {
  type QualificationData,
  type QualificationQuestionId,
  type QualificationStep,
  initialQualification,
  isQualificationComplete,
  loadQualificationPrefill,
  setQualificationAnswer,
} from "@/lib/leadQualification";

const labelClass = "block text-gray-600 text-sm mb-1.5";
const inputClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-colors focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED]/30";
const errorClass = "text-red-500 text-xs mt-1";

export default function RegisterPopup() {
  const { form: formConfig, cta } = useSiteConfig();
  const { registrationSource } = usePageContext();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<QualificationStep | "form">("role");
  const [qualification, setQualification] = useState<QualificationData>(initialQualification);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { countryCode: "+91" },
  });

  const countryCode = watch("countryCode");

  const resetFlow = (prefill?: QualificationData | null) => {
    if (prefill && isQualificationComplete(prefill)) {
      setQualification(prefill);
      setStep("form");
    } else {
      setQualification(initialQualification);
      setStep("role");
    }
    setSubmitError(null);
  };

  useEffect(() => {
    const handleOpen = (event: Event) => {
      const custom = event as CustomEvent<{ qualification?: QualificationData }>;
      const fromEvent = custom.detail?.qualification;
      const fromStorage = loadQualificationPrefill();
      resetFlow(fromEvent ?? fromStorage);
      setOpen(true);
    };
    window.addEventListener("open-register-form", handleOpen);
    return () => window.removeEventListener("open-register-form", handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError(null);
    try {
      await submitRegistration(data, qualification, registrationSource);
      setOpen(false);
      document.body.style.overflow = "";
      window.location.href = "/thank-you";
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  const handleQualificationSelect = (
    questionId: QualificationQuestionId,
    value: string,
    _label: string
  ) => {
    const updated = setQualificationAnswer(qualification, questionId, value);
    setQualification(updated);

    const currentIndex = ["role", "enquiries", "followUp", "readiness", "timeline"].indexOf(
      questionId
    );
    const nextId = ["role", "enquiries", "followUp", "readiness", "timeline"][currentIndex + 1] as
      | QualificationStep
      | undefined;

    setStep(nextId ?? "form");
  };

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/50"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[201] flex items-end sm:items-center justify-center p-3 sm:p-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:pb-4 pointer-events-none"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="register-popup-title"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="pointer-events-auto relative w-full sm:w-[55vw] md:w-[50vw] lg:w-[520px] max-w-[540px]
                max-h-[90dvh] bg-[rgb(251,239,231)] rounded-xl border border-[rgba(27,65,64,0.15)]
                shadow-[0_16px_48px_rgba(27,65,64,0.15)] flex flex-col overflow-hidden"
            >
              {step === "form" && (
                <button
                  onClick={close}
                  className="absolute top-4 right-4 z-10 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-md"
                  aria-label="Close registration form"
                >
                  <X size={20} />
                </button>
              )}

              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {step !== "form" ? (
                    <QualificationOptions
                      key={step}
                      step={step}
                      onSelect={handleQualificationSelect}
                      variant="popup"
                    />
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      className="px-6 sm:px-8 pt-7 pb-6"
                    >
                      <div className="text-center mb-5 pr-6">
                        <h2
                          id="register-popup-title"
                          className="text-[rgb(18,51,50)] text-2xl sm:text-3xl font-extrabold"
                        >
                          {formConfig.title}
                        </h2>
                        <p className="text-[rgb(27,65,64)] text-sm mt-1.5">
                          {formConfig.subtitle}.
                        </p>
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                        <div>
                          <label htmlFor="popup-firstName" className={labelClass}>
                            First Name
                          </label>
                          <input
                            id="popup-firstName"
                            {...register("firstName")}
                            className={inputClass}
                          />
                          {errors.firstName && (
                            <p className={errorClass}>{errors.firstName.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="popup-email" className={labelClass}>
                            Email ID
                          </label>
                          <input
                            id="popup-email"
                            type="email"
                            {...register("email")}
                            className={inputClass}
                          />
                          {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                        </div>

                        <div>
                          <label htmlFor="popup-phone" className={labelClass}>
                            Phone Number
                          </label>
                          <div className="flex gap-2">
                            <div className="relative flex-shrink-0">
                              <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-base pointer-events-none">
                                {countryFlags[countryCode] ?? "🌐"}
                              </span>
                              <select
                                {...register("countryCode")}
                                className={`${inputClass} w-[88px] pl-8 pr-1 cursor-pointer appearance-none`}
                              >
                                {formConfig.countryCodes.map((c) => (
                                  <option key={c.code} value={c.code}>
                                    {c.code}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <input
                              id="popup-phone"
                              type="tel"
                              {...register("phone")}
                              className={`${inputClass} flex-1`}
                            />
                          </div>
                          {(errors.phone || errors.countryCode) && (
                            <p className={errorClass}>
                              {errors.phone?.message || errors.countryCode?.message}
                            </p>
                          )}
                        </div>

                        {submitError && (
                          <p className="text-red-500 text-sm text-center">{submitError}</p>
                        )}

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-red w-full py-3.5 mt-2 text-sm font-extrabold tracking-widest uppercase rounded-xl animate-pulse-red disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 size={16} className="animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            cta
                          )}
                        </motion.button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

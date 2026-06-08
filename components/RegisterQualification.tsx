"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

export type QualificationData = {
  isAgent: boolean | null;
  experience: string;
  closedDeals: boolean | null;
};

export type QualificationStep = "agent" | "notAgent" | "experience" | "deals";

type Props = {
  step: QualificationStep;
  onAgentAnswer: (isAgent: boolean) => void;
  onExperienceSelect: (years: string) => void;
  onDealsAnswer: (closedDeals: boolean) => void;
  onClose: () => void;
};

const questionClass =
  "text-[rgb(18,51,50)] text-xl sm:text-2xl font-extrabold text-center leading-snug mb-8 sm:mb-10";

const yesBtnClass =
  "flex-1 py-3.5 sm:py-4 bg-[#22C55E] text-white font-serif text-lg sm:text-xl font-bold rounded-sm border-b-[3px] border-[rgb(18,51,50)] hover:brightness-105 active:translate-y-[1px] active:border-b-[2px] transition-all";

const noBtnClass =
  "flex-1 py-3.5 sm:py-4 bg-[#FF2E2E] text-white font-serif text-lg sm:text-xl font-bold rounded-sm border-b-[3px] border-[rgb(18,51,50)] hover:brightness-105 active:translate-y-[1px] active:border-b-[2px] transition-all";

const expBtnClass =
  "flex-1 min-w-[90px] py-3 sm:py-3.5 px-2 bg-[rgb(18,51,50)] text-white font-serif text-sm sm:text-base font-bold rounded-sm border-b-[3px] border-[#2F80ED] hover:brightness-110 active:translate-y-[1px] active:border-b-[2px] transition-all whitespace-nowrap";

export default function RegisterQualification({
  step,
  onAgentAnswer,
  onExperienceSelect,
  onDealsAnswer,
  onClose,
}: Props) {
  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
      className="relative w-full px-4 sm:px-8 py-8 sm:py-10"
    >
      {step === "notAgent" && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 text-[rgb(18,51,50)] hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          <X size={22} strokeWidth={2.5} />
        </button>
      )}

      {step === "agent" && (
        <>
          <h2 className={questionClass}>
            Are you a real estate agent/
            <br />
            owner?
          </h2>
          <div className="flex gap-3 sm:gap-4 max-w-sm mx-auto">
            <button type="button" onClick={() => onAgentAnswer(true)} className={yesBtnClass}>
              Yes
            </button>
            <button type="button" onClick={() => onAgentAnswer(false)} className={noBtnClass}>
              No
            </button>
          </div>
        </>
      )}

      {step === "notAgent" && (
        <div className="text-center max-w-md mx-auto pt-2 pr-6">
          <p className="text-[rgb(18,51,50)] text-lg sm:text-xl font-extrabold leading-snug mb-4">
            &ldquo;Thanks for checking in!
          </p>
          <p className="text-[rgb(27,65,64)] text-sm sm:text-base leading-relaxed">
            This session is best suited for real estate agents/owners at the moment. Share your
            details and we&apos;ll reach out with something more relevant for you.&rdquo;
          </p>
        </div>
      )}

      {step === "experience" && (
        <>
          <h2 className={questionClass}>How many years of experience do you have?</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-lg mx-auto">
            {["0-2 Years", "2-5 Years", "5 Years +"].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => onExperienceSelect(label)}
                className={expBtnClass}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}

      {step === "deals" && (
        <>
          <h2 className={questionClass}>
            Have you closed any deals for your real estate business?
          </h2>
          <div className="flex gap-3 sm:gap-4 max-w-sm mx-auto">
            <button type="button" onClick={() => onDealsAnswer(true)} className={yesBtnClass}>
              Yes
            </button>
            <button type="button" onClick={() => onDealsAnswer(false)} className={noBtnClass}>
              No
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}

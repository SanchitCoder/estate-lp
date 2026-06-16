"use client";

import { motion } from "framer-motion";
import {
  type QualificationQuestionId,
  type QualificationStep,
  getQuestionById,
} from "@/lib/leadQualification";

type Props = {
  step: QualificationStep;
  onSelect: (questionId: QualificationQuestionId, value: string, label: string) => void;
  variant?: "popup" | "chat";
};

const popupBtnClass =
  "w-full text-left px-4 py-3 sm:py-3.5 bg-[rgb(18,51,50)] text-white text-sm sm:text-base font-semibold rounded-xl border border-[#2F80ED]/40 hover:brightness-110 active:translate-y-px transition-all";

const chatBtnClass =
  "w-full text-left px-3 py-2.5 bg-white text-[#0B1F3A] text-xs font-semibold rounded-xl border border-[#B8D9FF] hover:bg-[#D6EBFF] transition-colors";

export default function QualificationOptions({
  step,
  onSelect,
  variant = "popup",
}: Props) {
  const question = getQuestionById(step);
  const btnClass = variant === "chat" ? chatBtnClass : popupBtnClass;
  const stepIndex = ["role", "enquiries", "followUp", "readiness", "timeline"].indexOf(step);

  return (
    <motion.div
      key={step}
      initial={{ opacity: 0, x: variant === "popup" ? 12 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: variant === "popup" ? -12 : 0 }}
      transition={{ duration: 0.25 }}
      className={variant === "popup" ? "relative w-full px-4 sm:px-8 py-8 sm:py-10" : "space-y-2"}
    >
      {variant === "popup" && (
        <p className="text-[#2F80ED] text-xs font-bold uppercase tracking-widest text-center mb-2">
          Question {stepIndex + 1} of 5
        </p>
      )}
      {variant === "popup" ? (
        <h2 className="text-[rgb(18,51,50)] text-xl sm:text-2xl font-extrabold text-center leading-snug mb-6 sm:mb-8">
          {question.question}
        </h2>
      ) : (
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#2F80ED] mb-1">
          Question {stepIndex + 1} of 5
        </p>
      )}

      <div className={variant === "popup" ? "space-y-2.5 max-w-md mx-auto" : "space-y-1.5"}>
        {question.options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onSelect(question.id, option.value, option.label)}
            className={btnClass}
          >
            {option.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

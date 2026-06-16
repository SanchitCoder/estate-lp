"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot } from "lucide-react";
import QualificationOptions from "@/components/QualificationOptions";
import {
  type ChatMessage,
  getBotResponse,
  getChatActions,
} from "@/lib/chatbot";
import { openRegisterForm } from "@/lib/openRegisterForm";
import {
  type LeadQuality,
  type QualificationData,
  type QualificationQuestionId,
  type QualificationStep,
  calculateLeadQuality,
  getLeadQualityLabel,
  getLeadQualityMessage,
  getQuestionById,
  initialQualification,
  isQualificationComplete,
  saveQualificationPrefill,
  setQualificationAnswer,
} from "@/lib/leadQualification";
import { smoothEase } from "@/components/motion";

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

const QUALIFY_STEPS: QualificationStep[] = [
  "role",
  "enquiries",
  "followUp",
  "readiness",
  "timeline",
];

function qualityBadgeClass(quality: LeadQuality) {
  if (quality === "hot") return "bg-[#FF2E2E] text-white";
  if (quality === "warm") return "bg-[#F1C233] text-[#0B1F3A]";
  return "bg-[#94A3B8] text-white";
}

export default function ChatbotWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [qualification, setQualification] = useState<QualificationData>(initialQualification);
  const [qualifyStep, setQualifyStep] = useState<QualificationStep | "done">("role");
  const [leadQuality, setLeadQuality] = useState<LeadQuality | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const actions = getChatActions(pathname);
  const qualifying = qualifyStep !== "done";
  const showOptions = qualifying && !typing;

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    });
  }, []);

  const resetQualification = useCallback(() => {
    setQualification(initialQualification);
    setQualifyStep("role");
    setLeadQuality(null);
  }, []);

  const startQualification = useCallback(() => {
    resetQualification();
    const first = getQuestionById("role");
    setMessages([
      {
        id: createId(),
        role: "bot",
        text: `Hi! Let's see if Estate Labs is the right fit.\n\n${first.question}`,
      },
    ]);
  }, [resetQualification]);

  const handleOpen = () => {
    setOpen(true);
    if (messages.length === 0) {
      startQualification();
    }
  };

  const finishQualification = useCallback((finalData: QualificationData) => {
    const quality = calculateLeadQuality(finalData);
    setLeadQuality(quality);
    setQualifyStep("done");
    saveQualificationPrefill(finalData);

    setTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          text: `${getLeadQualityLabel(quality)} — ${getLeadQualityMessage(quality)}`,
        },
      ]);
      setTyping(false);
    }, 500);
  }, []);

  const handleQualificationSelect = (
    questionId: QualificationQuestionId,
    value: string,
    label: string
  ) => {
    const updated = setQualificationAnswer(qualification, questionId, value);
    setQualification(updated);

    setMessages((prev) => [...prev, { id: createId(), role: "user", text: label }]);

    const stepIndex = QUALIFY_STEPS.indexOf(questionId);
    const nextStep = QUALIFY_STEPS[stepIndex + 1];

    if (!nextStep) {
      finishQualification(updated);
      return;
    }

    setQualifyStep(nextStep);
    setTyping(true);
    window.setTimeout(() => {
      const nextQuestion = getQuestionById(nextStep);
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "bot", text: nextQuestion.question },
      ]);
      setTyping(false);
    }, 450);
  };

  const addBotReply = useCallback(
    (userText: string) => {
      setTyping(true);
      window.setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { id: createId(), role: "bot", text: getBotResponse(userText, pathname) },
        ]);
        setTyping(false);
      }, 500);
    },
    [pathname]
  );

  const sendMessage = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || typing) return;

      setMessages((prev) => [...prev, { id: createId(), role: "user", text: trimmed }]);
      setInput("");
      addBotReply(trimmed);
    },
    [addBotReply, typing]
  );

  useEffect(() => {
    scrollToBottom();
  }, [messages, typing, qualifyStep, scrollToBottom]);

  useEffect(() => {
    if (open && qualifyStep === "done") {
      window.setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open, qualifyStep]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleCompleteRegistration = () => {
    if (isQualificationComplete(qualification)) {
      openRegisterForm(qualification);
    } else {
      openRegisterForm();
    }
    setOpen(false);
  };

  const handleAction = (action: (typeof actions)[number]) => {
    if (action.type === "register") {
      if (isQualificationComplete(qualification)) {
        handleCompleteRegistration();
      } else {
        startQualification();
      }
      return;
    }
    if (action.href) {
      setOpen(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.28, ease: smoothEase }}
            className="fixed z-[60] right-3 sm:right-4 w-[min(100vw-1.5rem,380px)] bottom-[calc(5.75rem+env(safe-area-inset-bottom))] md:bottom-24 rounded-2xl overflow-hidden border border-[#D8E7FF] bg-white shadow-[0_16px_48px_rgba(47,128,237,0.18)] flex flex-col max-h-[min(70vh,560px)]"
            role="dialog"
            aria-label="Estate Labs chat assistant"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-[#2F80ED] text-white shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight">Estate Labs Assistant</p>
                  <p className="text-[11px] text-white/80">
                    {qualifying
                      ? `Question ${QUALIFY_STEPS.indexOf(qualifyStep as QualificationStep) + 1} of 5`
                      : leadQuality
                        ? getLeadQualityLabel(leadQuality)
                        : "Ask anything"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3 bg-[#F8FBFF]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-[#2F80ED] text-white rounded-br-md"
                        : "bg-white text-[#0B1F3A] border border-[#E8F2FF] rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {leadQuality && qualifyStep === "done" && (
                <div className="flex justify-center">
                  <span
                    className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-full ${qualityBadgeClass(leadQuality)}`}
                  >
                    {getLeadQualityLabel(leadQuality)}
                  </span>
                </div>
              )}

              {typing && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#E8F2FF] rounded-2xl rounded-bl-md px-3.5 py-3 shadow-sm flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]/60 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {showOptions && (
                <QualificationOptions
                  step={qualifyStep as QualificationStep}
                  onSelect={handleQualificationSelect}
                  variant="chat"
                />
              )}
            </div>

            {qualifyStep === "done" && (
              <div className="px-3 py-2 border-t border-[#E8F2FF] bg-white shrink-0 space-y-2">
                <button
                  type="button"
                  onClick={handleCompleteRegistration}
                  className="w-full text-sm font-extrabold py-2.5 rounded-xl bg-[#FF2E2E] text-white hover:bg-[#e62828] transition-colors"
                >
                  Complete Registration
                </button>
                <div className="flex flex-wrap gap-1.5">
                  {actions.map((action) =>
                    action.type === "link" && action.href ? (
                      <Link
                        key={action.id}
                        href={action.href}
                        onClick={() => setOpen(false)}
                        className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg bg-[#D6EBFF] text-[#0B1F3A] hover:bg-[#B8D9FF] transition-colors"
                      >
                        {action.label}
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            )}

            {qualifyStep === "done" && (
              <form
                className="flex items-center gap-2 px-3 py-3 border-t border-[#E8F2FF] bg-white shrink-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(input);
                }}
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 text-sm px-3 py-2.5 rounded-xl border border-[#D8E7FF] outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED]/30"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || typing}
                  className="w-10 h-10 rounded-xl bg-[#2F80ED] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[#2568c7] transition-colors shrink-0"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <motion.button
          type="button"
          onClick={handleOpen}
          className="fixed z-[60] right-3 sm:right-4 bottom-[calc(5.75rem+env(safe-area-inset-bottom))] md:bottom-6 w-14 h-14 rounded-full bg-[#2F80ED] text-white shadow-[0_8px_24px_rgba(47,128,237,0.45)] flex items-center justify-center hover:bg-[#2568c7] transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open chat assistant"
          aria-expanded={false}
        >
          <MessageCircle size={24} />
        </motion.button>
      )}
    </>
  );
}

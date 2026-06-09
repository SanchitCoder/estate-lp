"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, User, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { FadeUp } from "@/components/motion";
import {
  registerFormSchema,
  type RegisterFormData,
} from "@/lib/registerFormSchema";
import { submitRegistration } from "@/lib/submitRegistration";

const inputBase =
  "w-full bg-white border border-[#D8E7FF] text-gray-800 placeholder-gray-400 rounded-xl px-4 py-3 text-sm transition-all duration-200 hover:border-[#2F80ED]/50 focus:border-[#2F80ED] focus:shadow-[0_0_0_3px_rgba(47,128,237,0.12)] outline-none";

const labelBase = "block text-gray-700 text-sm font-semibold mb-1.5";
const errorBase = "text-red-500 text-xs mt-1.5";

export default function LeadForm() {
  const { form: formConfig } = siteConfig;
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: { countryCode: "+91" },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setSubmitError(null);
    try {
      await submitRegistration(data);
      window.location.href = "/thank-you";
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <section id="register" className="section-gray section-padding">
      <div className="max-w-xl mx-auto">
        <FadeUp>
          <div className="bg-white rounded-2xl border border-[#D8E7FF] shadow-[0_4px_32px_rgba(47,128,237,0.1)] overflow-hidden">
            {/* Header */}
            <div className="bg-[rgb(18,51,50)] px-8 py-7 text-center">
              <span className="section-label" style={{ background: "rgba(47,128,237,0.2)", borderColor: "rgba(47,128,237,0.35)", color: "#7bb8f9" }}>
                Secure Your Spot
              </span>
              <h2 className="text-white text-2xl sm:text-3xl font-extrabold mt-3 mb-1">{formConfig.title}</h2>
              <p className="text-gray-400 text-sm">{formConfig.subtitle}</p>
            </div>

            <div className="px-8 py-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                  {/* First Name */}
                  <div>
                    <label className={labelBase}>
                      <User size={12} className="inline mr-1.5 text-[#2F80ED]" />
                      First Name
                    </label>
                    <input {...register("firstName")} placeholder="Enter your first name" className={inputBase} />
                    {errors.firstName && <p className={errorBase}>{errors.firstName.message}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className={labelBase}>
                      <Mail size={12} className="inline mr-1.5 text-[#2F80ED]" />
                      Email ID
                    </label>
                    <input {...register("email")} type="email" placeholder="you@company.com" className={inputBase} />
                    {errors.email && <p className={errorBase}>{errors.email.message}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className={labelBase}>
                      <Phone size={12} className="inline mr-1.5 text-[#2F80ED]" />
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        {...register("countryCode")}
                        className={`${inputBase} w-28 flex-shrink-0 cursor-pointer`}
                      >
                        {formConfig.countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>{c.code} {c.country}</option>
                        ))}
                      </select>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone number"
                        className={`${inputBase} flex-1`}
                      />
                    </div>
                    {(errors.phone || errors.countryCode) && (
                      <p className={errorBase}>{errors.phone?.message || errors.countryCode?.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-red-500 text-sm text-center">{submitError}</p>
                  )}

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-red w-full py-4 rounded-xl text-sm font-extrabold tracking-widest uppercase animate-pulse-red mt-2 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <><Loader2 size={16} className="animate-spin" /> Reserving Your Seat...</>
                    ) : (
                      siteConfig.hero.cta
                    )}
                  </motion.button>

                  <p className="text-center text-gray-400 text-xs mt-2 leading-relaxed">
                    By registering, you agree to receive communication about this masterclass. No spam, ever.
                  </p>
              </form>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

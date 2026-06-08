import { z } from "zod";

export const registerFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  email: z.string().email("Enter a valid email address"),
  countryCode: z.string().min(1, "Select country code"),
  phone: z.string().min(6, "Enter a valid phone number").max(15),
});

export type RegisterFormData = z.infer<typeof registerFormSchema>;

export const countryFlags: Record<string, string> = {
  "+91": "🇮🇳",
  "+1": "🇺🇸",
  "+44": "🇬🇧",
  "+61": "🇦🇺",
  "+971": "🇦🇪",
  "+65": "🇸🇬",
  "+49": "🇩🇪",
  "+33": "🇫🇷",
};

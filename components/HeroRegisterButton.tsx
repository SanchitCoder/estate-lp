"use client";

import dynamic from "next/dynamic";
import { handleOpenRegisterForm } from "@/lib/openRegisterForm";

const registerButtonClassName =
  "btn-red gpu-layer relative z-10 w-full min-h-[48px] sm:min-h-[60px] py-3 sm:py-4 px-2 text-[10px] sm:text-sm font-extrabold tracking-wide sm:tracking-widest uppercase rounded-xl leading-tight animate-pulse-red cursor-pointer";

const RegisterButton3D = dynamic(() => import("@/components/RegisterButton3D"), {
  ssr: false,
  loading: () => (
    <button
      type="button"
      onClick={handleOpenRegisterForm}
      className={`${registerButtonClassName} animate-pulse`}
      aria-busy="true"
    >
      Register Free
    </button>
  ),
});

export default function HeroRegisterButton({ label }: { label: string }) {
  return <RegisterButton3D label={label} onClick={handleOpenRegisterForm} />;
}

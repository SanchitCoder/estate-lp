"use client";

import { LazyMotion, domMax, MotionConfig } from "framer-motion";
import { smoothEase } from "@/components/motion";

export default function SmoothMotion({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domMax}>
      <MotionConfig
        reducedMotion="user"
        transition={{ duration: 0.55, ease: smoothEase }}
      >
        {children}
      </MotionConfig>
    </LazyMotion>
  );
}

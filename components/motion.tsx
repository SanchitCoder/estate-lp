"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

const revealTransition = (delay = 0) => ({
  duration: 0.65,
  delay,
  ease: smoothEase,
});

export const revealVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: revealTransition(),
  },
};

export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** When true, fades out again when scrolled out of view */
  cycle?: boolean;
  amount?: number;
  y?: number;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  cycle = true,
  amount = 0.12,
  y = 28,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: !cycle,
    amount,
    margin: "-50px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, scale: 0.98 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : cycle
            ? { opacity: 0, y: y * 0.6, scale: 0.98 }
            : { opacity: 1, y: 0, scale: 1 }
      }
      transition={revealTransition(delay)}
      className={`gpu-layer ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  delay = 0,
  className = "",
  cycle = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  cycle?: boolean;
}) {
  return (
    <Reveal delay={delay} className={className} cycle={cycle} y={28}>
      {children}
    </Reveal>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
  cycle = true,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  cycle?: boolean;
}) {
  return (
    <Reveal delay={delay} className={className} cycle={cycle} y={0}>
      {children}
    </Reveal>
  );
}

export function AnimatedCounter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) motionValue.set(target);
  }, [inView, motionValue, target]);

  useEffect(() => {
    return spring.on("change", (v) =>
      setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString())
    );
  }, [spring, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  cycle = true,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  cycle?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: !cycle,
    amount: 0.1,
    margin: "-50px 0px -40px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: 0.04 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={`gpu-layer ${className}`}>
      {children}
    </motion.div>
  );
}

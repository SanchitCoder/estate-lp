"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterLineProps {
  text: string;
  active: boolean;
  done: boolean;
  speed?: number;
  className?: string;
  as?: "p" | "h2" | "span";
  showCursor?: boolean;
  onComplete?: () => void;
}

function TypewriterLine({
  text,
  active,
  done,
  speed = 28,
  className,
  as: Tag = "p",
  showCursor = true,
  onComplete,
}: TypewriterLineProps) {
  const [displayed, setDisplayed] = useState(done ? text : "");
  const completedRef = useRef(false);

  useEffect(() => {
    completedRef.current = false;
  }, [text]);

  useEffect(() => {
    if (done) {
      setDisplayed(text);
      return;
    }
    if (!active) {
      setDisplayed("");
      return;
    }

    if (displayed.length >= text.length) {
      if (!completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [active, done, displayed, text, speed, onComplete]);

  const isTyping = active && !done && displayed.length < text.length;

  return (
    <Tag className={className}>
      {displayed}
      {showCursor && isTyping && (
        <span className="inline-block w-[2px] h-[1em] ml-0.5 bg-current align-middle animate-pulse" />
      )}
    </Tag>
  );
}

export interface TypewriterItem {
  text: string;
  className?: string;
  as?: "p" | "h2" | "span";
  speed?: number;
}

interface TypewriterSequenceProps {
  items: TypewriterItem[];
  className?: string;
  itemClassName?: string;
  startDelay?: number;
}

export function TypewriterSequence({
  items,
  className,
  itemClassName,
  startDelay = 0,
}: TypewriterSequenceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [inView, startDelay]);

  return (
    <div ref={ref} className={cn("space-y-4", className)}>
      {items.map((item, i) => (
        <TypewriterLine
          key={i}
          text={item.text}
          as={item.as ?? "p"}
          speed={item.speed}
          className={cn(itemClassName, item.className)}
          active={started && i === currentIndex}
          done={started && i < currentIndex}
          showCursor={i === currentIndex}
          onComplete={() => setCurrentIndex((prev) => prev + 1)}
        />
      ))}
    </div>
  );
}

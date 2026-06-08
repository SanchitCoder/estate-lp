"use client";

import { useEffect, useRef } from "react";

export function useRafScroll(onScroll: () => void) {
  const ticking = useRef(false);
  const onScrollRef = useRef(onScroll);
  onScrollRef.current = onScroll;

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        onScrollRef.current();
        ticking.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
}

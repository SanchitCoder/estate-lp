"use client";

import React from "react";
import { cn } from "@/lib/utils";

type OrbitCardProps = {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

const OrbitCard: React.FC<OrbitCardProps> = ({ children, className, contentClassName }) => {
  return (
    <div className={cn("relative rounded-2xl", className)}>
      <div className="absolute inset-0 z-0 flex items-center justify-center rounded-2xl bg-background">
        <div className="absolute h-full w-full animate-orbit-glow rounded-2xl">
          <div className="h-full w-full rounded-2xl bg-transparent shadow-[0_0_30px_10px_rgba(27,65,64,0.45)]" />
        </div>
      </div>

      <div className={cn("relative z-10 rounded-2xl bg-background", contentClassName)}>
        {children}
      </div>
    </div>
  );
};

export default OrbitCard;

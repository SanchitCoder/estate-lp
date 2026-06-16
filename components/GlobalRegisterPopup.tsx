"use client";

import { usePathname } from "next/navigation";
import RegisterPopup from "@/components/RegisterPopup";
import { SiteConfigProvider } from "@/lib/site-config-context";
import { siteConfig } from "@/lib/config";
import { megaWebinarConfig } from "@/lib/config-mega-webinar";
import { consultationConfig } from "@/lib/config-consultation";
import type { SiteConfig } from "@/lib/site-config-types";

function getConfigForPath(pathname: string): SiteConfig {
  if (pathname.startsWith("/mega-webinar")) return megaWebinarConfig;
  if (pathname.startsWith("/consultation")) return consultationConfig;
  return siteConfig;
}

export default function GlobalRegisterPopup() {
  const pathname = usePathname();
  const config = getConfigForPath(pathname);

  return (
    <SiteConfigProvider config={config}>
      <RegisterPopup />
    </SiteConfigProvider>
  );
}

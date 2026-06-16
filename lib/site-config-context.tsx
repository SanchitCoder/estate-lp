"use client";

import { createContext, useContext, useMemo } from "react";
import type { SiteConfig, EventFormat } from "@/lib/site-config-types";
import { siteConfig as defaultSiteConfig } from "@/lib/config";
import { getCtaLine } from "@/lib/event-schedule";

type SiteConfigContextValue = {
  config: SiteConfig;
  eventFormat: EventFormat;
  registrationSource: string;
  getCtaLine: () => string;
};

const SiteConfigContext = createContext<SiteConfigContextValue | null>(null);

export function SiteConfigProvider({
  config,
  children,
}: {
  config: SiteConfig;
  children: React.ReactNode;
}) {
  const value = useMemo<SiteConfigContextValue>(
    () => ({
      config,
      eventFormat: config.eventFormat,
      registrationSource: config.registrationSource,
      getCtaLine: () => getCtaLine(config.eventFormat, config),
    }),
    [config]
  );

  return (
    <SiteConfigContext.Provider value={value}>{children}</SiteConfigContext.Provider>
  );
}

export function useSiteConfig(): SiteConfig {
  const ctx = useContext(SiteConfigContext);
  return ctx?.config ?? defaultSiteConfig;
}

export function usePageContext(): SiteConfigContextValue {
  const ctx = useContext(SiteConfigContext);
  if (!ctx) {
    return {
      config: defaultSiteConfig,
      eventFormat: defaultSiteConfig.eventFormat,
      registrationSource: defaultSiteConfig.registrationSource,
      getCtaLine: () => getCtaLine(defaultSiteConfig.eventFormat, defaultSiteConfig),
    };
  }
  return ctx;
}

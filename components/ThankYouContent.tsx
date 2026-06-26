"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/config";
import {
  attachWhatsAppLinkClickHandler,
  autoRedirectToWhatsApp,
  buildAndroidIntentInvite,
  copyWhatsAppInvite,
  isAndroid,
  isFacebookWebView,
  openInChrome,
  openWhatsAppInvite,
} from "@/lib/whatsappJoin";

export default function ThankYouContent() {
  const { thankYou, whatsappCommunity } = siteConfig;
  const waInvite = whatsappCommunity.url;

  const [isFBWebView] = useState(
    () =>
      typeof navigator !== "undefined" &&
      isFacebookWebView(navigator.userAgent || "")
  );
  const [statusText, setStatusText] = useState("");
  const [copyDone, setCopyDone] = useState(false);
  const [showAfterCopy, setShowAfterCopy] = useState(false);
  const autoRedirectStarted = useRef(false);
  const whatsAppButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isFBWebView) return;

    if (autoRedirectStarted.current) return;
    autoRedirectStarted.current = true;
    setStatusText(thankYou.statusOpening);
    autoRedirectToWhatsApp(waInvite, whatsAppButtonRef.current);
  }, [isFBWebView, thankYou, waInvite]);

  useEffect(() => {
    return attachWhatsAppLinkClickHandler((url) => {
      openWhatsAppInvite(url);
    });
  }, []);

  const handleExternalBrowserClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setStatusText(thankYou.statusLaunching);

      const ua = navigator.userAgent || "";

      if (isAndroid(ua)) {
        try {
          window.location.href = buildAndroidIntentInvite(waInvite);
        } catch {
          // fall through
        }
        setTimeout(() => openInChrome(waInvite), 900);
      } else {
        window.location.href = waInvite;
      }

      setTimeout(() => setStatusText(""), 2000);
    },
    [thankYou.statusLaunching, waInvite]
  );

  const handleWhatsAppClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      openWhatsAppInvite(waInvite);
    },
    [waInvite]
  );

  const handleCopy = useCallback(async () => {
    const copied = await copyWhatsAppInvite(waInvite);
    if (copied) {
      setCopyDone(true);
      setShowAfterCopy(true);
      setStatusText(thankYou.statusCopied);
    }
  }, [thankYou.statusCopied, waInvite]);

  return (
    <div className="w-full max-w-[620px] mx-auto bg-white border-2 border-[#F1C233] rounded-[20px] px-7 sm:px-8 py-9 sm:py-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center">
      <div
        className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-5"
        aria-hidden="true"
      >
        <CheckCircle2 size={30} className="text-green-500" />
      </div>

      <h1 className="text-[rgb(18,51,50)] text-xl sm:text-2xl font-extrabold leading-snug mb-3.5">
        {thankYou.title}
      </h1>

      <p className="text-[rgb(27,65,64)] text-sm sm:text-base leading-relaxed mb-5">
        {isFBWebView ? (
          thankYou.fbWebViewMessage
        ) : (
          <>
            Tap below and join our{" "}
            <strong>exclusive WhatsApp community</strong> to get masterclass updates,
            reminders, and resources from Estate Labs.
          </>
        )}
      </p>

      {isFBWebView ? (
        <>
          <a
            href="#"
            onClick={handleExternalBrowserClick}
            className="inline-block bg-[#F1C233] text-[#000020] px-7 sm:px-8 py-4 rounded-[10px] font-bold text-sm sm:text-base no-underline shadow-[0_4px_12px_rgba(241,194,51,0.4)] transition-all hover:bg-[#ffdb47] hover:scale-105 animate-[pulse_1.8s_ease-in-out_infinite]"
          >
            {thankYou.externalBrowserButtonLabel}
          </a>

          <p className="text-[13px] text-[rgb(18,51,50)] bg-[#fff8e1] border border-[#ffe29c] rounded-lg px-3 py-3 mt-5 leading-relaxed">
            {thankYou.hintText}
          </p>
        </>
      ) : (
        <>
          <a
            ref={whatsAppButtonRef}
            href={waInvite}
            onClick={handleWhatsAppClick}
            rel="noopener noreferrer"
            className="inline-block bg-[#F1C233] text-[#000020] px-7 sm:px-8 py-4 rounded-[10px] font-bold text-sm sm:text-base no-underline shadow-[0_4px_12px_rgba(241,194,51,0.4)] transition-all hover:bg-[#ffdb47] hover:scale-105"
          >
            {thankYou.joinButtonLabel}
          </a>

          <div className="mt-5 flex justify-center">
            <button
              type="button"
              onClick={handleCopy}
              disabled={copyDone}
              className="bg-transparent border-2 border-[#F1C233] text-[rgb(18,51,50)] px-6 py-3 rounded-[10px] font-semibold text-sm transition-all hover:bg-[#F1C233] hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-default"
            >
              {copyDone ? thankYou.copySuccessLabel : thankYou.copyButtonLabel}
            </button>
          </div>
        </>
      )}

      {showAfterCopy && (
        <div className="text-left mt-5 max-w-[500px] mx-auto bg-[#fafafa] border border-[#eee] rounded-[10px] px-3.5 py-3.5 text-[rgb(18,51,50)] text-sm">
          <strong>{thankYou.manualJoinTitle}</strong>
          <ol className="mt-2 ml-[18px] space-y-1 list-decimal">
            {thankYou.manualJoinSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {statusText && (
        <p className="text-[13px] text-[rgb(18,51,50)] mt-3.5">{statusText}</p>
      )}
    </div>
  );
}

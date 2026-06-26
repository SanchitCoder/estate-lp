const FB_WEBVIEW_PATTERN =
  /(FBAN|FBAV|FB_IAB|FB4A|FB4IOS|FBIOS|Facebook|Instagram|FBSN|FBAC)/i;

export function isFacebookWebView(userAgent: string): boolean {
  return FB_WEBVIEW_PATTERN.test(userAgent);
}

export function isAndroid(userAgent: string): boolean {
  return /android/i.test(userAgent);
}

export function isIOS(userAgent: string): boolean {
  return /iPhone|iPad|iPod/i.test(userAgent);
}

export function getWhatsAppInviteCode(url: string): string | undefined {
  return url.split("/").filter(Boolean).pop();
}

export function buildAndroidIntentInvite(url: string): string {
  const code = getWhatsAppInviteCode(url);
  return `intent://chat.whatsapp.com/${code}#Intent;package=com.whatsapp;scheme=https;end`;
}

export function buildIOSSchemeInvite(url: string): string {
  const code = getWhatsAppInviteCode(url);
  return `whatsapp://chat?code=${code}`;
}

export function openInChrome(url: string): void {
  try {
    window.location.href = `googlechrome://navigate?url=${encodeURIComponent(url)}`;
  } catch {
    window.location.href = url;
  }
  setTimeout(() => {
    window.location.href = url;
  }, 900);
}

export function openWhatsAppInvite(
  url: string,
  userAgent: string = navigator.userAgent
): void {
  if (!url.startsWith("https://chat.whatsapp.com/")) {
    window.location.href = url;
    return;
  }

  if (isAndroid(userAgent)) {
    try {
      window.location.href = buildAndroidIntentInvite(url);
    } catch {
      // fall through
    }
    setTimeout(() => {
      window.location.href = url;
    }, 900);
    return;
  }

  if (isIOS(userAgent)) {
    try {
      window.location.href = buildIOSSchemeInvite(url);
    } catch {
      // fall through
    }
    setTimeout(() => {
      window.location.href = url;
    }, 900);
    return;
  }

  window.location.href = url;
}

export function autoRedirectToWhatsApp(
  url: string,
  openLinkButton?: HTMLElement | null
): void {
  setTimeout(() => {
    try {
      window.location.replace(url);
    } catch {
      // fall through
    }

    try {
      openLinkButton?.click();
    } catch {
      // fall through
    }

    setTimeout(() => {
      try {
        window.location.href = url;
      } catch {
        // fall through
      }
    }, 400);
  }, 350);
}

export function attachWhatsAppLinkClickHandler(
  onWhatsAppLinkClick: (url: string) => void
): () => void {
  const listener = (event: MouseEvent) => {
    const anchor = (event.target as Element | null)?.closest("a[href]");
    if (!anchor) return;

    const href = anchor.getAttribute("href");
    if (!href?.startsWith("https://chat.whatsapp.com/")) return;

    event.preventDefault();
    onWhatsAppLinkClick(href);
  };

  document.addEventListener("click", listener);
  return () => document.removeEventListener("click", listener);
}

export async function copyWhatsAppInvite(url: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      return true;
    } catch {
      return fallbackCopy(url);
    }
  }
  return fallbackCopy(url);
}

function fallbackCopy(url: string): boolean {
  const result = window.prompt("Copy this link:", url);
  return result !== null;
}

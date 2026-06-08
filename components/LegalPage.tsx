import Link from "next/link";
import type { ReactNode } from "react";
import BrandBar from "@/components/BrandBar";
import SiteFooter from "@/components/SiteFooter";
import { legalLink } from "@/lib/legalStyles";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[rgb(251,239,231)]">
      <BrandBar />

      <main className="flex-1 section-padding">
        <div className="container-max max-w-3xl mx-auto">
          <Link href="/" className={`inline-block text-sm mb-6 ${legalLink}`}>
            ← Back to home
          </Link>

          <article className="rounded-2xl border border-[rgba(27,65,64,0.18)] bg-[rgb(251,239,231)] p-6 sm:p-10 shadow-[0_4px_28px_rgba(27,65,64,0.08)]">
            <h1 className="text-[rgb(18,51,50)] font-extrabold text-2xl sm:text-3xl mb-6 tracking-tight leading-tight">
              {title}
            </h1>
            <div className="legal-content space-y-4 text-sm sm:text-base leading-relaxed text-[rgb(27,65,64)] [&_a]:break-all [&_strong]:text-[rgb(18,51,50)]">
              {children}
            </div>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

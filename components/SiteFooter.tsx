import Link from "next/link";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { siteConfig } from "@/lib/config";

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  youtube: Youtube,
} as const;

function SocialButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: keyof typeof socialIcons;
}) {
  const Icon = socialIcons[icon];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group p-[1px] rounded-lg bg-gradient-to-br from-purple-500/70 via-indigo-500/50 to-cyan-500/40 hover:from-purple-400/80 hover:to-cyan-400/60 transition-all duration-200"
    >
      <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-[7px] bg-[#0d0d0d] group-hover:bg-[#141414] transition-colors">
        <Icon size={17} className="text-white" strokeWidth={1.75} />
      </span>
    </a>
  );
}

export default function SiteFooter() {
  const { footer } = siteConfig;

  return (
    <footer className="bg-black border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left order-2 sm:order-1">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-gray-300">{footer.companyName}</span>. All rights
          reserved.
        </p>

        <div className="flex flex-col items-center gap-3 order-1 sm:order-2">
          <p className="text-white font-bold text-sm sm:text-base">Connect</p>
          <div className="flex items-center gap-3">
            {footer.socialLinks.map((social) => (
              <SocialButton
                key={social.label}
                href={social.href}
                label={social.label}
                icon={social.icon}
              />
            ))}
          </div>
        </div>

        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 order-3">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-gray-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

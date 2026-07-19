import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { footerLinks, siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-ink-400">
              携帯料金見直しサービス
            </p>
            <Image
              src={assetPath("/logo/refine-logo-white.svg")}
              alt={siteConfig.shortName}
              width={160}
              height={28}
              className="mt-3 h-8 w-auto"
            />
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end">
            <span className="flex items-center gap-2 md:flex-row-reverse">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-400">
                {siteConfig.email}
              </a>
              <Icon name="mail" className="text-base text-primary-400" />
            </span>
            <span className="flex items-center gap-2 md:flex-row-reverse">
              <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-400">
                {siteConfig.phone}
              </a>
              <Icon name="call" className="text-base text-primary-400" />
            </span>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-ink-400">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-ink-500">
            &copy;{new Date().getFullYear()}　{siteConfig.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}

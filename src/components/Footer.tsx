import Link from "next/link";
import Icon from "./Icon";
import { footerLinks, siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold tracking-wide text-ink-500">携帯料金見直しサービス</p>
          <p className="mt-1 text-2xl font-black tracking-tight text-primary-500">
            {siteConfig.shortName}
          </p>

          <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-ink-600">
            {footerLinks.map((link, i) => (
              <span key={link.href} className="flex items-center gap-2">
                <Link href={link.href} className="transition-colors hover:text-primary-600">
                  {link.label}
                </Link>
                {i < footerLinks.length - 1 && <span className="text-ink-300">｜</span>}
              </span>
            ))}
          </nav>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-ink-500">
            <span className="flex items-center gap-1.5">
              <Icon name="mail" className="text-sm text-primary-500" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-600">
                {siteConfig.email}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="call" className="text-sm text-primary-500" />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-600">
                {siteConfig.phone}
              </a>
            </span>
          </div>

          <p className="mt-8 text-xs text-ink-400">
            &copy;{new Date().getFullYear()}　{siteConfig.shortName}
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import LineButton from "./LineButton";
import { navLinks, siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-ink-200 bg-paper/95 backdrop-blur shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "border-transparent bg-paper/80 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? "h-14" : "h-20"
        }`}
      >
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src={assetPath("/logo/refine-logo-orange.svg")}
            alt={siteConfig.shortName}
            width={140}
            height={25}
            priority
            className="h-6 w-auto sm:h-7"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold tracking-wide text-ink-700 transition-colors hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <LineButton size="sm" />
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-ink-700 md:hidden"
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="text-3xl" />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-200 bg-paper md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-3 text-sm font-bold text-ink-700 hover:text-primary-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 px-3">
              <LineButton className="w-full" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

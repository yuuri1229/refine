import Image from "next/image";
import Icon from "@/components/Icon";
import LineButton from "@/components/LineButton";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 via-primary-500 to-primary-600 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src={assetPath("/logo/refine-logo-white.svg")}
            alt={siteConfig.shortName}
            width={220}
            height={39}
            priority
            className="mx-auto h-9 w-auto sm:h-11"
          />

          <p className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-secondary-500 px-4 py-1.5 text-xs font-bold text-white sm:text-sm">
            <Icon name="bolt" className="text-base" />
            {siteConfig.badge}
          </p>

          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {siteConfig.catchCopy}
          </h1>

          <p className="mt-5 text-base font-bold leading-relaxed text-primary-50 sm:text-lg">
            {siteConfig.tagline}
          </p>

          <p className="mt-8 text-sm font-bold tracking-wide text-primary-50">
            ＼ 今すぐ無料見直しスタート ／
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <LineButton size="lg" />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-800 px-8 py-4 text-base font-bold text-white shadow-sm transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
            >
              <Icon name="mail" />
              メールで相談する
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

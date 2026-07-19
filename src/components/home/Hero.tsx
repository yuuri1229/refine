import Image from "next/image";
import Icon from "@/components/Icon";
import LineButton from "@/components/LineButton";
import Wave from "@/components/Wave";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 via-primary-50 to-paper">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary-200/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-24 h-72 w-72 rounded-full bg-moss-200/40 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-24 sm:px-6 sm:pt-20 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Image
            src={assetPath("/logo/refine-logo-orange.svg")}
            alt={siteConfig.shortName}
            width={170}
            height={30}
            priority
            className="animate-fade-up mx-auto h-8 w-auto sm:h-9"
          />

          <p
            className="animate-fade-up mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-primary-600 shadow-sm sm:text-sm"
            style={{ animationDelay: "80ms" }}
          >
            <Icon name="bolt" className="text-base" />
            {siteConfig.badge}
          </p>

          <h1
            className="animate-fade-up font-display mt-6 text-4xl font-black leading-[1.15] tracking-tight text-ink-900 sm:text-5xl md:text-6xl"
            style={{ animationDelay: "160ms" }}
          >
            携帯料金の見直し
          </h1>

          <p
            className="animate-fade-up mt-6 text-base leading-relaxed text-ink-600 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            {siteConfig.tagline}
          </p>

          <p
            className="animate-fade-up mt-8 text-sm font-bold tracking-wide text-primary-600"
            style={{ animationDelay: "300ms" }}
          >
            ＼ 今すぐ無料見直しスタート ／
          </p>

          <div
            className="animate-fade-up mt-4 flex flex-wrap items-center justify-center gap-4"
            style={{ animationDelay: "360ms" }}
          >
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

      <Wave className="absolute -bottom-px left-0 text-paper" />
    </section>
  );
}

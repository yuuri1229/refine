import Icon from "@/components/Icon";
import LineButton from "@/components/LineButton";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function PhoneCtaBar() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <Reveal className="flex flex-col items-center gap-6 rounded-[2rem] bg-white p-6 shadow-[0_8px_30px_-12px_rgba(32,27,23,0.15)] ring-1 ring-ink-100 sm:flex-row sm:justify-between sm:p-8">
        <div>
          <p className="text-sm font-bold text-ink-900">携帯料金のご相談　初回無料</p>
          <p className="mt-1 flex items-center gap-2 text-2xl font-black text-primary-600">
            <Icon name="call" className="text-xl" />
            <a href={`tel:${siteConfig.phone}`} className="tnum hover:underline">
              {siteConfig.phone}
            </a>
          </p>
          <p className="mt-1 text-xs text-ink-500">{siteConfig.businessHours}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <LineButton size="sm" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-5 py-2.5 text-sm font-bold text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-900"
          >
            <Icon name="mail" className="text-base" />
            メールで相談する
          </Link>
        </div>
      </Reveal>
    </div>
  );
}

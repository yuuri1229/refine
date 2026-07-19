import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Wave from "@/components/Wave";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-primary-500 pb-16 text-white sm:pb-20">
      <Wave className="text-paper" flip />

      <div className="relative mx-auto max-w-3xl px-4 pt-10 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-xs font-bold tracking-[0.2em] text-primary-50">CONTACT</p>
          <h2 className="font-display mt-3 text-2xl font-black sm:text-3xl">お問合わせ</h2>

          <p className="mx-auto mt-6 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
            まずはLINEで相談！
            <br />
            携帯料金の見積もりを公式LINEからすぐに確認できます。
          </p>

          <p className="mt-6 text-sm font-bold tracking-wide text-primary-50">
            ＼ 今すぐ無料見直しスタート ／
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary-600 shadow-sm transition-transform hover:scale-[1.03] active:scale-95 sm:text-lg"
            >
              <Icon name="chat" />
              LINEで無料相談する
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10 sm:text-lg"
            >
              <Icon name="mail" />
              メールで相談する
            </Link>
          </div>

          <p className="tnum mt-8 flex items-center justify-center gap-2 text-sm font-bold text-primary-50">
            <Icon name="call" className="text-base" />
            <a href={`tel:${siteConfig.phone}`} className="hover:underline">
              {siteConfig.phone}
            </a>
            <span className="text-primary-100">（{siteConfig.businessHours}）</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

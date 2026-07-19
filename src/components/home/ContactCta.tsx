import Icon from "@/components/Icon";
import LineButton from "@/components/LineButton";
import Link from "next/link";

export default function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-500 py-16 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-bold tracking-wide text-primary-50">CONTACT</p>
        <h2 className="mt-2 text-2xl font-black sm:text-3xl">お問合わせ</h2>
        <span className="mx-auto mt-4 block h-1 w-10 rounded-full bg-white" />

        <p className="mx-auto mt-8 max-w-xl text-base font-bold leading-relaxed sm:text-lg">
          まずはLINEで相談！
          <br />
          携帯料金の見積もりを公式LINEからすぐに確認できます。
        </p>

        <p className="mt-6 text-sm font-bold tracking-wide text-primary-50">
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
    </section>
  );
}

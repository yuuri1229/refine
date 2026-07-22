import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "携帯料金見直しサービスREFINEの特定商取引法に基づく表記です。",
  alternates: { canonical: "/tokusho" },
};

const items: { label: string; value: React.ReactNode }[] = [
  { label: "事業者の名称", value: "リファイン" },
  { label: "代表者", value: "甲斐　悠理" },
  {
    label: "所在地",
    value: (
      <>
        〒950-2264
        <br />
        新潟県新潟市西区みずき野6-2-31
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <>
        090-3549-4263
        <br />
        <span className="text-sm text-ink-500">
          受付時間 10:00-18:00（土日祝を除く）
          <br />
          ※受付時間外の場合は、メールにてお問い合わせください。
        </span>
      </>
    ),
  },
  { label: "メールアドレス", value: "info@refine.support" },
  {
    label: "ホームページ",
    value: (
      <a href="https://refine.support/" className="text-primary-600 underline">
        https://refine.support/
      </a>
    ),
  },
  { label: "運営統括責任者", value: "甲斐　悠理" },
  {
    label: "販売価格",
    value: (
      <>
        別途本サイトの「
        <Link href="/#pricing" className="text-primary-600 underline">
          料金プラン
        </Link>
        」に関する表記をご確認ください。
      </>
    ),
  },
  { label: "引渡時期", value: "1か月以内" },
  { label: "受け付け可能な決済手段", value: "クレジットカード決済" },
  { label: "決済期間", value: "クレジットカード決済：サービス注文時にお支払いが確定します。" },
];

export default function TokushoPage() {
  return (
    <>
      <PageHeader eyebrow="LEGAL NOTICE" title="特定商取引法に基づく表記" />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <dl className="divide-y divide-ink-100">
          {items.map((item) => (
            <div key={item.label} className="grid gap-1 py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
              <dt className="text-sm font-bold text-ink-900">{item.label}</dt>
              <dd className="text-sm leading-relaxed text-ink-700">{item.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-10 border-t border-ink-100 pt-8">
          <h2 className="text-lg font-bold text-ink-900">キャンセルに関する特約</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            サービスお申込み後のキャンセルはお受けいたしません。
          </p>
        </section>
      </div>
    </>
  );
}

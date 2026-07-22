import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "携帯料金見直しサービスREFINEのプライバシーポリシーです。",
  alternates: { canonical: "/privacy-policy" },
};

const sections = [
  {
    heading: "1. 個人情報の定義",
    body: ["「個人情報」とは、氏名、住所、電話番号、メールアドレス、その他個人を識別できる情報を指します。"],
  },
  {
    heading: "2. 個人情報の取得方法",
    body: [
      "当サービスは、お客様が当サービスをご利用いただく際、以下の方法で個人情報を取得することがあります。",
    ],
    list: ["お問い合わせフォームやメールでの情報提供", "サービス利用のために必要な情報の提供"],
  },
  {
    heading: "3. 個人情報の利用目的",
    body: ["取得した個人情報は、以下の目的で利用いたします。"],
    list: [
      "サービス提供およびサポートのため",
      "お問い合わせへの対応",
      "ユーザーの興味・関心に基づいた情報提供",
      "サービスの改善および利便性向上",
    ],
  },
  {
    heading: "4. 個人情報の第三者提供",
    body: ["当サービスは、以下の場合を除き、個人情報を第三者に提供することはありません。"],
    list: [
      "お客様の同意がある場合",
      "法令に基づく場合",
      "生命、身体、または財産の保護に必要な場合で、本人の同意を得ることが困難な場合",
    ],
  },
  {
    heading: "5. 個人情報の管理",
    body: [
      "当サービスは、お客様の個人情報の正確性および安全性を確保するために、適切な管理を行います。不正アクセス、紛失、破壊、改ざん、漏洩を防止するための必要な措置を講じます。",
    ],
  },
  {
    heading: "6. アクセス解析ツールについて",
    body: [
      "当社は、本サイトの改善のためにGoogle Analytics等のアクセス解析ツールを使用しています。これにより、ユーザーのトラフィックデータを収集しますが、これにより個人を特定する情報は含まれていません。",
    ],
  },
  {
    heading: "7. プライバシーポリシーの変更",
    body: [
      "当社は、法令の変更やサービス内容の変更等に伴い、本ポリシーを随時改定することがあります。改定後のポリシーは、本サイトに掲載した時点で効力を生じます。",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="PRIVACY POLICY" title="プライバシーポリシー" />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm leading-relaxed text-ink-700">
          携帯料金見直しサービスREFINE（以下「当サービス」）は、お客様の個人情報の取り扱いに関して、以下のプライバシーポリシー（以下「本ポリシー」）を定め、適切な管理を行います。
        </p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-lg font-bold text-ink-900">{section.heading}</h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-ink-700">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {section.list && (
                  <ul className="list-disc space-y-1 pl-5">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-lg font-bold text-ink-900">8. お問い合わせ窓口</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              個人情報に関するお問い合わせは、以下の窓口までご連絡ください。
            </p>
            <div className="mt-4 rounded-2xl bg-ink-50 p-6 text-sm leading-relaxed text-ink-700">
              <p className="font-bold text-ink-900">携帯料金見直しサービスREFINE</p>
              <p className="mt-2">住所：新潟県新潟市西区みずき野6-2-31</p>
              <p>メールアドレス：info@refine.support</p>
              <p>電話番号：090-3549-4263</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

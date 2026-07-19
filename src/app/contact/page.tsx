import type { Metadata } from "next";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import LineButton from "@/components/LineButton";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "携帯料金見直しサービスREFINEへのお問い合わせはこちらから。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="CONTACT"
        title="お問い合わせ"
        description="携帯料金についてのご相談は、LINEまたは下記フォームからお気軽にお問い合わせください。"
      />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary-200 bg-primary-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-sm font-bold text-ink-900">お急ぎの方はLINEが便利です</p>
            <p className="mt-1 text-sm text-ink-600">
              公式LINEから携帯料金の見積もりをすぐに確認できます。
            </p>
          </div>
          <LineButton />
        </div>

        <div className="mt-12">
          <ContactForm />
        </div>

        <div className="mt-14 grid gap-4 border-t border-ink-100 pt-8 text-sm text-ink-600 sm:grid-cols-2">
          <p className="flex items-center gap-2">
            <Icon name="mail" className="text-primary-500" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-600">
              {siteConfig.email}
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Icon name="call" className="text-primary-500" />
            <a href={`tel:${siteConfig.phone}`} className="hover:text-primary-600">
              {siteConfig.phone}
            </a>
          </p>
          <p className="flex items-center gap-2 sm:col-span-2">
            <Icon name="schedule" className="text-primary-500" />
            {siteConfig.businessHours}　{siteConfig.businessHoursNote}
          </p>
        </div>
      </div>
    </>
  );
}

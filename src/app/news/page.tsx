import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getNewsList } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ一覧",
  description: "携帯料金見直しサービスREFINEからのお知らせ一覧です。",
  alternates: { canonical: "/news" },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export default async function NewsListPage() {
  const news = await getNewsList({ limit: 100 });

  return (
    <>
      <PageHeader eyebrow="NEWS" title="お知らせ一覧" />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {news.length === 0 ? (
          <p className="text-sm text-ink-500">現在お知らせはありません。</p>
        ) : (
          <ul className="divide-y divide-ink-100">
            {news.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/news/${item.id}`}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5 transition-colors hover:text-primary-600"
                >
                  <span className="w-1.5 shrink-0 self-stretch rounded-full bg-primary-500" />
                  <time className="text-sm font-bold text-ink-500">
                    {formatDate(item.publishedAt)}
                  </time>
                  <span className="text-sm font-bold text-ink-800">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

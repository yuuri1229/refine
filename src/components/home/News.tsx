import Link from "next/link";
import Icon from "@/components/Icon";
import { getNewsList } from "@/lib/microcms";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export default async function News() {
  const news = await getNewsList({ limit: 5 });

  return (
    <section id="news" className="scroll-mt-16 mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-primary-600">NEWS</p>
        <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">お知らせ</h2>
        <span className="mx-auto mt-4 block h-1 w-10 rounded-full bg-primary-500" />
      </div>

      <ul className="mt-10 divide-y divide-ink-100">
        {news.map((item) => (
          <li key={item.id} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-5">
            <span className="w-1.5 shrink-0 self-stretch rounded-full bg-primary-500" />
            <time className="text-sm font-bold text-ink-500">{formatDate(item.publishedAt)}</time>
            <span className="text-sm font-bold text-ink-800">{item.title}</span>
          </li>
        ))}
      </ul>

      <div className="mt-10 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-full border-2 border-primary-500 px-6 py-3 text-sm font-bold text-primary-600 transition-colors hover:bg-primary-50"
        >
          一覧を見る
          <Icon name="arrow_forward" className="text-base" />
        </Link>
      </div>
    </section>
  );
}

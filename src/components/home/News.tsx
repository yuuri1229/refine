import Link from "next/link";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { getNewsList } from "@/lib/microcms";

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export default async function News() {
  const news = await getNewsList({ limit: 5 });

  return (
    <section id="news" className="scroll-mt-20 mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-primary-600">NEWS</p>
        <h2 className="font-display mt-3 text-2xl font-black text-ink-900 sm:text-3xl">
          お知らせ
        </h2>
      </Reveal>

      <Reveal delay={100} className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100">
        <ul className="divide-y divide-ink-100">
          {news.map((item) => (
            <li key={item.id}>
              <Link
                href={`/news/${item.id}`}
                className="group flex flex-wrap items-baseline gap-x-4 gap-y-1 px-6 py-5 transition-colors hover:bg-primary-50/50"
              >
                <time className="tnum text-sm font-bold text-ink-400">
                  {formatDate(item.publishedAt)}
                </time>
                <span className="text-sm font-bold text-ink-800 group-hover:text-primary-600">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-8 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 rounded-full border border-ink-300 px-6 py-3 text-sm font-bold text-ink-700 transition-colors hover:border-primary-500 hover:text-primary-600"
        >
          一覧を見る
          <Icon name="arrow_forward" className="text-base" />
        </Link>
      </div>
    </section>
  );
}

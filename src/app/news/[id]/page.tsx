import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Icon from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { getNewsDetail, getNewsList } from "@/lib/microcms";

type Props = { params: Promise<{ id: string }> };

function formatDate(iso: string) {
  const d = new Date(iso);
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
}

export async function generateStaticParams() {
  const news = await getNewsList({ limit: 100 });
  return news.map((item) => ({ id: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = await getNewsDetail(id);
  return {
    title: article?.title ?? "お知らせ",
    alternates: { canonical: `/news/${id}` },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const article = await getNewsDetail(id);

  if (!article) notFound();

  return (
    <>
      <PageHeader eyebrow="NEWS" title={article.title} />

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <time className="text-sm font-bold text-ink-500">{formatDate(article.publishedAt)}</time>

        {article.content ? (
          <div
            className="prose prose-sm mt-6 max-w-none text-ink-700"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <p className="mt-6 text-sm text-ink-500">本文はありません。</p>
        )}

        <Link
          href="/news"
          className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:underline"
        >
          <Icon name="arrow_back" className="text-base" />
          お知らせ一覧へ戻る
        </Link>
      </div>
    </>
  );
}

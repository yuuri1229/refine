import { createClient, type MicroCMSQueries } from "microcms-js-sdk";

export type NewsArticle = {
  id: string;
  title: string;
  content?: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = process.env.MICROCMS_API_KEY;

const client =
  serviceDomain && apiKey
    ? createClient({ serviceDomain, apiKey })
    : null;

/**
 * microCMSが未設定の環境（ローカル開発初期・環境変数未投入時）でもビルドが
 * 落ちないよう、フォールバックとして直近のお知らせをここに保持する。
 * microCMS接続後はAPI側の内容が優先される。
 */
const fallbackNews: NewsArticle[] = [
  {
    id: "fallback-1",
    title: "年始のご挨拶",
    publishedAt: "2025-01-06T00:00:00.000Z",
    createdAt: "2025-01-06T00:00:00.000Z",
    updatedAt: "2025-01-06T00:00:00.000Z",
  },
  {
    id: "fallback-2",
    title: "年末年始における休業のお知らせ",
    publishedAt: "2024-12-20T00:00:00.000Z",
    createdAt: "2024-12-20T00:00:00.000Z",
    updatedAt: "2024-12-20T00:00:00.000Z",
  },
];

export async function getNewsList(queries?: MicroCMSQueries): Promise<NewsArticle[]> {
  if (!client) return fallbackNews;

  try {
    const res = await client.getList<NewsArticle>({
      endpoint: "news",
      queries: { orders: "-publishedAt", limit: 10, ...queries },
    });
    return res.contents;
  } catch {
    return fallbackNews;
  }
}

export async function getNewsDetail(id: string): Promise<NewsArticle | null> {
  if (!client) return fallbackNews.find((n) => n.id === id) ?? null;

  try {
    return await client.getListDetail<NewsArticle>({
      endpoint: "news",
      contentId: id,
    });
  } catch {
    return null;
  }
}

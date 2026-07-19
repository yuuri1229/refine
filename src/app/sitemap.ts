import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getNewsList } from "@/lib/microcms";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await getNewsList({ limit: 100 });

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/news`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteConfig.url}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteConfig.url}/tokusho`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${siteConfig.url}/news/${item.id}`,
    lastModified: item.updatedAt,
    changeFrequency: "monthly",
    priority: 0.4,
  }));

  return [...staticRoutes, ...newsRoutes];
}

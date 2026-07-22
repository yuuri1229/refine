import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/site";
import "./globals.css";

// Noto Sans JP is only a fallback for platforms without Hiragino Sans
// (Windows/Android/Linux); see --font-sans in globals.css.
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.serviceName}｜毎月の携帯料金を無料で見直し`,
    template: `%s｜${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "携帯料金見直し",
    "スマホ代 見直し",
    "格安SIM 相談",
    "携帯料金 節約",
    "REFINE",
    "リファイン",
  ],
  authors: [{ name: siteConfig.serviceName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteConfig.url,
    siteName: siteConfig.serviceName,
    title: `${siteConfig.serviceName}｜毎月の携帯料金を無料で見直し`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.serviceName}｜毎月の携帯料金を無料で見直し`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.serviceName,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    postalCode: siteConfig.postalCode.replace("〒", ""),
    addressRegion: "新潟県",
    streetAddress: siteConfig.address,
    addressCountry: "JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

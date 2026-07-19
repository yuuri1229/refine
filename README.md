# REFINE（携帯料金見直しサービス） Webサイト

Next.js（App Router）+ Tailwind CSS v4 + microCMS で構築した [refine.support](https://refine.support) の新Webサイトです。

## 技術スタック

- Next.js 16 / React 19 / TypeScript
- Tailwind CSS v4（メインカラー `#F56A01`）
- Material Symbols Outlined（アイコン、必要なグリフのみをサブセットして `public/fonts` に同梱）
- Noto Sans JP（`next/font/google`）
- microCMS（お知らせ機能）
- Resend（お問い合わせフォームのメール送信）
- Vercel（ホスティング想定）

## セットアップ

```bash
npm install
cp .env.example .env.local
npm run dev
```

http://localhost:3000 で確認できます。

## 環境変数

`.env.example` を参照してください。

| 変数名 | 用途 | 必須 |
| --- | --- | --- |
| `MICROCMS_SERVICE_DOMAIN` | microCMSのサービスID（`https://[ID].microcms.io` の `[ID]` 部分） | お知らせをmicroCMS化する場合のみ |
| `MICROCMS_API_KEY` | microCMSのAPIキー | 同上 |
| `RESEND_API_KEY` | お問い合わせフォームのメール送信に使用する[Resend](https://resend.com)のAPIキー | フォーム送信を有効化する場合 |
| `CONTACT_TO_EMAIL` | お問い合わせの送信先アドレス（未設定時は `info@refine.support`） | 任意 |

microCMS未設定の状態でも、`src/lib/microcms.ts` 内のフォールバックデータでビルド・表示が可能です。

### microCMSのAPI設計（お知らせ）

エンドポイント名: `news`（リスト形式）

| フィールドID | 種類 | 必須 |
| --- | --- | --- |
| `title` | テキストフィールド | ○ |
| `content` | リッチエディタ | - |

作成後、`MICROCMS_SERVICE_DOMAIN` / `MICROCMS_API_KEY` を環境変数に設定すると自動的にAPIから取得するようになります（`src/lib/microcms.ts`）。

## お問い合わせフォームのメール送信

`src/app/api/contact/route.ts` が [Resend](https://resend.com) 経由でメール送信します。`RESEND_API_KEY` を設定するまではフォーム送信時にエラーメッセージ（LINE・メールでの直接連絡を案内）を表示します。

送信元アドレスは `no-reply@<サイトのドメイン>` を使用するため、Resend側で該当ドメインの送信認証（SPF/DKIM）設定が必要です。

## アイコンフォントについて

`public/fonts/material-symbols-outlined.woff2` は Google Fonts の Material Symbols Outlined から、サイトで使用しているアイコンのみを [fonttools](https://github.com/fonttools/fonttools) でサブセットしたものです（詳細は `src/components/icon-map.ts`）。

新しいアイコンを追加する場合:

1. [Material Symbols](https://fonts.google.com/icons) で使いたいアイコン名とコードポイントを確認
2. `src/components/icon-map.ts` に `アイコン名: 0xコードポイント` を追加
3. フォントを再サブセットして `public/fonts/material-symbols-outlined.woff2` を更新

## デプロイ（Vercel）

1. このリポジトリをVercelにインポート
2. 上記の環境変数を Vercel のプロジェクト設定に登録
3. デプロイ

独自ドメイン（refine.support）はVercel側のドメイン設定から移管・接続してください。

## 参考: GitHub Pagesでの静的プレビュー

本番はVercel（サーバー機能あり）を前提としていますが、`npm run build:gh-pages` でAPI Routeを含まない静的書き出し（`output: 'export'`）を`./out`に生成できます。GitHub Pagesのようなプロジェクトサブパス配信では `NEXT_PUBLIC_BASE_PATH` にリポジトリ名を指定してください。

```bash
NEXT_PUBLIC_BASE_PATH=/refine npm run build:gh-pages
```

この場合、お問い合わせフォームの送信（`/api/contact`）は利用できません（LINE・メールへの案内表示にフォールバックします）。

## SEO

- `src/app/sitemap.ts` / `src/app/robots.ts` で自動生成
- `src/app/opengraph-image.tsx` でOGP画像を動的生成
- 構造化データ（LocalBusiness）を `src/app/layout.tsx` に埋め込み

Google Search Console / Google Analytics を導入する場合は、計測IDを教えていただければ組み込みます。

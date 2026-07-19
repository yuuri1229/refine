/**
 * GitHub Pages向け静的書き出し（NEXT_PUBLIC_BASE_PATH=/refine 等）では、
 * next/image のunoptimizedモード時にbasePathが自動付与されないため、
 * public/ 配下の画像パスはこのヘルパーで明示的に付与する。
 * Vercel本番（NEXT_PUBLIC_BASE_PATH未設定）では素通りする。
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(publicPath: string): string {
  return `${basePath}${publicPath}`;
}

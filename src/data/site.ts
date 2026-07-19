export const siteConfig = {
  name: "REFINE（リファイン）",
  serviceName: "携帯料金見直しサービスREFINE",
  shortName: "REFINE",
  catchCopy: "携帯料金の見直し",
  tagline: "通信費の無駄を削減して年間最大100,000円の節約をサポート",
  badge: "簡単ステップで節約ラクラク♪",
  url: "https://refine.support",
  description:
    "毎月の携帯料金、払いすぎていませんか？REFINE（リファイン）は通信費の無駄を削減し、年間最大100,000円の節約をサポートする携帯料金見直しサービスです。LINEで気軽にご相談ください。",
  email: "info@refine.support",
  phone: "090-3549-4263",
  businessHours: "10:00-18:00（土日祝を除く）",
  businessHoursNote: "※受付時間外の場合は、メールにてお問い合わせください。",
  representative: "甲斐 悠理",
  postalCode: "〒950-2264",
  address: "新潟県新潟市西区みずき野6-2-31",
  lineUrl: "https://lin.ee/CUl5JH1",
} as const;

export const navLinks = [
  { href: "/#pricing", label: "料金プラン" },
  { href: "/#flow", label: "お申し込みの流れ" },
  { href: "/#voice", label: "お客様の声" },
  { href: "/#news", label: "お知らせ" },
] as const;

export const footerLinks = [
  { href: "/#news", label: "お知らせ" },
  { href: "/privacy-policy", label: "プライバシーポリシー" },
  { href: "/tokusho", label: "特定商取引法に基づく表記" },
] as const;

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

const inquiryTypes: Record<string, string> = {
  lower_bill: "スマホ代を安くしたい（見直しのご相談）",
  family_bill: "家族のスマホ代もまとめて見直したい",
  other: "その他のお問い合わせ",
};

export async function POST(request: Request) {
  const body = await request.json();
  const { inquiryType, email, company, name, phone, message, agreed } = body ?? {};

  if (!inquiryType || !email || !name || !phone || !agreed) {
    return NextResponse.json({ error: "必須項目が入力されていません。" }, { status: 400 });
  }
  if (!inquiryTypes[inquiryType]) {
    return NextResponse.json({ error: "お問い合わせの種類が不正です。" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

  if (!apiKey) {
    return NextResponse.json(
      { error: "現在フォーム送信を準備中です。お手数ですがメールまたはLINEでご連絡ください。" },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `${siteConfig.serviceName} <no-reply@${new URL(siteConfig.url).hostname}>`,
      to: toEmail,
      replyTo: email,
      subject: `【お問い合わせ】${inquiryTypes[inquiryType]}`,
      text: [
        `お問い合わせの種類: ${inquiryTypes[inquiryType]}`,
        `お名前: ${name}`,
        `会社名: ${company || "（未入力）"}`,
        `メールアドレス: ${email}`,
        `電話番号: ${phone}`,
        "",
        "ご相談内容・ご質問・その他:",
        message || "（未入力）",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "送信に失敗しました。時間をおいて再度お試しください。" }, { status: 500 });
  }
}

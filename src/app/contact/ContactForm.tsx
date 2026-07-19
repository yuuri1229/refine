"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";

const inquiryOptions = [
  { value: "lower_bill", label: "スマホ代を安くしたい（見直しのご相談）" },
  { value: "family_bill", label: "家族のスマホ代もまとめて見直したい" },
  { value: "other", label: "その他のお問い合わせ" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      inquiryType: data.get("inquiryType"),
      email: data.get("email"),
      company: data.get("company"),
      name: data.get("name"),
      phone: data.get("phone"),
      message: data.get("message"),
      agreed: data.get("agreed") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "送信に失敗しました。");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました。");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary-200 bg-primary-50 p-8 text-center">
        <Icon name="check_circle" filled className="!text-4xl text-primary-500" />
        <p className="mt-3 text-base font-bold text-ink-900">
          お問い合わせありがとうございます。
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">
          内容を確認のうえ、担当より折り返しご連絡いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <fieldset>
        <legend className="flex items-center gap-1 text-sm font-bold text-ink-900">
          <span className="text-red-500">*</span>
          お問い合わせの種類
        </legend>
        <div className="mt-3 space-y-3">
          {inquiryOptions.map((opt) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-ink-200 px-4 py-3 text-sm text-ink-700 transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50"
            >
              <input
                type="radio"
                name="inquiryType"
                value={opt.value}
                required
                className="h-4 w-4 accent-primary-500"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="email" className="flex items-center gap-1 text-sm font-bold text-ink-900">
          <span className="text-red-500">*</span>
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="example@refine.support"
          className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-bold text-ink-900">
          会社名
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="リファイン株式会社"
          className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <div>
        <label htmlFor="name" className="flex items-center gap-1 text-sm font-bold text-ink-900">
          <span className="text-red-500">*</span>
          お名前
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="山田　太郎"
          className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <div>
        <label htmlFor="phone" className="flex items-center gap-1 text-sm font-bold text-ink-900">
          <span className="text-red-500">*</span>
          電話番号
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="090-xxxx-xxxx"
          className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-bold text-ink-900">
          ご相談内容・ご質問・その他
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="mt-2 w-full rounded-xl border border-ink-200 px-4 py-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100"
        />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink-700">
        <input
          type="checkbox"
          name="agreed"
          required
          className="h-4 w-4 accent-primary-500"
        />
        <Link href="/privacy-policy" className="text-primary-600 underline">
          プライバシーポリシー
        </Link>
        に同意する
      </label>

      {status === "error" && (
        <p className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          <Icon name="error" className="text-base" />
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-8 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-50"
      >
        {status === "submitting" ? "送信中..." : "送信"}
      </button>
    </form>
  );
}

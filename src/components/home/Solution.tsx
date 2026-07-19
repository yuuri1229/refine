import Icon from "@/components/Icon";

const solutions = [
  {
    icon: "savings",
    text: "必要なサービスだけを残し無駄コストを削減",
  },
  {
    icon: "support_agent",
    text: "知識豊富な専門スタッフがあなたの疑問や不安を解消",
  },
  {
    icon: "tune",
    text: "機械の自動的な提案ではなくオーダーメイドのプラン",
  },
];

export default function Solution() {
  return (
    <section className="bg-cream-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide text-primary-600">
            ＼ これらの悩みを解決 ／
          </p>
          <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">
            無料で料金分析、最適プランを提案
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 p-8 text-center text-white shadow-md"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                <Icon name={item.icon} className="!text-3xl" />
              </span>
              <p className="text-base font-bold leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

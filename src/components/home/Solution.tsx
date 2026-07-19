import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const solutions = [
  {
    icon: "savings",
    title: "無駄なコストを削減",
    text: "必要なサービスだけを残し、無駄なコストを削減します。",
  },
  {
    icon: "support_agent",
    title: "専門スタッフが対応",
    text: "知識豊富な専門スタッフが、あなたの疑問や不安を解消します。",
  },
  {
    icon: "tune",
    title: "オーダーメイドのプラン",
    text: "機械的な自動提案ではなく、一人ひとりに合わせたプランをご案内します。",
  },
];

export default function Solution() {
  return (
    <section className="bg-primary-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-600">
            ＼ これらの悩みを解決 ／
          </p>
          <h2 className="font-display mt-3 text-2xl font-black text-ink-900 sm:text-3xl">
            無料で料金分析、最適プランを提案
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {solutions.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="flex h-full flex-col items-center gap-4 rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-primary-100">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-sm">
                  <Icon name={item.icon} className="!text-3xl" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

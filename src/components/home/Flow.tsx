import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: "person_add",
    title: "公式LINE追加",
    text: "公式LINEに登録するだけで手軽に見直しスタート。",
  },
  {
    icon: "checklist",
    title: "ヒヤリングフォーム",
    text: "数分でできる簡単な質問に答えていただき現状を把握します。",
  },
  {
    icon: "insights",
    title: "見直し額の表示",
    text: "オンライン説明で専門スタッフが見直し額を迅速にご提案。",
  },
  {
    icon: "sync_alt",
    title: "プラン変更/乗り換え",
    text: "専門スタッフが、最適なプランへの変更をサポート（有料｜希望者のみ）",
  },
];

export default function Flow() {
  return (
    <section id="flow" className="scroll-mt-20 bg-ink-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-400">FLOW</p>
          <h2 className="font-display mt-3 text-2xl font-black sm:text-3xl">お申し込みの流れ</h2>
        </Reveal>

        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-8 left-0 hidden h-px w-full bg-white/15 lg:block" />
          {steps.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="relative flex flex-col items-center text-center">
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg ring-4 ring-ink-900">
                <Icon name={item.icon} className="!text-2xl" />
              </span>
              <span className="tnum mt-4 text-xs font-bold text-primary-400">
                STEP {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

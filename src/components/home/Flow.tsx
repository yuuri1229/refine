import Icon from "@/components/Icon";

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
    <section id="flow" className="scroll-mt-16 bg-ink-900 py-16 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-wide text-primary-400">FLOW</p>
          <h2 className="mt-2 text-2xl font-black sm:text-3xl">お申し込みの流れ</h2>
          <span className="mt-4 block h-1 w-10 rounded-full bg-primary-500" />
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, i) => (
            <div key={item.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-primary-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon name={item.icon} />
                </span>
              </div>
              <h3 className="mt-4 text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.text}</p>
              {i < steps.length - 1 && (
                <Icon
                  name="arrow_forward"
                  className="absolute -right-7 top-3 hidden text-ink-600 lg:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

const problems = [
  {
    icon: "receipt_long",
    text: "今いくら払っているのかわからない",
  },
  {
    icon: "mobile",
    text: "マイdocomo、マイauなど開いたことがない",
  },
  {
    icon: "forum",
    text: "誰に相談したらいいかわからない",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-primary-600">PROBLEM</p>
        <h2 className="font-display mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
          こんなお悩みありませんか？
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {problems.map((item, i) => (
          <Reveal key={item.text} delay={i * 100}>
            <div className="flex h-full flex-col items-center gap-4 rounded-3xl bg-white p-7 text-center shadow-sm ring-1 ring-ink-100">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Icon name={item.icon} className="!text-2xl" />
              </span>
              <p className="text-sm font-bold leading-relaxed text-ink-800">{item.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

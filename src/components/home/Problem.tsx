import Icon from "@/components/Icon";

const problems = [
  "今いくら払っているのかわからない",
  "マイdocomo、マイauなど開いたことがない",
  "誰に相談したらいいかわからない",
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-bold tracking-wide text-primary-600">PROBLEM</p>
        <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">
          こんなお悩みありませんか？
        </h2>
        <span className="mx-auto mt-4 block h-1 w-10 rounded-full bg-primary-500" />
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {problems.map((text) => (
          <li
            key={text}
            className="flex items-center gap-3 rounded-2xl border border-primary-200 bg-white px-5 py-4 shadow-sm"
          >
            <Icon name="check_circle" filled className="shrink-0 text-primary-500" />
            <span className="text-sm font-bold text-ink-800">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

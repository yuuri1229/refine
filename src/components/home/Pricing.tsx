import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal className="text-center">
        <p className="text-xs font-bold tracking-[0.2em] text-primary-600">PLAN</p>
        <h2 className="font-display mt-3 text-2xl font-black text-ink-900 sm:text-3xl">
          料金プラン
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Reveal className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100">
          <div className="rounded-t-3xl bg-primary-500 px-7 py-5">
            <h3 className="text-lg font-black text-white">見直しが出来た場合</h3>
          </div>
          <div className="space-y-5 px-7 py-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                料金
              </span>
              <span className="tnum text-lg font-black text-ink-900">見直し額×6ヶ月分</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary-700">
                支払い方法
              </span>
              <span className="text-lg font-black text-ink-900">6ヶ月分を6分割払い</span>
            </div>
            <p className="rounded-2xl bg-ink-50 p-4 text-sm leading-relaxed text-ink-600">
              月々5,000円安くなった場合、5,000円 × 6ヶ月 = 30,000円を6回に分けて月々5,000円のご請求となります。
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100">
          <div className="rounded-t-3xl bg-moss-600 px-7 py-5">
            <h3 className="text-lg font-black text-white">見直しができなかった場合</h3>
          </div>
          <div className="space-y-5 px-7 py-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-moss-50 px-3 py-1 text-xs font-bold text-moss-700">
                料金
              </span>
              <span className="text-lg font-black text-ink-900">料金はかかりません</span>
            </div>
            <p className="flex items-start gap-2 rounded-2xl bg-moss-50 p-4 text-sm leading-relaxed text-moss-800">
              <Icon name="info" className="mt-0.5 shrink-0 text-moss-500" />
              見直しで料金が下がらなかった場合も費用は一切かかりません。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

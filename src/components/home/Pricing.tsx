import Icon from "@/components/Icon";

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-16 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-bold tracking-wide text-primary-600">PLAN</p>
        <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">料金プラン</h2>
        <span className="mt-4 block h-1 w-10 rounded-full bg-primary-500" />
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
          <div className="bg-primary-500 px-6 py-4">
            <h3 className="text-lg font-black text-white">見直しが出来た場合</h3>
          </div>
          <div className="space-y-5 bg-white px-6 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700">
                料金
              </span>
              <span className="text-lg font-black text-ink-900">見直し額×6ヶ月分</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-primary-100 px-3 py-1 text-xs font-bold text-primary-700">
                支払い方法
              </span>
              <span className="text-lg font-black text-ink-900">6ヶ月分を6分割払い</span>
            </div>
            <p className="rounded-xl bg-ink-50 p-4 text-sm leading-relaxed text-ink-600">
              月々5,000円安くなった場合、5,000円 × 6ヶ月 = 30,000円を6回に分けて月々5,000円のご請求となります。
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
          <div className="bg-secondary-500 px-6 py-4">
            <h3 className="text-lg font-black text-white">見直しができなかった場合</h3>
          </div>
          <div className="space-y-5 bg-white px-6 py-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-secondary-100 px-3 py-1 text-xs font-bold text-secondary-700">
                料金
              </span>
              <span className="text-lg font-black text-ink-900">料金はかかりません</span>
            </div>
            <p className="flex items-start gap-2 rounded-xl border border-secondary-200 bg-secondary-50 p-4 text-sm leading-relaxed text-secondary-800">
              <Icon name="info" className="mt-0.5 shrink-0 text-secondary-500" />
              見直しで料金が下がらなかった場合も費用は一切かかりません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

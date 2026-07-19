import Icon from "@/components/Icon";
import { voices } from "@/data/voices";

export default function Voice() {
  return (
    <section id="voice" className="scroll-mt-16 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide text-primary-600">VOICE</p>
          <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">お客様の声</h2>
          <span className="mx-auto mt-4 block h-1 w-10 rounded-full bg-primary-500" />
        </div>

        <div className="mt-10 space-y-8">
          {voices.map((voice) => (
            <div
              key={voice.profile}
              className="overflow-hidden rounded-3xl border border-ink-100 shadow-sm"
            >
              <div className="flex flex-col gap-4 bg-gradient-to-br from-primary-500 to-primary-600 p-8 text-white sm:flex-row sm:items-center">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <Icon name="account_circle" className="!text-4xl" />
                </span>
                <div>
                  <p className="text-sm font-bold text-primary-50">{voice.profile}</p>
                  <p className="mt-1 whitespace-pre-line text-lg font-black leading-snug">
                    {voice.summary}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 bg-white p-8 sm:grid-cols-2">
                <div className="flex items-center justify-center gap-3">
                  <div className="rounded-xl bg-secondary-100 px-4 py-3 text-center">
                    <p className="text-xs font-bold text-secondary-700">見直し前</p>
                    <p className="mt-1 text-xl font-black text-secondary-800">{voice.before.price}</p>
                    <p className="text-xs text-secondary-600">{voice.before.data}</p>
                  </div>
                  <Icon name="arrow_forward" className="text-primary-500" />
                  <div className="rounded-xl bg-primary-100 px-4 py-3 text-center">
                    <p className="text-xs font-bold text-primary-700">見直し後</p>
                    <p className="mt-1 text-xl font-black text-primary-700">{voice.after.price}</p>
                    <p className="text-xs text-primary-600">{voice.after.data}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold text-ink-500">見直し額</p>
                  <p className="text-3xl font-black text-primary-600">{voice.savedAmount}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{voice.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

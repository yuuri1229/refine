import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { voices } from "@/data/voices";

export default function Voice() {
  return (
    <section id="voice" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-600">VOICE</p>
          <h2 className="font-display mt-3 text-2xl font-black text-ink-900 sm:text-3xl">
            お客様の声
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {voices.map((voice, i) => (
            <Reveal key={voice.profile} delay={i * 100}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-ink-100">
                <div className="h-1.5 bg-primary-500" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                      <Icon name="account_circle" className="!text-2xl" />
                    </span>
                    <p className="text-xs font-bold text-ink-500">{voice.profile}</p>
                  </div>

                  <p className="font-display mt-4 whitespace-pre-line text-base font-bold leading-snug text-ink-900">
                    {voice.summary}
                  </p>

                  <div className="mt-5 flex items-center justify-center gap-3 rounded-2xl bg-ink-50 px-4 py-3">
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-ink-400">見直し前</p>
                      <p className="tnum text-sm font-bold text-ink-400 line-through">
                        {voice.before.price}
                      </p>
                    </div>
                    <Icon name="arrow_forward" className="text-primary-400" />
                    <div className="text-center">
                      <p className="text-[11px] font-bold text-primary-600">見直し後</p>
                      <p className="tnum text-base font-black text-primary-600">
                        {voice.after.price}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-xs leading-relaxed text-ink-600">
                    &ldquo;{voice.comment}&rdquo;
                  </p>

                  <p className="mt-4 text-right text-sm font-black text-primary-600">
                    月々 -{voice.savedAmount}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

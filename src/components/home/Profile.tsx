import Image from "next/image";
import Reveal from "@/components/Reveal";
import { siteConfig } from "@/data/site";
import { assetPath } from "@/lib/asset-path";

export default function Profile() {
  return (
    <section className="bg-primary-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-primary-600">PROFILE</p>
          <h2 className="font-display mt-3 text-2xl font-bold text-ink-900 sm:text-3xl">
            代表あいさつ
          </h2>
        </Reveal>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2.5rem] shadow-lg">
              <Image
                src={assetPath("/images/representative.jpg")}
                alt={`代表 ${siteConfig.representative}`}
                width={1400}
                height={933}
                className="h-full w-full object-cover"
                sizes="(min-width: 768px) 24rem, 90vw"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm font-bold text-ink-500">代表</p>
            <p className="font-display mt-1 text-2xl font-bold text-ink-900">
              {siteConfig.representative}
            </p>

            <p className="mt-6 text-sm leading-relaxed text-ink-600">
              友人の通信費の見直しをサポートした際に、小容量にもかかわらずオプション込みで10,000円近く支払っており
            </p>

            <blockquote className="font-display mt-5 rounded-2xl bg-white p-5 text-lg font-bold leading-relaxed text-ink-900 shadow-sm">
              &ldquo;こんなのはおかしい、通信費が高くて困っている人は世の中にもっと居るのでは？&rdquo;
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              という考えから15歳で携帯料金見直しサービス「リファイン」を起業。
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

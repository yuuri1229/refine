import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function Profile() {
  return (
    <section className="bg-cream-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold tracking-wide text-primary-600">PROFILE</p>
          <h2 className="mt-2 text-2xl font-black text-ink-900 sm:text-3xl">代表あいさつ</h2>
          <span className="mt-4 block h-1 w-10 rounded-full bg-primary-500" />
        </div>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold text-ink-500">代表</p>
            <p className="mt-1 text-2xl font-black text-ink-900">{siteConfig.representative}</p>

            <p className="mt-6 text-sm leading-relaxed text-ink-600">
              友人の通信費の見直しをサポートした際に、小容量にもかかわらずオプション込みで10,000円近く支払っており
            </p>

            <blockquote className="mt-5 border-l-4 border-primary-500 pl-4 text-lg font-bold leading-relaxed text-ink-900">
              &ldquo;こんなのはおかしい、通信費が高くて困っている人は世の中にもっと居るのでは？&rdquo;
            </blockquote>

            <p className="mt-5 text-sm leading-relaxed text-ink-600">
              という考えから15歳で携帯料金見直しサービス「リファイン」を起業。
            </p>
          </div>

          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/representative.jpg"
              alt={`代表 ${siteConfig.representative}`}
              width={1400}
              height={933}
              className="h-full w-full object-cover"
              sizes="(min-width: 768px) 24rem, 90vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

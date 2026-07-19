export type Voice = {
  profile: string;
  summary: string;
  before: { price: string; data: string };
  after: { price: string; data: string };
  savedAmount: string;
  comment: string;
};

export const voices: Voice[] = [
  {
    profile: "50代・女性／新潟県在住",
    summary: "docomoからahamoにプラン変更\nデータ量約3倍で支払額50%減",
    before: { price: "6,337円", data: "データ量7GB" },
    after: { price: "3,302円", data: "データ量20GB" },
    savedAmount: "3,035円",
    comment:
      "丁寧な対応で分からない料金も解約してもらい、かなり安くなりました。GBもたくさん使えて毎日GB数を気にしないでスマホ操作出来て快適です。分からないことも安心して相談できます。",
  },
  {
    profile: "70代・女性／兵庫県在住",
    summary: "通信速度も気にならず\n通信費が大幅に安くなりました。",
    before: { price: "9,974円", data: "データ量3GB" },
    after: { price: "3,830円", data: "データ量10GB" },
    savedAmount: "6,144円",
    comment:
      "料金が大きく下がったにもかかわらず、通信速度やサービスの品質に全く問題を感じることなく、快適に利用できています。",
  },
  {
    profile: "60代・男性／新潟県在住",
    summary: "ドコモからイオンモバイル（ドコモ回線）へ\n乗り換えて通信費が3分の1になりました",
    before: { price: "8,900円", data: "データ量7GB" },
    after: { price: "1,298円", data: "データ量5GB" },
    savedAmount: "7,602円",
    comment:
      "乗り換え前は安いかわりにメールに広告が入って来るのかな？と思っていましたが、そんな事はなく使えています。",
  },
];

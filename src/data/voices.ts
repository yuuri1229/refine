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
];

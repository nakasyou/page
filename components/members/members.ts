export type Profile = {
  name: string,  // デフォルト名(English)、必須
  names: {
    en?: string, // 英語名、任意
    ja?: string, // 日本語名、任意
  },
  descs: {
    en: string, // 英語(デフォルト)自己紹介、必須
    ja: string, // 日本語自己紹介、必須
  },
  posts: Array<string>, // 役職s、 必須。 なければ "[]" 英語
  skills: Array<string>, // スキルs、必須。なければ "[]" 英語が望ましい
  icon: string, // iconのURL。必須。DATA URIはOK。CORSを考慮すること。
}
export type Members = Array<Profile>

const members = () => [
  {
    name: "Pochi",
    names: {
      ja: "ぽち"
    },
    descs: {
      en: "I'm Pochi. I'm the main offender. head of this group. nice to meet you.",
      ja: "ぽちです。主犯格してます。このグループの主です。よろです。",
    },
    posts: ["developer"],
    skills: ["C","C++","Python","Kali"],
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
  }
]

export default members

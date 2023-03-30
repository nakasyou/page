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
  links: Array<{
    url: string,
    icon: string,  // 白黒画像
    name: string,
  }>
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
    posts: ["Leader","Developer"],
    skills: ["C","C++","Python","Kali"],
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
    links: [],
  },
  {
    name: "Bonds",
    names: {
      ja: "ぼんず"
    },
    descs: {
      en: "I'm Bonds.Creator of Liberluna. I'm doing a lieutenant. As the name suggests, we value ties. thank you.",
      ja: "ぼんずです。\"Liberluna\"の名前の考案者です。副官やってます。名前の通り絆を大切にしています。よろしくお願いします。"
    },
    posts: ["Developer"],
    skills: ["C","C++","Python","Kali","HTML","CSS","javascript"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/bonds.jpg",
    links: [],
  },
  {
    name: "nakasyou",
    names: {
      ja: "nakasyou"
    },
    descs: {
      en: "I'm Bonds.Creator of Liberluna. I'm doing a lieutenant. As the name suggests, we value ties. thank you.",
      ja: "nakasyou。4月から中二の人。開発者やってます。よろです。"
    },
    posts: ["Developer"],
    skills: ["TypeScript","JavaScript","Python","Deno","Node.js","HTML&CSS","Shell"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/nakasyou.png",
    links: [
      {
        url: "https://github.com/nakasyou",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      }
    ],
  },
]

export default members

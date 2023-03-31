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
    skills: ["C","C++","Python","Kali","HTML&CSS","JavaScript"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/pochi.png",
    links: [
      {
        url: "https://github.com/Pochi-Liberluna",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
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
    skills: ["C","C++","Python","Kali","HTML","CSS","JavaScript"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/bonds.jpg",
    links: [
      {
        url: "https://github.com/bond417",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "nakasyou",
    names: {
      ja: "nakasyou"
    },
    descs: {
      en: "I'm nakasyou. A person in the second year of junior high school from April. I'm a 'web person'. I'm a developer.",
      ja: "nakasyou。4月から中二の人。自称Web人です。開発者やってます。よろです。"
    },
    posts: ["Developer"],
    skills: ["TypeScript","JavaScript","Python","Deno","Node.js","HTML&CSS","Shell"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/nakasyou.png",
    links: [
      {
        url: "https://github.com/nakasyou",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/nakasyou0",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
      {
        url: "https://scratch.mit.edu/users/nakasyou1103",
        name: "Scratch",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/scratch.svg",
      },
      {
        url: "https://matrix.to/#/@nakasyou:matrix.org",
        name: "Element",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/element.svg",
      },
    ],
  },
  {
    name: "Ame",
    names: {
      ja: "Ame"
    },
    descs: {
      en: "Ame",
      ja: "Ame"
    },
    posts: ["Developer"],
    skills: ["Python","C#","html","css","JS","PHP","Brainfuck"],
    icon: "https://github.com/EdamAme-x.png",
    links: [
      {
        url: "https://github.com/EdamAme-x",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "Kouta",
    names: {
      ja: "巧太"
    },
    descs: {
      en: "--",
      ja: "--"
    },
    posts: ["Developer"],
    skills: [],
    icon: "https://github.com/koutamanto.png",
    links: [
      {
        url: "https://github.com/koutamant",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "Omochi",
    names: {
      ja: "おもち"
    },
    descs: {
      en: "--",
      ja: "--"
    },
    posts: ["Developer"],
    skills: [],
    icon: "https://github.com/hiro1234omochi.png",
    links: [
      {
        url: "https://github.com/hiro1234omochi",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "fumi",
    names: {
      ja: "fumi"
    },
    descs: {
      en: "--",
      ja: "--"
    },
    posts: ["Developer"],
    skills: [],
    icon: "https://github.com/kisia0916.png",
    links: [
      {
        url: "https://github.com/kisia0916",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "kisia0012",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "RangeM-kishiyama",
    names: {
      ja: "RangeM-kishiyama"
    },
    descs: {
      en: "--",
      ja: "--"
    },
    posts: ["Developer"],
    skills: [],
    icon: "https://github.com/RangeM-kishiyama.png",
    links: [
      {
        url: "https://github.com/RangeM-kishiyama",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/rangem_ctf",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
]

export default members

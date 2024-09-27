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
      en: "I'm Pochi. I'm the main offender. Head of this group. Nice to meet you.",
      ja: "ぽちです。主犯格してます。このグループの主です。よろです。",
    },
    posts: ["Leader","Developer"],
    skills: ["C", "C++", "HTML&CSS", "JavaScript","Python", "VBA&VBS(少し)", "KaliLinux"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/pochi.png",
    links: [
      {
        url: "https://github.com/Pochi-Liberluna",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/Pochi-Liberluna",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "sosu",
    names: {
      ja: "素数"
    },
    descs: {
      en: "",
      ja: "",
    },
    posts: ["Manager","Developer"],
    skills: ["C", "PHP"],
    icon: "",
    links: [
      {
        url: "https://github.com/",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
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
      ja: "Bondsです。\"Liberluna\"の名前の考案者です。副官やってます。Liberlunaのdeveloperは全員俺の弟子(舎弟)。"
    },
    posts: ["SubLeader","Developer"],
    skills: ["C", "C++", "HTML&CSS", "JavaScript", "Python", "KaliLinux"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/bonds.jpg",
    links: [
      {
        url: "https://github.com/bond417",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/Bonds_Hacker",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "nakasyou",
    names: {
      ja: "nakasyou"
    },
    descs: {
      en: "I'm nakasyou. second year of junior high school",
      ja: "性別記入欄が嫌い。"
    },
    posts: ["Developer"],
    skills: ["Deno", "HTML&CSS", "JavaScript", "Node.js", "Python", "TypeScript", "Shell"],
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
    skills: ["Brainfuck", "C#", "HTML&CSS", "JavaScript", "PHP", "Python", "R"],
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
    skills: ["C#", "HTML&CSS", "JavaScript", "Python"],
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
    skills: ["HTML", "Java","Python"],
    icon: "https://github.com/hiro1234omochi.png",
    links: [
      {
        url: "https://github.com/hiro1234omochi",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/hiro_omochi1234",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
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
    skills: ["C", "C++", "EJS", "Java", "JavaScript", "Node.js", "Python", "TypeScript"],
    icon: "https://github.com/kisia0916.png",
    links: [
      {
        url: "https://github.com/kisia0916",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/kisia0012",
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
    skills: ["C", "C#", "Django", "Go", "HTML&CSS", "JavaScript", "PHP", "Python"],
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
  {
    name: "Kuroko",
    names: {
      ja: "黒子"
    },
    descs: {
      en: "",
      ja: ""
    },
    posts: ["Developer"],
    skills: ["Dart", "GAS", "HTML&CSS", "JavaScript", "Python", "bash"],
    icon: "",
    links: [
      {
        url: "https://github.com/Futaba411",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "Hashishi",
    names: {
      ja: "はしし"
    },
    descs: {
      en: "",
      ja: ""
    },
    posts: ["Developer"],
    skills: ["不明"],
    icon: "https://github.com/ipshtkleegetolb73.png",
    links: [
      {
        url: "https://github.com/ipshtkleegetolb73",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "Def4Root",
    names: {
      ja: "Def4Root"
    },
    descs: {
      en: "",
      ja: ""
    },
    posts: ["Developer", "Desiginer"],
    skills: ["HTML&CSS", "JavaScript", "PHP", "Python", "SQL(MySQL)", "AviUtl", "Blender"],
    icon: "https://github.com/Def4Root.png",
    links: [
      {
        url: "https://github.com/Def4Root",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/def4root",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "sum1t",
    names: {
      ja: "サミット"
    },
    descs: {
      en: "If you can, please give me a Hi-Mecha Holder h5005, Hi-Uni 5-5050, Mechanica MEC, a FlashPaPa CD and a Solid State Survivor record.",
      ja: "できることなら僕に、ハイメカホルダーh5005,ハイユニ5-5050,メカニカMECと、FlashPaPaのCDとソリッドステイトサヴァイヴァーのレコードをお恵みください。"
    },
    posts: ["Developer"],
    skills: ["Java","Python"],
    icon: "",
    links: [
      {
        url: "https://github.com/",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "Skylark",
    names: {
      ja: "スカイラーク"
    },
    descs: {
      en: "",
      ja: ""
    },
    posts: ["Developer"],
    skills: ["JavaScript","lua", "PHP", "Python", "TypeScript"],
    icon: "https://github.com/Mambo-q.png",
    links: [
      {
        url: "https://github.com/Mambo-q",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/vje_",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "Suteki",
    names: {
      ja: "素敵"
    },
    descs: {
      en: "",
      ja: ""
    },
    posts: ["Developer"],
    skills: ["HTML&CSS", "JavaScript", "PHP", "Python", "SQL(MySQL,SQLite)"],
    icon: "",
    links: [
      {
        url: "https://github.com/",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "MD5",
    names: {
      ja: "MD5"
    },
    descs: {
      en: "I enjoy dynamic analysis of malware (including jokes) and developing web applications.",
      ja: "マルウェア(ジョーク含む)の動的解析や、Webアプリケーションの開発が趣味です。"
    },
    posts: ["Developer","MalwareResearcher"],
    skills: ["Python", "Ruby", "(書ける奴)", "Parrot OS", "Assembly", "C", "C#", "SQL", "Node.js", "Flask", "(勉強中)"],
    icon: "https://github.com/endermite0314.png",
    links: [
      {
        url: "https://github.com/endermite0314",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
      {
        url: "https://twitter.com/lockeddoor0314",
        name: "Twitter",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/twitter.svg",
      },
    ],
  },
  {
    name: "DDoSer",
    names: {
      ja: ""
    },
    descs: {
      en: "I can at least rewrite the MBR in assembly.",
      ja: "アセンブリでMBRの書き換えくらいはできます。"
    },
    posts: ["Developer","MalwareResearcher"],
    skills: ["HTML&CSS", "JavaScript","PHP","Python","SQL(MySQL)", "Swift", "C", "C#", "Ruby", "(C,C#,Rubyは勉強中)"],
    icon: "https://github.com/mama1928.png",
    links: [
      {
        url: "https://github.com/mama1928",
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/github.svg",
      },
    ],
  },
  {
    name: "movenap",
    names: {
      ja: "movenap"
    },
    descs: {
      en: "---",
      ja: "いつも元気な11月3日生まれ。ってのは建前で(ﾟ∀ﾟ)ｱﾋｬがただただ好きな変人です！"
    },
    posts: ["Developer"],
    skills: ["hijacked person helper","Scratch","Clang"],
    icon: "https://raw.githubusercontent.com/Liberluna/page/main/assets/member-icons/movenap.png",
    links: [
      {
        url: "https://scratch.mit.edu/users/move028/",
        name: "Scratch",
        icon: "https://cdn.jsdelivr.net/npm/simple-icons@8.8.0/icons/scracth.svg",
      },
    ],
  },
]

export default members

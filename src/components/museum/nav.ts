export const HALLS = [
  { slug: "lines", label: "起承轉合", text: "蓋茨、貝佐斯、馬斯克幾條線疊埋，睇邊一年穿過。" },
  { slug: "power", label: "全球占比", text: "身家占當時全球產出。大帝國可以重新變高。" },
  { slug: "ranks", label: "雙尺排名", text: "同一班人，物價榜同佔比榜兩邊排。" },
  { slug: "sources", label: "錢從何來", text: "海貿、田賦、石油、軟件，按行業入櫃。" },
  { slug: "fates", label: "錢去咗邊", text: "捐走、抄走、留喺股份，定留喺國庫。" },
  { slug: "buying", label: "買到幾多", text: "用三件當時買得到的東西，講規模。" },
  { slug: "relay", label: "榜首接力", text: "邊個坐喺展線上，坐了幾多年。" },
  { slug: "map", label: "地圖", text: "示意位置：廣州、大都、奧格斯堡、奧馬哈。" },
  { slug: "life", label: "生活影響", text: "宮廷、工廠、行號同基金會，點改別人的日子。" },
  { slug: "compare", label: "打對台", text: "揀兩個人，兩把尺並排睇。" },
] as const;

export type HallSlug = (typeof HALLS)[number]["slug"];

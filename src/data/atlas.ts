import { byId, forbesPeak, type Tycoon } from "./wealth";

export type Origin = "throne" | "conquest" | "inherited" | "self-made" | "mixed";
export type FateKind = "heirs" | "foundation" | "state" | "dissipated" | "company" | "public" | "mixed";

export type Profile = {
  origin: Origin;
  industry: string;
  gdpShare: number;
  realmShare?: number;
  gdpNote: string;
  lifeStyle: string;
  impact: string;
  buying: string[];
  fateKind: FateKind;
  lat: number;
  lon: number;
  arcEnd: number;
  more: string[];
};

export const ORIGIN_LABEL: Record<Origin, string> = {
  throne: "王位同國庫",
  conquest: "征服",
  inherited: "家業",
  "self-made": "白手起家",
  mixed: "一半一半",
};

export const FATE_LABEL: Record<FateKind, string> = {
  heirs: "傳俾家人",
  foundation: "基金會同捐贈",
  state: "留喺國庫或被國家拿走",
  dissipated: "散咗、抄走或沒收",
  company: "留喺公司股份",
  public: "變成公共機構",
  mixed: "幾條路一齊走",
};

type Point = { year: number; nominal: number; usd: number };

/** 名義身家（當年十億美元）同已折成 2026 年美元嘅教學軌跡。榜首年份對齊館內福布斯線。 */
export const TRACKS: Record<string, Point[]> = {
  tsutsumi: [
    { year: 1987, nominal: 20, usd: 58 },
    { year: 1988, nominal: 18.9, usd: 53 },
    { year: 1989, nominal: 15, usd: 40 },
    { year: 1990, nominal: 16, usd: 40 },
    { year: 1993, nominal: 9, usd: 21 },
    { year: 1994, nominal: 8.5, usd: 19 },
    { year: 1996, nominal: 3, usd: 6 },
  ],
  mori: [
    { year: 1989, nominal: 10, usd: 22 },
    { year: 1991, nominal: 15, usd: 36 },
    { year: 1992, nominal: 13, usd: 31 },
    { year: 1993, nominal: 8, usd: 18 },
  ],
  gates: [
    { year: 1987, nominal: 1.25, usd: 4 },
    { year: 1990, nominal: 2.5, usd: 6 },
    { year: 1995, nominal: 12.9, usd: 28 },
    { year: 1996, nominal: 18.5, usd: 39 },
    { year: 1997, nominal: 36.4, usd: 75 },
    { year: 1998, nominal: 51, usd: 103 },
    { year: 1999, nominal: 90, usd: 178 },
    { year: 2000, nominal: 60, usd: 115 },
    { year: 2001, nominal: 58, usd: 109 },
    { year: 2002, nominal: 52, usd: 97 },
    { year: 2003, nominal: 40.7, usd: 73 },
    { year: 2004, nominal: 46.6, usd: 81 },
    { year: 2005, nominal: 46.5, usd: 78 },
    { year: 2006, nominal: 50, usd: 85 },
    { year: 2007, nominal: 56, usd: 89 },
    { year: 2008, nominal: 58, usd: 89 },
    { year: 2009, nominal: 40, usd: 61 },
    { year: 2010, nominal: 53, usd: 80 },
    { year: 2011, nominal: 56, usd: 82 },
    { year: 2012, nominal: 61, usd: 88 },
    { year: 2013, nominal: 67, usd: 95 },
    { year: 2014, nominal: 76, usd: 106 },
    { year: 2015, nominal: 79.2, usd: 110 },
    { year: 2016, nominal: 75, usd: 103 },
    { year: 2017, nominal: 86, usd: 116 },
    { year: 2018, nominal: 90, usd: 118 },
    { year: 2019, nominal: 96.5, usd: 125 },
    { year: 2020, nominal: 98, usd: 125 },
    { year: 2021, nominal: 124, usd: 151 },
    { year: 2022, nominal: 118, usd: 133 },
    { year: 2023, nominal: 104, usd: 113 },
    { year: 2024, nominal: 128, usd: 135 },
    { year: 2025, nominal: 108, usd: 111 },
    { year: 2026, nominal: 116, usd: 116 },
  ],
  buffett: [
    { year: 1995, nominal: 12, usd: 23 },
    { year: 2000, nominal: 28, usd: 54 },
    { year: 2008, nominal: 62, usd: 95 },
    { year: 2012, nominal: 44, usd: 63 },
    { year: 2015, nominal: 72.7, usd: 101 },
    { year: 2018, nominal: 84, usd: 110 },
    { year: 2021, nominal: 96, usd: 117 },
    { year: 2023, nominal: 106, usd: 115 },
    { year: 2024, nominal: 133, usd: 140 },
    { year: 2026, nominal: 154, usd: 154 },
  ],
  slim: [
    { year: 2007, nominal: 49, usd: 78 },
    { year: 2010, nominal: 53.5, usd: 81 },
    { year: 2011, nominal: 74, usd: 108 },
    { year: 2012, nominal: 69, usd: 99 },
    { year: 2013, nominal: 73, usd: 103 },
    { year: 2015, nominal: 77, usd: 107 },
    { year: 2018, nominal: 67, usd: 88 },
    { year: 2021, nominal: 62, usd: 75 },
    { year: 2024, nominal: 102, usd: 107 },
    { year: 2026, nominal: 90, usd: 90 },
  ],
  bezos: [
    { year: 2012, nominal: 18.4, usd: 23 },
    { year: 2014, nominal: 32, usd: 45 },
    { year: 2015, nominal: 34.8, usd: 48 },
    { year: 2016, nominal: 45.2, usd: 62 },
    { year: 2017, nominal: 72.8, usd: 98 },
    { year: 2018, nominal: 112, usd: 147 },
    { year: 2019, nominal: 131, usd: 168 },
    { year: 2020, nominal: 113, usd: 144 },
    { year: 2021, nominal: 177, usd: 215 },
    { year: 2022, nominal: 171, usd: 193 },
    { year: 2023, nominal: 114, usd: 123 },
    { year: 2024, nominal: 194, usd: 204 },
    { year: 2025, nominal: 215, usd: 222 },
    { year: 2026, nominal: 230, usd: 230 },
  ],
  arnault: [
    { year: 2012, nominal: 41, usd: 52 },
    { year: 2016, nominal: 40, usd: 55 },
    { year: 2018, nominal: 72, usd: 94 },
    { year: 2020, nominal: 76, usd: 97 },
    { year: 2021, nominal: 150, usd: 183 },
    { year: 2022, nominal: 158, usd: 178 },
    { year: 2023, nominal: 211, usd: 228 },
    { year: 2024, nominal: 233, usd: 239 },
    { year: 2025, nominal: 178, usd: 182 },
    { year: 2026, nominal: 190, usd: 190 },
  ],
  musk: [
    { year: 2012, nominal: 2, usd: 3 },
    { year: 2016, nominal: 10.7, usd: 15 },
    { year: 2018, nominal: 19.9, usd: 26 },
    { year: 2020, nominal: 24.6, usd: 32 },
    { year: 2021, nominal: 151, usd: 184 },
    { year: 2022, nominal: 219, usd: 246 },
    { year: 2023, nominal: 180, usd: 195 },
    { year: 2024, nominal: 195, usd: 205 },
    { year: 2025, nominal: 342, usd: 350 },
    { year: 2026, nominal: 923, usd: 923 },
  ],
};

export const TRACK_ORDER = ["gates", "bezos", "musk", "arnault", "buffett", "slim", "tsutsumi", "mori"] as const;

export const TRACK_COLOR: Record<string, string> = {
  gates: "#e6c98a",
  bezos: "#c44536",
  musk: "#f4f0e6",
  arnault: "#e08a4f",
  buffett: "#8fbf7a",
  slim: "#6ea8c9",
  tsutsumi: "#b08bc4",
  mori: "#d7a0c8",
};

export const CROSSINGS = [
  { year: 1999, text: "蓋茨名義身家第一次上到大約 900 億美元，係佢自己條線嘅尖頂。" },
  { year: 2018, text: "貝佐斯做福布斯年度第一。蓋茨條線仲高過 2003 年，但已經被網店同雲端越過。" },
  { year: 2022, text: "馬斯克年度榜越過貝佐斯。交叉發生喺 2021 同 2022 之間。" },
  { year: 2023, text: "阿爾諾年度榜越過馬斯克。奢侈品同火箭輪流領先。" },
  { year: 2025, text: "馬斯克再坐返年度第一，條線陡過之前任何一位。" },
];

const GDP_T: Array<[number, number]> = [
  [1987, 17],
  [1990, 22.6],
  [1995, 30.8],
  [1999, 32.5],
  [2000, 33.6],
  [2003, 38.9],
  [2008, 63.4],
  [2009, 60],
  [2010, 66],
  [2011, 73.4],
  [2012, 75],
  [2013, 77],
  [2014, 79],
  [2015, 75],
  [2016, 76],
  [2017, 81],
  [2018, 86],
  [2019, 87.5],
  [2020, 85],
  [2021, 96.5],
  [2022, 101],
  [2023, 105],
  [2024, 110],
  [2025, 116],
  [2026, 121],
];

export function worldGdpT(year: number): number {
  if (year <= GDP_T[0][0]) return GDP_T[0][1];
  const last = GDP_T[GDP_T.length - 1];
  if (year >= last[0]) return last[1];
  for (let index = 1; index < GDP_T.length; index += 1) {
    const [y1, v1] = GDP_T[index];
    const [y0, v0] = GDP_T[index - 1];
    if (year <= y1) {
      const t = (year - y0) / (y1 - y0);
      return v0 + (v1 - v0) * t;
    }
  }
  return last[1];
}

export function shareOfWorld(nominalBillions: number, year: number): number {
  return (nominalBillions / (worldGdpT(year) * 1000)) * 100;
}

export function formatShare(pct: number): string {
  if (pct >= 10) return `${Math.round(pct)}%`;
  if (pct >= 1) return `${pct.toFixed(1).replace(/\.0$/, "")}%`;
  return `${pct.toFixed(2)}%`;
}

function interpolate(points: Point[], year: number): Point | null {
  if (year < points[0].year || year > points[points.length - 1].year) return null;
  for (let index = 1; index < points.length; index += 1) {
    const right = points[index];
    const left = points[index - 1];
    if (year <= right.year) {
      const span = right.year - left.year;
      const t = span === 0 ? 0 : (year - left.year) / span;
      return {
        year,
        nominal: left.nominal + (right.nominal - left.nominal) * t,
        usd: left.usd + (right.usd - left.usd) * t,
      };
    }
  }
  return points[points.length - 1];
}

export function trackValue(id: string, year: number, mode: "usd" | "share"): number | null {
  const points = TRACKS[id];
  if (!points) return null;
  const point = interpolate(points, year);
  if (!point) return null;
  return mode === "usd" ? point.usd : shareOfWorld(point.nominal, year);
}

export function trackFrame(ids: string[], mode: "usd" | "share"): Array<Record<string, number | null>> {
  const rows: Array<Record<string, number | null>> = [];
  for (let year = 1987; year <= 2026; year += 1) {
    const row: Record<string, number | null> = { year };
    for (const id of ids) row[id] = trackValue(id, year, mode);
    rows.push(row);
  }
  return rows;
}

export function peakShare(id: string): number {
  const points = TRACKS[id];
  if (points?.length) {
    return Math.max(...points.map((point) => shareOfWorld(point.nominal, point.year)));
  }
  return PROFILES[id].gdpShare;
}

export function lifeArc(person: Tycoon): Array<{ year: number; value: number }> {
  const track = TRACKS[person.id];
  if (track) return track.map((point) => ({ year: point.year, value: point.usd }));
  const peak = person.wealth?.mid ?? forbesPeak(person.id).value;
  const from = person.hold?.from ?? person.peakYear;
  const to = Math.max(person.hold?.to ?? person.peakYear, person.peakYear);
  const end = PROFILES[person.id]?.arcEnd ?? 0.7;
  if (from === person.peakYear && to === person.peakYear) return [{ year: person.peakYear, value: peak }];
  return [
    { year: from, value: Math.round(peak * 0.45) },
    { year: person.peakYear, value: peak },
    { year: to, value: Math.round(peak * end) },
  ];
}

const PROFILES: Record<string, Profile> = {
  rajendra: {
    origin: "throne",
    industry: "海貿",
    gdpShare: 0.45,
    gdpNote: "南印度海權嘅教學讀數。寺廟金庫、田賦同戰利品混埋，唔係私人月結。",
    lifeStyle: "王都靠近大廟同港口。香料、珍珠、布匹同青銅燈係日常風景，儀式同出征一樣多。",
    impact: "將印度洋一段航線編入同一個稅網。東南亞港口會記得佢嘅船，多過記得佢袋入面有幾多。",
    buying: ["一支跨洋船隊", "幾座大廟嘅金庫", "沿海成串港口嘅關稅"],
    fateKind: "state",
    lat: 10.8,
    lon: 79.1,
    arcEnd: 0.75,
    more: [
      "1026 年宋朝開封人多、舖多、紙幣實驗亦開始，但個人冠軍唔應該頒俾皇帝。朱羅王朝畀到一個具體嘅海貿名字，所以館用佢開場。",
      "生活唔係歐洲城堡嗰一套。權力坐喺廟宇捐獻同港口貨單上。你見到塔，先至見到錢。",
    ],
  },
  william: {
    origin: "conquest",
    industry: "土地",
    gdpShare: 0.22,
    gdpNote: "《末日審判書》顯示國王控制英格蘭登記價值大約兩成。英格蘭相對宋朝同伊斯蘭世界細，所以全球佔比不高。",
    lifeStyle: "木城堡、騎兵同拉丁文文書。國王巡迴個國，喺臣屬嘅廳堂食飯、收稅、審案。",
    impact: "土地換主人。原有貴族失去田，諾曼領主上台。稅同兵役跟住新名簿走。",
    buying: ["英格蘭約兩成登記土地", "一批城堡同騎士采邑", "一本幾乎全國的田地清冊"],
    fateKind: "heirs",
    lat: 51.5,
    lon: -0.1,
    arcEnd: 0.9,
    more: [
      "佢最重要嘅遺物唔係金杯，係 1086 年嗰本調查。因為有人逐村寫低田同牛，後人先敢講『幾多份』。",
      "日常生活係戰爭之後嘅行政管理：邊個交幾多蜜糖、幾多犁。富係土地權，唔係一個可以提款嘅戶口。",
    ],
  },
  manuel: {
    origin: "throne",
    industry: "關稅",
    gdpShare: 0.18,
    gdpNote: "拜占庭仍然係關稅站，但國力已細過全盛期。教學佔比故意保守。",
    lifeStyle: "金馬賽克、絲綢長袍、海港倉庫。外交同宴會係統治工具，亦係開支。",
    impact: "歐亞貨物經過金角灣就要留低一筆稅。城一破，呢個閘口就換主人。",
    buying: ["一年港口關稅", "宮廷絲綢同金器", "一支仍然出得起海的艦隊"],
    fateKind: "state",
    lat: 41.0,
    lon: 29.0,
    arcEnd: 0.4,
    more: [
      "十二世紀唔係空白。君士坦丁堡仍然閃，只係閃法對全世界嚟講已經冇以前咁重。",
      "佢死後幾十年，十字軍將城洗劫。耀眼嘅廳堂證明過有錢，亦證明錢留唔住。",
    ],
  },
  genghis: {
    origin: "conquest",
    industry: "貢賦",
    gdpShare: 0.8,
    gdpNote: "拒絕將成個歐亞大陸當存款。0.8% 係『能動員嘅貢賦』偏低教學值，唔係淨資產。",
    lifeStyle: "氈帳、馬奶、快速遷徙。富唔係宮殿，而係騎兵到得到嘅地方同當地交得出嘅貢品。",
    impact: "商路一度更通，城市亦大量被毀。貿易同破壞係同一條鞭子的兩面。",
    buying: ["成串納貢城市", "跨草原的馬匹同弓", "一條重新接通的商路"],
    fateKind: "heirs",
    lat: 47.9,
    lon: 107.0,
    arcEnd: 0.55,
    more: [
      "死後安葬簡單，所以後人更加容易亂估。冇陵墓清單，網站就有空間發明幾萬億。呢度唔跟。",
      "生活同開羅或者臨安都唔同：財富跟軍隊移動。停低的時候先至變倉庫。",
    ],
  },
  kublai: {
    origin: "throne",
    industry: "稅收",
    gdpShare: 1.1,
    realmShare: 23,
    gdpNote: "1.1% 係宮廷可動用財富嘅教學值。大約 23% 係元朝所控經濟占全球產出嘅國力讀數，唔係私產。",
    lifeStyle: "大都有宮牆、運河同紙鈔。狩獵、宴會、宗教辯論同稅吏同時存在。",
    impact: "紙鈔令全國用同一種『寫低的錢』。運河令南方的米北上。兩樣都改變日常生活。",
    buying: ["一年田賦入庫", "一整條運河的漕糧", "絲路上幾個轉口城的關稅"],
    fateKind: "state",
    lat: 39.9,
    lon: 116.4,
    arcEnd: 0.7,
    more: [
      "馬可·波羅將宮殿寫到好似全世界的金庫。遊記可以帶路，唔可以當審計報告。",
      "國力柱會好高。請同時睇實心嗰條個人估算，先唔好將一個國家寫成一個人。",
    ],
  },
  musa: {
    origin: "throne",
    industry: "黃金",
    gdpShare: 2.4,
    gdpNote: "黃金控制權嘅保守教學讀數。有估計高好多。仍然係個人展櫃入面最高一檔，因為鹽金商路太集中。",
    lifeStyle: "廷巴克圖有學者同抄本。國王出行係駱駝隊，黃金既係貨幣亦係禮物。",
    impact: "1324 年朝聖令開羅金價下跌。一個人的慷慨，短暫改寫幾個城市的物價。",
    buying: ["長途朝聖駝隊", "沿途派得完的金砂", "撒哈拉兩邊的鹽金商路"],
    fateKind: "mixed",
    lat: 16.8,
    lon: -3.0,
    arcEnd: 0.6,
    more: [
      "西非黃金係舊世界貨幣體系的實物。控制金礦同商路，就好似控制住一種人人要的金屬。",
      "生活亦有圖書館同清真寺，唔只係金庫。錢去到開羅，亦留低學問之城的名聲。",
    ],
  },
  shen: {
    origin: "self-made",
    industry: "貿易",
    gdpShare: 0.06,
    gdpNote: "傳說富戶，全球佔比故意寫低。重點係結局，唔係爭世界第一。",
    lifeStyle: "江南水鄉、貨船、田莊同奴僕。富人住園林，出入靠河，唔係草原或者宮殿軸線。",
    impact: "一個城市商人富到進入國家傳說，說明市鎮貿易已經大。抄家則說明國家可以將佢清零。",
    buying: ["蘇州一帶的田莊", "一隊內河貨船", "起城牆傳說裡的那筆捐"],
    fateKind: "dissipated",
    lat: 31.3,
    lon: 120.6,
    arcEnd: 0.05,
    more: [
      "生卒同事蹟都唔穩，所以印章係要小心。空白走廊若果完全唔提中國商人，圖就會似只有皇帝同歐洲人。",
      "佢的線幾乎垂直跌到地。教學上，呢一下跌同卡內基捐圖書館唔同：一個係自己送走，一個係被拿走。",
    ],
  },
  medici: {
    origin: "self-made",
    industry: "銀行",
    gdpShare: 0.12,
    gdpNote: "城邦銀行家。歐洲只係全球一角，所以佔比唔會追到大帝國。",
    lifeStyle: "羊毛氣味、帳簿、禮拜堂委託。屋企有藝術，但權力來自信貸，唔係來自冠冕。",
    impact: "分行令錢可以喺城市之間旅行。教皇同國王打仗，往往先要問銀行借。",
    buying: ["幾個城市的銀行分行", "一整年的羊毛貿易", "一座禮拜堂的藝術委託"],
    fateKind: "mixed",
    lat: 43.8,
    lon: 11.2,
    arcEnd: 0.5,
    more: [
      "科西莫掌政時仍然穿市民的衣服。富豪可以唔叫國王，只要全城都欠你人情同利息。",
      "後代既贊助文藝復興，亦遇過銀行危機。家族曲線係上升、掌權、再波折，唔係一條直線。",
    ],
  },
  fugger: {
    origin: "self-made",
    industry: "銀行",
    gdpShare: 0.45,
    gdpNote: "史家認為佢身家係當時歐洲經濟一個可觀份額。歐洲唔係全世界，所以全球佔比再縮一截。有帳簿。",
    lifeStyle: "奧格斯堡的帳房、礦山報告、同皇帝的借據。富格爾屋苑則係低租金的社會房屋。",
    impact: "冇佢借錢，查理五世未必選到皇帝。私人信貸改變過歐洲政治。",
    buying: ["幾座銅礦同銀礦", "皇帝選舉的貸款", "至今仍然有人住的屋苑"],
    fateKind: "public",
    lat: 48.4,
    lon: 10.9,
    arcEnd: 0.65,
    more: [
      "佢係古代展櫃裡最接近『有數得計』的人。你可以爭論折算，唔使爭論佢存唔存在。",
      "屋苑租金低到後來變成象徵，住戶傳統上仲要為家族祈禱。錢的一部分真係改咗穷人的住址。",
    ],
  },
  atahualpa: {
    origin: "throne",
    industry: "黃金",
    gdpShare: 0.08,
    gdpNote: "一次贖金占全球產出的教學值，故意細。呢個係流量，唔係存量。",
    lifeStyle: "高原石城、金銀器皿、內戰剛完的宮廷。自由被一句『填滿個房』定價。",
    impact: "金屬流入西班牙，再影響歐洲物價。印加行政體系則被打断。",
    buying: ["一間房的黃金", "一間房的白銀", "換不回的自由"],
    fateKind: "dissipated",
    lat: -13.5,
    lon: -71.9,
    arcEnd: 0,
    more: [
      "高峰只有一兩年。將佢畫成同洛克菲勒一樣長的平台，係誤讀。",
      "生活細節被征服者的記載過濾。我哋知道金屬好多，唔知道日常賬簿。所以區間闊。",
    ],
  },
  akbar: {
    origin: "throne",
    industry: "田賦",
    gdpShare: 0.9,
    realmShare: 18,
    gdpNote: "蒙兀兒稅基已大。0.9% 係個人可動用估算，大約 18% 先係帝國產出占全球的國力讀數。",
    lifeStyle: "阿格拉同法泰赫布爾的宮廷，多種語言同宗教一齊出現。寶石同稅冊放喺同一座城。",
    impact: "統一度量衡同稅法，令一個多王國的地方可以當一個經濟體嚟收稅。",
    buying: ["一年北印度田賦", "宮廷工坊的絲綢", "跨信仰辯論的廳堂"],
    fateKind: "state",
    lat: 27.2,
    lon: 78.0,
    arcEnd: 0.8,
    more: [
      "十幾歲做皇帝，用幾十年砌圖。軍事同行政同時進行，所以財富係系統，唔係一箱寶石。",
      "佢請唔同信仰的人一齊講。呢件展品如果只講錢，會漏咗宮廷實際在做的另一件事。",
    ],
  },
  aurangzeb: {
    origin: "throne",
    industry: "田賦",
    gdpShare: 1.5,
    realmShare: 23,
    gdpNote: "個人教學值 1.5%。帝國大約佔全球產出兩成以上，用空心柱另計，避免將國家寫成私產。",
    lifeStyle: "軍營同稅署多過遊園。長期打仗，宮廷開支同田賦壓力一齊上升。",
    impact: "領土最廣的時候，紡織品行銷印度洋。戰爭延長，亦令地方精英離心。",
    buying: ["幾乎半個南亞的田賦機器", "一支長期在外的軍隊", "港口出口的棉布"],
    fateKind: "state",
    lat: 28.6,
    lon: 77.2,
    arcEnd: 0.45,
    more: [
      "阿克巴是砌圖的人，奧朗則布是將圖拉到最大的人。最大唔等於最穩。",
      "全球占比展廳裡，空心柱會高過好多現代首富。請讀註腳：嗰條係國力。",
    ],
  },
  qianlong: {
    origin: "throne",
    industry: "田賦",
    gdpShare: 1.1,
    realmShare: 32,
    gdpNote: "中國十八世紀末約佔全球產出三成，係國力。1.1% 先係皇帝可動用財富的保守教學值。",
    lifeStyle: "紫禁城、木蘭圍場、江南織造同景德鎮瓷器。收藏與戰事都係皇帝的開支。",
    impact: "人口同耕地面積去到高峰，手工業行銷海內外。官府可以動員的規模，當時少國比得上。",
    buying: ["內務府一年開支", "幾次大遠征的軍費", "宮廷級瓷器同絲織"],
    fateKind: "state",
    lat: 39.9,
    lon: 116.4,
    arcEnd: 0.7,
    more: [
      "如果有張圖將乾隆畫成遠超馬斯克，十居其九係將三成全球產出算入佢頭上。呢個館拒絕咁做。",
      "生活極其精緻，亦極其等級化。工匠做出來的東西進宮，唔等於工匠分享到個三成。",
    ],
  },
  rothschild: {
    origin: "self-made",
    industry: "銀行",
    gdpShare: 0.2,
    gdpNote: "家族網絡難以切成一個人。0.2% 係倫敦呢一房的教學值，唔係五兄弟相加。",
    lifeStyle: "信、匯票、交易所。速度係奢侈品。住倫敦，兄弟散落幾個首都。",
    impact: "政府重建同打仗都要借貸。跨城通信令價格消息快過官方郵差。",
    buying: ["幾國政府債券的大額持倉", "跨城信使網", "一間倫敦銀行"],
    fateKind: "heirs",
    lat: 51.5,
    lon: -0.12,
    arcEnd: 0.8,
    more: [
      "滑鐵盧信鴿故事被人講到太圓。快信係真，一日之內騙通市場就係傳說。展板將兩件拆開。",
      "家族由法蘭克福鋪位起家。內森係其中一房，唔好將成個姓氏的財富都寫入佢一個人。",
    ],
  },
  howqua: {
    origin: "inherited",
    industry: "貿易",
    gdpShare: 0.04,
    gdpNote: "同代人估約二千六百萬銀元。全球佔比細，因為佢係商人唔係國庫。物價尺會令低估計更細。",
    lifeStyle: "珠江邊的行號、茶箱、瓷器同外商帳房。要同時應付官府同遠洋船長。",
    impact: "茶葉將廣州同美國、英國的日常茶杯連在一起。一個行商可以成為跨洋信用的名字。",
    buying: ["倉庫裡的茶葉季", "十三行的一間行號", "同代人口中的二千六百萬銀元"],
    fateKind: "mixed",
    lat: 23.11,
    lon: 113.25,
    arcEnd: 0.35,
    more: [
      "Howqua 呢個名字寫喺外國商人的信裡。呢種記載比宮廷詩可靠：有人同佢結過帳。",
      "同一港口後來捲入鴉片同戰爭。佢解釋到貿易點樣造富，解釋唔到成場戰爭。兩件事要分句講。",
    ],
  },
  vanderbilt: {
    origin: "self-made",
    industry: "運輸",
    gdpShare: 0.12,
    gdpNote: "1877 年遺產約 1 億美元。全球佔比係教學折算，有遺囑同報紙。",
    lifeStyle: "由渡輪甲板到鐵路總部。晚年先至住得像顯貴，早年被人話粗魯。",
    impact: "幾條鐵路砌成系統，美國內陸的運費同時間表因此改寫。",
    buying: ["一組鐵路公司", "紐約渡輪航線", "一間以佢命名的大學"],
    fateKind: "mixed",
    lat: 40.75,
    lon: -74.0,
    arcEnd: 0.7,
    more: [
      "細個喺港口做船。呢條白手線好清楚，唔使靠傳說。",
      "捐大學係錢換樣的一次。鐵路本身繼續載人，擁有權就會再轉手。",
    ],
  },
  carnegie: {
    origin: "self-made",
    industry: "鋼鐵",
    gdpShare: 0.22,
    gdpNote: "1901 年賣盤約 4.8 億美元。佔比用成交高峰，其後捐贈令個人存量下跌。",
    lifeStyle: "由紗廠童工到鋼鐵城。賣盤之後的生活係圖書館典禮、音樂廳同基金會。",
    impact: "平鋼令鐵路、船同城市骨架變得可能。捐出的圖書館又改變另一種公共生活。",
    buying: ["美國最大一筆私人賣盤", "二千幾間公共圖書館", "一座音樂廳"],
    fateKind: "public",
    lat: 40.44,
    lon: -79.99,
    arcEnd: 0.15,
    more: [
      "高峰係一個尖頂。1901 年之後條線應該向下，因為佢故意將錢送走。",
      "佢寫過，死時仍然好有錢係可恥。你可同意可反對，但圖上的方向係真的向下。",
    ],
  },
  rockefeller: {
    origin: "self-made",
    industry: "石油",
    gdpShare: 0.4,
    gdpNote: "約佔 1913 年美國經濟 1% 到 2%。美國約佔全球兩成，所以全球約 0.4%。高過蓋茨 1999，低過本館對 2026 馬斯克的讀數。",
    lifeStyle: "克利夫蘭帳房起家，後來係標準石油的控股結構。晚年生活俭，基金會卻很大。",
    impact: "煉油、運油、賣油垂直整合。1911 年拆公司，改變美國反壟斷，亦令拆開的股份繼續存在。",
    buying: ["美國約九成煉油的控制權", "拆開之後仍然升值的股份", "一間做醫學同教育的基金會"],
    fateKind: "mixed",
    lat: 41.5,
    lon: -81.7,
    arcEnd: 0.85,
    more: [
      "只計物價，佢會細過今日首富。計佔美國經濟，佢極高。計全球產出，佢仍然貼近現代頂端，但唔再自動當第一。",
      "拆壟斷唔等於身家歸零。股份換咗幾間公司的名字，繼續喺市場裡。",
    ],
  },
  ford: {
    origin: "self-made",
    industry: "汽車",
    gdpShare: 0.15,
    gdpNote: "1920 年代工業富豪。全球佔比教學值，低過洛克菲勒，因為汽車雖然改寫生活，個人持股佔全球產出冇咁極端。",
    lifeStyle: "工廠、日薪實驗、後來同工會長期衝突。產品進入家庭，老闆的權力留喺廠門裡。",
    impact: "流水線成為二十世紀的生產語言。城市因而多咗公路、油站同郊區。",
    buying: ["一間垂直整合的汽車廠", "令工人都買得起的 T 型車定價", "以家族命名的基金會"],
    fateKind: "mixed",
    lat: 42.33,
    lon: -83.05,
    arcEnd: 0.6,
    more: [
      "空白的一九二〇年代其實有名字。福特填上洛克菲勒同蓋蒂中間嗰截。",
      "日薪五美元係招募同管理，唔只係善心。展板要同時寫產量同勞資衝突。",
    ],
  },
  getty: {
    origin: "inherited",
    industry: "石油",
    gdpShare: 0.06,
    gdpNote: "名義上的十億富翁。全球佔比細過洛克菲勒好多。物價尺會令佢更矮。",
    lifeStyle: "極悭，同時買大量藝術。電話要計錢的故事，同博物館的大廳並存。",
    impact: "石油合約繼續賺錢。對公眾更可見的影響，係後來開放的藝術館。",
    buying: ["中東石油合約的權益", "一批後來公開的藝術品", "一間以佢命名的博物館"],
    fateKind: "public",
    lat: 34.05,
    lon: -118.47,
    arcEnd: 0.55,
    more: [
      "報紙叫佢世界首富的時候，世界經濟已經大過 1913。同樣叫第一，佔比可以細好多。",
      "悭同收藏同時成立。錢的性格唔會只得一種。",
    ],
  },
  tsutsumi: {
    origin: "inherited",
    industry: "地產",
    gdpShare: 0.12,
    gdpNote: "1987 年名義約 200 億美元，約佔當年全球名義產出 0.12%。泡沫令帳面好高，爆破就縮。",
    lifeStyle: "鐵路、酒店、球場同土地。紙上財富跟日本地價，唔跟地窖裡的現金。",
    impact: "西武系企業影響日本旅行同休閒。泡沫爆破後，土地故事變成全國的金融教訓。",
    buying: ["泡沫頂峰的土地帳面", "一條私鐵同周邊開發", "後來被法律問題拿走的光環"],
    fateKind: "dissipated",
    lat: 35.7,
    lon: 139.7,
    arcEnd: 0.15,
    more: [
      "1987 至 1990 的世界第一，係地價語言寫出來的。同一塊地，帳簿可以一年寫大、一年寫細。",
      "後尾的證券違規令故事唔再只係經濟周期，而係個人同公司的法律責任。",
    ],
  },
  mori: {
    origin: "self-made",
    industry: "地產",
    gdpShare: 0.06,
    gdpNote: "1991 年名義約 150 億美元。全球佔比唔高，但足夠喺泡沫年份坐上年度第一。",
    lifeStyle: "東京高樓的地主。财富跟城市地價，生活跟建築工程。",
    impact: "森大廈改變東京天際線。榜首只有兩年，公司壽命長過冠軍。",
    buying: ["東京核心地段", "兩年的世界第一頭銜", "一組以家族命名的高樓"],
    fateKind: "heirs",
    lat: 35.66,
    lon: 139.73,
    arcEnd: 0.5,
    more: [
      "同堤義明共用一個泡沫。兩個日本人輪流第一，係同一種土地價格的兩張臉。",
      "1993 年過身。仔繼續起樓。樓還在，年度冠軍已經交還。",
    ],
  },
  gates: {
    origin: "self-made",
    industry: "軟件",
    gdpShare: 0.28,
    gdpNote: "1999 年名義約 900 億美元，約佔當年全球產出 0.28%。其後捐贈同股價令條線回落。",
    lifeStyle: "由程式員到全球最有錢的人，再變成基金會的捐贈者。後期公開生活好多時喺公共衛生，唔係新產品發布。",
    impact: "個人電腦要的操作系統同軟件，變成辦公室同學校的日常。基金會則將錢轉去疫苗、農業同教育。",
    buying: ["1999 年約全球產出的 0.28%", "幾乎每部個人電腦的軟件授權", "一間全球健康基金會"],
    fateKind: "foundation",
    lat: 47.6,
    lon: -122.3,
    arcEnd: 0.65,
    more: [
      "起承轉合展廳裡，佢的線 1999 年最尖，2017 年仍然高過貝佐斯，2018 年被越過。冠軍年份同人生高峰唔係同一日。",
      "2003 年你若果在場，第一仍然係佢，但由高位回落已經發生。記得分開『嗰一年第一』同『一生最有錢的一刻』。",
    ],
  },
  buffett: {
    origin: "self-made",
    industry: "投資",
    gdpShare: 0.1,
    gdpNote: "2008 年名義約 620 億美元，約佔全球產出 0.10%。海嘯年別人跌得更快，所以佢短暫第一。",
    lifeStyle: "奧馬哈的長線投資者。住得平實，決策係買自己明白的公司，然後等。",
    impact: "將保險浮存金變成一間綜合企業。對公眾的另一影響，係承諾將大部分財富捐走。",
    buying: ["一組長期持有的公司", "海嘯年的年度第一", "捐給基金會的股份承諾"],
    fateKind: "foundation",
    lat: 41.26,
    lon: -95.94,
    arcEnd: 0.9,
    more: [
      "條線慢，所以喺交匯圖裡好似背景。背景有時會在別人跌倒時變成第一。",
      "方法可以講俾中學生聽：明白、買入、等待。結果仍然要靠幾十年，唔係一堂課。",
    ],
  },
  slim: {
    origin: "self-made",
    industry: "電訊",
    gdpShare: 0.1,
    gdpNote: "2011 年名義約 740 億美元，全球佔比約 0.10%。拉丁美洲第一次連續幾年出年度首富。",
    lifeStyle: "墨西哥城的集團總部。電話、零售同基建放喺同一個商業帝國。",
    impact: "一個國家的通話要經過佢的網絡。日常通信變成可收費的基礎設施。",
    buying: ["全國級電訊網絡", "四年年度榜首", "一組跨行業控股"],
    fateKind: "company",
    lat: 19.43,
    lon: -99.13,
    arcEnd: 0.75,
    more: [
      "2010 到 2013 年，地圖由美日移到墨西哥。呢個轉折喺接力展廳會睇到一段完整色帶。",
      "電訊好賺，亦引起過壟斷爭議。大到人人要用，就會有人問價係咪太高。",
    ],
  },
  bezos: {
    origin: "self-made",
    industry: "網店",
    gdpShare: 0.18,
    gdpNote: "2021 年名義約 1,770 億美元，約佔全球產出 0.18%。低過蓋茨 1999 的佔比，高過自己在物價尺上的部分觀感。",
    lifeStyle: "由網上書店到物流帝國。財富幾乎全是股份。個人亦將一部分時間放在太空公司。",
    impact: "購物由街鋪轉到門口的包裹。雲端則令別的公司租用佢的電腦，唔使自己起機房。",
    buying: ["2021 年約 2,150 億今日美元的高峰", "全球包裹網", "向其他公司出租的電腦雲"],
    fateKind: "company",
    lat: 47.6,
    lon: -122.3,
    arcEnd: 0.7,
    more: [
      "亞馬遜主席越过蓋茨，發生喺 2017 同 2018 之間。2017 年蓋茨的通脹後線仍然更高，2018 年年度榜已經係貝佐斯。",
      "2021 年係佢條線的尖。之後馬斯克由下而上穿過。年度榜係快相，年與年之間的線先顯示穿過的過程。",
    ],
  },
  arnault: {
    origin: "mixed",
    industry: "奢侈品",
    gdpShare: 0.2,
    gdpNote: "2023 年名義約 2,110 億美元，約佔全球產出 0.20%。2023、2024 年年度榜第一。",
    lifeStyle: "巴黎的品牌集團。賣的係工藝、名字同稀缺感。家族持股令個人同公司綁在一起。",
    impact: "將多個奢侈品牌收進同一個集團，改變精品行業的擁有權，亦將法國消費品變成全球股價。",
    buying: ["一籃子奢侈品牌", "兩年年度榜首", "家族控股的表決權"],
    fateKind: "company",
    lat: 48.87,
    lon: 2.32,
    arcEnd: 0.8,
    more: [
      "2023 年佢的線高過馬斯克，2025 年又被馬斯克大幅拋離。交叉唔止一次。",
      "手袋同火箭可以輪流第一。行業唔同，尺仍然係股價。",
    ],
  },
  musk: {
    origin: "self-made",
    industry: "電動車",
    gdpShare: 0.76,
    gdpNote: "2026 年 9 月約 9,230 億美元，約佔本館採用的全球名義產出 0.76%。6 月更高的短暫點冇有寫進年線。",
    lifeStyle: "財富綁住電動車同火箭公司的股價。公開生活起伏大，身家亦一日可以跳。",
    impact: "電動車進入主流，商業火箭降低進入太空的價格。兩間公司的估值同時令個人淨值變得極陡。",
    buying: ["2026 年 9 月約全球產出的 0.76%", "電動車公司的大額股權", "太空公司上市前後的估值跳升"],
    fateKind: "company",
    lat: 30.27,
    lon: -97.74,
    arcEnd: 1,
    more: [
      "穿過貝佐斯係 2022 年年度榜。穿過阿爾諾的回馬槍係 2025。2026 年條線陡到要單獨標註，避免一個月的尖峰壓扁所有人。",
      "0.76% 的全球產出已經高過本館給洛克菲勒的 0.40%，亦仍然低過曼薩·穆薩同幾位皇帝的教學佔比。美元圖同佔比圖會講兩個故事。",
    ],
  },
};

export function profile(id: string): Profile {
  const found = PROFILES[id];
  if (!found) throw new Error(`missing profile ${id}`);
  return found;
}

export function peakUsd(person: Tycoon): number {
  if (person.confidence === "forbes") return forbesPeak(person.id).value;
  return person.wealth?.mid ?? 0;
}

export const INDUSTRIES = [
  "海貿",
  "土地",
  "關稅",
  "貢賦",
  "稅收",
  "黃金",
  "貿易",
  "銀行",
  "田賦",
  "運輸",
  "鋼鐵",
  "石油",
  "汽車",
  "地產",
  "軟件",
  "投資",
  "電訊",
  "網店",
  "奢侈品",
  "電動車",
] as const;

export function peopleInIndustry(industry: string): Tycoon[] {
  return Object.entries(PROFILES)
    .filter(([, item]) => item.industry === industry)
    .map(([id]) => byId(id));
}

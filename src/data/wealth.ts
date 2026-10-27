export type Confidence = "forbes" | "records" | "estimate" | "legend";

export type Tycoon = {
  id: string;
  nameZh: string;
  nameEn: string;
  life: string;
  region: string;
  how: string;
  scene: string;
  focus: string;
  confidence: Confidence;
  /** Years we treat this person as the museum's featured fortune. Ancient only. */
  hold?: { from: number; to: number };
  peakYear: number;
  /** Teaching estimate in billions of 2026 US dollars. Forbes names omit this. */
  wealth?: { low: number; mid: number; high: number };
  method: string;
  blurb: string;
  story: string[];
  facts: string[];
  flow: string;
  voice: string;
};

export type ForbesRow = { year: number; id: string; value: number };

/** Forbes annual No.1, inflation-adjusted to 2026 USD billions.
 *  Visual Capitalist (Sept 2026) from Forbes lists. 2026 is a September tracker, not a year-end close.
 */
export const FORBES: ForbesRow[] = [
  { year: 1987, id: "tsutsumi", value: 58 },
  { year: 1988, id: "tsutsumi", value: 53 },
  { year: 1989, id: "tsutsumi", value: 40 },
  { year: 1990, id: "tsutsumi", value: 40 },
  { year: 1991, id: "mori", value: 36 },
  { year: 1992, id: "mori", value: 31 },
  { year: 1993, id: "tsutsumi", value: 21 },
  { year: 1994, id: "tsutsumi", value: 19 },
  { year: 1995, id: "gates", value: 28 },
  { year: 1996, id: "gates", value: 39 },
  { year: 1997, id: "gates", value: 75 },
  { year: 1998, id: "gates", value: 103 },
  { year: 1999, id: "gates", value: 178 },
  { year: 2000, id: "gates", value: 115 },
  { year: 2001, id: "gates", value: 109 },
  { year: 2002, id: "gates", value: 97 },
  { year: 2003, id: "gates", value: 73 },
  { year: 2004, id: "gates", value: 81 },
  { year: 2005, id: "gates", value: 78 },
  { year: 2006, id: "gates", value: 85 },
  { year: 2007, id: "gates", value: 89 },
  { year: 2008, id: "buffett", value: 95 },
  { year: 2009, id: "gates", value: 61 },
  { year: 2010, id: "slim", value: 81 },
  { year: 2011, id: "slim", value: 108 },
  { year: 2012, id: "slim", value: 99 },
  { year: 2013, id: "slim", value: 103 },
  { year: 2014, id: "gates", value: 106 },
  { year: 2015, id: "gates", value: 110 },
  { year: 2016, id: "gates", value: 103 },
  { year: 2017, id: "gates", value: 116 },
  { year: 2018, id: "bezos", value: 147 },
  { year: 2019, id: "bezos", value: 168 },
  { year: 2020, id: "bezos", value: 144 },
  { year: 2021, id: "bezos", value: 215 },
  { year: 2022, id: "musk", value: 246 },
  { year: 2023, id: "arnault", value: 228 },
  { year: 2024, id: "arnault", value: 239 },
  { year: 2025, id: "musk", value: 350 },
  { year: 2026, id: "musk", value: 923 },
];

export const MUSK_JUNE_2026_BILLIONS = 1450;

export const TYCOONS: Tycoon[] = [
  {
    id: "william",
    nameZh: "征服者威廉",
    nameEn: "William I",
    life: "約 1028–1087",
    region: "英格蘭",
    how: "土地同稅",
    scene: "/museum/castle.jpg",
    focus: "50% 45%",
    confidence: "records",
    hold: { from: 1066, to: 1087 },
    peakYear: 1086,
    wealth: { low: 80, mid: 210, high: 350 },
    method:
      "1086 年《末日審判書》記低英格蘭土地。國王控制大約兩成。教學估算係將呢個份額折成今日嘅感覺，唔係一張收據。",
    blurb: "打贏黑斯廷斯之後，叫人將成個英格蘭嘅田同牛都記低。",
    story: [
      "1066 年，諾曼第公爵威廉打贏黑斯廷斯戰役，做咗英倫國王。佢唔係靠一間公司，而係靠土地：邊塊田係邊個嘅，邊個要交稅，全部跟國王。",
      "二十年後佢做咗一件對歷史學家超有用嘅事。1086 年嘅《末日審判書》幾乎將每塊田、每隻牛都寫低。因為有呢本書，我哋先敢估佢『有幾大份』。1026 年嗰陣宋朝好富庶，但皇帝同國庫分不開，所以博物館第一個用數字上台嘅人，係威廉。",
    ],
    facts: [
      "《末日審判書》個名叫人驚，因為調查嚴到好似末日審判。",
      "佢自己大概控制英格蘭錄到嘅土地價值兩成左右。",
      "1026 年佢仲未出世。館用朱羅海貿做估算開場，威廉先係第一個有土地清冊嘅人。",
    ],
    flow: "王位同土地傳俾仔。錢冇變做圖書館，而係留喺王冠入面。",
    voice: "有本書記低田地，先可以講數字。冇書，我哋就留白。",
  },
  {
    id: "genghis",
    nameZh: "成吉思汗",
    nameEn: "Genghis Khan",
    life: "約 1162–1227",
    region: "蒙古草原",
    how: "征服同貢品",
    scene: "/museum/steppe.jpg",
    focus: "55% 40%",
    confidence: "legend",
    hold: { from: 1206, to: 1227 },
    peakYear: 1227,
    wealth: { low: 40, mid: 220, high: 1000 },
    method:
      "有啲網頁將成個蒙古帝國嘅土地當成佢私人存款，數字會去到幾萬億。呢度拒絕咁計。圖上只用一個偏低嘅教學數字，提醒你征服≠銀行戶口。",
    blurb: "將草原部落砌成大帝國。死後用氈布包住，安葬得好簡單。",
    story: [
      "佢本來叫鐵木真。1206 年，各部推佢做成吉思汗。騎兵走到好遠，城市納貢，貿易路線跟住帝國走。",
      "問題係：呢啲係『帝國控制到嘅地方』，定『一個人擁有嘅財產』？佢死後用氈包住，好似普通人咁安葬，冇一座黃金陵墓俾我哋量度。所以呢格展櫃嘅印章係『要小心』。",
    ],
    facts: [
      "名稱成吉思汗，意思近於海洋般嘅統治者。",
      "有傳說話佢嘅墓地到今日都未確認。",
      "網站如果寫幾萬億美元，通常係將成片土地都計入去。",
    ],
    flow: "帝國分俾後人，繼續擴張，然後慢慢裂開。個人財富冇一份清單流傳。",
    voice: "大帝國好震撼。但震撼唔等於我知道佢袋入面有幾多。",
  },
  {
    id: "musa",
    nameZh: "曼薩·穆薩",
    nameEn: "Mansa Musa",
    life: "約 1280–1337",
    region: "馬里帝國",
    how: "黃金同鹽",
    scene: "/museum/caravan.jpg",
    focus: "50% 45%",
    confidence: "estimate",
    hold: { from: 1312, to: 1337 },
    peakYear: 1324,
    wealth: { low: 400, mid: 400, high: 4500 },
    method:
      "科普同雜誌最常引用大約 4,000 億美元（今日購買力嘅講法）。另有估計去到 4.5 萬億。兩種都係推算：馬里控制當時世界好大部份黃金，但冇資產負債表。圖只用常見嗰個 4,000 億，最高猜測寫喺展櫃，唔拿來拉高成條線。",
    blurb: "1324 年朝聖，黃金派到開羅金價大跌。",
    story: [
      "曼薩·穆薩係馬里帝國嘅國王。帝國橫跨西非商路，黃金同鹽都經過佢嘅土地。鹽喺熱地方可以同黃金一樣貴。",
      "1324 年佢去麥加朝聖。駱駝隊好長，沿途派黃金、買嘢、送禮。到開羅，黃金多到金價下跌，傳聞要好多月甚至幾年先恢復。當時經過開羅嘅人有寫低，所以「佢極之有錢」好可信；「恰好值幾多美元」就仍然係估算。",
    ],
    facts: [
      "馬里嘅廷巴克圖後來成為學問同抄本之城。",
      "常見講法約 4,000 億美元；最高猜測可以大十倍。",
      "金價跌，係因為黃金太多，唔係因為黃金突然無用。",
    ],
    flow: "黃金留喺沿途城市同市場。佢一個人嘅慷慨，短暫改寫咗幾個城市嘅物價。",
    voice: "派到金價下跌，呢件事本身就係一個博物館。",
  },
  {
    id: "fugger",
    nameZh: "雅各布·富格爾",
    nameEn: "Jakob Fugger",
    life: "1459–1525",
    region: "奧格斯堡",
    how: "銀行、銅礦、銀礦",
    scene: "/museum/counting.jpg",
    focus: "50% 50%",
    confidence: "records",
    hold: { from: 1510, to: 1525 },
    peakYear: 1525,
    wealth: { low: 200, mid: 400, high: 520 },
    method:
      "佢唔係皇帝，係商人，而且有帳簿。死時財富大約相當於當時歐洲經濟一個可觀份額。史家格雷格·斯坦梅茨寫過佢。折成今日大約幾千億美元呢個量級，仍然係估算，但係古代展櫃入面最『有數得計』之一。",
    blurb: "借錢俾皇帝打仗嘅銀行家。外號『富有嘅雅各布』。",
    story: [
      "富格爾喺今日德國嘅奧格斯堡做銀行同礦業。國王要打仗，就要有人借錢俾佢哋。富格爾借，然後用礦山同貿易收回來。",
      "1525 年佢過身，家族帳簿仲喺。歷史學家可以爭論折算方法，但唔使靠傳說。佢亦都起咗富格爾屋苑，畀窮人住，租金低到今日都仲係象徵式。",
    ],
    facts: [
      "外號 Jakob the Rich，富有嘅雅各布。",
      "佢幫過查理五世籌錢，先選到神聖羅馬皇帝。",
      "富格爾屋苑住戶傳統租金約一歐元一年，仲要為佢一家祈禱。",
    ],
    flow: "一部份變成社會房屋，一路住到廿一世紀。其餘留喺家族生意。",
    voice: "商人都可以富過國王，而且仲留低帳單。我最鍾意呢種展櫃。",
  },
  {
    id: "akbar",
    nameZh: "阿克巴",
    nameEn: "Akbar",
    life: "1542–1605",
    region: "蒙兀兒帝國",
    how: "帝國稅收",
    scene: "/museum/mughal.jpg",
    focus: "50% 40%",
    confidence: "estimate",
    hold: { from: 1556, to: 1605 },
    peakYear: 1600,
    wealth: { low: 100, mid: 280, high: 700 },
    method:
      "蒙兀兒宮廷好富，稅收系統犀利，但皇帝私產同國庫分不開。區間刻意留得闊。數字係教學用，信心低過富格爾。",
    blurb: "將好多王國合成一個大帝國，又請唔同宗教一齊傾偈。",
    story: [
      "阿克巴十幾歲就做皇帝，用咗幾十年將印度北部砌成一個大帝國。宮廷有寶石、絲綢、孔雀同好厲害嘅稅吏。",
      "我哋仍然唔知道『邊一箱係國家、邊一箱係佢自己』。所以呢個數字用闊區間。值得記的唔只係錢：佢開過討論，請唔同信仰嘅人一齊講，想搵共存嘅方法。",
    ],
    facts: [
      "在位由 1556 到 1605 年。",
      "蒙兀兒印度後來佔世界經濟好大一部分，基礎係呢段時間打底。",
      "區間闊，代表我哋真係唔肯定。",
    ],
    flow: "國庫留俾後代皇帝。私人同公共仍然纏住。",
    voice: "孔雀同寶石好耀眼。耀眼嘅時候，更要問：呢箱係邊個嘅？",
  },
  {
    id: "rothschild",
    nameZh: "內森·羅斯柴爾德",
    nameEn: "Nathan Rothschild",
    life: "1777–1836",
    region: "倫敦",
    how: "跨國銀行",
    scene: "/museum/london.jpg",
    focus: "50% 45%",
    confidence: "legend",
    hold: { from: 1815, to: 1836 },
    peakYear: 1820,
    wealth: { low: 80, mid: 180, high: 350 },
    method:
      "羅斯柴爾德家族喺幾個國家都有銀行，借錢俾政府打仗同重建。內森係倫敦嗰房。『滑鐵盧當日靠信鴿賺大錢』呢個故事被人講到好傳奇，史家認為誇大咗。個人身家亦難同成個家族網絡分開。",
    blurb: "歐洲戰爭要借錢，消息快過別人就有優勢。傳說比帳簿走得更遠。",
    story: [
      "十九世紀初，歐洲打完大仗，政府要借好多錢。羅斯柴爾德幾兄弟分佈喺唔同城市，信件同匯票行得快。",
      "後來有個故事話：滑鐵盧戰果一到，內森就喺倫敦債券市場賺到富可敵國。快信網絡係真的，『一日之內騙通成個市場』就係傳說。展櫃將兩樣分開，唔好將傳說背成功課。",
    ],
    facts: [
      "家族由法蘭克福嘅邁耶·阿姆謝爾開始。",
      "內森主要喺倫敦。",
      "信鴿故事當故事聽，唔好當唯一證據。",
    ],
    flow: "財富留喺家族銀行網絡，分散喺幾個國家，唔係一個人鎖喺地窖。",
    voice: "快消息係優勢。但快故事都會跑贏事實，要踩煞車。",
  },
  {
    id: "vanderbilt",
    nameZh: "科尼利厄斯·范德比爾特",
    nameEn: "Cornelius Vanderbilt",
    life: "1794–1877",
    region: "美國",
    how: "渡輪同鐵路",
    scene: "/museum/industry.jpg",
    focus: "50% 62%",
    confidence: "records",
    hold: { from: 1864, to: 1877 },
    peakYear: 1877,
    wealth: { low: 150, mid: 215, high: 280 },
    method:
      "1877 年遺產大約 1 億美元，當時係美國極驚人嘅數字。折成『佔當時經濟幾大』嘅教學估算，大約喺兩千億美元量級。有遺囑同報紙，信心高過古代皇帝。",
    blurb: "外號船長。由一艘渡輪做到鐵路大王。",
    story: [
      "范德比爾特由紐約渡輪做起，對手話佢粗魯，佢就將航線越做越大。中年之後轉去鐵路，將幾條線砌成一個系統。",
      "1877 年過身，遺產大約一億美元。佢在生捐過錢起大學，校名就叫范德比爾特。呢個時代開始有報紙同遺囑，數字唔使再靠駱駝隊嘅傳說。",
    ],
    facts: [
      "細個已經喺港口做船。",
      "死時遺產約 1 億美元（1877 年嘅美元）。",
      "范德比爾特大學個名來自佢嘅捐款。",
    ],
    flow: "大部份傳俾家人，一部份早變成大學。鐵路繼續載人，但擁有權會再轉手。",
    voice: "渡輪、鐵路、大學。錢換咗三次樣。",
  },
  {
    id: "carnegie",
    nameZh: "安德魯·卡內基",
    nameEn: "Andrew Carnegie",
    life: "1835–1919",
    region: "美國，蘇格蘭出世",
    how: "鋼鐵",
    scene: "/museum/library.jpg",
    focus: "50% 45%",
    confidence: "records",
    hold: { from: 1892, to: 1901 },
    peakYear: 1901,
    wealth: { low: 250, mid: 340, high: 400 },
    method:
      "1901 年將卡內基鋼鐵賣俾 J.P. 摩根，作價大約 4.8 億美元，係當時最大私人生意之一。折算常用估計大約 3,000 億美元以上。之後佢刻意將錢捐走，所以高峰係一個尖頂，唔係一條平線。",
    blurb: "賣咗鋼鐵公司，然後起超過二千五百間圖書館。",
    story: [
      "卡內基由蘇格蘭移民去美國，由紗廠童工做到鋼鐵大王。1901 年，佢將公司賣俾銀行家摩根，收大約 4.8 億美元。",
      "然後佢做咗一條同別唔同嘅曲線：將大部分錢捐出，起圖書館、音樂廳、研究基金。佢寫過，死的時候有錢剩係可恥。你同意定唔同意，條線都確實向下流。",
    ],
    facts: [
      "賣盤價約 4.8 億美元（1901 年）。",
      "資助咗大約 2,509 間公共圖書館。",
      "高峰之後身家係跌，因為錢走去公共用途。",
    ],
    flow: "由鋼廠流去書架。到今日都仲有卡內基圖書館。",
    voice: "呢條線最漂亮嘅部份，係佢向下嗰截。",
  },
  {
    id: "rockefeller",
    nameZh: "約翰·洛克菲勒",
    nameEn: "John D. Rockefeller",
    life: "1839–1937",
    region: "美國",
    how: "石油",
    scene: "/museum/industry.jpg",
    focus: "82% 42%",
    confidence: "records",
    hold: { from: 1902, to: 1936 },
    peakYear: 1913,
    wealth: { low: 340, mid: 450, high: 700 },
    method:
      "1913 年左右名義資產大約 9 億美元，大約佔當時美國經濟 1% 到 2%。如果只計物價通脹，數字會細好多；如果計「佔全國經濟幾大」，常見估計由大約 3,400 億去到超過 6,700 億美元。圖用中間偏謹慎嘅 4,500 億。1911 年公司被拆散，但拆開嘅股份後來仲升。",
    blurb: "標準石油最勁時，美國大約九成煉油經過佢。",
    story: [
      "洛克菲勒將煉油、運油、賣油砌成標準石油。最勁嘅時候，美國大約九成煉油同佢有關。1911 年最高法院認為呢個壟斷要拆開。",
      "拆開之後，佢持有嘅股份喺新公司入面繼續增值。用『佔當時美國經濟幾大』嚟睇，佢好可能係有帳簿以嚟最勁嘅美國人之一。放到全球產出入面，就要同後來嘅馬斯克再比一次。晚年大量錢進入基金會，做醫學同教育。",
    ],
    facts: [
      "1913 年名義身家大約 9 億美元。",
      "標準石油被拆成幾間公司，後尾有啲變成今日都聽過嘅能源公司。",
      "只計通脹，會覺得佢細過今日首富；計佔全球產出，佢仍然貼近頂端，但排名會跟你用邊一年、邊種估法。",
    ],
    flow: "反壟斷將一間公司拆開，財富變成分散嘅股份。基金會再將一大截帶走。",
    voice: "同一筆錢，兩把尺，兩個故事。記住帶尺。",
  },
  {
    id: "getty",
    nameZh: "保羅·蓋蒂",
    nameEn: "J. Paul Getty",
    life: "1892–1976",
    region: "美國",
    how: "石油",
    scene: "/museum/tanker.jpg",
    focus: "50% 50%",
    confidence: "estimate",
    hold: { from: 1957, to: 1976 },
    peakYear: 1966,
    wealth: { low: 18, mid: 70, high: 120 },
    method:
      "1950–60 年代《財富》等報道叫佢世界最有錢嘅人之一，名義身家大約十億美元量級。只計通脹，大約一百多億到二百億今日美元。如果問『佔當時世界經濟幾大』，教學中位大約 700 億。圖用呢把尺，所以條線會矮過洛克菲勒。慳儉同藝術館都係真的。",
    blurb: "報紙叫佢世界首富。錢好多，但把尺一換，條線就矮。",
    story: [
      "蓋蒂靠石油合約累積財富。1950 至 70 年代，好多人叫佢世界首富。呢個年代已經有財經記者，所以『佢係榜上嗰個人』比古代可靠。",
      "但係如果你只用通脹，將 1960 年代嘅十億變成今日嘅幾十億，會覺得佢細過蓋茨。如果你問佢佔當時世界幾大份，個感覺又會大啲。佢對錢好緊，同時買大量藝術品。洛杉磯蓋蒂博物館今日公開俾人睇。",
    ],
    facts: [
      "名義上係早期『十億富翁』之一。",
      "藝術收藏後來變成博物館。",
      "條線變矮，先問係世界變窮，定係把尺轉咗。",
    ],
    flow: "一部份藝術品變成公共博物館。石油資產跟公司同市場走。",
    voice: "見到條線突然矮，唔好驚。先睇清楚把尺。",
  },
  {
    id: "rajendra",
    nameZh: "拉真德拉一世",
    nameEn: "Rajendra Chola I",
    life: "約 971–1044",
    region: "朱羅王朝，南印度",
    how: "海貿、田賦、戰利品",
    scene: "/museum/chola.jpg",
    focus: "50% 45%",
    confidence: "estimate",
    hold: { from: 1014, to: 1044 },
    peakYear: 1030,
    wealth: { low: 40, mid: 120, high: 280 },
    method:
      "1026 年左右佢已經在位。艦隊同商船去到東南亞港口，寺廟金庫收田賦同戰利品。冇個人資產負債表。呢個中位係教學估算，用嚟填原本空白嘅開館年份。",
    blurb: "1026 年嘅海上強國。船同寺廟金庫，先至係呢格櫃嘅主角。",
    story: [
      "館由 1026 年開場。嗰陣宋朝開封好繁華，但皇帝同國庫分不開，所以第一個上台嘅估算，係南印度朱羅王朝嘅拉真德拉。佢嘅船隊沿海岸同海峽做貿易，亦打過仗，將戰利品送返寺廟同王庫。",
      "我哋仍然分唔開『王國嘅錢』同『國王袋入面嘅錢』。所以印章係估算。以前呢段係空白走廊，而家用一個有地名、有貿易路線嘅人填上，同時話你知數字唔係收據。",
    ],
    facts: [
      "在位大約 1014 到 1044 年。",
      "朱羅嘅船將香料、珍珠同布運過印度洋。",
      "1026 年係佢在位中段，唔係威廉出世嗰年。",
    ],
    flow: "寺廟同王庫留低石刻同塔。人一走，金庫就變返成個王朝嘅歷史，唔係一份遺囑。",
    voice: "開館唔再望住空牆。但係呢格櫃我仍然會大聲講：估算。",
  },
  {
    id: "manuel",
    nameZh: "曼努埃爾一世",
    nameEn: "Manuel I Komnenos",
    life: "1118–1180",
    region: "君士坦丁堡",
    how: "關稅、絲綢、宮廷",
    scene: "/museum/byzantine.jpg",
    focus: "50% 40%",
    confidence: "estimate",
    hold: { from: 1143, to: 1180 },
    peakYear: 1160,
    wealth: { low: 30, mid: 80, high: 200 },
    method:
      "十二世紀拜占庭仲係歐亞之間嘅關稅站。宮廷好富，但國庫同皇帝分不開，帝國亦已經細過以前。中位刻意保守。",
    blurb: "絲綢同關稅經過金角灣。富係真，私人存款就唔係一本帳。",
    story: [
      "威廉之後、成吉思汗之前，歐洲同西亞並唔係冇富人。曼努埃爾一世喺君士坦丁堡做皇帝，商船經過就要交稅，絲綢同香料喺港口轉手。",
      "宮廷宴會好誇張，所以容易以為佢富可敵全球。當時宋朝同伊斯蘭世界嘅經濟大好多。我哋俾一個偏低嘅教學數字，提醒『宮殿耀眼』唔等於『佔全世界好大份』。",
    ],
    facts: [
      "在位 1143 到 1180 年。",
      "君士坦丁堡係跨洲貿易嘅閘口。",
      "數字偏低，係故意嘅。",
    ],
    flow: "稅收留喺帝國。幾十年後第四次十字軍將城搶過，宮廷財富散入別人手上。",
    voice: "金馬賽克好耀眼。耀眼唔係一把尺。",
  },
  {
    id: "kublai",
    nameZh: "忽必烈",
    nameEn: "Kublai Khan",
    life: "1215–1294",
    region: "元大都",
    how: "稅收、絲路、紙鈔",
    scene: "/museum/yuan.jpg",
    focus: "48% 42%",
    confidence: "estimate",
    hold: { from: 1260, to: 1294 },
    peakYear: 1290,
    wealth: { low: 80, mid: 240, high: 600 },
    method:
      "元朝控制當時全球產出好大一塊，又發行紙鈔。皇帝可動用嘅稅收好巨大，但唔等於私人銀行戶口。中位係『可動用稅收』嘅教學讀數，另有一條國力佔比，唔好混埋。",
    blurb: "紙鈔、運河同絲路都經過大都。國力好大，口袋就另一回事。",
    story: [
      "成吉思汗打出一個大帝國，佢孫忽必烈將重心搬到中原，建元大都，開通運河，沿絲路收稅。馬可·波羅嘅遊記將宮廷寫到閃閃發光。遊記當故事聽，稅收系統就係真的。",
      "中國嗰陣佔世界經濟好大份。如果有人將成個國家當成佢私人存款，數字會荒唐。呢度分開兩條：一條係個人或宮廷可動用財富嘅估算，一條係國家佔全球產出。第二條大好多，而且唔屬於一個人。",
    ],
    facts: [
      "1260 年稱汗，1271 年建元朝。",
      "紙鈔通行，係一種全國性嘅金錢實驗。",
      "國力佔比同身家佔比，展廳會分兩條柱。",
    ],
    flow: "帝國同紙鈔制度留俾後代皇帝。個人清單冇留低。",
    voice: "國家好大，唔好順手將個國家寫進佢存摺。",
  },
  {
    id: "shen",
    nameZh: "沈萬三",
    nameEn: "Shen Wansan",
    life: "元末明初，生卒傳說多",
    region: "蘇州",
    how: "貿易同田產",
    scene: "/museum/suzhou.jpg",
    focus: "50% 55%",
    confidence: "legend",
    hold: { from: 1360, to: 1394 },
    peakYear: 1375,
    wealth: { low: 8, mid: 36, high: 150 },
    method:
      "民間話佢富可敵國，正史細節唔齊。我哋用一個偏低區間填元末明初嘅空白，印章係『要小心』。重點係財富可以被抄走。",
    blurb: "蘇州傳說中的首富。故事的高潮，係錢可以一夕被抄。",
    story: [
      "沈萬三係蘇州一帶嘅商人傳說：船、田、舖，富到明太祖起南京城都有故事話佢出錢。邊啲係真捐獻，邊啲係說書人加鹽，歷史學家到今日都爭。",
      "結局喺教學上好清楚。新王朝唔放心太有錢又唔受控嘅人，家產被抄，人被流放。所以呢格櫃唔係為咗證明佢係世界第一，而係填一段空白，同時記住：冇制度保護，紙上巨富可以變零。",
    ],
    facts: [
      "事蹟混雜傳說，生卒年都唔穩。",
      "『富可敵國』四個字，往往係誇張。",
      "抄家，就係呢條線嘅結局。",
    ],
    flow: "家產充公，人被流放。錢由私人故事變返成國家權力嘅示範。",
    voice: "我寧願展一個結局悽慘、數字含糊嘅人，都唔好再留一面空牆。",
  },
  {
    id: "medici",
    nameZh: "科西莫·德·美第奇",
    nameEn: "Cosimo de' Medici",
    life: "1389–1464",
    region: "佛羅倫斯",
    how: "銀行同羊毛",
    scene: "/museum/florence.jpg",
    focus: "62% 48%",
    confidence: "records",
    hold: { from: 1434, to: 1464 },
    peakYear: 1457,
    wealth: { low: 25, mid: 70, high: 160 },
    method:
      "美第奇銀行有分行帳、有信。佢係城邦銀行家，唔係皇帝。折成今日仍然係估算，但信心高過純傳說。高峰用佢實際掌政晩年。",
    blurb: "羊毛同分行帳簿，砌出一個城邦最有錢的銀行家。",
    story: [
      "科西莫唔使加冕。佢嘅家族做羊毛同銀行，分行去到羅馬同其他城市，借錢俾教皇同王公。1434 年之後，佢實際上主導佛羅倫斯，頭銜仍然係市民。",
      "帳簿令呢格櫃穩陣過沈萬三。但一間家族銀行會擴張，亦會喺後代手上出事。錢嘅故事唔停喺『好有錢』，而係停喺『邊個信你、邊個欠你』。",
    ],
    facts: [
      "1389 年出世，1464 年過身。",
      "銀行分行係佢哋嘅秘密武器。",
      "後代出過教皇同托斯卡納大公，中間亦有破產危機。",
    ],
    flow: "一部分變成禮拜堂同藝術委託，一部分留喺銀行。家族名聲比某一本帳留得更長。",
    voice: "有信、有分行、有羊毛。呢種富豪我數得落手。",
  },
  {
    id: "atahualpa",
    nameZh: "阿塔瓦爾帕",
    nameEn: "Atahualpa",
    life: "約 1502–1533",
    region: "印加帝國",
    how: "一筆黃金贖金",
    scene: "/museum/inca.jpg",
    focus: "50% 60%",
    confidence: "estimate",
    hold: { from: 1532, to: 1533 },
    peakYear: 1532,
    wealth: { low: 4, mid: 22, high: 80 },
    method:
      "1532 年一間石室裝滿黃金同白銀做贖金。呢個係一筆支付，唔係一生資產。折算範圍好闊，因為金銀重量同購買力都有爭議。",
    blurb: "一個房間的黃金，係贖金，唔係存摺。而且佢冇留住。",
    story: [
      "阿塔瓦爾帕係印加帝國內戰之後嘅統治者。西班牙人捉住佢，佢承諾用黃金填滿一間房、白銀填滿另一間，換自己自由。金屬運到，人仍然被處死。",
      "所以高峰只有 1532 前後。將『一個房間』講成『人類史上最有錢』會跳步：呢筆係帝國攞得出嘅戰時支付，唔係佢個人嘅長期身家，最後亦唔屬於佢。",
    ],
    facts: [
      "贖金發生喺 1532 到 1533 年。",
      "黃金去咗西班牙人手上，再流入歐洲。",
      "一筆流量，唔好畫成一條好長嘅存量。",
    ],
    flow: "人被處死。金屬去歐洲，變成別人嘅錢同通脹。",
    voice: "房入面滿到天花板，都唔代表個主人帶得走。",
  },
  {
    id: "aurangzeb",
    nameZh: "奧朗則布",
    nameEn: "Aurangzeb",
    life: "1618–1707",
    region: "蒙兀兒帝國",
    how: "帝國田賦",
    scene: "/museum/mughal.jpg",
    focus: "30% 40%",
    confidence: "estimate",
    hold: { from: 1658, to: 1707 },
    peakYear: 1690,
    wealth: { low: 100, mid: 260, high: 700 },
    method:
      "蒙兀兒喺佢在位時，帝國產出大約佔全世界兩成上下。田賦機器好厲害。個人可動用財富用一個遠低於『成個帝國』嘅教學佔比，國力另計。",
    blurb: "帝國好大，稅簿好厚。個人身家只准佔其中一截。",
    story: [
      "阿克巴打好基礎，奧朗則布將帝國推向領土最廣嘅一段。田賦、紡織同貿易令印度成為當時世界經濟的重心之一。呢份『大』首先係國力。",
      "如果將兩成全球產出寫成佢私人淨值，就係教學事故。展櫃用一條矮啲嘅個人估算，再喺『全球占比』展廳用空心柱顯示成個帝國。兩條都要睇，先唔好被人用一條柱嚇到。",
    ],
    facts: [
      "在位 1658 到 1707 年。",
      "帝國佔全球產出嘅估算，遠高過個人身家估算。",
      "佢死後帝國慢慢裂開，稅基亦散。",
    ],
    flow: "國庫同王位一齊傳。個人遺囑解釋唔到成個經濟體。",
    voice: "空心嗰條柱先係國家。實心嗰條先准叫身家。",
  },
  {
    id: "qianlong",
    nameZh: "乾隆皇帝",
    nameEn: "Qianlong Emperor",
    life: "1711–1799",
    region: "清帝國",
    how: "田賦同皇家工坊",
    scene: "/museum/qing.jpg",
    focus: "50% 40%",
    confidence: "estimate",
    hold: { from: 1735, to: 1796 },
    peakYear: 1785,
    wealth: { low: 90, mid: 240, high: 800 },
    method:
      "十八世紀中國大約佔全球產出三成左右，呢個係國力，唔係私產。乾隆可動用內務府同國庫，教學上只取一個低好多嘅個人讀數，並另列國力。",
    blurb: "瓷器、絲綢同遠征都好貴。三成全球產出係國家，唔係皇帝存摺。",
    story: [
      "乾隆在位六十年，清帝國人口同田賦都去到一個高峰。景德鎮嘅瓷器、江南織造、宮廷收藏，容易俾人寫成『最有錢的人』。",
      "麥迪森一類嘅長期估算話，十九世紀初中國經濟大約係全世界三成。呢個數字好震撼，亦最易被濫用。三成係農夫、工匠、商人一齊做出嚟嘅產出。皇帝可以抽稅、可以打仗、可以收藏，但抽得到嘅係一截，唔係全部。",
    ],
    facts: [
      "1735 到 1796 年在位，之後又做太上皇。",
      "國力佔比用大約三成做教學讀數。",
      "個人估算故意遠低過國力。",
    ],
    flow: "內務府同國庫留喺王朝。唔會變成一份可以上市嘅私人股權。",
    voice: "見到三成，先問：三成邊個嘅？",
  },
  {
    id: "howqua",
    nameZh: "伍秉鑑",
    nameEn: "Howqua",
    life: "1769–1843",
    region: "廣州",
    how: "行商、茶葉、外貿",
    scene: "/museum/canton.jpg",
    focus: "50% 48%",
    confidence: "records",
    hold: { from: 1830, to: 1843 },
    peakYear: 1834,
    wealth: { low: 1, mid: 22, high: 70 },
    method:
      "行商伍秉鑑喺 1830 年代被同代人估過大約二千六百萬銀元。只計物價，折到今日只係十億美元以下呢個量級，所以低估計好低。中位先用『佔當時經濟』嘅教學感覺稍為抬高。佢係商人，有同代記載，唔係皇帝傳說。",
    blurb: "廣州十三行的茶葉商人。同代人已經叫佢世界級有錢。",
    story: [
      "伍秉鑑係廣州十三行嘅怡和行商，外號 Howqua。茶葉、絲綢同瓷器經珠江運上外國船。美國商人寫低佢極之有錢，有人話佢係當時世界上最富的平民。",
      "二千六百萬銀元聽落天文，一折物價又會變得『只係』今日的億級，因為成個世界經濟細好多。同一港口後來捲入鴉片同戰爭。伍秉鑑係行商，要向官府負責，亦要同外商結帳。佢解釋唔到成場戰爭，但解釋到：全球貿易一接通，一個城市的商人可以富過好遠地方嘅貴族。",
    ],
    facts: [
      "1769 年出世，1843 年過身。",
      "同代估算大約二千六百萬銀元。",
      "低估計係物價尺，中位先係經濟感覺尺。兩條差好遠。",
    ],
    flow: "行商家族的資本跟貿易同戰亂走。一部分後人同買辦網絡繼續做生意，光環唔再係『世界第一平民』。",
    voice: "廣州有個商人，數得落手。我好想你停喺呢一站。",
  },
  {
    id: "ford",
    nameZh: "亨利·福特",
    nameEn: "Henry Ford",
    life: "1863–1947",
    region: "美國",
    how: "汽車同流水線",
    scene: "/museum/ford.jpg",
    focus: "50% 55%",
    confidence: "records",
    hold: { from: 1918, to: 1945 },
    peakYear: 1925,
    wealth: { low: 30, mid: 90, high: 180 },
    method:
      "1920 年代福特汽車令佢成為世界級工業富豪，名義身家十億美元量級。只計通脹會係幾百億今日美元以下；佔當時經濟嘅教學中位大約 900 億。有公司帳同報紙。",
    blurb: "流水線令汽車變平。老闆就變成新一種巨富。",
    story: [
      "福特將汽車造成普通工人都有機會買的產品。流水線令每一架車的時間縮短，工廠變得巨大。1920 年代，好多人將佢同洛克菲勒放在同一句『最有錢』入面。",
      "巨富唔等於工廠裡的人都滿意。佢提高過日薪，亦長期同工會衝突。呢格櫃放喺洛克菲勒同蓋蒂中間，係因為空白的二十年其實有一個好清楚的工業名字，唔使留白。",
    ],
    facts: [
      "T 型車令汽車進入更多家庭。",
      "高峰大約喺 1920 年代。",
      "工廠好大，勞資衝突亦好大。",
    ],
    flow: "公司股權留喺家族同基金會。汽車生產的方法留喺全世界的工廠。",
    voice: "流水線係一種賺法，亦係一種生活。兩樣都要講。",
  },
  {
    id: "tsutsumi",
    nameZh: "堤義明",
    nameEn: "Yoshiaki Tsutsumi",
    life: "1934 年出世",
    region: "日本",
    how: "鐵路同土地",
    scene: "/museum/neon.jpg",
    focus: "50% 45%",
    confidence: "forbes",
    peakYear: 1987,
    method:
      "1987 至 1990、1993 至 1994 年福布斯年度榜首。金額已用美國 CPI 折成 2026 年美元。日本地產泡沫令土地帳面價值極高。",
    blurb: "泡沫時代的土地，令帳面身家升到世界第一，爆破就縮。",
    story: [
      "堤義明掌控西武鐵路同大量土地。1980 年代末，日本地價升到好誇張，福布斯連續幾年將佢列第一。1987 年折成今日大約 580 億美元。",
      "泡沫一破，紙上財富縮得很快。1991、1992 年榜首短暫換成森泰吉郎，然後堤又回到榜上，但數字已經細咗。2000 年代佢因公司證券違規被判罪，首富光環結束。",
    ],
    facts: [
      "1987 年約 580 億美元（2026 年物價）。",
      "1994 年只剩大約 190 億，仍然係嗰年第一。",
      "地價可以升得快，亦可以跌得更快。",
    ],
    flow: "泡沫將土地『紙面價值』吹大，爆破將佢吹返細。後來法律問題再拿走光環。",
    voice: "帳面好大，唔等於鎖喺櫃入面。泡沫係空氣。",
  },
  {
    id: "mori",
    nameZh: "森泰吉郎",
    nameEn: "Taikichiro Mori",
    life: "1904–1993",
    region: "日本",
    how: "東京地產",
    scene: "/museum/neon.jpg",
    focus: "70% 30%",
    confidence: "forbes",
    peakYear: 1991,
    method: "1991 同 1992 年福布斯年度榜首，CPI 折成 2026 年美元。森大廈係東京地標背後嘅地產公司。同堤義明共用一幅泡沫東京壁畫。",
    blurb: "兩年榜首。東京高樓後面嘅另一張泡沫面孔。",
    story: [
      "森泰吉郎將森大廈做成東京重要地產商。1991 年福布斯將佢列世界第一，大約 360 億今日美元；1992 年大約 310 億。",
      "佢 1993 年過身。土地故事同堤義明一樣：泡沫令數字靚，但靚法唔穩定。仔森稔繼續起高樓，財富同榜首唔再係同一件事。",
    ],
    facts: [
      "只坐咗兩年年度榜首。",
      "1991 年約 360 億美元（2026 年物價）。",
      "壁畫同堤義明共用，因為係同一個泡沫。",
    ],
    flow: "地產留喺公司同後人。榜首位置兩年後就交還。",
    voice: "兩年已經夠寫一張展板。久不久，唔係唯一標準。",
  },
  {
    id: "gates",
    nameZh: "比爾·蓋茨",
    nameEn: "Bill Gates",
    life: "1955 年出世",
    region: "美國",
    how: "軟件",
    scene: "/museum/modern.jpg",
    focus: "12% 58%",
    confidence: "forbes",
    peakYear: 1999,
    method:
      "福布斯年度榜：1995–2007、2009、2014–2017 年第一，共 18 次，係 1987 年以嚟最多。金額為 CPI 折成 2026 年美元。1999 年名義上第一次有人突破 1,000 億美元。",
    blurb: "2003 年仍然係佢。高峰喺 1999，大約 1,780 億今日美元。",
    story: [
      "蓋茨同保羅·艾倫創辦微軟，個人電腦要嘅軟件令公司價值一路升。由 1995 年到 2007 年，福布斯年度榜幾乎每年都係佢。1999 年折成今日大約 1,780 億美元，係佢嘅尖頂。",
      "你記得嘅 2003 年，榜首仍然係佢，但網絡泡沫爆破之後，由高位回落到大約 730 億今日美元。2016 年 9 月，西班牙服裝商人阿曼西奧·奧爾特加曾經短暫超前幾日，嗰年年度榜仍係蓋茨。之後大量財富進入蓋茨基金會，做全球健康同教育。",
    ],
    facts: [
      "1987 年以嚟 18 個年度榜第一。",
      "1999 年約 1,780 億；2003 年約 730 億（都係 2026 年美元）。",
      "奧爾特加 2016 年只係短暫超前，唔算年度冠軍。",
    ],
    flow: "股價先升後回。然後基金會將一大截帶去疫苗、學校同農業。",
    voice: "2003 年係佢，但已經唔係最高嗰一年。冠軍同高峰可以唔同日。",
  },
  {
    id: "buffett",
    nameZh: "沃倫·巴菲特",
    nameEn: "Warren Buffett",
    life: "1930 年出世",
    region: "美國",
    how: "長線投資",
    scene: "/museum/porch.jpg",
    focus: "50% 50%",
    confidence: "forbes",
    peakYear: 2008,
    method: "2008 年福布斯年度榜首，CPI 折成 2026 年美元約 950 億。金融海嘯裡，好多人身家縮得比佢快。",
    blurb: "2008 年海嘯之年，長線投資者短暫坐上第一。",
    story: [
      "巴菲特喺奧馬哈用幾十年買『自己明白嘅公司』，然後等。佢唔靠一間新科技公司一日爆紅，而係靠複利同耐性。",
      "2008 年金融海嘯，福布斯年度榜首換成佢，大約 950 億今日美元。第二年又變返蓋茨。榜首可以好短，方法可以好長。",
    ],
    facts: [
      "年度冠軍只有 2008 這一年。",
      "約 950 億美元（2026 年物價）。",
      "口訣可以記：買你明白嘅，然後等。",
    ],
    flow: "財富大部分仍然係公司股份。佢承諾將絕大部分捐走，流向基金會。",
    voice: "海嘯年做到第一，係因為別人跌得更急。",
  },
  {
    id: "slim",
    nameZh: "卡洛斯·斯利姆",
    nameEn: "Carlos Slim",
    life: "1940 年出世",
    region: "墨西哥",
    how: "電訊同集團",
    scene: "/museum/towers.jpg",
    focus: "55% 40%",
    confidence: "forbes",
    peakYear: 2011,
    method: "2010–2013 年福布斯年度榜首。主要係美洲電訊同集團生意。CPI 折成 2026 年美元。",
    blurb: "拉丁美洲第一次有人連續幾年做世界年度首富。",
    story: [
      "斯利姆喺墨西哥建立電訊同好多行業嘅集團。電話線同手機網絡，變成一個國家日常要用嘅資產。",
      "2010 到 2013 年，福布斯年度榜都係佢。最高大約 2011 年 1,080 億今日美元。之前世界第一長期集中喺美國同日本，呢幾年地圖移咗去墨西哥。",
    ],
    facts: [
      "連續四個年度榜（2010–2013）。",
      "2011 年約 1,080 億美元（2026 年物價）。",
      "電訊係『人人要用』嘅生意，所以可以好大。",
    ],
    flow: "財富留喺電訊同集團股份，跟住拉丁美洲嘅電話網絡。",
    voice: "地圖終於唔再只係美日兩邊跳。",
  },
  {
    id: "bezos",
    nameZh: "傑夫·貝索斯",
    nameEn: "Jeff Bezos",
    life: "1964 年出世",
    region: "美國",
    how: "網店同雲端",
    scene: "/museum/modern.jpg",
    focus: "42% 68%",
    confidence: "forbes",
    peakYear: 2021,
    method: "2018–2021 年福布斯年度榜首。2021 年約 2,150 億今日美元。年中同馬斯克有過幾次交換，年度榜仍按公佈嗰刻。",
    blurb: "由網上賣書，到包裹如河流，再到出租電腦雲。",
    story: [
      "貝索斯創辦亞馬遜，最初網上賣書，後來幾乎咩都賣，又將公司嘅電腦系統租俾別人，叫做雲端。",
      "2018 到 2021 年嘅年度榜係佢。2021 年約 2,150 億今日美元，係呢段嘅尖。榜與榜之間，冠軍曾經同馬斯克來回換。年度榜係一張快相，唔係全年每一日。",
    ],
    facts: [
      "四個年度榜第一。",
      "2021 年約 2,150 億美元（2026 年物價）。",
      "包裹同雲端，係兩種唔同嘅賺錢方法。",
    ],
    flow: "股價上落會搬走一大截。公司繼續送貨，財富跟股份比例走。",
    voice: "快相同全日，唔好當成同一件事。",
  },
  {
    id: "arnault",
    nameZh: "貝爾納·阿爾諾",
    nameEn: "Bernard Arnault",
    life: "1949 年出世",
    region: "法國",
    how: "奢侈品牌",
    scene: "/museum/modern.jpg",
    focus: "70% 55%",
    confidence: "forbes",
    peakYear: 2024,
    method: "2023 同 2024 年福布斯年度榜首，LVMH 旗下有多個奢侈品牌。2024 年約 2,390 億今日美元。年內同馬斯克多次交換位置。",
    blurb: "手袋、酒同時裝加埋，2023、2024 年坐上年度第一。",
    story: [
      "阿爾諾帶領 LVMH，將好多奢侈品牌放喺同一個集團。賣嘅唔只係物料，仲有名字同手工嘅感覺。",
      "2023 同 2024 年福布斯年度榜係佢同家族。2024 年約 2,390 億今日美元。2022 年底到 2024 年中，冠軍喺佢同馬斯克之間換過好幾次。奢侈品同火箭，可以輪流領先。",
    ],
    facts: [
      "法國人，總部故事喺巴黎。",
      "2024 年約 2,390 億美元（2026 年物價）。",
      "年度榜兩年，日榜就熱鬧得多。",
    ],
    flow: "財富跟奢侈品股份同家族持股。品牌留喺舖頭，股價留喺市場。",
    voice: "火箭同手袋輪流做第一，已經好好睇。",
  },
  {
    id: "musk",
    nameZh: "伊隆·馬斯克",
    nameEn: "Elon Musk",
    life: "1971 年出世",
    region: "美國，南非出世",
    how: "電動車同太空公司",
    scene: "/museum/modern.jpg",
    focus: "96% 42%",
    confidence: "forbes",
    peakYear: 2026,
    method:
      "2022、2025 同 2026 年福布斯年度或即時榜首。2026 年 9 月即時估算約 9,230 億美元（2026 年物價）。同年 6 月曾短暫約 1.45 萬億，其後回落。10 月公開資料仍將佢列為在任世界首富。財富主要跟太空公司同電動車公司股價。",
    blurb: "2026 年的在任首富。6 月曾衝上萬億，9 月回落到大約 9,230 億。",
    story: [
      "馬斯克嘅財富主要綁住兩間公司嘅股價：做電動車嗰間，同做火箭嗰間。股價一跳，身家就跳，所以條線比以前任何一位福布斯冠軍都陡。",
      "2026 年 6 月，同太空公司上市有關嘅股價，令福布斯短暫將佢估到大約 1.45 萬億美元，係第一個被核實越過 1 萬億嘅人。9 月即時估算回落到大約 9,230 億。2025 年 9 月 10 日，拉里·埃里森曾經極短暫領先，同日又換返。到 2026 年 10 月，公開榜仍然係馬斯克。呢個數字係股份，唔係一個唔會變嘅銀行存款。",
    ],
    facts: [
      "2026 年 9 月約 9,230 億美元。",
      "2026 年 6 月短暫約 1.45 萬億，之後回落。",
      "埃里森 2025 年 9 月 10 日只係同日級別嘅閃電客串。",
    ],
    flow: "幾乎全部跟股價。升得陡，就可以跌得陡。錢未鎖死。",
    voice: "而家這一位。記住個『而家』，因為股價唔使問你同意先跳。",
  },
];

export const CONFIDENCE_LABEL: Record<Confidence, string> = {
  forbes: "福布斯實測",
  records: "有帳簿",
  estimate: "歷史估算",
  legend: "要小心",
};

const AXIS_BREAK = 1987;
const AXIS_LEFT = 44;

export function yearToX(year: number): number {
  if (year <= AXIS_BREAK) {
    return ((year - 1026) / (AXIS_BREAK - 1026)) * AXIS_LEFT;
  }
  return AXIS_LEFT + ((year - AXIS_BREAK) / (2026 - AXIS_BREAK)) * (100 - AXIS_LEFT);
}

export function byId(id: string): Tycoon {
  const found = TYCOONS.find((t) => t.id === id);
  if (!found) throw new Error(`unknown tycoon ${id}`);
  return found;
}

export function orderYear(t: Tycoon): number {
  if (t.hold) return t.hold.from;
  const years = FORBES.filter((r) => r.id === t.id).map((r) => r.year);
  return Math.min(...years);
}

export function orderedTycoons(): Tycoon[] {
  return [...TYCOONS].sort((a, b) => orderYear(a) - orderYear(b) || a.peakYear - b.peakYear);
}

export function forbesRows(id: string): ForbesRow[] {
  return FORBES.filter((r) => r.id === id);
}

export function forbesPeak(id: string): ForbesRow {
  return forbesRows(id).reduce((best, row) => (row.value > best.value ? row : best));
}

export function formatUsdBillions(billions: number): string {
  const yi = Math.abs(billions) * 10;
  if (yi >= 10000) {
    const wan = yi / 10000;
    const text = wan >= 10 ? String(Math.round(wan)) : trimNum(wan);
    return `${text} 萬億美元`;
  }
  return `${Math.round(yi).toLocaleString("zh-HK")} 億美元`;
}

export function formatUsdShort(billions: number): string {
  if (billions >= 1000) return `$${trimNum(billions / 1000)}T`;
  return `$${Math.round(billions).toLocaleString("en-US")}B`;
}

function trimNum(n: number): string {
  return n.toFixed(2).replace(/\.?0+$/, "");
}

export type SceneKind = "prologue" | "gap" | "estimate" | "forbes";

export type Scene = {
  year: number;
  id: string | null;
  title: string;
  detail: string;
  value: number | null;
  kind: SceneKind;
  prev: Tycoon | null;
  next: Tycoon | null;
};

export function stationYears(): number[] {
  const years = new Set<number>();
  for (const person of TYCOONS) {
    if (person.peakYear < 1987) years.add(person.peakYear);
  }
  for (const row of FORBES) years.add(row.year);
  return [...years].sort((a, b) => a - b);
}

export function snapYear(year: number): number {
  const years = stationYears();
  let best = years[0] ?? year;
  let bestDist = Infinity;
  for (const candidate of years) {
    const dist = Math.abs(candidate - year);
    if (dist < bestDist) {
      best = candidate;
      bestDist = dist;
    }
  }
  return best;
}

function ancientDetail(person: Tycoon): string {
  if (person.confidence === "records") return "有帳簿或清冊。圖上仍然係教學折算。中間冇展品嘅年份已經跳過。";
  if (person.confidence === "legend") return "傳說多過清單。數字係教學估算，用嚟填一段原本空白嘅走廊。";
  return "教學估算，用嚟填原本留白嘅年份。唔係該年銀行月結單。";
}

export function sceneAt(year: number): Scene {
  if (year >= 1987) {
    const row = FORBES.find((item) => item.year === year) ?? FORBES[FORBES.length - 1];
    const person = byId(row.id);
    return {
      year: row.year,
      id: person.id,
      title: person.nameZh,
      detail: `${row.year} 年福布斯年度榜首，已折成 2026 年美元。榜係一張快相。`,
      value: row.value,
      kind: "forbes",
      prev: null,
      next: null,
    };
  }

  const ancient = TYCOONS.filter((person) => person.wealth && person.peakYear < 1987);
  const exact = ancient.find((person) => person.peakYear === year);
  const hit =
    exact ??
    ancient.reduce((best, person) =>
      Math.abs(person.peakYear - year) < Math.abs(best.peakYear - year) ? person : best,
    );
  return {
    year: hit.peakYear,
    id: hit.id,
    title: hit.nameZh,
    detail: ancientDetail(hit),
    value: hit.wealth!.mid,
    kind: "estimate",
    prev: null,
    next: null,
  };
}

export type ChartRow = {
  x: number;
  year: number;
  story: number | null;
  live: number | null;
  id: string;
  name: string;
  kind: "estimate" | "forbes";
};

export function chartRows(revealThrough: number): ChartRow[] {
  const story = TYCOONS.filter((t) => t.wealth).map((t) => ({
    x: yearToX(t.peakYear),
    year: t.peakYear,
    story: t.wealth!.mid,
    live: null,
    id: t.id,
    name: t.nameZh,
    kind: "estimate" as const,
  }));
  const live = FORBES.filter((r) => r.year <= revealThrough).map((r) => ({
    x: yearToX(r.year),
    year: r.year,
    story: null,
    live: r.value,
    id: r.id,
    name: byId(r.id).nameZh,
    kind: "forbes" as const,
  }));
  return [...story, ...live].sort((a, b) => a.x - b.x || a.year - b.year);
}

export const QUIZ = [
  {
    q: "1324 年，邊個去麥加朝聖，沿途派黃金，派到開羅金價大跌？",
    choices: ["征服者威廉", "曼薩·穆薩", "雅各布·富格爾", "阿克巴"],
    answer: 1,
    why: "曼薩·穆薩。黃金多到影響物價。但『恰好幾多美元』到今日都仲係估算。",
  },
  {
    q: "2003 年，福布斯嗰年嘅世界首富係邊個？",
    choices: ["伊隆·馬斯克", "卡洛斯·斯利姆", "比爾·蓋茨", "沃倫·巴菲特"],
    answer: 2,
    why: "比爾·蓋茨。折成 2026 年美元大約 730 億。佢更高嘅一年係 1999，大約 1,780 億。",
  },
  {
    q: "邊個賣咗鋼鐵公司之後，將大部分錢用來起圖書館？",
    choices: ["洛克菲勒", "卡內基", "范德比爾特", "蓋蒂"],
    answer: 1,
    why: "卡內基。大約 2,509 間公共圖書館。所以佢條線係尖頂，然後向下流。",
  },
  {
    q: "點解 1987 年之前嘅數字，博物館要印『估算』？",
    choices: [
      "因為古代已經有福布斯，只係網站壞咗",
      "因為皇帝國王嘅錢經常同國庫混埋，又冇現代會計",
      "因為美元由 1026 年已經每日報價",
      "因為首富一定唔可以係國王",
    ],
    answer: 1,
    why: "國庫同私產分不開，又冇統一榜。有帳簿嘅（好似富格爾）會穩陣啲，但仍然要講方法。",
  },
  {
    q: "2026 年 6 月馬斯克曾被估超過 1 萬億，9 月又回落到大約 9,230 億。呢件事教邊樣？",
    choices: [
      "身家跟股價走，可以好快升，亦可以好快回",
      "佢將所有錢存入一個永遠不變嘅戶口",
      "古代估算一定準過福布斯",
      "世界首富一年只可以換一次",
    ],
    answer: 0,
    why: "股份一日可以跳。萬億係一個短暫高位，唔係鎖死嘅存款。10 月榜上仍然係佢。",
  },
  {
    q: "同一個人，點解『2026 年美元』同『佔全球產出』兩張圖會排到唔同位置？",
    choices: [
      "因為兩把尺問嘅問題唔同：一份係物價，一份係當時經濟有幾大",
      "因為古代美元每日都有報價",
      "因為全球產出就係一個人嘅身家",
      "因為福布斯唔計算美國人",
    ],
    answer: 0,
    why: "物價尺會令舊錢睇落細。佔產出會令大帝國時代嘅人重新變高。兩張圖都要留低。",
  },
] as const;

export const JUMPS = [
  { year: 1030, label: "1030 朱羅" },
  { year: 1324, label: "1324 穆薩" },
  { year: 1525, label: "1525 富格爾" },
  { year: 1834, label: "1834 伍秉鑑" },
  { year: 1913, label: "1913 洛克菲勒" },
  { year: 1999, label: "1999 蓋茨" },
  { year: 2018, label: "2018 貝佐斯" },
  { year: 2026, label: "2026 馬斯克" },
] as const;

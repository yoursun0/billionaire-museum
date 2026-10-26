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
      "1026 年佢仲未出世。館由呢一年開場，係為咗講『有世界，未有個人榜』。",
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
      "拆開之後，佢持有嘅股份喺新公司入面繼續增值。用『佔當時經濟幾大』嚟睇，佢好可能係現代有帳簿以嚟最勁嘅私人富豪。晚年大量錢進入基金會，做醫學同教育。",
    ],
    facts: [
      "1913 年名義身家大約 9 億美元。",
      "標準石油被拆成幾間公司，後尾有啲變成今日都聽過嘅能源公司。",
      "只計通脹，會覺得佢『冇今日首富咁有錢』；計佔經濟比例，結論相反。",
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

export function sceneAt(year: number): Scene {
  const ancient = TYCOONS.filter((t) => t.hold);
  const prev = [...ancient].reverse().find((t) => t.hold!.to < year) ?? null;
  const next = ancient.find((t) => t.hold!.from > year) ?? null;

  if (year < 1066) {
    return {
      year,
      id: null,
      title: "序廳 · 仲未有個人榜",
      detail:
        "宋仁宗在位，開封係當時最繁華嘅城市之一。皇帝同國庫分不開，我哋寧願由 1066 年先開始數。",
      value: null,
      kind: "prologue",
      prev: null,
      next: ancient[0] ?? null,
    };
  }

  if (year >= 1987) {
    const row = FORBES.find((r) => r.year === year) ?? FORBES[FORBES.length - 1];
    const t = byId(row.id);
    return {
      year,
      id: t.id,
      title: t.nameZh,
      detail: `${year} 年福布斯年度榜首，已折成 2026 年美元。榜係一張快相。`,
      value: row.value,
      kind: "forbes",
      prev: null,
      next: null,
    };
  }

  const hit = ancient.find((t) => year >= t.hold!.from && year <= t.hold!.to);
  if (hit?.wealth) {
    return {
      year,
      id: hit.id,
      title: hit.nameZh,
      detail: "教學估算。呢個係佢呢段時期嘅代表數字，唔係該年銀行月結單。",
      value: hit.wealth.mid,
      kind: "estimate",
      prev: null,
      next: null,
    };
  }

  return {
    year,
    id: null,
    title: "空白走廊",
    detail: "呢段年份一定有好有錢嘅皇帝同商人。我哋搵唔到夠清楚嘅個人身家，所以留白，唔發明冠軍。",
    value: null,
    kind: "gap",
    prev,
    next,
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
  return [...story, ...live];
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
] as const;

export const JUMPS = [
  { year: 1066, label: "1066 威廉" },
  { year: 1324, label: "1324 穆薩" },
  { year: 1525, label: "1525 富格爾" },
  { year: 1913, label: "1913 洛克菲勒" },
  { year: 2003, label: "2003 蓋茨" },
  { year: 2026, label: "2026 馬斯克" },
] as const;

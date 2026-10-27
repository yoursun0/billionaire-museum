import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { BookOpen, ChevronLeft, ChevronRight, Coins, Landmark, Pause, Play, Search } from "lucide-react";
import {
  FORBES,
  JUMPS,
  MUSK_JUNE_2026_BILLIONS,
  QUIZ,
  TYCOONS,
  CONFIDENCE_LABEL,
  byId,
  chartRows,
  forbesPeak,
  formatUsdBillions,
  formatUsdShort,
  orderedTycoons,
  sceneAt,
  snapYear,
  stationYears,
  type Tycoon,
} from "@/data/wealth";
import { WealthChart } from "@/components/museum/WealthChart";
import { Shell } from "@/components/museum/Shell";
import { PersonDossier } from "@/components/museum/PersonDossier";
import { HALLS } from "@/components/museum/nav";

const btn =
  "tap inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export function MuseumApp() {
  const [year, setYear] = useState(2026);
  const [selectedId, setSelectedId] = useState("musk");
  const [query, setQuery] = useState("");
  const [playing, setPlaying] = useState(false);
  const [playYear, setPlayYear] = useState(2026);
  const galleryRef = useRef<HTMLDivElement>(null);
  const stations = useMemo(() => stationYears(), []);
  const stationIndex = Math.max(0, stations.indexOf(year));
  const scene = sceneAt(year);
  const selected = byId(selectedId);

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (TYCOONS.some((t) => t.id === id)) {
      setSelectedId(id);
      const t = byId(id);
      setYear(t.peakYear);
    }
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (playYear >= 2026) {
      setPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => setPlayYear((value) => Math.min(2026, value + 1)), 170);
    return () => window.clearTimeout(timer);
  }, [playing, playYear]);

  useEffect(() => {
    if (!playing) return;
    setYear(playYear);
    const row = FORBES.find((item) => item.year === playYear);
    if (row) setSelectedId(row.id);
  }, [playing, playYear]);

  function openPerson(id: string) {
    const t = byId(id);
    setSelectedId(id);
    setYear(t.peakYear);
    setPlaying(false);
    setPlayYear(2026);
    window.history.replaceState(null, "", `#${id}`);
    document.getElementById("exhibit")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goYear(next: number) {
    const clamped = snapYear(next);
    setPlaying(false);
    setPlayYear(2026);
    setYear(clamped);
    const nextScene = sceneAt(clamped);
    if (nextScene.id) setSelectedId(nextScene.id);
  }

  function stepStation(direction: number) {
    const index = Math.max(0, stations.indexOf(snapYear(year)));
    const next = stations[Math.min(stations.length - 1, Math.max(0, index + direction))];
    goYear(next);
  }

  function startPlay() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPlaying(false);
      setPlayYear(2026);
      setYear(2026);
      setSelectedId("musk");
      return;
    }
    setPlaying(true);
    setPlayYear(1987);
    setYear(1987);
    setSelectedId("tsutsumi");
  }

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orderedTycoons().filter((t) => {
      if (!q) return true;
      return (
        t.nameZh.toLowerCase().includes(q) ||
        t.nameEn.toLowerCase().includes(q) ||
        t.region.toLowerCase().includes(q) ||
        t.how.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <Shell>
    <main id="top">

      <section className="relative">
        <img
          src="/museum/hall.jpg"
          alt="夜間兒童博物館，一排發光玻璃櫃，牆上有一條起伏嘅金線"
          className="h-64 w-full object-cover sm:h-96"
        />
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative -mt-16 rounded-3xl border border-parchment-deep bg-parchment p-5 text-ink shadow-xl sm:-mt-24 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <img
                src="/museum/mascot.jpg"
                alt="導賞燈靈阿燈，一個戴紅圍巾、捧住金幣嘅黃銅小燈"
                className="floaty size-24 shrink-0 rounded-full border-4 border-gold object-cover sm:size-32"
              />
              <div className="rise">
                <p className="text-sm font-medium text-cinnabar">1026–2026 · 兒童歷史館</p>
                <h1 className="mt-1 text-4xl font-bold sm:text-5xl">千年金庫</h1>
                <p className="mt-2 max-w-2xl text-base text-ink-soft">
                  歡迎入嚟。我係阿燈。空白年份會直接跳過。有帳簿的會寫明，估算補上的人亦會蓋印。想睇幾條人生點樣交叉，入「起承轉合」。
                </p>
              </div>
            </div>

            <div className="rise rise-2 mt-6 rounded-2xl bg-parchment-deep/70 p-4">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm text-ink-soft">展站，空白年份已經跳過</p>
                  <p className="font-serif text-5xl font-bold text-cinnabar tabular-nums">{year}</p>
                  <p className="text-sm text-ink-soft tabular-nums">
                    第 {stationIndex + 1} / {stations.length} 站
                  </p>
                </div>
                <div className="min-w-0 flex-1 sm:text-right">
                  <p className="font-serif text-2xl font-bold">{scene.title}</p>
                  <p className="text-sm text-ink-soft">{scene.detail}</p>
                  {scene.value != null && (
                    <p className="mt-1 text-lg font-bold tabular-nums">
                      {formatUsdBillions(scene.value)}
                      <span className="ml-2 text-sm font-medium text-ink-soft">{formatUsdShort(scene.value)}</span>
                    </p>
                  )}
                </div>
              </div>
              <label className="mt-4 block">
                <span className="sr-only">沿展站走，跳過冇人的年份</span>
                <input
                  type="range"
                  min={0}
                  max={stations.length - 1}
                  value={stationIndex}
                  onChange={(event) => goYear(stations[Number(event.target.value)] ?? year)}
                />
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" className={`${btn} bg-parchment text-ink`} onClick={() => stepStation(-1)}>
                  上一站
                </button>
                <button type="button" className={`${btn} bg-parchment text-ink`} onClick={() => stepStation(1)}>
                  下一站
                </button>
                {JUMPS.map((jump) => (
                  <button
                    key={jump.year}
                    type="button"
                    className={`${btn} bg-parchment text-ink`}
                    onClick={() => goYear(jump.year)}
                  >
                    {jump.label}
                  </button>
                ))}
              </div>
              {scene.id && (
                <button type="button" className={`${btn} mt-4 bg-cinnabar text-cream`} onClick={() => openPerson(scene.id!)}>
                  打開呢個展櫃
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="chart" className="scroll-mt-24 mx-auto mt-12 max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-gold">主展品</p>
            <h2 className="text-3xl font-bold">財富流向圖</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {playing ? (
              <button type="button" className={`${btn} bg-gold text-ink`} onClick={() => setPlaying(false)}>
                <Pause className="size-4" aria-hidden />
                暫停
              </button>
            ) : (
              <button type="button" className={`${btn} bg-gold text-ink`} onClick={startPlay}>
                <Play className="size-4" aria-hidden />
                播放 1987–2026
              </button>
            )}
            {playYear < 2026 && (
              <button
                type="button"
                className={`${btn} bg-hall-raised text-cream`}
                onClick={() => {
                  setPlaying(false);
                  setPlayYear(2026);
                }}
              >
                睇完整條線
              </button>
            )}
          </div>
        </div>
        <p className="mt-3 max-w-3xl text-cream-dim">
          左面虛線，係每個展站的教學估算，中間空白年份冇插值。右面實線先係福布斯每年榜首。想睇蓋茨點樣被貝佐斯越過、又點樣被馬斯克穿過，去
          <Link to="/hall/$hall" params={{ hall: "lines" }} className="mx-1 text-gold underline">
            起承轉合
          </Link>
          。
          {playYear < 2026 ? ` 而家播到 ${playYear} 年。` : ""}
        </p>
        <div className="mt-4 rounded-3xl border border-line bg-hall-raised p-3 sm:p-5">
          <WealthChart selectedId={selectedId} revealThrough={playYear} onSelect={openPerson} />
          <div className="mt-3 flex flex-wrap gap-4 text-sm text-cream-dim">
            <span className="inline-flex items-center gap-2">
              <span className="h-0.5 w-8 border-t-2 border-dashed border-gold-soft" />
              古代估算
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-0.5 w-8 bg-gold" />
              福布斯實測
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-cinnabar" />
              你揀緊嘅人
            </span>
          </div>
          <p className="mt-3 text-sm text-cream-dim">
            2026 年 6 月馬斯克曾短暫約 {formatUsdBillions(MUSK_JUNE_2026_BILLIONS)}，9 月回落到圖上呢一點。條線用 9 月數字，避免一個月嘅尖峰將成幅圖壓扁。
          </p>
          <details className="mt-4 text-sm text-cream-dim">
            <summary className="min-h-11 cursor-pointer font-medium text-cream">用文字睇晒啲數字</summary>
            <ul className="mt-2 grid gap-1 sm:grid-cols-2">
              {chartRows(2026).map((row) => {
                const value = row.live ?? row.story;
                if (value == null) return null;
                return (
                  <li key={`${row.kind}-${row.year}`} className="tabular-nums">
                    {row.year} {row.name} · {formatUsdBillions(value)}
                    {row.kind === "estimate" ? "（估算）" : ""}
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Note icon={<Landmark className="size-5" aria-hidden />} title="身家">
            你擁有嘅資產，減走你欠嘅債。古代好多時分唔開國王同國庫。
          </Note>
          <Note icon={<BookOpen className="size-5" aria-hidden />} title="兩把尺">
            只計通脹，舊錢會睇落細；計「佔當時經濟幾大」，舊富豪又會變得好巨大。
          </Note>
          <Note icon={<Coins className="size-5" aria-hidden />} title="流向">
            捐圖書館、拆壟斷、泡沫爆破、股價回落——錢會走，唔會永遠鎖住。
          </Note>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-6xl px-4">
        <p className="text-sm font-medium text-gold">十個展廳</p>
        <h2 className="text-3xl font-bold">唔止一條走廊</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {HALLS.map((hall) => (
            <Link key={hall.slug} to="/hall/$hall" params={{ hall: hall.slug }} className="rounded-3xl border border-line bg-hall-raised p-4">
              <h3 className="text-2xl font-bold text-gold">{hall.label}</h3>
              <p className="mt-1 text-sm text-cream-dim">{hall.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 mt-14">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-3 px-4">
          <div>
            <p className="text-sm font-medium text-gold">時光長廊</p>
            <h2 className="text-3xl font-bold">一格櫃，一個人</h2>
          </div>
          <label className="relative block w-full sm:w-72">
            <span className="sr-only">搜尋人名</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-soft" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜尋，例如蓋茨、Musk"
              className="min-h-11 w-full rounded-full border border-line bg-parchment pr-4 pl-10 text-base text-ink outline-none focus-visible:outline-2 focus-visible:outline-gold"
            />
          </label>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl items-center gap-2 px-4">
          <button
            type="button"
            className={`${btn} bg-hall-raised px-3 text-cream`}
            aria-label="向左行"
            onClick={() => galleryRef.current?.scrollBy({ left: -320, behavior: "smooth" })}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className={`${btn} bg-hall-raised px-3 text-cream`}
            aria-label="向右行"
            onClick={() => galleryRef.current?.scrollBy({ left: 320, behavior: "smooth" })}
          >
            <ChevronRight className="size-5" />
          </button>
          <p className="text-sm text-cream-dim">由左至右只停有展品的年份</p>
        </div>
        <div
          ref={galleryRef}
          className="mt-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory"
        >
          {list.map((person) => (
            <PersonCard
              key={person.id}
              person={person}
              active={person.id === selectedId}
              onOpen={() => openPerson(person.id)}
            />
          ))}
          {list.length === 0 && (
            <p className="px-2 py-8 text-cream-dim">搵唔到。試下中文名或者英文姓氏。</p>
          )}
        </div>
      </section>

      <section id="exhibit" className="scroll-mt-24 mx-auto mt-6 max-w-6xl px-4">
        <PersonDossier person={selected} />
      </section>

      <Quiz />

      <footer className="mx-auto mt-16 max-w-6xl px-4 text-sm text-cream-dim">
        <h2 className="font-serif text-xl font-bold text-cream">點解信呢啲數</h2>
        <p className="mt-2">
          1987 至 2026 年：Forbes 全球富豪榜年度第一，金額由 Visual Capitalist 於 2026 年用美國 CPI 折成 2026 年美元。2026 年係 9 月即時估算，唔係年結。6 月短暫高位約 1.45 萬億美元，來自同一組報道。
        </p>
        <p className="mt-2">
          1987 年之前：教學估算。新補上的人（朱羅海貿、忽必烈、沈萬三、美第奇、伍秉鑑、福特等）都蓋咗估算或傳說印。威廉有《末日審判書》；富格爾同伍秉鑑有同代記載。全球占比用名義身家除以當年全球產出；古代國力另計，唔當私人存款。空白年份跳過，唔再鋪空走廊。
        </p>
        <p className="mt-2">壁畫係氣氛，唔係肖像。阿燈係虛構導賞。現代軌跡在榜首年份對齊福布斯，其餘年份係圓整連線。</p>
      </footer>
    </main>
    </Shell>
  );
}

function Note({ icon, title, children }: { icon: ReactNode; title: string; children: string }) {
  return (
    <div className="rounded-2xl border border-line bg-hall-raised p-4">
      <div className="flex items-center gap-2 text-gold">
        {icon}
        <h3 className="text-lg font-bold text-cream">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-cream-dim">{children}</p>
    </div>
  );
}

function PersonCard({
  person,
  active,
  onOpen,
}: {
  person: Tycoon;
  active: boolean;
  onOpen: () => void;
}) {
  const value = person.wealth?.mid ?? forbesPeak(person.id).value;
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`tap w-72 shrink-0 snap-start overflow-hidden rounded-3xl bg-parchment text-left text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
        active ? "ring-4 ring-gold" : ""
      }`}
    >
      <img
        src={person.scene}
        alt=""
        style={{ objectPosition: person.focus }}
        className="h-36 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm text-ink-soft tabular-nums">{person.peakYear}</p>
          <span className="rounded-full bg-cinnabar px-2 py-1 text-xs font-medium text-cream">
            {CONFIDENCE_LABEL[person.confidence]}
          </span>
        </div>
        <h3 className="mt-1 text-xl font-bold">{person.nameZh}</h3>
        <p className="text-sm text-ink-soft">{person.nameEn}</p>
        <p className="mt-2 text-sm">{person.blurb}</p>
        <p className="mt-3 font-bold tabular-nums">{formatUsdBillions(value)}</p>
      </div>
    </button>
  );
}

function Quiz() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const card = QUIZ[index];

  function choose(choice: number) {
    if (picked != null || !card) return;
    setPicked(choice);
    if (choice === card.answer) setScore((value) => value + 1);
  }

  function next() {
    if (index + 1 >= QUIZ.length) {
      setDone(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
  }

  function reset() {
    setIndex(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  const comment =
    score >= 5 ? "你可以做小小導賞員啦。" : score >= 3 ? "再行一次長廊，會更穩。" : "冇事，博物館就係用嚟再行一次。";

  return (
    <section id="quiz" className="scroll-mt-24 mx-auto mt-14 max-w-6xl px-4">
      <p className="text-sm font-medium text-gold">館尾小測驗</p>
      <h2 className="text-3xl font-bold">阿燈問五題</h2>
      <div className="mt-4 rounded-3xl bg-parchment p-5 text-ink sm:p-8">
        {done ? (
          <div>
            <p className="font-serif text-4xl font-bold text-cinnabar tabular-nums">
              {score} / {QUIZ.length}
            </p>
            <p className="mt-2">阿燈：{comment}</p>
            <button type="button" className={`${btn} mt-4 bg-gold text-ink`} onClick={reset}>
              再玩一次
            </button>
          </div>
        ) : card ? (
          <div>
            <p className="text-sm text-ink-soft">
              第 {index + 1} / {QUIZ.length} 題
            </p>
            <h3 className="mt-2 text-2xl font-bold">{card.q}</h3>
            <div className="mt-4 grid gap-2">
              {card.choices.map((choice, choiceIndex) => {
                const show = picked != null;
                const correct = choiceIndex === card.answer;
                const mine = choiceIndex === picked;
                let tone = "bg-parchment-deep text-ink";
                if (show && correct) tone = "bg-gold text-ink";
                else if (show && mine) tone = "bg-cinnabar text-cream";
                return (
                  <button
                    key={choice}
                    type="button"
                    disabled={picked != null}
                    className={`${btn} justify-start px-4 text-left ${tone}`}
                    onClick={() => choose(choiceIndex)}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>
            {picked != null && (
              <div className="mt-4">
                <p>{card.why}</p>
                <button type="button" className={`${btn} mt-3 bg-ink text-cream`} onClick={next}>
                  {index + 1 === QUIZ.length ? "睇分數" : "下一題"}
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

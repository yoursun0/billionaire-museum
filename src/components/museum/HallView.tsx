import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FATE_LABEL, ORIGIN_LABEL, formatShare, lifeArc, peakShare, peakUsd, profile } from "@/data/atlas";
import { FORBES, TYCOONS, byId, formatUsdBillions, orderedTycoons } from "@/data/wealth";
import { HALLS } from "@/components/museum/nav";
import { MiniLine } from "@/components/museum/WealthChart";
import { TrajectoryChart } from "@/components/museum/TrajectoryChart";

export function HallView({ hall }: { hall: string }) {
  const found = HALLS.find((item) => item.slug === hall);
  if (!found) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-4xl font-bold">冇呢個展廳</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {HALLS.map((item) => (
            <Link key={item.slug} to="/hall/$hall" params={{ hall: item.slug }} className="rounded-full bg-hall-raised px-4 py-3 text-sm">
              {item.label}
            </Link>
          ))}
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <p className="text-sm font-medium text-gold">資料庫展廳</p>
      <h1 className="text-4xl font-bold">{found.label}</h1>
      <p className="mt-2 max-w-3xl text-cream-dim">{found.text}</p>
      <div className="mt-6">
        {hall === "lines" && <LinesHall />}
        {hall === "power" && <PowerHall />}
        {hall === "ranks" && <RanksHall />}
        {hall === "sources" && <SourcesHall />}
        {hall === "fates" && <FatesHall />}
        {hall === "buying" && <BuyingHall />}
        {hall === "relay" && <RelayHall />}
        {hall === "map" && <MapHall />}
        {hall === "life" && <LifeHall />}
        {hall === "compare" && <CompareHall />}
      </div>
    </main>
  );
}

function LinesHall() {
  const people = orderedTycoons();
  return (
    <div>
      <p className="max-w-3xl text-cream-dim">
        上面每條線係一個人。2018 年貝佐斯的年度榜越過蓋茨，2022 年馬斯克越過貝佐斯，2023 年阿爾諾又越過馬斯克，2025 年馬斯克再超前。年份之間是連線，古代唔塞入呢條軸，以免一條萬億線將交匯壓扁。
      </p>
      <div className="mt-4 rounded-3xl border border-line bg-hall-raised p-3 sm:p-5">
        <TrajectoryChart />
      </div>
      <h2 className="mt-10 text-3xl font-bold">每人自己的起承轉合</h2>
      <p className="mt-2 max-w-3xl text-sm text-cream-dim">
        小圖各自縮放。古代只有起點、高峰、結局三點，係走勢示意。有福布斯軌跡的人先用連續數字。卡內基向下，因為錢捐走；沈萬三跌到近乎零，因為被抄。
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {people.map((person) => {
          const arc = lifeArc(person);
          return (
            <Link key={person.id} to="/person/$id" params={{ id: person.id }} className="rounded-3xl bg-parchment p-4 text-ink">
              <p className="text-sm text-cinnabar">{person.peakYear}</p>
              <h3 className="text-xl font-bold">{person.nameZh}</h3>
              <MiniLine rows={arc} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function PowerHall() {
  const people = [...TYCOONS].sort((a, b) => peakShare(b.id) - peakShare(a.id));
  const max = peakShare(people[0].id);
  const realms = people.filter((person) => profile(person.id).realmShare != null);
  return (
    <div className="grid gap-8">
      <section>
        <h2 className="text-2xl font-bold">身家占全球產出</h2>
        <p className="mt-2 max-w-3xl text-sm text-cream-dim">
          1987 年後用名義身家除以當年全球名義產出。之前係教學估算。曼薩·穆薩同幾位皇帝可以高過馬斯克，即使 2026 年美元圖完全相反。
        </p>
        <div className="mt-4 grid gap-2">
          {people.map((person) => {
            const share = peakShare(person.id);
            return (
              <Link key={person.id} to="/person/$id" params={{ id: person.id }} className="grid grid-cols-[7rem_1fr_4.5rem] items-center gap-3 rounded-2xl bg-hall-raised px-3 py-2">
                <span className="truncate text-sm">{person.nameZh}</span>
                <span className="h-3 rounded-full bg-hall">
                  <span className="block h-3 rounded-full bg-gold" style={{ width: `${Math.max(2, (share / max) * 100)}%` }} />
                </span>
                <span className="text-right text-sm tabular-nums text-gold">{formatShare(share)}</span>
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">國力，另一條柱</h2>
        <p className="mt-2 max-w-3xl text-sm text-cream-dim">國家或帝國占全球產出。空心意思係：呢條唔屬於一個人。乾隆的三成如果寫進存摺，就係教學事故。</p>
        <div className="mt-4 grid gap-2">
          {realms.map((person) => {
            const share = profile(person.id).realmShare ?? 0;
            return (
              <div key={person.id} className="grid grid-cols-[7rem_1fr_4.5rem] items-center gap-3 rounded-2xl bg-hall-raised px-3 py-2">
                <span className="truncate text-sm">{person.nameZh}</span>
                <span className="h-3 rounded-full border border-gold/70" style={{ width: `${Math.max(8, (share / 32) * 100)}%` }} />
                <span className="text-right text-sm tabular-nums">{formatShare(share)}</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function RanksHall() {
  const measured = orderedTycoons().filter((person) => person.confidence === "forbes" || person.confidence === "records");
  const estimated = orderedTycoons().filter((person) => person.confidence === "estimate" || person.confidence === "legend");
  const byUsd = (list: typeof measured) => [...list].sort((a, b) => peakUsd(b) - peakUsd(a));
  const byShare = [...TYCOONS].sort((a, b) => peakShare(b.id) - peakShare(a.id));
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-line p-4">
        <h2 className="text-2xl font-bold">2026 年美元</h2>
        <p className="mt-1 text-sm text-cream-dim">有帳簿同福布斯先放一組。古代估算另組，免得兩種信心排成一條龍。</p>
        <RankList title="福布斯同有帳簿" people={byUsd(measured)} mode="usd" />
        <RankList title="教學估算" people={byUsd(estimated)} mode="usd" />
      </section>
      <section className="rounded-3xl border border-line p-4">
        <h2 className="text-2xl font-bold">占全球產出</h2>
        <p className="mt-1 text-sm text-cream-dim">呢把尺先將時代放在一起。古代仍然印住估算。</p>
        <RankList title="全部展櫃" people={byShare} mode="share" />
      </section>
    </div>
  );
}

function RankList({ title, people, mode }: { title: string; people: ReturnType<typeof orderedTycoons>; mode: "usd" | "share" }) {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gold">{title}</h3>
      <ol className="mt-2 grid gap-1">
        {people.map((person, index) => (
          <li key={person.id}>
            <Link to="/person/$id" params={{ id: person.id }} className="flex items-baseline justify-between gap-3 rounded-xl px-2 py-1 hover:bg-hall-raised">
              <span>
                <span className="mr-2 tabular-nums text-cream-dim">{index + 1}</span>
                {person.nameZh}
              </span>
              <span className="tabular-nums text-sm text-gold">{mode === "usd" ? formatUsdBillions(peakUsd(person)) : formatShare(peakShare(person.id))}</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SourcesHall() {
  const groups = new Map<string, ReturnType<typeof orderedTycoons>>();
  for (const person of orderedTycoons()) {
    const key = profile(person.id).industry;
    groups.set(key, [...(groups.get(key) ?? []), person]);
  }
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {[...groups.entries()].map(([industry, people]) => (
        <section key={industry} className="rounded-3xl bg-hall-raised p-4">
          <h2 className="text-2xl font-bold">{industry}</h2>
          <p className="text-sm text-cream-dim">{people.length} 個展櫃</p>
          <ul className="mt-3 grid gap-2">
            {people.map((person) => (
              <li key={person.id}>
                <Link to="/person/$id" params={{ id: person.id }} className="flex gap-3">
                  <img src={person.scene} alt="" className="size-14 rounded-xl object-cover" />
                  <span>
                    <span className="block font-bold">{person.nameZh}</span>
                    <span className="text-sm text-cream-dim">{person.how}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function FatesHall() {
  const kinds = Object.keys(FATE_LABEL) as Array<keyof typeof FATE_LABEL>;
  return (
    <div className="grid gap-3">
      {kinds.map((kind) => {
        const people = orderedTycoons().filter((person) => profile(person.id).fateKind === kind);
        if (!people.length) return null;
        return (
          <section key={kind} className="rounded-3xl border border-line p-4">
            <h2 className="text-2xl font-bold">{FATE_LABEL[kind]}</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {people.map((person) => (
                <li key={person.id}>
                  <Link to="/person/$id" params={{ id: person.id }} className="block rounded-2xl bg-hall-raised px-3 py-3">
                    <span className="font-bold">{person.nameZh}</span>
                    <span className="mt-1 block text-sm text-cream-dim">{person.flow}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function BuyingHall() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {orderedTycoons().map((person) => (
        <Link key={person.id} to="/person/$id" params={{ id: person.id }} className="rounded-3xl bg-parchment p-4 text-ink">
          <p className="text-sm text-cinnabar">{person.peakYear}</p>
          <h2 className="text-2xl font-bold">{person.nameZh}</h2>
          <ul className="mt-3 grid gap-2">
            {profile(person.id).buying.map((item) => (
              <li key={item} className="rounded-2xl bg-parchment-deep px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </Link>
      ))}
    </div>
  );
}

function RelayHall() {
  const ancient = orderedTycoons().filter((person) => person.hold && person.peakYear < 1987);
  const modernIds = [...new Set(FORBES.map((row) => row.id))];
  return (
    <div className="grid gap-8">
      <section>
        <h2 className="text-2xl font-bold">1987 之前的展站</h2>
        <p className="mt-1 text-sm text-cream-dim">條長短係佢在展線上的年份，唔係證明全世界只有佢一個富人。重疊代表同時代有另一個展櫃。</p>
        <div className="mt-4 grid gap-2">
          {ancient.map((person) => {
            const from = person.hold!.from;
            const to = person.hold!.to;
            const left = ((from - 1000) / 900) * 100;
            const width = Math.max(1.5, ((to - from) / 900) * 100);
            return (
              <div key={person.id} className="grid items-center gap-2 sm:grid-cols-[8rem_1fr]">
                <span className="text-sm">{person.nameZh}</span>
                <span className="relative h-8 rounded-full bg-hall-raised">
                  <span className="absolute top-1 bottom-1 rounded-full bg-gold" style={{ left: `${left}%`, width: `${width}%` }} />
                </span>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">福布斯年度榜首</h2>
        <div className="mt-4 grid gap-2">
          {modernIds.map((id) => {
            const years = FORBES.filter((row) => row.id === id).map((row) => row.year);
            return (
              <div key={id} className="grid items-center gap-2 sm:grid-cols-[8rem_1fr_auto]">
                <span className="text-sm">{byId(id).nameZh}</span>
                <span className="relative h-8 rounded-full bg-hall-raised">
                  {years.map((year) => (
                    <span
                      key={year}
                      className="absolute top-1.5 size-5 rounded-full bg-cinnabar"
                      style={{ left: `calc(${((year - 1987) / (2026 - 1987)) * 100}% - 0.4rem)` }}
                    />
                  ))}
                </span>
                <span className="text-sm tabular-nums text-cream-dim">{years.length} 年</span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function MapHall() {
  const people = orderedTycoons();
  return (
    <div>
      <p className="max-w-3xl text-sm text-cream-dim">點的位置係示意，方便記得人在邊塊大陸。唔係測繪地圖。</p>
      <div className="relative mt-4 h-[28rem] overflow-hidden rounded-3xl border border-line bg-[#14202a]">
        <div className="absolute inset-6 rounded-full border border-gold/30" />
        {people.map((person) => {
          const about = profile(person.id);
          const left = ((about.lon + 180) / 360) * 100;
          const top = ((90 - about.lat) / 180) * 100;
          return (
            <Link
              key={person.id}
              to="/person/$id"
              params={{ id: person.id }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${left}%`, top: `${top}%` }}
              title={person.nameZh}
            >
              <span className="block size-3 rounded-full border border-ink bg-gold" />
            </Link>
          );
        })}
      </div>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {people.map((person) => (
          <li key={person.id}>
            <Link to="/person/$id" params={{ id: person.id }} className="flex justify-between gap-3 rounded-2xl bg-hall-raised px-3 py-2">
              <span>{person.nameZh}</span>
              <span className="text-sm text-cream-dim">{person.region}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LifeHall() {
  return (
    <div className="grid gap-4">
      {orderedTycoons().map((person) => {
        const about = profile(person.id);
        return (
          <article key={person.id} className="grid overflow-hidden rounded-3xl bg-parchment text-ink sm:grid-cols-[16rem_1fr]">
            <img src={person.scene} alt="" className="h-48 w-full object-cover sm:h-full" style={{ objectPosition: person.focus }} />
            <div className="p-4">
              <p className="text-sm text-cinnabar">
                {person.peakYear} · {ORIGIN_LABEL[about.origin]}
              </p>
              <h2 className="text-2xl font-bold">{person.nameZh}</h2>
              <p className="mt-2">{about.lifeStyle}</p>
              <p className="mt-2 text-ink-soft">{about.impact}</p>
              <Link to="/person/$id" params={{ id: person.id }} className="mt-3 inline-flex min-h-11 items-center font-medium text-cinnabar">
                睇完整資料
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function CompareHall() {
  const people = orderedTycoons();
  const [left, setLeft] = useState("gates");
  const [right, setRight] = useState("bezos");
  const a = byId(left);
  const b = byId(right);
  const rows = useMemo(
    () => [
      ["2026 年美元", formatUsdBillions(peakUsd(a)), formatUsdBillions(peakUsd(b))],
      ["占全球產出", formatShare(peakShare(a.id)), formatShare(peakShare(b.id))],
      ["行業", profile(a.id).industry, profile(b.id).industry],
      ["點來", ORIGIN_LABEL[profile(a.id).origin], ORIGIN_LABEL[profile(b.id).origin]],
      ["錢去邊", FATE_LABEL[profile(a.id).fateKind], FATE_LABEL[profile(b.id).fateKind]],
      ["高峰年", String(a.peakYear), String(b.peakYear)],
    ],
    [a, b],
  );
  return (
    <div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Chooser value={left} onChange={setLeft} people={people} label="左邊" />
        <Chooser value={right} onChange={setRight} people={people} label="右邊" />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <CompareCard person={a} />
        <CompareCard person={b} />
      </div>
      <div className="mt-4 grid gap-2">
        {rows.map((row) => (
          <div key={row[0]} className="grid gap-2 rounded-2xl bg-hall-raised p-3 sm:grid-cols-3">
            <p className="text-sm text-gold">{row[0]}</p>
            <p>{row[1]}</p>
            <p>{row[2]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Chooser({
  value,
  onChange,
  people,
  label,
}: {
  value: string;
  onChange: (id: string) => void;
  people: ReturnType<typeof orderedTycoons>;
  label: string;
}) {
  return (
    <label className="block text-sm">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 min-h-11 w-full rounded-2xl border border-line bg-parchment px-3 text-base text-ink"
      >
        {people.map((person) => (
          <option key={person.id} value={person.id}>
            {person.nameZh}
          </option>
        ))}
      </select>
    </label>
  );
}

function CompareCard({ person }: { person: ReturnType<typeof byId> }) {
  return (
    <Link to="/person/$id" params={{ id: person.id }} className="overflow-hidden rounded-3xl bg-parchment text-ink">
      <img src={person.scene} alt="" className="h-36 w-full object-cover" style={{ objectPosition: person.focus }} />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{person.nameZh}</h2>
        <p className="text-sm text-ink-soft">{person.blurb}</p>
      </div>
    </Link>
  );
}

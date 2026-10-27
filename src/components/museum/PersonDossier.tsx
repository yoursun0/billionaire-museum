import { Link } from "@tanstack/react-router";
import { formatShare, ORIGIN_LABEL, FATE_LABEL, peakShare, profile } from "@/data/atlas";
import { CONFIDENCE_LABEL, forbesPeak, forbesRows, formatUsdBillions, formatUsdShort, type Tycoon } from "@/data/wealth";
import { MiniLine } from "@/components/museum/WealthChart";

export function PersonDossier({ person, standalone = false }: { person: Tycoon; standalone?: boolean }) {
  const rows = forbesRows(person.id);
  const peak = rows.length ? forbesPeak(person.id) : null;
  const about = profile(person.id);
  const share = peakShare(person.id);
  return (
    <article className="overflow-hidden rounded-3xl bg-parchment text-ink">
      <img
        src={person.scene}
        alt={`${person.nameZh}展區壁畫，描寫${person.how}嘅時代氣氛，唔係肖像`}
        style={{ objectPosition: person.focus }}
        className="h-56 w-full object-cover sm:h-96"
      />
      <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="text-sm font-medium text-cinnabar">
            {CONFIDENCE_LABEL[person.confidence]} · {person.region} · {ORIGIN_LABEL[about.origin]}
          </p>
          <h2 className="mt-1 text-4xl font-bold">{person.nameZh}</h2>
          <p className="text-ink-soft">
            {person.nameEn} · {person.life}
          </p>
          <p className="mt-2 text-sm font-medium">
            點樣有錢：{person.how} · 行業：{about.industry}
          </p>
          {person.story.map((para) => (
            <p key={para.slice(0, 16)} className="mt-3">
              {para}
            </p>
          ))}
          {about.more.map((para) => (
            <p key={para.slice(0, 16)} className="mt-3">
              {para}
            </p>
          ))}
          <h3 className="mt-6 text-2xl font-bold">生活</h3>
          <p className="mt-2">{about.lifeStyle}</p>
          <h3 className="mt-6 text-2xl font-bold">經濟影響</h3>
          <p className="mt-2">{about.impact}</p>
          <blockquote className="mt-4 border-l-4 border-gold pl-4 text-ink-soft">阿燈：{person.voice}</blockquote>
          {!standalone && (
            <Link
              to="/person/$id"
              params={{ id: person.id }}
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-cream"
            >
              打開獨立資料頁
            </Link>
          )}
        </div>
        <div className="rounded-2xl bg-parchment-deep/80 p-4">
          <h3 className="text-lg font-bold">兩把尺</h3>
          {person.wealth ? (
            <AncientWealth low={person.wealth.low} mid={person.wealth.mid} high={person.wealth.high} />
          ) : peak ? (
            <div>
              <p className="mt-2 font-serif text-3xl font-bold text-cinnabar tabular-nums">{formatUsdBillions(peak.value)}</p>
              <p className="text-sm text-ink-soft tabular-nums">
                {peak.year} 年高峰 · {formatUsdShort(peak.value)}
              </p>
              {rows.length > 1 && <MiniLine rows={rows.map((row) => ({ year: row.year, value: row.value }))} />}
            </div>
          ) : null}
          <p className="mt-4 font-serif text-3xl font-bold text-cinnabar tabular-nums">{formatShare(share)}</p>
          <p className="text-sm text-ink-soft">身家占當時全球產出</p>
          {about.realmShare != null && (
            <p className="mt-2 text-sm">
              國力另計約 <span className="font-bold tabular-nums">{formatShare(about.realmShare)}</span>
              。呢個係國家或帝國，唔係私人存款。
            </p>
          )}
          <p className="mt-3 text-sm text-ink-soft">{about.gdpNote}</p>
          <p className="mt-3 text-sm text-ink-soft">{person.method}</p>
          <h3 className="mt-5 text-lg font-bold">買到幾多</h3>
          <ul className="mt-2 grid gap-2">
            {about.buying.map((item) => (
              <li key={item} className="rounded-2xl bg-parchment px-3 py-2 text-sm">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="mt-5 text-lg font-bold">錢去咗邊</h3>
          <p className="mt-1 text-sm font-medium">{FATE_LABEL[about.fateKind]}</p>
          <p className="mt-1 text-sm">{person.flow}</p>
        </div>
      </div>
      <ul className="grid gap-3 px-5 pb-6 sm:grid-cols-3 sm:px-8">
        {person.facts.map((fact) => (
          <li key={fact.slice(0, 18)} className="rounded-2xl bg-hall px-4 py-3 text-sm text-cream">
            {fact}
          </li>
        ))}
      </ul>
    </article>
  );
}

function AncientWealth({ low, mid, high }: { low: number; mid: number; high: number }) {
  const left = (low / high) * 100;
  const mark = (mid / high) * 100;
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-2 text-center">
        <Bit label="低估計" value={low} />
        <Bit label="圖上用" value={mid} strong />
        <Bit label="高估計" value={high} />
      </div>
      <div className="relative mt-4 h-3 rounded-full bg-parchment">
        <div className="absolute inset-y-0 rounded-full bg-gold" style={{ left: `${left}%`, right: 0 }} />
        <div
          className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-parchment bg-cinnabar"
          style={{ left: `${mark}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-ink-soft">金條由低估計拉到高估計，紅點係圖上採用嘅數字。</p>
    </div>
  );
}

function Bit({ label, value, strong }: { label: string; value: number; strong?: boolean }) {
  return (
    <div>
      <p className="text-xs text-ink-soft">{label}</p>
      <p className={`font-bold tabular-nums ${strong ? "text-cinnabar" : ""}`}>{formatUsdBillions(value)}</p>
    </div>
  );
}

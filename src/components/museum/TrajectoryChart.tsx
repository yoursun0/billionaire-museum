import { useMemo, useState } from "react";
import { CartesianGrid, Line, LineChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CROSSINGS, TRACK_COLOR, TRACK_ORDER, formatShare, trackFrame } from "@/data/atlas";
import { byId, formatUsdShort } from "@/data/wealth";

function byNameSafe(id: string): string {
  return byId(id).nameZh;
}

export function TrajectoryChart() {
  const [mode, setMode] = useState<"usd" | "share">("usd");
  const [enabled, setEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(TRACK_ORDER.map((id) => [id, ["gates", "bezos", "musk", "arnault"].includes(id)])),
  );
  const ids = TRACK_ORDER.filter((id) => enabled[id]);
  const data = useMemo(() => trackFrame([...ids], mode), [ids, mode]);

  function toggle(id: string) {
    setEnabled((current) => ({ ...current, [id]: !current[id] }));
  }

  function onlyThree() {
    setEnabled(Object.fromEntries(TRACK_ORDER.map((id) => [id, ["gates", "bezos", "musk"].includes(id)])));
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={chip(mode === "usd")} onClick={() => setMode("usd")}>
          2026 年美元
        </button>
        <button type="button" className={chip(mode === "share")} onClick={() => setMode("share")}>
          占全球產出
        </button>
        <button type="button" className={chip(false)} onClick={onlyThree}>
          只睇蓋茨、貝佐斯、馬斯克
        </button>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {TRACK_ORDER.map((id) => (
          <button key={id} type="button" className={chip(enabled[id])} onClick={() => toggle(id)}>
            <span className="size-2.5 rounded-full" style={{ background: TRACK_COLOR[id] }} />
            {byNameSafe(id)}
          </button>
        ))}
      </div>
      <div className="mt-4 h-96 w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="var(--color-line)" />
            <XAxis dataKey="year" tick={{ fill: "var(--color-cream-dim)", fontSize: 12 }} axisLine={{ stroke: "var(--color-line)" }} tickLine={false} />
            <YAxis
              tick={{ fill: "var(--color-cream-dim)", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              width={64}
              tickFormatter={(value) => (mode === "usd" ? formatUsdShort(Number(value)) : `${Number(value).toFixed(2)}%`)}
            />
            <Tooltip
              content={({ active, payload, label }) => {
                if (!active || !payload?.length) return null;
                return (
                  <div className="max-w-64 rounded-2xl bg-parchment px-3 py-2 text-sm text-ink shadow-lg">
                    <p className="font-serif font-bold">{label}</p>
                    {payload.map((item) => (
                      <p key={String(item.dataKey)} className="tabular-nums">
                        {byNameSafe(String(item.dataKey))} ·{" "}
                        {mode === "usd" ? formatUsdShort(Number(item.value)) : formatShare(Number(item.value))}
                      </p>
                    ))}
                  </div>
                );
              }}
            />
            {mode === "usd" &&
              CROSSINGS.map((item) => (
                <ReferenceLine key={item.year} x={item.year} stroke="rgba(244,240,230,0.35)" strokeDasharray="3 4" />
              ))}
            {ids.map((id) => (
              <Line
                key={id}
                type="monotone"
                dataKey={id}
                name={byNameSafe(id)}
                stroke={TRACK_COLOR[id]}
                strokeWidth={id === "musk" || id === "bezos" || id === "gates" ? 2.75 : 1.75}
                dot={false}
                connectNulls
                isAnimationActive={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <ul className="mt-4 grid gap-2">
        {CROSSINGS.map((item) => (
          <li key={item.year} className="rounded-2xl border border-line bg-hall px-4 py-3 text-sm text-cream-dim">
            <span className="font-bold text-gold tabular-nums">{item.year}</span> {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function chip(on: boolean): string {
  return `tap inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm ${on ? "bg-gold text-ink" : "bg-hall-raised text-cream"}`;
}

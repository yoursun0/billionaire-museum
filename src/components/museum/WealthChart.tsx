import { useEffect, useId, useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  chartRows,
  formatUsdBillions,
  formatUsdShort,
  type ChartRow,
  yearToX,
} from "@/data/wealth";

const WIDE_TICKS = [1100, 1300, 1500, 1700, 1900, 1987, 1999, 2010, 2026];
const NARROW_TICKS = [1300, 1600, 1900, 1987, 2003, 2026];

type Props = {
  selectedId: string;
  revealThrough: number;
  onSelect: (id: string) => void;
};

export function WealthChart({ selectedId, revealThrough, onSelect }: Props) {
  const [narrow, setNarrow] = useState(false);
  const rawId = useId();
  const gradId = `wealth-${rawId.replace(/:/g, "")}`;
  const rows = chartRows(revealThrough);
  const head = [...rows].reverse().find((row) => row.live != null)?.year ?? null;

  useEffect(() => {
    const check = () => setNarrow(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const ticks = (narrow ? NARROW_TICKS : WIDE_TICKS).map((year) => ({
    x: yearToX(year),
    year,
  }));

  return (
    <div className="h-80 w-full min-w-0 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={rows}
          margin={{ top: 16, right: 8, left: 0, bottom: 0 }}
          onClick={(state) => {
            const row = state?.activePayload?.[0]?.payload as ChartRow | undefined;
            if (row?.id) onSelect(row.id);
          }}
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--color-gold)" stopOpacity={0.45} />
              <stop offset="100%" stopColor="var(--color-gold)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--color-line)" />
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 100]}
            ticks={ticks.map((tick) => tick.x)}
            tickFormatter={(value) => {
              const hit = ticks.find((tick) => Math.abs(tick.x - Number(value)) < 0.05);
              return hit ? String(hit.year) : "";
            }}
            tick={{ fill: "var(--color-cream-dim)", fontSize: 12 }}
            axisLine={{ stroke: "var(--color-line)" }}
            tickLine={false}
          />
          <YAxis
            domain={[0, 1100]}
            ticks={[0, 250, 500, 750, 1000]}
            tickFormatter={(value) => yiTick(Number(value))}
            width={58}
            tick={{ fill: "var(--color-cream-dim)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload }) => (
              <Tip active={active} payload={payload as Array<{ payload?: ChartRow }> | undefined} />
            )}
            cursor={{ stroke: "var(--color-gold-soft)", strokeDasharray: "4 4" }}
          />
          <ReferenceLine
            x={yearToX(1987)}
            stroke="var(--color-gold-soft)"
            strokeDasharray="4 4"
          />
          <ReferenceLine
            y={1000}
            stroke="var(--color-cinnabar)"
            strokeDasharray="3 6"
            strokeOpacity={0.8}
          />
          <Area
            type="linear"
            dataKey="live"
            connectNulls={false}
            stroke="none"
            fill={`url(#${gradId})`}
            isAnimationActive={false}
          />
          <Line
            type="linear"
            dataKey="story"
            connectNulls={false}
            stroke="var(--color-gold-soft)"
            strokeWidth={2}
            strokeDasharray="6 6"
            isAnimationActive={false}
            dot={(props) => (
              <StoryDot
                key={dotKey(props)}
                cx={props.cx}
                cy={props.cy}
                payload={props.payload as ChartRow | undefined}
                selectedId={selectedId}
              />
            )}
            activeDot={false}
          />
          <Line
            type="monotone"
            dataKey="live"
            connectNulls={false}
            stroke="var(--color-gold)"
            strokeWidth={2.5}
            isAnimationActive={false}
            dot={(props) => (
              <LiveDot
                key={dotKey(props)}
                cx={props.cx}
                cy={props.cy}
                payload={props.payload as ChartRow | undefined}
                selectedId={selectedId}
                head={head}
              />
            )}
            activeDot={{ r: 5, fill: "var(--color-cinnabar)", stroke: "var(--color-parchment)" }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

function dotKey(props: { key?: unknown; index?: number }): string {
  if (props.key != null) return String(props.key);
  return `dot-${props.index ?? 0}`;
}

function yiTick(billions: number): string {
  return Math.round(billions * 10).toLocaleString("zh-HK");
}

function Tip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ payload?: ChartRow }>;
}) {
  const row = payload?.find((item) => item.payload && (item.payload.live != null || item.payload.story != null))
    ?.payload;
  if (!active || !row) return null;
  const value = row.live ?? row.story;
  if (value == null) return null;
  return (
    <div className="max-w-56 rounded-2xl bg-parchment px-3 py-2 text-ink shadow-lg">
      <p className="font-serif text-base font-bold">{row.year}</p>
      <p className="text-sm">{row.name}</p>
      <p className="text-sm font-bold text-cinnabar tabular-nums">{formatUsdBillions(value)}</p>
      <p className="text-xs text-ink-soft tabular-nums">{formatUsdShort(value)}</p>
      <p className="text-xs text-ink-soft">{row.kind === "forbes" ? "福布斯 · 通脹後" : "教學估算"}</p>
    </div>
  );
}

function StoryDot({
  cx,
  cy,
  payload,
  selectedId,
}: {
  cx?: number;
  cy?: number;
  payload?: ChartRow;
  selectedId: string;
}) {
  if (cx == null || cy == null || !payload || payload.story == null) return null;
  const on = payload.id === selectedId;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={on ? 7 : 5}
      fill={on ? "var(--color-cinnabar)" : "var(--color-gold)"}
      stroke="var(--color-parchment)"
      strokeWidth={2}
    />
  );
}

function LiveDot({
  cx,
  cy,
  payload,
  selectedId,
  head,
}: {
  cx?: number;
  cy?: number;
  payload?: ChartRow;
  selectedId: string;
  head: number | null;
}) {
  if (cx == null || cy == null || !payload || payload.live == null) return null;
  const on = payload.id === selectedId;
  const isHead = payload.year === head;
  if (!on && !isHead) return null;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={isHead ? 5 : 3.5}
      fill={on ? "var(--color-cinnabar)" : "var(--color-gold)"}
      stroke="var(--color-hall)"
      strokeWidth={1.5}
    />
  );
}

export function MiniLine({ rows }: { rows: Array<{ year: number; value: number }> }) {
  if (rows.length < 2) return null;
  const min = Math.min(...rows.map((row) => row.value));
  const max = Math.max(...rows.map((row) => row.value));
  const pad = Math.max(8, (max - min) * 0.25);
  return (
    <div className="h-28 w-full min-w-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="year"
            tick={{ fill: "var(--color-ink-soft)", fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis hide domain={[Math.max(0, min - pad), max + pad]} />
          <Tooltip
            content={({ active, payload }) => {
              const row = payload?.[0]?.payload as { year: number; value: number } | undefined;
              if (!active || !row) return null;
              return (
                <div className="rounded-xl bg-ink px-2 py-1 text-xs text-cream">
                  {row.year} · {formatUsdBillions(row.value)}
                </div>
              );
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--color-cinnabar)"
            strokeWidth={2.5}
            dot={{ r: 3, fill: "var(--color-cinnabar)", stroke: "var(--color-parchment)" }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { HALLS } from "@/components/museum/nav";

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="pb-24">
      <header className="sticky top-0 z-30 border-b border-line bg-hall/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
          <Link to="/" className="shrink-0 font-serif text-lg font-bold text-gold">
            千年金庫
          </Link>
          <nav className="flex gap-1 overflow-x-auto text-sm">
            <NavChip to="/" active={pathname === "/"}>
              長廊
            </NavChip>
            {HALLS.map((hall) => (
              <NavChip key={hall.slug} to="/hall/$hall" params={{ hall: hall.slug }} active={pathname === `/hall/${hall.slug}`}>
                {hall.label}
              </NavChip>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}

function NavChip({
  to,
  params,
  active,
  children,
}: {
  to: "/" | "/hall/$hall";
  params?: { hall: string };
  active: boolean;
  children: string;
}) {
  return (
    <Link
      to={to}
      params={params}
      className={`inline-flex min-h-11 shrink-0 items-center rounded-full px-3 ${
        active ? "bg-gold text-ink" : "text-cream-dim hover:text-cream"
      }`}
    >
      {children}
    </Link>
  );
}

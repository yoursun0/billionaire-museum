import { createFileRoute, Link } from "@tanstack/react-router";
import { PersonDossier } from "@/components/museum/PersonDossier";
import { Shell } from "@/components/museum/Shell";
import { TYCOONS, byId } from "@/data/wealth";

export const Route = createFileRoute("/person/$id")({
  component: PersonPage,
});

function PersonPage() {
  const { id } = Route.useParams();
  const found = TYCOONS.some((person) => person.id === id);
  return (
    <Shell>
      <main className="mx-auto max-w-6xl px-4 py-8">
        {found ? (
          <PersonDossier person={byId(id)} standalone />
        ) : (
          <div>
            <h1 className="text-4xl font-bold">冇呢個展櫃</h1>
            <Link to="/" className="mt-4 inline-flex min-h-11 items-center text-gold">
              返長廊
            </Link>
          </div>
        )}
      </main>
    </Shell>
  );
}

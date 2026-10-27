import { createFileRoute } from "@tanstack/react-router";
import { HallView } from "@/components/museum/HallView";
import { Shell } from "@/components/museum/Shell";

export const Route = createFileRoute("/hall/$hall")({
  component: HallPage,
});

function HallPage() {
  const { hall } = Route.useParams();
  return (
    <Shell>
      <HallView hall={hall} />
    </Shell>
  );
}

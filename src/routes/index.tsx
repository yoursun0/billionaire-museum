import { createFileRoute } from "@tanstack/react-router";
import { MuseumApp } from "@/components/museum/MuseumApp";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <MuseumApp />;
}

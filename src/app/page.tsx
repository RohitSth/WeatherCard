import CardBackground from "./components/CardBackground";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CardBackground status="night" />
    </main>
  );
}

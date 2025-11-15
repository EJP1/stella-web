import { Header } from "@/components/header";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Mission
          </h1>
        </div>
      </main>
    </div>
  );
}

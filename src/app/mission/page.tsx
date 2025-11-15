import { PageLayout } from "@/components/page-layout";

export default function MissionPage() {
  return (
    <PageLayout>
      {/* Main Content */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Mission
          </h1>
        </div>
      </main>
    </PageLayout>
  );
}

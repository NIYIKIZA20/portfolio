import { JournalHeader } from "@/components/journal/journal-header";
import { JournalEntries } from "@/components/journal/journal-entries";
import { JournalSidebar } from "@/components/journal/journal-sidebar";

export const metadata = {
  title: "Reflectional Journal - Jean Baptiste N.",
  description:
    "Personal reflections, insights, and thoughts on my development journey, technology trends, and professional growth.",
};

export default function JournalPage() {
  return (
    <div className="min-h-screen bg-background">
      <JournalHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <JournalEntries />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <JournalSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

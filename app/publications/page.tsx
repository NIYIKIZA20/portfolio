import { PublicationsHeader } from "@//components/publications/publications-header";
import { PublicationsList } from "@/components/publications/publications-list";
import { PublicationsSidebar } from "@/components/publications/publications-sidebar";

export const metadata = {
  title: "Publications - iyikiza",
  description:
    "Academic publications, research papers, and scholarly articles by Jean Baptiste Niyikiza.",
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PublicationsHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <PublicationsList />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <PublicationsSidebar />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <LoadingSpinner size="lg" />
        <p
          className="text-muted-foreground"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}

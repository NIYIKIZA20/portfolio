"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

export function JournalHeader() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to home</span>
              </Button>
            </Link>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Reflectional Journal
                </h1>
                <p
                  className="text-muted-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Personal insights and thoughts on my development journey
                </p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span style={{ fontFamily: "var(--font-body)" }}>
              Updated regularly
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

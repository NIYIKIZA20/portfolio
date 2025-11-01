"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Rss, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function BlogHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to home</span>
              </Button>
            </Link>

            <div>
              <h1
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Blog
              </h1>
              <p
                className="text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Technical articles, tutorials, and insights
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Rss className="h-4 w-4 mr-2" />
              RSS Feed
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

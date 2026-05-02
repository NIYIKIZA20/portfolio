"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Users } from "lucide-react";
import Link from "next/link";
import { publications } from "@/lib/publications-data";

export function PublicationsList() {
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 10;

  const totalPages = Math.ceil(publications.length / publicationsPerPage);
  const startIndex = (currentPage - 1) * publicationsPerPage;
  const currentPublications = publications.slice(
    startIndex,
    startIndex + publicationsPerPage,
  );

  return (
    <div className="space-y-8">
      {/* Publications List */}
      <div className="space-y-6">
        {currentPublications.map((publication) => (
          <Card
            key={publication.id}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle
                    className="text-xl group-hover:text-primary transition-colors duration-200 mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {publication.title}
                  </CardTitle>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        {publication.authors.join(", ")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        {publication.year}
                      </span>
                    </div>
                  </div>

                  <p
                    className="text-muted-foreground mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {publication.journal}
                  </p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {publication.abstract && (
                <p
                  className="text-muted-foreground line-clamp-3"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {publication.abstract}
                </p>
              )}

              {publication.keywords && publication.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {publication.keywords.slice(0, 4).map((keyword) => (
                    <Badge key={keyword} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                  {publication.keywords.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{publication.keywords.length - 4} more
                    </Badge>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">
                  {publication.doi && (
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      DOI: {publication.doi}
                    </span>
                  )}
                </div>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      View Publication
                    </span>
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
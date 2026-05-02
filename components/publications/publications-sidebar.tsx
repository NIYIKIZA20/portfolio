import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Tag, User, BookOpen } from "lucide-react";
import { publications } from "@/lib/publications-data";
import Link from "next/link";

export function PublicationsSidebar() {
  const recentPublications = publications.slice(0, 5);
  const allKeywords = Array.from(new Set(publications.flatMap((pub) => pub.keywords || [])));
  const popularKeywords = allKeywords.slice(0, 12);

  return (
    <div className="space-y-6">
      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <User className="h-5 w-5 text-primary" />
            Research Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Jean Baptiste N. is a researcher focused on innovative solutions in technology and environmental monitoring. His work spans multiple disciplines including sensor technology, water safety, and sustainable systems.
          </p>
        </CardContent>
      </Card>

      {/* Recent Publications */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Calendar className="h-5 w-5 text-primary" />
            Recent Publications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPublications.map((publication) => (
              <div key={publication.id} className="space-y-2">
                <Link
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <h4
                    className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {publication.title}
                  </h4>
                </Link>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    {publication.year}
                  </span>
                  <span>•</span>
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    {publication.journal}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Research Keywords */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Tag className="h-5 w-5 text-primary" />
            Research Areas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {popularKeywords.map((keyword) => (
              <Badge
                key={keyword}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Academic Resources */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <BookOpen className="h-5 w-5 text-primary" />
            Academic Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-primary hover:text-primary/80 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Google Scholar
            </a>
            <a
              href="https://orcid.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-primary hover:text-primary/80 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ORCID Profile
            </a>
            <a
              href="https://researchgate.net"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-primary hover:text-primary/80 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              ResearchGate
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
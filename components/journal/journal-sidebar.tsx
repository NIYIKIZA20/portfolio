import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Tag, TrendingUp } from "lucide-react";

export function JournalSidebar() {
  const recentTags = [
    { name: "learning", count: 8 },
    { name: "react", count: 6 },
    { name: "typescript", count: 5 },
    { name: "community", count: 4 },
    { name: "growth", count: 4 },
    { name: "problem-solving", count: 3 },
    { name: "ai", count: 2 },
    { name: "mentoring", count: 2 },
  ];

  const monthlyStats = [
    { month: "January 2024", entries: 5 },
    { month: "December 2023", entries: 8 },
    { month: "November 2023", entries: 6 },
    { month: "October 2023", entries: 4 },
  ];

  return (
    <div className="space-y-6">
      {/* About Journal */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Calendar className="h-5 w-5 text-primary" />
            About This Journal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            This is my personal space for reflection, where I share thoughts
            about my development journey, challenges I've overcome, and insights
            I've gained along the way.
          </p>
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Tag className="h-5 w-5 text-primary" />
            Popular Tags
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {recentTags.map((tag) => (
              <Badge
                key={tag.name}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag.name} ({tag.count})
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Archive */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <TrendingUp className="h-5 w-5 text-primary" />
            Monthly Archive
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {monthlyStats.map((stat) => (
              <div
                key={stat.month}
                className="flex items-center justify-between"
              >
                <span
                  className="text-sm text-foreground"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {stat.month}
                </span>
                <Badge variant="outline" className="text-xs">
                  {stat.entries} entries
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Writing Philosophy */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Writing Philosophy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote
            className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            "Reflection is the beginning of wisdom. By documenting my journey, I
            not only track my growth but also help others who might be walking a
            similar path."
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}

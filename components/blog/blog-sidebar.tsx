import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp, Tag, User } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

export function BlogSidebar() {
  const recentPosts = blogPosts.slice(0, 5);
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
  const popularTags = allTags.slice(0, 12);

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
            About the Author
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-sm text-muted-foreground leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Jean Baptiste is a Full Stack Web Developer with 5+ years of
            experience. He's passionate about sharing knowledge and helping
            other developers grow through practical tutorials and insights.
          </p>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <Calendar className="h-5 w-5 text-primary" />
            Recent Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="space-y-2">
                  <h4
                    className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
            {popularTags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg flex items-center gap-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            <TrendingUp className="h-5 w-5 text-primary" />
            Stay Updated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p
            className="text-sm text-muted-foreground mb-4"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Subscribe to get notified about new articles and tutorials.
          </p>
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="w-full bg-primary text-primary-foreground px-3 py-2 text-sm rounded-md hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/blog">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to blog</span>
              </Button>
            </Link>
            <Badge variant="secondary">{post.category}</Badge>
          </div>

          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {post.title}
            </h1>

            <p
              className="text-lg text-muted-foreground leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-primary" />
                </div>
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {post.author.name}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span style={{ fontFamily: "var(--font-body)" }}>
                  {post.readTime}
                </span>
              </div>

              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

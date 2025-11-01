import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Bookmark, Heart, MessageCircle } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostSidebarProps {
  post: BlogPost;
}

export function BlogPostSidebar({ post }: BlogPostSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Actions */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <Heart className="h-4 w-4 mr-2" />
            Like this post
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Save for later
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share article
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start bg-transparent"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Leave comment
          </Button>
        </CardContent>
      </Card>

      {/* Table of Contents */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2 text-sm">
            <a
              href="#introduction"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Introduction
            </a>
            <a
              href="#main-concepts"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Main Concepts
            </a>
            <a
              href="#best-practices"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Best Practices
            </a>
            <a
              href="#examples"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Examples
            </a>
            <a
              href="#conclusion"
              className="block text-muted-foreground hover:text-primary transition-colors"
            >
              Conclusion
            </a>
          </nav>
        </CardContent>
      </Card>

      {/* Author Info */}
      <Card>
        <CardHeader>
          <CardTitle
            className="text-lg"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            About the Author
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-semibold">JB</span>
            </div>
            <div>
              <h4
                className="font-semibold mb-1"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.author.name}
              </h4>
              <p
                className="text-sm text-muted-foreground"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {post.author.bio}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getRelatedPosts, type BlogPost } from "@/lib/blog-data";

interface RelatedPostsProps {
  currentPost: BlogPost;
}

export function RelatedPosts({ currentPost }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentPost);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section>
      <h2
        className="text-2xl font-bold mb-8"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Related Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Card
            key={post.id}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2">
                <Badge
                  variant="secondary"
                  className="bg-background/80 backdrop-blur-sm text-xs"
                >
                  {post.category}
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle
                className="text-lg group-hover:text-primary transition-colors line-clamp-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p
                className="text-sm text-muted-foreground line-clamp-2 mb-3"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {post.excerpt}
              </p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span style={{ fontFamily: "var(--font-body)" }}>
                    {post.readTime}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

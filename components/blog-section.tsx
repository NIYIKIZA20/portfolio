import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how to create performant and scalable web applications using Next.js, including best practices for routing, data fetching, and optimization.",
      image: "/nextjs-development-coding.png",
      date: "2024-01-15",
      readTime: "5 min read",
      slug: "building-scalable-web-applications-nextjs",
    },
    {
      title: "The Future of Full-Stack Development",
      excerpt:
        "Exploring emerging trends and technologies that are shaping the future of full-stack development, from AI integration to serverless architectures.",
      image: "/future-tech-development.png",
      date: "2024-01-10",
      readTime: "7 min read",
      slug: "future-of-fullstack-development",
    },
    {
      title: "Mastering TypeScript for Better Code Quality",
      excerpt:
        "Discover how TypeScript can improve your development workflow and code quality with practical examples and advanced patterns.",
      image: "/typescript-code.png",
      date: "2024-01-05",
      readTime: "6 min read",
      slug: "mastering-typescript-code-quality",
    },
  ];

  return (
    <section id="blog" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Latest Blog Posts
            </h2>
            <p
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              I share my thoughts, experiences, and insights about web
              development, technology trends, and best practices in the
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span style={{ fontFamily: "var(--font-body)" }}>
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle
                    className="text-xl group-hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {post.excerpt}
                  </p>

                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-primary hover:text-primary/80"
                    >
                      <span style={{ fontFamily: "var(--font-body)" }}>
                        Read More
                      </span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/blog">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

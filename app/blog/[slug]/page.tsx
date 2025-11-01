import { BlogPostHeader } from "@/components/blog/blog-post-header";
import { BlogPostContent } from "@/components/blog/blog-post-content";
import { BlogPostSidebar } from "@/components/blog/blog-post-sidebar";
import { RelatedPosts } from "@/components/blog/related-posts";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Jean Baptiste N.`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogPostHeader post={post} />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <BlogPostContent post={post} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogPostSidebar post={post} />
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <RelatedPosts currentPost={post} />
          </div>
        </div>
      </main>
    </div>
  );
}

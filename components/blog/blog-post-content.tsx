import type { BlogPost } from "@/lib/blog-data";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <article className="max-w-none">
      <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="prose prose-gray dark:prose-invert max-w-none prose-headings:font-heading prose-p:font-body prose-li:font-body"
        style={{ fontFamily: "var(--font-body)" }}
        dangerouslySetInnerHTML={{
          __html: post.content.replace(/\n/g, "<br />"),
        }}
      />
    </article>
  );
}

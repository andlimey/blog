import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { cn } from "app/utils/tailwind";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="flex flex-col gap-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col"
            href={`/blog/${post.slug}`}
          >
            <div
              className={cn(
                "w-full flex flex-col space-x-0",
                "md:flex-row md:space-x-2"
              )}
            >
              <p className="tabular-nums basis-1/4">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}

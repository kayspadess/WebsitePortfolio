import Link from "next/link";
import { supabase, Post } from "@/lib/supabase";

export const revalidate = 0;

async function getPosts(): Promise<Omit<Post, "content">[]> {
  const { data, error } = await supabase
    .from("posts")
    .select("id, title, slug, excerpt, tags, published_at")
    .order("published_at", { ascending: false });

  if (error || !data) return [];
  return data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Blog</h1>
        <Link
          href="/blog/new"
          className="text-sm font-mono text-blue-400 border border-blue-400/30 px-3 py-1.5 rounded hover:bg-blue-400/10 transition-colors"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-neutral-500 font-mono text-sm">No posts yet.</p>
      ) : (
        <ul className="divide-y divide-neutral-800">
          {posts.map((post) => (
            <li key={post.slug} className="py-5">
              <Link href={`/blog/${post.slug}`} className="group space-y-1 block">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="font-semibold text-neutral-100 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    {new Date(post.published_at).toISOString().slice(0, 10)}
                  </span>
                </div>
                {post.excerpt && (
                  <p className="text-sm text-neutral-400 leading-relaxed">{post.excerpt}</p>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-1.5 pt-1">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-xs text-neutral-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

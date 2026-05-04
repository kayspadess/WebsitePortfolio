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
          className="text-sm font-mono text-sky-400 border border-sky-400/30 px-3 py-1.5 rounded hover:bg-sky-400/10 transition-colors"
        >
          + New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-sky-500/70" />
            <span className="ml-2 text-xs font-mono text-slate-500">posts/</span>
          </div>
          <p className="px-4 py-6 text-slate-500 font-mono text-sm">// no posts yet</p>
        </div>
      ) : (
        <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900">
          {/* Terminal chrome */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-sky-500/70" />
            <span className="ml-2 text-xs font-mono text-slate-500">posts/</span>
            <span className="ml-auto text-xs font-mono text-slate-600">{posts.length} file{posts.length !== 1 ? "s" : ""}</span>
          </div>

          {/* File list */}
          <ul className="divide-y divide-slate-800">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex items-start gap-3 px-4 py-3.5 hover:bg-slate-800/60 transition-colors"
                >
                  {/* File icon area */}
                  <div className="shrink-0 mt-0.5 flex flex-col items-center gap-0.5">
                    <span className="text-sky-400/60 font-mono text-xs group-hover:text-sky-400 transition-colors">›</span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-sm text-slate-200 group-hover:text-sky-400 transition-colors truncate">
                        {post.title.toLowerCase().replace(/\s+/g, "-")}.md
                      </span>
                      <span className="text-xs font-mono text-slate-600 shrink-0">
                        {new Date(post.published_at).toISOString().slice(0, 10)}
                      </span>
                    </div>

                    {post.excerpt && (
                      <p className="text-xs text-slate-500 leading-relaxed font-mono truncate">
                        // {post.excerpt}
                      </p>
                    )}

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-1.5 pt-0.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded text-xs text-slate-500 font-mono group-hover:border-sky-400/30 group-hover:text-sky-400/70 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

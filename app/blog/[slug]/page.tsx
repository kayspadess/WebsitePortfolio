import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";

export const revalidate = 0;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) notFound();

  const contentHtml = await marked(post.content);

  return (
    <article className="max-w-2xl space-y-8">
      <div className="space-y-2">
        <Link
          href="/blog"
          className="text-xs font-mono text-slate-500 hover:text-slate-300 transition-colors"
        >
          ← Back to blog
        </Link>
        <h1 className="text-2xl font-bold text-slate-100">{post.title}</h1>
        <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
          <span>{new Date(post.published_at).toISOString().slice(0, 10)}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex gap-1.5">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className="prose prose-invert prose-neutral max-w-none
          prose-headings:font-semibold prose-headings:text-slate-100
          prose-p:text-slate-300 prose-p:leading-relaxed
          prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-sky-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-700
          prose-blockquote:border-sky-400 prose-blockquote:text-slate-400
          prose-strong:text-slate-100
          prose-li:text-slate-300"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}

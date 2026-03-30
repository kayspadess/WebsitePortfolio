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
          className="text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors"
        >
          ← Back to blog
        </Link>
        <h1 className="text-2xl font-bold text-neutral-100">{post.title}</h1>
        <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
          <span>{new Date(post.published_at).toISOString().slice(0, 10)}</span>
          {post.tags && post.tags.length > 0 && (
            <>
              <span>·</span>
              <div className="flex gap-1.5">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded"
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
          prose-headings:font-semibold prose-headings:text-neutral-100
          prose-p:text-neutral-300 prose-p:leading-relaxed
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-code:text-blue-300 prose-code:bg-neutral-800 prose-code:px-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-700
          prose-blockquote:border-blue-400 prose-blockquote:text-neutral-400
          prose-strong:text-neutral-100
          prose-li:text-neutral-300"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}

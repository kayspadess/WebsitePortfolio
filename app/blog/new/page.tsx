"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function toSlug(val: string) {
    return val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function handleTitleChange(val: string) {
    setTitle(val);
    setSlug(toSlug(val));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password,
        title,
        slug,
        excerpt,
        content,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    router.push(`/blog/${data.slug}`);
  }

  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-2xl font-bold">New Post</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Slug</label>
          <input
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 font-mono focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Excerpt</label>
          <input
            type="text"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Tags <span className="normal-case">(comma separated)</span>
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="kubernetes, devops, terraform"
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 font-mono focus:outline-none focus:border-blue-400 placeholder:text-neutral-600"
          />
        </div>

        <div className="space-y-1">
          <label className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
            Content <span className="normal-case">(Markdown)</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows={18}
            className="w-full bg-neutral-900 border border-neutral-700 rounded px-3 py-2 text-sm text-neutral-100 font-mono focus:outline-none focus:border-blue-400 resize-y"
          />
        </div>

        {error && <p className="text-sm text-red-400 font-mono">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 bg-blue-500 hover:bg-blue-400 disabled:opacity-50 text-white text-sm font-medium rounded transition-colors"
        >
          {loading ? "Publishing…" : "Publish"}
        </button>
      </form>
    </div>
  );
}

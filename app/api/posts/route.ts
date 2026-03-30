import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  const { password, title, slug, excerpt, content, tags } = await request.json();

  if (password !== process.env.BLOG_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!title || !slug || !content) {
    return NextResponse.json({ error: "Title, slug, and content are required" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("posts")
    .insert([{ title, slug, excerpt, content, tags }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}

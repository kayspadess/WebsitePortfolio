# Karol Espiritu — DevOps Portfolio

Personal portfolio and blog site built with Next.js, Tailwind CSS, and Supabase.

Live at: [karolespiritu.vercel.app](https://karolespiritu.vercel.app)

## Pages

| Route | Description |
|-------|-------------|
| `/` | About me, current stack, and links |
| `/resume` | Work experience, skills, and PDF download |
| `/projects` | Project cards with tags, status, and repo links |
| `/qualifications` | Education, certifications, and courses |
| `/blog` | List of blog posts fetched from Supabase |
| `/blog/[slug]` | Individual blog post rendered from Markdown |
| `/blog/new` | Password-protected post editor |

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Database:** Supabase (blog posts)
- **Deployment:** Vercel

## Running Locally

1. Clone the repo
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   BLOG_PASSWORD=your_blog_password
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000)

## Blog

Posts are stored in Supabase with the following schema:

```sql
create table posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text not null,
  tags text[],
  published_at timestamptz default now()
);
```

To write a new post, go to `/blog/new` and enter your blog password. Posts are written in Markdown and rendered on the post page.

## Deployment

Hosted on Vercel. Every push to `main` triggers an automatic redeploy.

Add the following environment variables in Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `BLOG_PASSWORD`

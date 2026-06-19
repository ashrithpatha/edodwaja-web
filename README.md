# Edodwaja Website

Full-featured LMS website for Edodwaja, built with Next.js 15 (App Router) + Tailwind v4,
sharing the same content as the mobile app and designed to share the same Supabase backend.

## Connect to your Supabase project (shared with the mobile app)

1. Copy `.env.local.example` to `.env.local`
2. Fill in:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```
   (Use the same project the mobile app uses — get these from Supabase dashboard → Project Settings → API.
   Never use the `service_role` key here.)
3. Restart the dev server. Sign-ups will write to the same `profiles` table the app reads from,
   so a user created on the website shows up in the app and vice versa.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## What's included

- **Home** — hero, featured courses, store highlights, news, CTA
- **/courses** — all 54 courses from the app's data, filterable by category, with detail pages
- **/store** — all 6 kits/products with cart (localStorage-based) and checkout stub
- **/news** — articles from the app's News tab
- **/quizzes** — interactive quiz-taking experience
- **/login, /register, /dashboard** — Supabase auth wired to the shared `profiles` table

## Data

Course/product/news/quiz content currently uses the same sample data as the mobile app
(`lib/data.ts` + `data/data.json`). Swap this for live Supabase queries whenever you're
ready to move off sample data — the data shapes (`Course`, `Product`, `NewsItem`, `Quiz`)
already match the app's TypeScript interfaces in `artifacts/mobile/data/mockData.ts`.

## Design

Colors and type scale are pulled directly from the mobile app's `constants/colors.ts`
(`#4F46E5` primary, `#F97316` secondary, `#1A1A2E` ink) with a Space Grotesk display font
and a subtle circuit-trace motif in the hero, echoing MakersFlow's clean hero/big-heading style
while delivering the full LMS feature set.

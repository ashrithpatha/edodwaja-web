import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNews, NEWS_ITEMS } from "@/lib/data";

export function generateStaticParams() {
  return NEWS_ITEMS.map((n) => ({ id: n.id }));
}

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getNews(id);
  if (!item) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <Link href="/news" className="text-sm text-[var(--color-primary)] font-medium hover:underline">
        ← Back to news
      </Link>

      <div className="relative h-72 rounded-2xl overflow-hidden my-6">
        <Image src={item.thumbnail} alt={item.title} fill className="object-cover" />
      </div>

      <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-muted-bg)] text-[var(--color-primary)] mb-3">
        {item.category}
      </span>
      <h1 className="font-display text-3xl font-bold mb-3">{item.title}</h1>
      <div className="flex items-center gap-3 text-sm text-[var(--color-muted)] mb-8">
        <span>{item.author}</span>
        <span>·</span>
        <span>{item.date}</span>
        <span>·</span>
        <span>{item.readTime}</span>
      </div>

      <p className="text-[var(--color-ink)] leading-relaxed whitespace-pre-line">{item.content}</p>

      {item.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-[var(--color-border)]">
          {item.tags.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-[var(--color-muted-bg)] text-[var(--color-muted)]">
              #{t}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

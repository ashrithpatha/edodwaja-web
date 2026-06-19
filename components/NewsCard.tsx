import Link from "next/link";
import Image from "next/image";
import type { NewsItem } from "@/lib/data";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-all"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full text-[var(--color-primary)]">
          {item.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-base text-[var(--color-ink)] line-clamp-2 mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-[var(--color-muted)] line-clamp-2 mb-3">{item.summary}</p>
        <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
          <span>{item.author}</span>
          <span>{item.readTime}</span>
        </div>
      </div>
    </Link>
  );
}

import { NEWS_ITEMS } from "@/lib/data";
import NewsCard from "@/components/NewsCard";

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">News & Articles</h1>
        <p className="text-[var(--color-muted)]">
          Stay up to date with robotics, AI and electronics happenings.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {NEWS_ITEMS.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import { COURSES, CATEGORIES } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return COURSES.filter((c) => {
      const matchesCategory = category === "All" || c.category === category;
      const matchesQuery = c.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">All Courses</h1>
        <p className="text-[var(--color-muted)]">
          {COURSES.length} courses across robotics, AI, electronics and more.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-lg border border-[var(--color-border)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
        />
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["All", ...CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-muted-bg)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--color-muted)] py-20 text-center">No courses match your search.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
  );
}

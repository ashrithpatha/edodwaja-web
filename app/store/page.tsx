"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, STORE_CATEGORIES } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function StorePage() {
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    if (category === "All") return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === category || p.subcategory === category);
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold mb-2">Maker Kits Store</h1>
        <p className="text-[var(--color-muted)]">
          Physical kits and digital resources to bring your courses to life.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-8">
        {["All", "physical", "digital", ...STORE_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`whitespace-nowrap px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
              category === cat
                ? "bg-[var(--color-primary)] text-white"
                : "bg-[var(--color-muted-bg)] text-[var(--color-ink)] hover:bg-[var(--color-border)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-[var(--color-muted)] py-20 text-center">No products in this category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

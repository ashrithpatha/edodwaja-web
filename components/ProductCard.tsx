"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg transition-all">
      <Link href={`/store/${product.id}`} className="block relative h-40 w-full overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[var(--color-secondary)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/store/${product.id}`}>
          <h3 className="font-display font-semibold text-base text-[var(--color-ink)] line-clamp-2 mb-1">
            {product.title}
          </h3>
        </Link>
        <p className="text-xs text-[var(--color-muted)] mb-3">{product.subcategory}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-bold text-[var(--color-ink)]">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-xs text-[var(--color-muted)] line-through">
                ₹{product.originalPrice}
              </span>
              <span className="text-xs font-semibold text-[var(--color-success)]">
                {discount}% off
              </span>
            </>
          )}
        </div>
        <button
          onClick={() => addItem(product)}
          disabled={!product.inStock}
          className="w-full text-sm font-semibold py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {product.inStock ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
}

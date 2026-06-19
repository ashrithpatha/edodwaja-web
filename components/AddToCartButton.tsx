"use client";

import { useState } from "react";
import type { Product } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      onClick={() => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
      }}
      disabled={!product.inStock}
      className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors disabled:opacity-40"
    >
      {!product.inStock ? "Out of stock" : added ? "Added ✓" : "Add to cart"}
    </button>
  );
}

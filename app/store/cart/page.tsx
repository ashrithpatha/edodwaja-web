"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-bold mb-3">Your cart is empty</h1>
        <p className="text-[var(--color-muted)] mb-6">Browse our maker kits to get started.</p>
        <Link href="/store" className="inline-block px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold">
          Go to store
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="font-display text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-4">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-center gap-4 border border-[var(--color-border)] rounded-xl p-4">
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-sm">{product.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">₹{product.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-7 h-7 rounded-full bg-[var(--color-muted-bg)] font-bold"
              >
                −
              </button>
              <span className="w-6 text-center text-sm">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-7 h-7 rounded-full bg-[var(--color-muted-bg)] font-bold"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(product.id)}
              className="text-xs text-[var(--color-secondary)] font-medium ml-2"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[var(--color-border)]">
        <button onClick={clearCart} className="text-sm text-[var(--color-muted)] hover:text-[var(--color-secondary)]">
          Clear cart
        </button>
        <div className="text-right">
          <p className="text-sm text-[var(--color-muted)]">Total</p>
          <p className="font-display text-2xl font-bold">₹{total}</p>
        </div>
      </div>

      <button className="w-full mt-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors">
        Proceed to Checkout
      </button>
    </div>
  );
}

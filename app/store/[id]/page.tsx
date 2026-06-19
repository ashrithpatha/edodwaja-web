import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, PRODUCTS } from "@/lib/data";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/store" className="text-sm text-[var(--color-primary)] font-medium hover:underline">
        ← Back to store
      </Link>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
          <Image src={product.thumbnail} alt={product.title} fill className="object-cover" />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[var(--color-secondary)] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-muted-bg)] text-[var(--color-muted)] capitalize mb-3">
            {product.category} · {product.subcategory}
          </span>
          <h1 className="font-display text-3xl font-bold mb-3">{product.title}</h1>
          <div className="flex items-center gap-2 text-sm text-[var(--color-muted)] mb-4">
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>
          <p className="text-[var(--color-muted)] mb-6">{product.description}</p>

          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-3xl font-bold">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-[var(--color-muted)] line-through">₹{product.originalPrice}</span>
            )}
          </div>

          {product.features?.length > 0 && (
            <ul className="space-y-2 mb-8 text-sm">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[var(--color-success)]">✓</span> {f}
                </li>
              ))}
            </ul>
          )}

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

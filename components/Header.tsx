"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";

const NAV = [
  { href: "/courses", label: "Courses" },
  { href: "/store", label: "Kits Store" },
  { href: "/news", label: "News" },
  { href: "/quizzes", label: "Quizzes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-display font-bold text-sm">
            E
          </span>
          <span className="font-display font-bold text-lg text-[var(--color-ink)]">Edodwaja</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname?.startsWith(item.href)
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-ink)]/80 hover:text-[var(--color-primary)]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/store/cart" className="relative p-2 text-[var(--color-ink)]">
            <CartIcon />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-[var(--color-secondary)] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>

          {user ? (
            <div className="hidden sm:flex items-center gap-3">
              <Link href="/dashboard" className="text-sm font-medium text-[var(--color-ink)]/80 hover:text-[var(--color-primary)]">
                {profile?.full_name || "Dashboard"}
              </Link>
              <button
                onClick={() => signOut()}
                className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-secondary)]"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/login"
                className="text-sm font-medium px-4 py-2 rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-muted-bg)]"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Sign up
              </Link>
            </div>
          )}

          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-4 py-4 space-y-3">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-[var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[var(--color-border)] flex gap-2">
            {user ? (
              <>
                <Link href="/dashboard" className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--color-muted-bg)]">
                  Dashboard
                </Link>
                <button onClick={() => signOut()} className="flex-1 text-sm font-semibold px-4 py-2 rounded-lg border border-[var(--color-border)]">
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-lg border border-[var(--color-border)]">
                  Log in
                </Link>
                <Link href="/register" className="flex-1 text-center text-sm font-semibold px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { COURSES } from "@/lib/data";
import CourseCard from "@/components/CourseCard";

export default function DashboardPage() {
  const { user, profile, configured, loading } = useAuth();
  const purchased = COURSES.filter((c) => c.isPurchased);

  if (loading) {
    return <div className="max-w-7xl mx-auto px-4 py-20 text-center text-[var(--color-muted)]">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-24 text-center">
        <h1 className="font-display text-2xl font-bold mb-3">You&apos;re not logged in</h1>
        <p className="text-[var(--color-muted)] mb-6">
          {configured
            ? "Log in to see your dashboard and enrolled courses."
            : "Supabase isn't connected yet — add credentials to .env.local to enable accounts."}
        </p>
        <Link href="/login" className="inline-block px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold">
          Log in
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl font-bold mb-2">
        Welcome back{profile?.full_name ? `, ${profile.full_name}` : ""}!
      </h1>
      <p className="text-[var(--color-muted)] mb-10">Continue where you left off.</p>

      <h2 className="font-display text-xl font-bold mb-4">Your Courses</h2>
      {purchased.length === 0 ? (
        <p className="text-[var(--color-muted)]">You haven&apos;t enrolled in any courses yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {purchased.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      )}
    </div>
  );
}

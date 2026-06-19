import Link from "next/link";
import { COURSES, PRODUCTS, NEWS_ITEMS } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import ProductCard from "@/components/ProductCard";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const featuredCourses = COURSES.slice(0, 4);
  const featuredProducts = PRODUCTS.slice(0, 3);
  const latestNews = NEWS_ITEMS.slice(0, 3);

  const stats = [
    { value: `${COURSES.length}+`, label: "Courses" },
    { value: "10k+", label: "Students" },
    { value: "4.8★", label: "Avg. Rating" },
    { value: "6", label: "Maker Kits" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-[var(--color-surface)] text-white overflow-hidden">
        <div className="circuit-bg absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <span className="inline-block text-xs font-mono tracking-wider text-[var(--color-secondary)] uppercase mb-4">
            Learn. Build. Innovate.
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight mb-6">
            Build the future with <span className="text-[var(--color-secondary)]">robotics, AI</span> & electronics
          </h1>
          <p className="text-white/70 text-lg max-w-xl mb-8">
            Hands-on STEM courses and maker kits designed for Indian students — from your first
            circuit to autonomous robots.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="px-6 py-3 rounded-lg bg-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              Explore Courses
            </Link>
            <Link
              href="/store"
              className="px-6 py-3 rounded-lg border border-white/20 font-semibold hover:bg-white/10 transition-colors"
            >
              Shop Maker Kits
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 max-w-2xl">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-secondary)]">
                  {s.value}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-3xl font-bold mb-3">Why learn with Edodwaja?</h2>
          <p className="text-[var(--color-muted)]">
            A complete maker education ecosystem — courses, hardware kits, and a community of
            young innovators.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Project-based courses", desc: "Learn by building real robots, circuits and AI projects, not just theory.", icon: "📐" },
            { title: "Hardware + software", desc: "Pair every course with a hands-on maker kit shipped to your door.", icon: "🔧" },
            { title: "Quizzes & certificates", desc: "Test your knowledge and earn certificates as you complete each course.", icon: "🏆" },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 border border-[var(--color-border)]">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-muted)]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Featured Courses</h2>
            <p className="text-[var(--color-muted)]">Hand-picked courses to kickstart your maker journey.</p>
          </div>
          <Link href="/courses" className="hidden sm:block text-sm font-semibold text-[var(--color-primary)] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCourses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </section>

      {/* STORE HIGHLIGHTS */}
      <section className="bg-[var(--color-muted-bg)] py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-2">Maker Kits Store</h2>
              <p className="text-[var(--color-muted)]">Bring your courses to life with hands-on hardware.</p>
            </div>
            <Link href="/store" className="hidden sm:block text-sm font-semibold text-[var(--color-primary)] hover:underline">
              Shop all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold mb-2">Latest News</h2>
            <p className="text-[var(--color-muted)]">Updates from the world of robotics, AI and electronics.</p>
          </div>
          <Link href="/news" className="hidden sm:block text-sm font-semibold text-[var(--color-primary)] hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((n) => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-[var(--color-primary)] text-white px-8 py-14 text-center relative overflow-hidden">
          <h2 className="font-display text-3xl font-bold mb-3">Ready to start building?</h2>
          <p className="text-white/80 max-w-lg mx-auto mb-7">
            Join thousands of students learning robotics, AI and electronics the hands-on way.
          </p>
          <Link
            href="/register"
            className="inline-block px-7 py-3 rounded-lg bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
          >
            Create your free account
          </Link>
        </div>
      </section>
    </>
  );
}

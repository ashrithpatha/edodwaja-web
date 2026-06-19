import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, COURSES } from "@/lib/data";

export function generateStaticParams() {
  return COURSES.map((c) => ({ id: c.id }));
}

export default async function CourseDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourse(id);
  if (!course) notFound();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/courses" className="text-sm text-[var(--color-primary)] font-medium hover:underline">
        ← Back to courses
      </Link>

      <div className="grid lg:grid-cols-3 gap-10 mt-6">
        <div className="lg:col-span-2">
          <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
            <Image src={course.thumbnail} alt={course.title} fill className="object-cover" />
          </div>

          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-accent,#EEF2FF)] text-[var(--color-primary)] mb-3">
            {course.category}
          </span>
          <h1 className="font-display text-3xl font-bold mb-3">{course.title}</h1>
          <p className="text-[var(--color-muted)] mb-4">{course.description}</p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)] mb-8">
            <span>👤 {course.instructor}</span>
            <span>⭐ {course.rating} ({course.reviews} reviews)</span>
            <span>⏱ {course.duration}</span>
            <span>📚 {course.lessons} lessons</span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--color-muted-bg)]">{course.level}</span>
          </div>

          <h2 className="font-display text-xl font-bold mb-4">Course Content</h2>
          <div className="space-y-3">
            {course.modules.map((m, i) => (
              <div key={m.id} className="border border-[var(--color-border)] rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm">
                    {i + 1}. {m.title}
                  </span>
                  <span className="text-xs text-[var(--color-muted)]">{m.duration}</span>
                </div>
                {m.description && (
                  <p className="text-xs text-[var(--color-muted)] mt-2">{m.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="sticky top-24 border border-[var(--color-border)] rounded-2xl p-6 bg-white">
            <div className="font-display text-3xl font-bold mb-4">
              {course.isFree ? "Free" : `₹${course.price}`}
            </div>
            <button className="w-full py-3 rounded-lg bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors mb-3">
              {course.isFree ? "Start Learning" : "Enroll Now"}
            </button>
            <ul className="text-sm text-[var(--color-muted)] space-y-2 mt-4">
              <li>✓ {course.lessons} lessons · {course.duration}</li>
              <li>✓ Certificate on completion</li>
              <li>✓ Lifetime access</li>
            </ul>
            {course.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {course.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-[var(--color-muted-bg)] text-[var(--color-muted)]">
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

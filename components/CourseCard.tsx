import Link from "next/link";
import Image from "next/image";
import type { Course } from "@/lib/data";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
    >
      <div className="relative h-40 w-full overflow-hidden">
        <Image
          src={course.thumbnail}
          alt={course.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-full text-[var(--color-primary)]">
          {course.category}
        </span>
        {course.isFree && (
          <span className="absolute top-3 right-3 bg-[var(--color-success)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            Free
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-base text-[var(--color-ink)] line-clamp-2 mb-1">
          {course.title}
        </h3>
        <p className="text-xs text-[var(--color-muted)] mb-2">{course.instructor}</p>
        <div className="flex items-center gap-1 text-xs text-[var(--color-muted)] mb-3">
          <StarIcon />
          <span className="font-medium text-[var(--color-ink)]">{course.rating}</span>
          <span>({course.reviews})</span>
          <span className="mx-1">·</span>
          <span>{course.lessons} lessons</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-[var(--color-ink)]">
            {course.isFree ? "Free" : `₹${course.price}`}
          </span>
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-[var(--color-muted-bg)] text-[var(--color-muted)]">
            {course.level}
          </span>
        </div>
      </div>
    </Link>
  );
}

function StarIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="#F97316">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
    </svg>
  );
}

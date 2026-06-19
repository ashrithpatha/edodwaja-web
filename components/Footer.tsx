import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center font-display font-bold text-sm">
              E
            </span>
            <span className="font-display font-bold text-lg">Edodwaja</span>
          </div>
          <p className="text-sm text-white/60">
            STEM education for the next generation of Indian makers — robotics, AI, and electronics.
          </p>
        </div>

        <FooterCol
          title="Learn"
          links={[
            { href: "/courses", label: "All Courses" },
            { href: "/quizzes", label: "Quizzes" },
            { href: "/news", label: "News & Articles" },
          ]}
        />
        <FooterCol
          title="Shop"
          links={[
            { href: "/store", label: "Kits Store" },
            { href: "/store?category=physical", label: "Physical Kits" },
            { href: "/store?category=digital", label: "Digital Resources" },
          ]}
        />
        <FooterCol
          title="Account"
          links={[
            { href: "/login", label: "Log in" },
            { href: "/register", label: "Sign up" },
            { href: "/dashboard", label: "Dashboard" },
          ]}
        />
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Edodwaja. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold text-sm mb-3">{title}</h4>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

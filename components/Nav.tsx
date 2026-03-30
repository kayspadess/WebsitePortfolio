"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/qualifications", label: "Qualifications" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-neutral-800 bg-neutral-950 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono font-bold text-blue-400 tracking-tight text-base sm:text-lg">
          karolespiritu<span className="text-neutral-500">@devops</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden sm:flex gap-1">
          {links.map(({ href, label }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    active
                      ? "bg-blue-400/10 text-blue-400"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="relative sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-neutral-400 hover:text-neutral-100 p-1.5 rounded transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {open && (
            <ul className="absolute right-0 top-10 w-44 bg-neutral-900 border border-neutral-700 rounded-lg shadow-xl overflow-hidden">
              {links.map(({ href, label }) => {
                const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-400/10 text-blue-400"
                          : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Plane, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "行程總覽" },
  { href: "/flight-hotel", label: "航班住宿" },
  { href: "/preparation", label: "行前準備" },
  { href: "/shopping", label: "購物攻略" },
  { href: "/local-tips", label: "當地須知" },
  { href: "/day/1", label: "Day 1" },
  { href: "/day/2", label: "Day 2" },
  { href: "/day/3", label: "Day 3" },
  { href: "/day/4", label: "Day 4" },
  { href: "/day/5", label: "Day 5" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-cream/80 border-b border-bg-cream-dark">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer"
          id="nav-logo"
        >
          <div className="w-9 h-9 rounded-full bg-accent-blue flex items-center justify-center">
            <Plane className="w-5 h-5 text-white -rotate-12" />
          </div>
          <span
            className="font-heading text-xl font-bold text-accent-blue tracking-wide"
          >
            Seoul 2026
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.href.replace(/\//g, "-").replace(/^-/, "")}`}
              className={`nav-link text-sm ${pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
          aria-label="Toggle navigation"
          id="nav-mobile-toggle"
        >
          {open ? (
            <X className="w-5 h-5 text-text-dark" />
          ) : (
            <Menu className="w-5 h-5 text-text-dark" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-bg-cream-dark bg-bg-cream/95 backdrop-blur-md">
          <div className="px-4 py-2 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`nav-link text-sm ${pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href + "/")) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

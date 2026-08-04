"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-cream/95 text-ink shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/hac-logo.png"
            alt="Horsham Athletic Club"
            width={250}
            height={94}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.14em] uppercase transition-colors ${
                  active
                    ? "text-gold-deep"
                    : "text-ink/70 hover:text-gold-deep"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-ink/15 px-3 py-2 text-xs tracking-[0.14em] text-ink uppercase md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-black/8 bg-cream px-4 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 text-sm tracking-[0.14em] text-ink/80 uppercase"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

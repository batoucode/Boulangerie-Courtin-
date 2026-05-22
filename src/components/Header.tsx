"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#produits", label: "Nos produits" },
  { href: "/#horaires", label: "Horaires" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || menuOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="w-10 h-10 bg-brand-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
              C
            </span>
            <div className="leading-tight">
              <span
                className={clsx(
                  "block text-lg font-bold transition-colors duration-300",
                  scrolled || menuOpen ? "text-stone-900" : "text-white"
                )}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Boulangerie
              </span>
              <span className="block text-sm font-medium text-brand-400 -mt-1 tracking-widest uppercase">
                Courtin
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === link.href
                    ? "text-brand-400"
                    : scrolled
                    ? "text-stone-700 hover:text-brand-400"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+33254464187"
              className="btn-primary text-sm px-5 py-2"
            >
              02 54 46 41 87
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={clsx(
                "block w-6 h-0.5 mb-1.5 transition-all duration-300",
                menuOpen
                  ? "bg-stone-800 rotate-45 translate-y-2"
                  : scrolled
                  ? "bg-stone-800"
                  : "bg-white"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-0.5 mb-1.5 transition-all duration-300",
                menuOpen
                  ? "opacity-0"
                  : scrolled
                  ? "bg-stone-800"
                  : "bg-white"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-0.5 transition-all duration-300",
                menuOpen
                  ? "bg-stone-800 -rotate-45 -translate-y-2"
                  : scrolled
                  ? "bg-stone-800"
                  : "bg-white"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-stone-100",
          menuOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-base font-medium py-2 border-b border-stone-100 transition-colors",
                pathname === link.href
                  ? "text-brand-400"
                  : "text-stone-700 hover:text-brand-400"
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+33254464187"
            className="btn-primary text-center mt-2"
          >
            02 54 46 41 87
          </a>
        </nav>
      </div>
    </header>
  );
}

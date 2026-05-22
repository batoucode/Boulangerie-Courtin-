"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/produits", label: "Nos produits" },
  { href: "/#gateau", label: "Gâteaux" },
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

  const isScrolled = scrolled || menuOpen;

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Wheat / bread icon */}
            <span className="w-10 h-10 bg-brand-400 rounded-full flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22l1,-2.3A4.49,4.49 0 0,0 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5A6.5,6.5 0 0,0 8.5,20C9.73,20 10.9,19.67 11.9,19.09L13.41,17.58C12.56,17.85 11.67,18 10.75,18A4.75,4.75 0 0,1 6,13.25C6,11.5 7.25,8.5 9.5,7.75C9.5,7.75 8.5,10 10,12C11.5,10 11.5,8 11.5,8C11.5,8 13,9.5 13,12C14,11 14.25,9.25 14.25,9.25C14.25,9.25 16,10 16,13C16.67,12 17,11.08 17,11.08C17.5,11.5 18,12.5 18,14A4,4 0 0,1 14,18C13.78,18 13.56,17.97 13.35,17.93L11.83,19.45A6.5,6.5 0 0,0 14,20C17.5,20 20.5,17.5 20.5,14C20.5,12 19.5,10 18.25,9C18,8.5 17.5,8 17,8Z" />
              </svg>
            </span>
            <span
              className={clsx(
                "text-xl font-bold tracking-tight transition-colors duration-300 whitespace-nowrap leading-none",
                isScrolled ? "text-stone-900" : "text-white"
              )}
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Boulangerie{" "}
              <span className="text-brand-400">Courtin</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors duration-200 whitespace-nowrap",
                  pathname === link.href
                    ? "text-brand-400"
                    : isScrolled
                    ? "text-stone-700 hover:text-brand-400"
                    : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+33254464187"
              className="ml-2 btn-primary text-sm px-5 py-2.5 whitespace-nowrap"
            >
              02 54 46 41 87
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={clsx(
                "block w-6 h-0.5 mb-1.5 transition-all duration-300",
                menuOpen
                  ? "bg-stone-800 rotate-45 translate-y-2"
                  : isScrolled
                  ? "bg-stone-800"
                  : "bg-white"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-0.5 mb-1.5 transition-all duration-300",
                menuOpen
                  ? "opacity-0"
                  : isScrolled
                  ? "bg-stone-800"
                  : "bg-white"
              )}
            />
            <span
              className={clsx(
                "block w-6 h-0.5 transition-all duration-300",
                menuOpen
                  ? "bg-stone-800 -rotate-45 -translate-y-2"
                  : isScrolled
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
          "lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-stone-100",
          menuOpen ? "max-h-screen" : "max-h-0"
        )}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={clsx(
                "text-base font-medium py-3 px-2 border-b border-stone-100 transition-colors",
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
            className="btn-primary text-center mt-4 py-3"
          >
            02 54 46 41 87
          </a>
        </nav>
      </div>
    </header>
  );
}

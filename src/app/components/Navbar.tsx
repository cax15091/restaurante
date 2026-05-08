"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#menu", label: "Menú" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#reservaciones", label: "Reservar" },
    { href: "#ubicacion", label: "Ubicación" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1F33]/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-2xl text-[#E6D3B3] font-light tracking-wide">
            Luna y Sal
          </span>
          <span className="text-[10px] text-[#C9A86A] tracking-[0.2em] uppercase">
            Puerto Esmeralda
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[#E6D3B3]/80 hover:text-[#C9A86A] transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#reservaciones"
            className="btn-primary px-6 py-2.5 text-sm inline-block"
          >
            Reservar Mesa
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menú"
          className="md:hidden text-[#E6D3B3] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <span className="block w-4 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0B1F33] border-t border-[#C9A86A]/20 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#E6D3B3] text-lg font-medium py-2 border-b border-[#C9A86A]/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservaciones"
            onClick={() => setMenuOpen(false)}
            className="btn-primary px-6 py-3 text-center text-base mt-2 inline-block"
          >
            Reservar Mesa Ahora
          </Link>
        </div>
      )}
    </header>
  );
}

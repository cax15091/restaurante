"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — Luna y Sal"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Platillo premium de Luna y Sal — Restaurante en Puerto Esmeralda, Nayarit"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F33]/75 via-[#0B1F33]/55 to-[#0B1F33]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-32">
        {/* Social proof badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-white/90 text-sm font-medium">4.9 · 248 reseñas en Google</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-light leading-tight mb-4">
          Sabores que se
          <br />
          <em className="text-[#C9A86A] not-italic">quedan contigo.</em>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light">
          Cocina contemporánea del Pacífico mexicano frente al malecón de
          Puerto Esmeralda, Nayarit.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#reservaciones"
            id="hero-reservar-btn"
            className="btn-primary px-9 py-4 text-base sm:text-lg inline-block"
          >
            Reservar Mesa
          </Link>
          <Link
            href="#menu"
            className="btn-secondary px-9 py-4 text-base sm:text-lg inline-block"
          >
            Ver Menú
          </Link>
        </div>

        {/* Info strip */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Av. Costa Azul #245, Puerto Esmeralda, Nayarit</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Lun–Jue 13:00–23:00 · Vie–Sáb hasta 00:00 · Dom 12:00–22:00</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase">Explorar</span>
        <svg className="w-5 h-5 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

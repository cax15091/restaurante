"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1F33] border-t border-white/10">
      {/* Newsletter strip */}
      <div className="border-b border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-[#E6D3B3] font-light mb-1">
              Promociones y eventos especiales
            </h3>
            <p className="text-[#E6D3B3]/50 text-sm">
              Sé el primero en saber sobre nuestros menús especiales y eventos.
            </p>
          </div>
          <form
            className="flex gap-2 w-full md:w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="tu@email.com"
              aria-label="Correo electrónico para newsletter"
              className="flex-1 md:w-64 bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C9A86A] transition"
            />
            <button
              type="submit"
              className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="font-serif text-3xl text-[#E6D3B3] font-light mb-1">Luna y Sal</div>
          <div className="text-[#C9A86A] text-xs tracking-[0.2em] uppercase mb-4">Puerto Esmeralda</div>
          <p className="text-[#E6D3B3]/50 text-sm leading-relaxed mb-6">
            Cocina contemporánea del Pacífico mexicano. Sabores que se quedan contigo.
          </p>
          {/* Social icons */}
          <div className="flex gap-3">
            {[
              {
                href: "https://instagram.com/lunaysal.mx",
                label: "Instagram",
                icon: (
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                ),
              },
              {
                href: "https://tiktok.com/@lunaysal.mx",
                label: "TikTok",
                icon: (
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.53V7.04a4.85 4.85 0 01-1-.35z" />
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#E6D3B3]/70 hover:text-[#C9A86A] hover:bg-white/15 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div className="text-[#C9A86A] text-xs font-semibold tracking-widest uppercase mb-5">
            Explorar
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { href: "#inicio", label: "Inicio" },
              { href: "#menu", label: "Menú" },
              { href: "#nosotros", label: "Nosotros" },
              { href: "#resenas", label: "Reseñas" },
              { href: "#galeria", label: "Galería" },
              { href: "#reservaciones", label: "Reservaciones" },
              { href: "#ubicacion", label: "Ubicación" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[#E6D3B3]/55 text-sm hover:text-[#C9A86A] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-[#C9A86A] text-xs font-semibold tracking-widest uppercase mb-5">
            Contacto
          </div>
          <ul className="flex flex-col gap-3 text-[#E6D3B3]/55 text-sm">
            <li>
              <a href="tel:+523110000000" className="hover:text-[#C9A86A] transition-colors">
                +52 311 000 0000
              </a>
            </li>
            <li>
              <a href="mailto:hola@lunaysal.mx" className="hover:text-[#C9A86A] transition-colors">
                hola@lunaysal.mx
              </a>
            </li>
            <li className="leading-relaxed">
              Av. Costa Azul #245
              <br />
              Puerto Esmeralda, Nayarit
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="text-[#C9A86A] text-xs font-semibold tracking-widest uppercase mb-5">
            Horarios
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              { day: "Lun – Jue", time: "13:00 – 23:00" },
              { day: "Vie – Sáb", time: "13:00 – 00:00" },
              { day: "Domingo", time: "12:00 – 22:00" },
            ].map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span className="text-[#E6D3B3]/40">{h.day}</span>
                <span className="text-[#E6D3B3]/70">{h.time}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              href="#reservaciones"
              className="btn-gold text-xs px-5 py-2.5 inline-block"
            >
              Reservar Mesa
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-[#E6D3B3]/30">
          <span>© {year} Luna y Sal. Todos los derechos reservados.</span>
          <span>Puerto Esmeralda, Nayarit, México</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";

const reviews = [
  {
    name: "Daniela R.",
    rating: 5,
    text: "Definitivamente uno de los restaurantes más bonitos que he visitado. La comida sabe increíble y el ambiente es perfecto.",
    date: "hace 2 semanas",
    initials: "DR",
    color: "bg-[#F07B72]",
  },
  {
    name: "Carlos M.",
    rating: 5,
    text: "El salmón estaba espectacular. Muy buena atención y excelente presentación. Volvería mil veces.",
    date: "hace 1 mes",
    initials: "CM",
    color: "bg-[#C9A86A]",
  },
  {
    name: "Fernanda T.",
    rating: 5,
    text: "Perfecto para citas. Todo se ve premium y los cocteles están buenísimos. Una noche increíble.",
    date: "hace 3 semanas",
    initials: "FT",
    color: "bg-[#0B1F33]",
  },
  {
    name: "Andrés V.",
    rating: 4,
    text: "Muy buen ambiente y excelente música. Volvería sin duda. Uno de los mejores restaurantes en Nayarit.",
    date: "hace 2 meses",
    initials: "AV",
    color: "bg-[#F07B72]",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section
      id="resenas"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag block mb-3">Lo que dicen nuestros clientes</span>
          <h2
            id="reviews-heading"
            className="font-serif text-4xl md:text-5xl text-[#0B1F33] font-light mb-5"
          >
            Reseñas Reales
          </h2>
          <div className="divider-gold mx-auto mb-6" />

          {/* Aggregate rating */}
          <div className="inline-flex items-center gap-4 bg-[#F8F6F2] rounded-2xl px-8 py-4 border border-[#E6D3B3]">
            <div>
              <div className="font-serif text-5xl text-[#0B1F33] font-light">4.9</div>
              <div className="flex justify-center mt-1">
                <Stars count={5} />
              </div>
            </div>
            <div className="text-left pl-4 border-l border-[#E6D3B3]">
              <div className="text-[#0B1F33] font-semibold text-sm">248 reseñas</div>
              <div className="text-[#6B7280] text-xs mt-0.5">en Google Maps</div>
              <div className="flex gap-1 mt-2">
                {[95, 3, 1, 1, 0].map((pct, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full bg-yellow-400 opacity-90"
                    style={{ width: `${pct * 0.6}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-[#F8F6F2] border border-[#E6D3B3] rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`${r.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                >
                  {r.initials}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#0B1F33] text-sm">{r.name}</div>
                  <Stars count={r.rating} />
                </div>
                <span className="text-[#9CA3AF] text-xs">{r.date}</span>
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">"{r.text}"</p>
              {/* Google logo */}
              <div className="flex items-center gap-1 mt-4">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-[#9CA3AF] text-xs">Google</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { icon: "🏆", text: "Top 3 en Nayarit" },
            { icon: "✅", text: "Reseñas verificadas" },
            { icon: "📍", text: "Local recomendado" },
            { icon: "🌟", text: "4.9 promedio" },
          ].map((trust) => (
            <div key={trust.text} className="flex items-center gap-2 text-sm text-[#6B7280]">
              <span>{trust.icon}</span>
              <span>{trust.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

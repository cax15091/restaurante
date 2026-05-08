"use client";

export default function WhySection() {
  const benefits = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Experiencia Premium Accesible",
      desc: "Gastronomía de nivel Michelin en un ambiente relajado y acogedor. Calidad de chef sin pretensiones.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9.5A1.5 1.5 0 014.5 8h15a1.5 1.5 0 010 3h-15A1.5 1.5 0 013 9.5zM4.5 8V6a2 2 0 012-2h11a2 2 0 012 2v2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v12m-4-4h8" />
        </svg>
      ),
      title: "Ingredientes del Pacífico",
      desc: "Pescados, mariscos y vegetales frescos traídos directamente de las costas de Nayarit cada mañana.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <circle cx={12} cy={11} r={3} strokeWidth={1.5} strokeLinecap="round" />
        </svg>
      ),
      title: "Frente al Malecón",
      desc: "Vistas al Pacífico desde tu mesa. La ubicación más especial de Puerto Esmeralda, perfecta para cada ocasión.",
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m8.66-9H21M3 12h-.34M17.66 5.34l-.71.71M6.34 17.66l-.71.71M17.66 18.66l-.71-.71M6.34 6.34l-.71-.71" />
          <circle cx={12} cy={12} r={4} strokeWidth={1.5} />
        </svg>
      ),
      title: "Ambiente Perfecto para Citas",
      desc: "Iluminación cálida, música envolvente y un ambiente íntimo que convierte cada cena en un recuerdo.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-20 md:py-28 bg-[#0B1F33]"
      aria-labelledby="nosotros-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="section-tag text-[#C9A86A] block mb-3">¿Por qué elegirnos?</span>
          <h2
            id="nosotros-heading"
            className="font-serif text-4xl md:text-5xl text-[#E6D3B3] font-light mb-5"
          >
            Por qué Luna y Sal
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#E6D3B3]/60 max-w-xl mx-auto text-base">
            No somos solo un restaurante. Somos la excusa perfecta para crear momentos que no se olvidan.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#C9A86A]/40 hover:bg-white/8 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#C9A86A]/15 text-[#C9A86A] mb-5 group-hover:bg-[#C9A86A]/25 transition-colors">
                {b.icon}
              </div>
              <h3 className="text-[#E6D3B3] font-semibold text-base mb-2">{b.title}</h3>
              <p className="text-[#E6D3B3]/55 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 text-center">
          {[
            { num: "248+", label: "Reseñas 5 estrellas" },
            { num: "4.9", label: "Rating en Google" },
            { num: "3 años", label: "Sirviendo Nayarit" },
            { num: "100%", label: "Ingredientes frescos" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-serif text-4xl text-[#C9A86A] font-light">{stat.num}</div>
              <div className="text-[#E6D3B3]/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="ubicacion-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag block mb-3">¿Dónde estamos?</span>
          <h2
            id="ubicacion-heading"
            className="font-serif text-4xl md:text-5xl text-[#0B1F33] font-light mb-5"
          >
            Encuéntranos
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6B7280] max-w-md mx-auto text-sm">
            Estamos frente al malecón de Puerto Esmeralda. Fácil acceso, estacionamiento disponible.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Map embed */}
          <div className="md:col-span-3 rounded-3xl overflow-hidden shadow-lg border border-[#E6D3B3] h-80 md:h-96">
            <iframe
              title="Ubicación Luna y Sal en Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29880.5!2d-105.2100!3d21.5109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Costa+Azul+245%2C+Puerto+Esmeralda%2C+Nayarit!5e0!3m2!1ses!2smx!4v1699999999999!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-[#F8F6F2] border border-[#E6D3B3] rounded-2xl p-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#0B1F33] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1F33] text-sm mb-1">Dirección</div>
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    Av. Costa Azul #245<br />
                    Puerto Esmeralda, Nayarit<br />
                    México
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-[#F8F6F2] border border-[#E6D3B3] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-10 h-10 bg-[#0B1F33] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="font-semibold text-[#0B1F33] text-sm">Horarios</div>
              </div>
              {[
                { day: "Lun – Jue", time: "13:00 – 23:00" },
                { day: "Vie – Sáb", time: "13:00 – 00:00" },
                { day: "Domingo", time: "12:00 – 22:00" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between text-sm py-1.5 border-b border-[#E6D3B3] last:border-0">
                  <span className="text-[#6B7280]">{h.day}</span>
                  <span className="font-medium text-[#0B1F33]">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Parking */}
            <div className="bg-[#F8F6F2] border border-[#E6D3B3] rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#0B1F33] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A86A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2 0M3 16l2 0m0 0h10m0 0l2 0m0 0V9m0 7l2 0" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0B1F33] text-sm">Estacionamiento</div>
                  <p className="text-[#6B7280] text-xs mt-0.5">Disponible frente al restaurante</p>
                </div>
              </div>
            </div>

            {/* Get directions CTA */}
            <a
              href="https://maps.google.com/?q=Av.+Costa+Azul+245+Puerto+Esmeralda+Nayarit+Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 btn-primary py-4 text-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Cómo Llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

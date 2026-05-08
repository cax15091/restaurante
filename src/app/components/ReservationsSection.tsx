"use client";

import { useState, FormEvent } from "react";

export default function ReservationsSection() {
  const [form, setForm] = useState({
    nombre: "",
    personas: "2",
    fecha: "",
    hora: "",
    telefono: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending — in production connect to your backend/email/reservation system
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const whatsappMsg = `Hola, me gustaría reservar una mesa.%0ANombre: ${encodeURIComponent(form.nombre || "___")}%0APersonas: ${form.personas}%0AFecha: ${form.fecha || "___"}%0AHora: ${form.hora || "___"}%0ATeléfono: ${form.telefono || "___"}`;

  return (
    <section
      id="reservaciones"
      className="py-20 md:py-28 bg-[#F8F6F2]"
      aria-labelledby="reservaciones-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag block mb-3">Reserva en minutos</span>
          <h2
            id="reservaciones-heading"
            className="font-serif text-4xl md:text-5xl text-[#0B1F33] font-light mb-5"
          >
            Reserva tu Mesa
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6B7280] max-w-lg mx-auto">
            Asegura tu lugar para una noche inolvidable. Confirmación en menos de 24 horas.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3 bg-white rounded-3xl shadow-sm border border-[#E6D3B3] p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-[#0B1F33] mb-2">¡Solicitud enviada!</h3>
                <p className="text-[#6B7280] text-sm max-w-xs">
                  Te confirmaremos tu reservación en menos de 24 horas. Si deseas respuesta inmediata, escríbenos por WhatsApp.
                </p>
                <a
                  href={`https://wa.me/523110000000?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 btn-primary px-8 py-3 text-sm inline-block"
                >
                  Confirmar por WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-[#374151] mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="personas" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Personas *
                    </label>
                    <select
                      id="personas"
                      name="personas"
                      required
                      value={form.personas}
                      onChange={handleChange}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "persona" : "personas"}
                        </option>
                      ))}
                      <option value="mas">Más de 8</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fecha" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Fecha *
                    </label>
                    <input
                      id="fecha"
                      name="fecha"
                      type="date"
                      required
                      value={form.fecha}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="hora" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Hora *
                    </label>
                    <select
                      id="hora"
                      name="hora"
                      required
                      value={form.hora}
                      onChange={handleChange}
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition bg-white"
                    >
                      <option value="">Selecciona</option>
                      {["13:00", "13:30", "14:00", "14:30", "15:00", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map(
                        (t) => (
                          <option key={t} value={t}>{t}</option>
                        )
                      )}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-[#374151] mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+52 311 000 0000"
                      className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A86A]/50 focus:border-[#C9A86A] transition"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary py-4 text-base mt-2 flex items-center justify-center gap-2"
                >
                  {sending ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    "Reservar Mesa Ahora"
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {/* WhatsApp direct */}
            <div className="bg-[#0B1F33] rounded-3xl p-6 flex flex-col gap-3">
              <div className="text-[#C9A86A] font-semibold text-sm">Reserva rápida por WhatsApp</div>
              <p className="text-[#E6D3B3]/70 text-sm">
                Escríbenos directo y confirmamos tu mesa en minutos.
              </p>
              <a
                href={`https://wa.me/523110000000?text=Hola%2C%20quiero%20reservar%20una%20mesa`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-2xl py-3 text-sm font-semibold hover:bg-[#1fbe5a] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="border border-[#E6D3B3] rounded-3xl p-6 bg-white">
              <div className="font-semibold text-[#0B1F33] text-sm mb-4">Horarios</div>
              {[
                { day: "Lun – Jue", time: "13:00 – 23:00" },
                { day: "Vie – Sáb", time: "13:00 – 00:00" },
                { day: "Domingo", time: "12:00 – 22:00" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between text-sm py-2 border-b border-[#F3F4F6] last:border-0">
                  <span className="text-[#6B7280]">{h.day}</span>
                  <span className="font-medium text-[#0B1F33]">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <a
              href="tel:+523110000000"
              className="flex items-center gap-3 border border-[#E6D3B3] rounded-3xl p-5 bg-white hover:border-[#C9A86A] transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-[#0B1F33] flex items-center justify-center group-hover:bg-[#C9A86A] transition-colors">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-[#6B7280]">Llamar para reservar</div>
                <div className="font-semibold text-[#0B1F33] text-sm">+52 311 000 0000</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

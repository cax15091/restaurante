"use client";

import Image from "next/image";
import Link from "next/link";

const menuData = {
  entradas: [
    {
      name: "Tostadas Luna",
      desc: "Tostadas de atún fresco con aguacate, mayonesa de chipotle y ajonjolí.",
      price: "$185",
      image: "/images/tostadas.png",
      tag: "Más pedido",
      tagColor: "bg-[#F07B72]",
    },
    {
      name: "Camarones Roca",
      desc: "Camarones tempura bañados en salsa cremosa ligeramente picante.",
      price: "$210",
      image: "/images/camarones.png",
      tag: "Favorito",
      tagColor: "bg-[#C9A86A]",
    },
    {
      name: "Guacamole Ahumado",
      desc: "Guacamole preparado en mesa con totopos artesanales.",
      price: "$160",
      image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=800&q=80",
      tag: "Para compartir",
      tagColor: "bg-[#0B1F33]",
    },
  ],
  fuertes: [
    {
      name: "Salmón del Pacífico",
      desc: "Salmón sellado con puré de papa trufado y vegetales rostizados.",
      price: "$390",
      image: "/images/hero.png",
      tag: "Chef recomienda",
      tagColor: "bg-[#C9A86A]",
    },
    {
      name: "Pasta Costa Azul",
      desc: "Pasta cremosa con camarón, ajo rostizado y parmesano.",
      price: "$320",
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
      tag: "Favorito",
      tagColor: "bg-[#C9A86A]",
    },
    {
      name: "Rib Eye Luna",
      desc: "Rib eye premium con mantequilla de ajo y papas al romero.",
      price: "$520",
      image: "/images/ribeye.png",
      tag: "Premium",
      tagColor: "bg-[#F07B72]",
    },
    {
      name: "Tacos Baja Premium",
      desc: "Tacos de pescado estilo Baja con salsa especial y col morada.",
      price: "$240",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80",
      tag: "Más pedido",
      tagColor: "bg-[#F07B72]",
    },
  ],
  postres: [
    {
      name: "Cheesecake de Maracuyá",
      desc: "Cremoso cheesecake con coulis de maracuyá fresco.",
      price: "$145",
      image: "/images/cheesecake.png",
      tag: "Favorito",
      tagColor: "bg-[#C9A86A]",
    },
    {
      name: "Brownie Volcánico",
      desc: "Brownie caliente con helado de vainilla artesanal.",
      price: "$155",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80",
      tag: "Irresistible",
      tagColor: "bg-[#F07B72]",
    },
  ],
};

function DishCard({
  item,
}: {
  item: (typeof menuData.entradas)[0];
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 bg-gradient-to-br from-[#0B1F33] to-[#1a3a5c]">
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#C9A86A]/30 font-serif text-5xl">L</span>
          </div>
        )}
        {/* Tag */}
        <span
          className={`absolute top-3 left-3 ${item.tagColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
        >
          {item.tag}
        </span>
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-[#0B1F33] text-base">{item.name}</h3>
          <span className="font-serif text-[#C9A86A] text-lg font-medium whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-[#6B7280] text-sm leading-relaxed flex-1">{item.desc}</p>
      </div>
    </div>
  );
}

export default function MenuSection() {
  const categories = [
    { key: "entradas", label: "Entradas", items: menuData.entradas },
    { key: "fuertes", label: "Platos Fuertes", items: menuData.fuertes },
    { key: "postres", label: "Postres", items: menuData.postres },
  ];

  return (
    <section
      id="menu"
      className="py-20 md:py-28 bg-[#F8F6F2]"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-tag block mb-3">Nuestra propuesta</span>
          <h2
            id="menu-heading"
            className="font-serif text-4xl md:text-5xl text-[#0B1F33] font-light mb-5"
          >
            El Menú
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-[#6B7280] max-w-xl mx-auto">
            Ingredientes frescos del Pacífico. Técnica contemporánea. Sabores que no olvidarás.
          </p>
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.key} className="mb-16">
            <h3 className="font-serif text-2xl text-[#0B1F33] mb-8 text-center md:text-left border-b border-[#E6D3B3] pb-3">
              {cat.label}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.items.map((item) => (
                <DishCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-8">
          <p className="text-[#6B7280] mb-6 text-sm">
            ¿Listo para vivir la experiencia?
          </p>
          <Link
            href="#reservaciones"
            className="btn-primary px-10 py-4 text-base inline-block"
          >
            Reservar Mesa Ahora
          </Link>
        </div>
      </div>
    </section>
  );
}

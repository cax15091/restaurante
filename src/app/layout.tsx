import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna y Sal — Restaurante Premium en Puerto Esmeralda, Nayarit",
  description:
    "Cocina contemporánea del Pacífico mexicano frente al malecón de Puerto Esmeralda, Nayarit. Reserva tu mesa hoy. El mejor restaurante para cenar en Nayarit.",
  keywords: [
    "restaurante en Nayarit",
    "restaurante premium en Nayarit",
    "restaurante frente al malecón",
    "mejor restaurante en Puerto Esmeralda",
    "cenas románticas en Nayarit",
    "restaurante moderno en Nayarit",
    "restaurante aesthetic",
    "restaurante premium mexicano",
    "Luna y Sal",
    "restaurante Puerto Esmeralda",
  ],
  authors: [{ name: "Luna y Sal" }],
  creator: "Luna y Sal",
  metadataBase: new URL("https://lunaysal.mx"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lunaysal.mx",
    siteName: "Luna y Sal",
    title: "Luna y Sal — Sabores que se quedan contigo",
    description:
      "Restaurante premium de cocina contemporánea del Pacífico mexicano, frente al malecón de Puerto Esmeralda, Nayarit.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Luna y Sal — Restaurante Premium en Puerto Esmeralda, Nayarit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna y Sal — Restaurante Premium en Nayarit",
    description: "Cocina contemporánea del Pacífico mexicano frente al malecón.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="canonical" href="https://lunaysal.mx" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Luna y Sal",
              description:
                "Restaurante premium de cocina contemporánea del Pacífico mexicano, frente al malecón de Puerto Esmeralda, Nayarit.",
              url: "https://lunaysal.mx",
              telephone: "+52-311-000-0000",
              priceRange: "$$$",
              servesCuisine: ["Mexican", "Seafood", "Contemporary"],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Costa Azul #245",
                addressLocality: "Puerto Esmeralda",
                addressRegion: "Nayarit",
                postalCode: "63700",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "21.5109",
                longitude: "-105.2100",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
                  opens: "13:00",
                  closes: "23:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Friday", "Saturday"],
                  opens: "13:00",
                  closes: "00:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "12:00",
                  closes: "22:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "248",
                bestRating: "5",
              },
              hasMap: "https://maps.google.com/?q=Av.+Costa+Azul+245+Puerto+Esmeralda+Nayarit",
              image: "https://lunaysal.mx/images/hero.png",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

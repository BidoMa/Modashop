import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ModaShop Argentina | Franquicias de Accesorios y Marroquinería - 20+ Años Liderando",
  description:
    "Franquicia líder en Argentina con +20 años de experiencia en accesorios, marroquinería y regalos. +60 sucursales activas, +10.000 productos. Convertí tu pasión por la moda en un negocio rentable con bajo riesgo.",
  keywords: [
    "franquicia moda",
    "franquicia accesorios argentina",
    "franquicia marroquinería",
    "negocio moda",
    "emprendimiento moda",
    "modashop",
    "franquicia rentable",
    "accesorios de moda",
    "carteras",
    "mochilas",
    "bijouterie",
  ],
  authors: [{ name: "ModaShop Argentina" }],
  creator: "ModaShop",
  publisher: "ModaShop Argentina",
  metadataBase: new URL("https://modashop.com.ar"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ModaShop Argentina | Franquicias de Accesorios y Marroquinería",
    description:
      "Franquicia líder en Argentina con +20 años de experiencia. +60 sucursales activas, +10.000 productos. Comenzá tu negocio de moda hoy.",
    url: "https://modashop.com.ar",
    siteName: "ModaShop Argentina",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/modashop.png",
        width: 1200,
        height: 630,
        alt: "ModaShop - Franquicia líder en accesorios de moda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ModaShop Argentina | Franquicias de Accesorios y Marroquinería",
    description:
      "Franquicia líder en Argentina con +20 años de experiencia. +60 sucursales activas, +10.000 productos.",
    images: ["/modashop.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9MSF5RB');`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Suppress ResizeObserver errors completely
                const suppressResizeObserver = function(err) {
                  if (!err) return false;
                  const message = err.message || err.toString();
                  return message && message.toLowerCase().includes('resizeobserver');
                };

                // Prevent error events
                window.addEventListener('error', function(event) {
                  if (suppressResizeObserver(event.error)) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    return false;
                  }
                }, true);

                // Prevent unhandled promise rejections
                window.addEventListener('unhandledrejection', function(event) {
                  if (event.reason && suppressResizeObserver(event.reason)) {
                    event.preventDefault();
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    return false;
                  }
                }, true);

                // Override console.error
                const originalConsoleError = console.error;
                console.error = function(...args) {
                  const message = args[0] && typeof args[0] === 'string' ? args[0] : '';
                  if (message.toLowerCase().includes('resizeobserver')) {
                    return;
                  }
                  originalConsoleError.apply(console, args);
                };

                // Override console.warn
                const originalConsoleWarn = console.warn;
                console.warn = function(...args) {
                  const message = args[0] && typeof args[0] === 'string' ? args[0] : '';
                  if (message.toLowerCase().includes('resizeobserver')) {
                    return;
                  }
                  originalConsoleWarn.apply(console, args);
                };
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ModaShop Argentina",
              description:
                "Franquicia líder en accesorios, marroquinería y regalos con más de 20 años de experiencia en Argentina",
              url: "https://modashop.com.ar",
              logo: "https://modashop.com.ar/modashop.png",
              foundingDate: "2003",
              sameAs: ["https://www.instagram.com/modashop_arg/", "https://www.youtube.com/@ModaShopArg"],
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
                addressLocality: "Buenos Aires",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Ventas",
                availableLanguage: ["es"],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
              },
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "300",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Franquicia ModaShop",
              description:
                "Oportunidad de negocio en el sector de accesorios de moda. Franquicia con +20 años de trayectoria, +60 sucursales y +10.000 productos",
              brand: {
                "@type": "Brand",
                name: "ModaShop",
              },
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
                priceCurrency: "ARS",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T9MSF5RB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}

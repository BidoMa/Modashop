"use client"

import Image from "next/image"

export function Stores() {
  const stores = [
    {
      image: "/store-exterior.png",
      title: "Ubicaciones estratégicas",
      description: "En los mejores centros comerciales",
    },
    {
      image: "/store-interior-1.png",
      title: "Diseño contemporáneo",
      description: "Espacios que inspiran",
    },
    {
      image: "/store-interior-2.png",
      title: "Exhibición premium",
      description: "Productos organizados con estilo",
    },
    {
      image: "/store-interior-3.png",
      title: "Ambiente moderno",
      description: "Experiencia de compra única",
    },
    {
      image: "/store-customer.png",
      title: "Atención excepcional",
      description: "Equipo capacitado y profesional",
    },
  ]

  return (
    <section id="locales" className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header - bold and minimal */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-accent" />
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Nuestros espacios</span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-balance max-w-4xl">
            Locales que
            <br />
            <span className="text-accent">inspiran.</span>
          </h2>
        </div>

        {/* Asymmetric grid layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          {/* Large featured image */}
          <div className="lg:col-span-8 group relative h-[600px] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={stores[0].image || "/placeholder.svg"}
              alt={stores[0].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-12">
              <h3 className="text-4xl font-bold text-white mb-2">{stores[0].title}</h3>
              <p className="text-xl text-white/80">{stores[0].description}</p>
            </div>
          </div>

          {/* Tall side image */}
          <div className="lg:col-span-4 group relative h-[600px] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={stores[1].image || "/placeholder.svg"}
              alt={stores[1].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{stores[1].title}</h3>
              <p className="text-white/80">{stores[1].description}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Small image */}
          <div className="lg:col-span-4 group relative h-[400px] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={stores[2].image || "/placeholder.svg"}
              alt={stores[2].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{stores[2].title}</h3>
              <p className="text-white/80">{stores[2].description}</p>
            </div>
          </div>

          {/* Medium image */}
          <div className="lg:col-span-5 group relative h-[400px] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={stores[3].image || "/placeholder.svg"}
              alt={stores[3].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">{stores[3].title}</h3>
              <p className="text-white/80">{stores[3].description}</p>
            </div>
          </div>

          {/* Small image */}
          <div className="lg:col-span-3 group relative h-[400px] rounded-3xl overflow-hidden bg-muted">
            <Image
              src={stores[4].image || "/placeholder.svg"}
              alt={stores[4].title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-xl font-bold text-white mb-2">{stores[4].title}</h3>
              <p className="text-sm text-white/80">{stores[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

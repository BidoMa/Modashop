"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Store, Package, TrendingUp } from 'lucide-react'
import Image from "next/image"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"
        aria-hidden="true"
      />

      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-foreground/3 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex items-start gap-6 opacity-0 animate-fade-in">
            <div className="relative w-64 h-16 md:w-80 md:h-20">
              <Image
                src="/modashop.png"
                alt="ModaShop Argentina - Franquicia líder en accesorios de moda y marroquinería"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <TrendingUp className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-wider text-foreground uppercase">Líder del mercado</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left: Main content */}
            <div className="space-y-12 opacity-0 animate-slide-in-left delay-200">
              <div className="space-y-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-balance">
                  Descubrí la franquicia ModaShop:{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-accent">Tendencias, estilo y rentabilidad</span>
                    <span
                      className="absolute bottom-2 left-0 w-full h-4 bg-accent/20 blur-sm -z-0"
                      aria-hidden="true"
                    />
                  </span>{" "}
                  en un solo lugar
                </h1>

                <div className="space-y-4">
                  <p className="text-2xl md:text-3xl font-light text-foreground/80 text-balance">
                    Más de <strong className="font-bold text-accent">20 años</strong> liderando el mercado de{" "}
                    <span className="text-foreground">accesorios y marroquinería</span>
                  </p>

                  <p className="text-xl md:text-2xl text-muted-foreground text-balance border-l-4 border-accent/30 pl-6">
                    Convertí tu pasión en un negocio rentable con una marca consolidada.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-white hover:bg-accent/90 text-lg px-8 py-7 rounded-xl group shadow-xl shadow-accent/20 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 border-0"
                  onClick={() => scrollToSection("contact")}
                  aria-label="Solicitar más información sobre la franquicia"
                >
                  Quiero más información
                  <ArrowRight
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-7 rounded-xl border-2 hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("benefits")}
                  aria-label="Ver beneficios de la franquicia ModaShop"
                >
                  Ver beneficios
                </Button>
              </div>
            </div>

            <div className="space-y-6 opacity-0 animate-slide-in-right delay-400">
              <div className="group relative bg-card border-2 border-border hover:border-accent/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl font-bold text-foreground mb-2" aria-label="20 años">
                      20+
                    </div>
                    <div className="text-base text-muted-foreground font-medium uppercase tracking-wider">
                      Años de experiencia
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-card border-2 border-border hover:border-foreground/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-foreground/5 rounded-xl">
                    <Store className="w-8 h-8 text-foreground" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl font-bold text-foreground mb-2" aria-label="60 franquicias">
                      60+
                    </div>
                    <div className="text-base text-muted-foreground font-medium uppercase tracking-wider">
                      Franquicias activas
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative bg-card border-2 border-border hover:border-accent/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Package className="w-8 h-8 text-accent" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl font-bold text-foreground mb-2" aria-label="10000 productos">
                      10K+
                    </div>
                    <div className="text-base text-muted-foreground font-medium uppercase tracking-wider">
                      Productos disponibles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Gift } from "lucide-react"
import Image from "next/image"

const products = [
  {
    icon: "/icons/bag.png",
    isImage: true,
    name: "Marroquinería",
    description: "Carteras, billeteras y accesorios de cuero",
  },
  {
    icon: "/icons/earring.png",
    isImage: true,
    name: "Bijouterie",
    description: "Collares, pulseras, aros y anillos",
  },
  {
    icon: "/icons/snapback.png",
    isImage: true,
    name: "Accesorios de temporada",
    description: "Bufandas, gorros, guantes y más",
  },
  {
    icon: BookOpen,
    isImage: false,
    name: "Escolares y Bazar",
    description: "Mochilas, cartucheras y útiles",
  },
  {
    icon: "/icons/cosmetics.png",
    isImage: true,
    name: "Cosmética",
    description: "Maquillaje, perfumes y cuidado personal",
  },
  {
    icon: Gift,
    isImage: false,
    name: "Regalería",
    description: "Ideas perfectas para toda ocasión",
  },
]

export function Products() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider uppercase text-accent bg-accent/10 px-4 py-2 rounded-full">
                Nuestro catálogo
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Más de <span className="text-accent">10.000 productos</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Especialmente seleccionados para todos los gustos, edades y ocasiones
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 hover:border-accent transition-all duration-300 group hover:shadow-xl hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:from-accent/30 group-hover:to-accent/10 transition-all flex-shrink-0">
                      {product.isImage ? (
                        <Image
                          src={(product.icon as string) || "/placeholder.svg"}
                          alt={product.name}
                          width={28}
                          height={28}
                          className="opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                      ) : (
                        <product.icon className="w-7 h-7 text-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <CardContent className="p-10 text-center">
                <p className="text-lg md:text-xl text-foreground leading-relaxed max-w-4xl mx-auto">
                  <span className="font-bold text-accent">Cada temporada</span> lanzamos nuevas colecciones y campañas
                  que marcan tendencia, manteniendo a ModaShop siempre{" "}
                  <span className="font-semibold">vigente en el mercado</span>.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

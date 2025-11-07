import { Card, CardContent } from "@/components/ui/card"
import { Store, ShoppingBag, Check, TrendingUp, Users, Award } from "lucide-react"

const modalityFeatures = {
  tienda: [
    { icon: Check, text: "Superficie mínima: 20 m²" },
    { icon: Award, text: "Exclusividad territorial incluida" },
    { icon: TrendingUp, text: "Soporte completo de marketing" },
    { icon: Users, text: "Capacitación continua del equipo" },
  ],
  corner: [
    { icon: Check, text: "Ideal para locales multimarca" },
    { icon: Store, text: "Ubicación en zonas comerciales" },
    { icon: ShoppingBag, text: "Líneas de productos seleccionadas" },
    { icon: TrendingUp, text: "Menor inversión inicial" },
  ],
}

export function Modalities() {
  return (
    <section className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold tracking-wider uppercase text-accent bg-accent/10 px-4 py-2 rounded-full">
                Opciones de inversión
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              Modalidades de <span className="text-accent">franquicia</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Elegí el formato que mejor se adapte a tu proyecto emprendedor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tienda */}
            <Card className="border-2 hover:border-accent transition-all duration-300 group hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <CardContent className="p-10 relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Store className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                      ModaShop Tienda
                    </h3>
                    <p className="text-muted-foreground">Formato completo con identidad propia</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {modalityFeatures.tienda.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-foreground pt-2 leading-relaxed">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Ideal para emprendedores que buscan un negocio completo con respaldo de marca consolidada.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Corner */}
            <Card className="border-2 hover:border-accent transition-all duration-300 group hover:shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

              <CardContent className="p-10 relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <ShoppingBag className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">
                      ModaShop Corner
                    </h3>
                    <p className="text-muted-foreground">Formato flexible para locales multimarca</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {modalityFeatures.corner.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 group/item">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <p className="text-foreground pt-2 leading-relaxed">{feature.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Perfecto para comercios existentes que desean ampliar su oferta con productos ModaShop.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

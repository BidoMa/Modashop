"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Users, MapPin, Megaphone, Laptop } from 'lucide-react'
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: TrendingUp,
    title: "Modelo de negocio probado y rentable",
    description:
      "Más de 20 años de experiencia respaldan nuestro sistema de franquicias, con locales activos y rentables en todo el país.",
  },
  {
    icon: DollarSign,
    title: "Inversión inteligente y recupero rápido",
    description:
      "Nuestro formato optimiza los costos de armado y operación, logrando un rápido retorno de inversión y minimizando riesgos.",
  },
  {
    icon: Users,
    title: "Soporte y capacitación constante",
    description:
      "Acompañamos a cada franquiciado con asesoramiento, capacitación inicial, manuales de gestión y soporte post-venta permanente.",
  },
  {
    icon: MapPin,
    title: "Exclusividad territorial",
    description:
      "Garantizamos exclusividad en la zona asignada, evitando competencia interna y fortaleciendo tu presencia local.",
  },
  {
    icon: Megaphone,
    title: "Publicidad y branding nacional",
    description:
      "Invertimos en campañas de marketing digital, presencia en redes sociales y medios tradicionales, potenciando la visibilidad de cada punto de venta.",
  },
  {
    icon: Laptop,
    title: "Sistema de gestión propio y soporte técnico incluido",
    description: "Contarás con un sistema digital para controlar ingresos, egresos, reportes y stock en tiempo real.",
  },
]

export function Benefits() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Beneficios de ser parte de <span className="text-accent">ModaShop</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-balance">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl font-bold text-balance">
                ¿Listo para convertirte en el próximo <span className="text-accent">franquiciado ModaShop</span>?
              </h3>
              <p className="text-lg text-muted-foreground">
                Completá el formulario y te contactaremos para brindarte toda la información sobre las franquicias
                disponibles.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
                onClick={scrollToContact}
              >
                Solicitar información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

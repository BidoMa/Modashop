"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from 'lucide-react'
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    quote: "Es un rubro que puede funcionar en cualquier lugar donde decidan abrirlo",
    author: "Susana y Patricia",
    location: "ModaShop Córdoba",
  },
  {
    quote:
      "El equipo de ModaShop, siempre me brindó confianza para que pueda lograr mi deseo que era tener mi propio negocio",
    author: "Juliana",
    location: "ModaShop Portal Rosario",
  },
]

export function Testimonials() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      })
    }
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Lo que dicen nuestros <span className="text-accent">franquiciados</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8 space-y-6">
                  <Quote className="w-12 h-12 text-accent/30" />
                  <p className="text-lg leading-relaxed text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-accent/5 border-2 border-accent rounded-2xl p-12 space-y-6">
              <h3 className="text-3xl font-bold text-balance">
                Sumate a la familia <span className="text-accent">ModaShop</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Más de 60 franquiciados exitosos en toda Argentina ya confiaron en nosotros. ¡Vos también podés serlo!
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
                onClick={scrollToContact}
              >
                Quiero ser franquiciado
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

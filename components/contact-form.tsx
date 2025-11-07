"use client"
import { useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function ContactForm() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const script = document.createElement("script")
      script.src = "//js.hsforms.net/forms/embed/v2.js"
      script.charset = "utf-8"
      script.type = "text/javascript"
      script.async = true

      script.onload = () => {
        if (window.hbspt) {
          requestAnimationFrame(() => {
            window.hbspt.forms.create({
              portalId: "22460986",
              formId: "0776d97d-1ed1-4330-97c0-22d2d512ccf0",
              region: "na1",
              target: "#hubspot-form-container",
            })
          })
        }
      }

      document.body.appendChild(script)
    }, 300)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="relative w-64 h-16 animate-fade-in">
                <Image src="/modashop.png" alt="ModaShop" fill className="object-contain" priority />
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              ¿Listo para <span className="text-accent">Emprender</span>?
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Sumate a una marca que no solo comercializa moda, sino experiencias únicas.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Card className="border-2 border-accent/20 shadow-2xl bg-card/95 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold mb-3 text-balance">Solicitar información</h3>
                  <p className="text-lg text-muted-foreground">
                    Completá el formulario y nuestro equipo te contactará a la brevedad para asesorarte.
                  </p>
                </div>

                <div id="hubspot-form-container" className="hubspot-form max-w-2xl mx-auto" />
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm">Respuesta en menos de 24hs</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span className="text-sm">Asesoramiento personalizado</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "1s" }} />
              <span className="text-sm">Sin compromiso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

declare global {
  interface Window {
    hbspt: any
  }
}

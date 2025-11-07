import { Hero } from "@/components/hero"
import { History } from "@/components/history"
import { Benefits } from "@/components/benefits"
import { Modalities } from "@/components/modalities"
import { Products } from "@/components/products"
import { Stores } from "@/components/stores"
import { FAQ } from "@/components/faq"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <section id="historia" aria-label="Historia de ModaShop">
        <History />
      </section>
      <section id="benefits" aria-label="Beneficios de la franquicia">
        <Benefits />
      </section>
      <section id="franquicias" aria-label="Modalidades de franquicia">
        <Modalities />
      </section>
      <section id="productos" aria-label="Nuestros productos">
        <Products />
      </section>
      <section id="locales" aria-label="Nuestros locales">
        <Stores />
      </section>
      <section id="preguntas" aria-label="Preguntas frecuentes">
        <FAQ />
      </section>
      <section id="testimonios" aria-label="Testimonios de franquiciados">
        <Testimonials />
      </section>
      <section id="contact" aria-label="Formulario de contacto">
        <ContactForm />
      </section>
      <Footer />
    </main>
  )
}

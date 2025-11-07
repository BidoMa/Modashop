import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué perfil de franquiciado buscan?",
    answer:
      "Personas emprendedoras, con ganas de liderar su propio negocio y con pasión por la moda. No se requiere experiencia previa: brindamos formación completa.",
  },
  {
    question: "¿Cuál es el tiempo estimado para abrir un local?",
    answer: "Entre 2 y 4 meses, dependiendo de la ubicación y la adecuación del espacio.",
  },
  {
    question: "¿Qué retorno de inversión se espera?",
    answer: "El recupero estimado es de 12 a 24 meses, según la gestión y ubicación del local.",
  },
  {
    question: "¿Qué tipo de apoyo ofrecen?",
    answer:
      "Te acompañamos desde la selección del local hasta la apertura, brindando soporte continuo en ventas, marketing y gestión operativa.",
  },
  {
    question: "¿Cómo se gestiona el stock?",
    answer:
      "Podés realizar tus pedidos y reposiciones directamente desde nuestro sitio web mayorista, con entregas rápidas y centralizadas.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Preguntas <span className="text-accent">frecuentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

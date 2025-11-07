import Image from "next/image"
import { Heart, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Brand Column */}
            <div>
              <div className="mb-6 relative h-14 w-56 bg-white rounded-lg p-2">
                <Image src="/modashop.png" alt="ModaShop" fill className="object-contain object-left" priority />
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Más de 20 años marcando tendencia en accesorios, marroquinería y regalos.
              </p>
              <div className="flex items-center gap-2 text-primary">
                <Heart className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium">Pasión por la moda</span>
              </div>
            </div>

            {/* Social & CTA Column */}
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Seguinos
              </h3>
              <div className="space-y-4 mb-6">
                <a
                  href="https://www.instagram.com/modashop_arg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-sm">@modashop_arg</span>
                </a>
                <a
                  href="https://www.youtube.com/@ModaShopArg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-sm">@ModaShopArg</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} ModaShop. Todos los derechos reservados.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

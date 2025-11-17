import Image from "next/image"
import { Heart } from 'lucide-react'

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
              <div className="mb-6 relative h-14 w-56">
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
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex justify-center md:justify-start">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} ModaShop. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

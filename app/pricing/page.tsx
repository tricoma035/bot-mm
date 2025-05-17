'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, CheckCircle, XCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-900/40 py-4 px-6">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold tracking-tight">BotMM</span>
          </Link>
          <div className="flex-grow flex justify-center">
            <nav className="hidden md:flex items-center justify-center gap-6">
              <Link href="/about" className="text-sm font-medium hover:text-green-500 transition">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-green-500 transition">
                Precios
              </Link>
              <Link href="/docs" className="text-sm font-medium hover:text-green-500 transition">
                Documentación
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-green-500 transition">
                Blog
              </Link>
              <Link href="/contact" className="text-sm font-medium hover:text-green-500 transition">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-green-500 hover:bg-green-900/10 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-green-900/40 bg-gray-900">
            <nav className="flex flex-col py-4 px-6">
              <Link href="/about" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Precios
              </Link>
              <Link href="/docs" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Documentación
              </Link>
              <Link href="/blog" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Blog
              </Link>
              <Link href="/contact" className="flex items-center gap-2 py-3 text-gray-400 hover:text-green-500">
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gray-900 flex-grow">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Nuestros <span className="text-green-500">Planes</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-12">
            Impulsa tu estrategia con nuestros planes de IA. ¡Encuentra el perfecto para ti!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan P2P */}
            <div className="bg-black rounded-lg p-8 border border-green-900/40 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Comprar Bot</h2>
              <div className="text-4xl font-bold text-green-500 mb-6">P2P</div>
              <ul className="text-left space-y-3 flex-grow">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Primer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Segundo servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Tercer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Cuarto servicio</li>
                <li className="flex items-center"><XCircle className="h-5 w-5 text-red-500 mr-2" /> Quinto servicio</li>
                <li className="flex items-center"><XCircle className="h-5 w-5 text-red-500 mr-2" /> Sexto servicio</li>
                <li className="flex items-center"><XCircle className="h-5 w-5 text-red-500 mr-2" /> Séptimo servicio</li>
              </ul>
              <Button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-black">Comprar Ahora</Button>
            </div>

            {/* Plan Estandard */}
            <div className="bg-black rounded-lg p-8 border border-green-900/40 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Estandard</h2>
              <div className="text-4xl font-bold text-green-500 mb-2">19$</div>
              <p className="text-sm text-gray-400 mb-6">al mes</p>
              <p className="text-sm text-gray-400 mb-6 flex-grow">Sistema de suscripción que te permite usar todos los bots de forma limitada a 300 peticiones mensuales.</p>
              <ul className="text-left space-y-3">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Primer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Segundo servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Tercer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Cuarto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Quinto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Sexto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Séptimo servicio</li>
              </ul>
              <Button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-black">Comprar Ahora</Button>
            </div>

            {/* Plan Pro */}
            <div className="bg-black rounded-lg p-8 border border-green-900/40 flex flex-col">
              <h2 className="text-2xl font-bold mb-4">Pro</h2>
              <div className="text-4xl font-bold text-green-500 mb-2">59$</div>
              <p className="text-sm text-gray-400 mb-6">al mes</p>
              <p className="text-sm text-gray-400 mb-6 flex-grow">Incluye todo lo del plan Estandard y 500 peticiones adicionales.</p>
              <ul className="text-left space-y-3">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Primer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Segundo servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Tercer servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Cuarto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Quinto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Sexto servicio</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Séptimo servicio</li>
              </ul>
              <Button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-black">Comprar Ahora</Button>
            </div>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-2">
              <Bot className="h-6 w-6 text-green-500" />
              <span className="text-xl font-bold">BotMM</span>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="/about" className="hover:text-green-500 transition">
                Sobre Nosotros
              </Link>
              <Link href="/pricing" className="hover:text-green-500 transition">
                Precios
              </Link>
              <Link href="/docs" className="hover:text-green-500 transition">
                Documentación
              </Link>
              <Link href="/blog" className="hover:text-green-500 transition">
                Blog
              </Link>
              <Link href="/contact" className="hover:text-green-500 transition">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-900/40 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} BotMM. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Key, Shield, Zap, Menu, X, ChevronDown } from "lucide-react"
import { useUser, useClerk } from "@clerk/nextjs"
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [botsMenuOpen, setBotsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-900/40 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold tracking-tight">BotMM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 relative">
            {isSignedIn && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className="text-gray-400 hover:text-green-500 transition flex items-center gap-1"
                  aria-haspopup="true"
                >
                  Tus Bots <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-gray-900 border border-green-900/40 rounded-md shadow-lg text-gray-400" align="start">
                <Link href="/dashboard">
                  <DropdownMenuItem className="hover:bg-green-900/20 hover:text-green-500 cursor-pointer">
                    Panel
                  </DropdownMenuItem>
                </Link>
                <Link href="/bots">
                  <DropdownMenuItem className="hover:bg-green-900/20 hover:text-green-500 cursor-pointer">
                    Bots
                  </DropdownMenuItem>
                </Link>
                <Link href="/api-keys">
                  <DropdownMenuItem className="hover:bg-green-900/20 hover:hover:text-green-500 cursor-pointer">
                    Claves API
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            )}
            <Link href="/about" className="text-gray-400 hover:text-green-500 transition">
              Sobre Nosotros
            </Link>
            <Link href="/pricing" className="text-gray-400 hover:text-green-500 transition">
              Precios
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-green-500 transition">
              Documentación
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-green-500 transition">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-green-500 transition">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {!isSignedIn && (
              <>
                <Link href="/sign-in">
                  <Button variant="outline" className="border-green-700 text-green-500 hover:bg-green-900/20 text-sm px-3 py-2 md:text-base md:px-4 md:py-2">
                    Iniciar sesión
                  </Button>
                </Link>
              </>
            )}
            {isSignedIn && (
              <Button
                variant="outline"
                className="border-green-700 text-green-500 hover:bg-green-900/20"
                onClick={() => signOut()}
              >
                Cerrar sesión
              </Button>
            )}
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
              {isSignedIn && (
              <div className="flex flex-col">
                <button
                  className="flex items-center justify-between w-full py-3 text-gray-400 hover:text-green-500"
                  onClick={() => setBotsMenuOpen(!botsMenuOpen)}
                  aria-expanded={botsMenuOpen}
                >
                  Tus Bots <ChevronDown className={`h-5 w-5 transition-transform ${botsMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                {botsMenuOpen && (
                  <div className="flex flex-col pl-4 border-l border-green-900/40 ml-2">
                    <Link href="/dashboard" className="flex items-center gap-2 py-2 text-gray-400 hover:text-green-500">
                      Panel
                    </Link>
                    <Link href="/bots" className="flex items-center gap-2 py-2 text-gray-400 hover:text-green-500">
                      Bots
                    </Link>
                    <Link href="/api-keys" className="flex items-center gap-2 py-2 text-gray-400 hover:text-green-500">
                      Claves API
                    </Link>
                  </div>
                )}
              </div>
              )}
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

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Plataforma de Bots IA <span className="text-green-500">Avanzada</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-10">
              Crea, gestiona y despliega potentes bots de IA capaces de manejar archivos grandes y tareas complejas con
              nuestro sistema seguro de generación de claves API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/sign-up">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-medium">
                  Comenzar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="border-green-700 text-green-500 hover:bg-green-900/20">
                  Ver Documentación
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-16">
            Funciones <span className="text-green-500">Potentes</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-green-900/40 hover:border-green-500/40 transition">
              <div className="bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Bot className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Creación Avanzada de Bots</h3>
              <p className="text-gray-400">
                Construye bots de IA sofisticados que pueden procesar archivos grandes y manejar tareas complejas con
                nuestra interfaz intuitiva.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-green-900/40 hover:border-green-500/40 transition">
              <div className="bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Key className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Generación de Claves API</h3>
              <p className="text-gray-400">
                Crea y gestiona claves API seguras para tus bots con controles de permisos granulares y monitorización
                de uso.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-green-900/40 hover:border-green-500/40 transition">
              <div className="bg-green-900/20 p-3 rounded-full w-fit mb-6">
                <Shield className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-3">Seguridad Empresarial</h3>
              <p className="text-gray-400">
                Cifrado y protocolos de seguridad de nivel militar para mantener tus datos y modelos de IA a salvo de
                accesos no autorizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black border-t border-green-900/40">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para <span className="text-green-500">Potenciar</span> tu IA?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Únete a miles de desarrolladores y empresas que construyen la próxima generación de aplicaciones de IA con
            BotMM.
          </p>
          <Link href="/sign-up">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-black font-medium">
              <Zap className="mr-2 h-5 w-5" /> Empieza a Construir Ahora
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 px-6 bg-gray-900 border-t border-green-900/40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
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
              <Link href="/blog" className="hover:text-green-500 transition">
                Blog
              </Link>
              <Link href="/docs" className="hover:text-green-500 transition">
                Documentación
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
  )
}

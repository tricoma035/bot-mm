import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bot, Key, Shield, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-green-900/40 py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Bot className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold tracking-tight">BotMM</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard" className="text-gray-400 hover:text-green-500 transition">
              Panel
            </Link>
            <Link href="/bots" className="text-gray-400 hover:text-green-500 transition">
              Bots
            </Link>
            <Link href="/api-keys" className="text-gray-400 hover:text-green-500 transition">
              Claves API
            </Link>
            <Link href="/docs" className="text-gray-400 hover:text-green-500 transition">
              Documentación
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in">
              <Button variant="outline" className="border-green-700 text-green-500 hover:bg-green-900/20">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-green-600 hover:bg-green-700 text-black font-medium">Registrarse</Button>
            </Link>
          </div>
        </div>
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

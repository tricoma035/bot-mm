'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function DocsPage() {
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

      {/* Docs Section */}
      <section className="py-20 px-6 bg-gray-900 flex-grow">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-center">
            <span className="text-green-500">Documentación</span>
          </h1>
          <div className="prose prose-invert text-xl text-gray-400 leading-relaxed">
            <p>Bienvenido a la documentación del proyecto BotMM. Aquí encontrarás información detallada sobre cómo utilizar y configurar tus bots de IA.</p>
            
            <h2>Introducción</h2>
            <p>BotMM es una plataforma avanzada para la creación, entrenamiento y despliegue de bots de inteligencia artificial personalizados. Permite a los usuarios aprovechar el poder de los modelos de lenguaje y otras capacidades de IA para automatizar tareas, analizar datos, generar contenido y mucho más.</p>

            <h2>Creación de Bots</h2>
            <p>Para crear un nuevo bot, navega a la sección 'Bots' y haz clic en 'Crear Nuevo Bot'. Deberás proporcionar información básica como el nombre y tipo de bot, seleccionar un modelo base y configurar parámetros como tokens máximos y temperatura.</p>

            <h2>Capacidades</h2>
            <p>Los bots pueden ser equipados con diversas capacidades, incluyendo procesamiento de texto, análisis de datos, generación de código, y más. Puedes habilitar o deshabilitar estas capacidades según las necesidades de tu proyecto.</p>

            <h2>Entrenamiento</h2>
            <p>La plataforma permite entrenar tus bots con datos personalizados para mejorar su rendimiento en tareas específicas. Puedes subir documentos, bases de datos u otras fuentes de información para refinar el conocimiento de tu bot.</p>

            <h2>Despliegue</h2>
            <p>Una vez configurado y entrenado, puedes desplegar tu bot para integrarlo en tus aplicaciones o flujos de trabajo. La plataforma proporciona opciones de despliegue flexibles y gestión de claves API para un acceso seguro.</p>

            <h2>Claves API</h2>
            <p>Las claves API son necesarias para interactuar con tus bots desplegados. Puedes generar y gestionar claves API en la sección correspondiente, configurando permisos y restricciones según sea necesario.</p>

            <h2>Soporte</h2>
            <p>Si tienes alguna pregunta o encuentras algún problema, consulta la sección de soporte o contacta a nuestro equipo. Estamos aquí para ayudarte a sacar el máximo provecho de BotMM.</p>
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
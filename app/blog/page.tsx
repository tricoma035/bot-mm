'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Bot, Menu, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from 'react';

export default function BlogPage() {
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

      {/* Blog Content */}
      <main className="container mx-auto py-12 px-4 md:px-6 flex-grow">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 text-center">
          Nuestro <span className="text-green-500">Blog</span>
        </h1>

        {/* Featured Articles Section */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold tracking-tight">Artículos Destacados</h2>
            <Link href="#" className="text-green-500 hover:underline">Ver Todo</Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Featured Article 1 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Featured Article 1" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🤖 IA General</div>
                <CardTitle className="text-xl font-bold mb-2">La Evolución de los Modelos de Lenguaje: De GPT-3 a BotMM</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Explora los hitos clave en el desarrollo de modelos de lenguaje y cómo BotMM está a la vanguardia de la innovación.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Mayo 15, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Featured Article 2 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Featured Article 2" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">💡 Futuro Tech</div>
                <CardTitle className="text-xl font-bold mb-2">Automatización Inteligente en 2025: Transformando la Empresa</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Descubre cómo la automatización impulsada por IA está redefiniendo las operaciones empresariales y la productividad.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Junio 2, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Featured Article 3 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Featured Article 3" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🔬 Investigación IA</div>
                <CardTitle className="text-xl font-bold mb-2">El Auge de los Bots Multimodales: Uniendo Texto, Imagen y Más</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Examina cómo los bots multimodales están abriendo nuevas posibilidades en la interacción y el procesamiento de datos.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Junio 28, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recent Articles Section */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-6">Artículos Recientes</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Recent Article 1 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 1" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🎨 Modelado 3D</div>
                <CardTitle className="text-xl font-bold mb-2">Avances en Modelado 3D Impulsado por IA y Creación de Mundos Virtuales</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Explora cómo la IA está revolucionando el modelado 3D y la creación de mundos virtuales, permitiendo a los usuarios transformar indicaciones en experiencias inmersivas.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Julio 5, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Article 2 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 2" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">⌚ Tecnología Wearable</div>
                <CardTitle className="text-xl font-bold mb-2">La Integración de IA en Tecnología Wearable: Mejorando la Experiencia del Usuario</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Analiza la incorporación de IA en dispositivos wearable, como gafas inteligentes, y cómo mejora la interacción del usuario.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Julio 18, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Article 3 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 3" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🚗 Visión por Computadora</div>
                <CardTitle className="text-xl font-bold mb-2">Visión por Computadora en Vehículos Autónomos</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Explorando cómo los algoritmos de visión por computadora permiten a los coches autónomos percibir y navegar entornos complejos.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Agosto 3, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Article 4 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 4" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🗣️ PNL</div>
                <CardTitle className="text-xl font-bold mb-2">Aprendizaje Profundo para Procesamiento del Lenguaje Natural</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Cómo los modelos transformadores han revolucionado nuestra capacidad para entender y generar lenguaje humano.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Agosto 16, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Article 5 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 5" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">⚖️ Ética IA</div>
                <CardTitle className="text-xl font-bold mb-2">Consideraciones Éticas en la IA Generativa</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Examinando las implicaciones éticas del contenido generado por IA y la responsabilidad de investigadores y profesionales.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Septiembre 2, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Article 6 */}
            <Card className="bg-gray-900 border-green-900/40">
              <img src="/placeholder.svg" alt="Recent Article 6" width={400} height={200} className="rounded-t-md object-cover w-full h-48" />
              <CardContent className="p-6">
                <div className="text-sm text-gray-400 mb-2">🔮 Futuro de la IA</div>
                <CardTitle className="text-xl font-bold mb-2">El Futuro de la Investigación en IA: ¿Qué Sigue?</CardTitle>
                <CardDescription className="text-gray-400 mb-4">Predicciones e ideas sobre las próximas fronteras de la investigación y el desarrollo de la inteligencia artificial.</CardDescription>
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Septiembre 20, 2025
                </div>
                <Link href="#" className="text-green-500 hover:underline flex items-center">
                  Leer más <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 ml-1"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

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